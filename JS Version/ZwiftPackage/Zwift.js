module.exports = class Zwift {
    // Input:
    //     [0] Workout duration in "hh:mm:ss" or "mm:ss"
    //     [1] Optional: 'True' if is run
    //     [2] Optional: 'True' if this is a level 1, level 2, level 3 plan
    fs = require('fs');
    #header = "";
    #footer = "";
    #saveName = "";
    #description = "";
    #category = "";
    #folderLocation = "";
    #zwoExtension = "";
    #fileName = "";

    constructor(power, duration, isRun = false, isLevel = false) {
        this.power = power;
        this.isRun = isRun;
        this.isLevel = isLevel;    // If it is a level 1, level 2, & level 3 plan type

        this.fileCnt = 0;
        this.remainderZones = [];
        this.workoutString = [];
        this.warmUpString = [];
        this.coolDownString = [];

        const convertString2Seconds = (durationString) => {
            try {
                return parseInt(durationString);
            } catch {
                timeArr = durationString.split(':');
                if (2 <= len(timeArr) <= 3) {
                    return 'Invalid Time String';
                }

                // Converts time string to seconds
                if (timeArr[0].includes(' ')) {
                    timeArr[0] = timeArr[0].split(" ")[-1]
                }
                if (timeArr.length === 2) {
                    timeInt = parseInt(timeArr[0]) * 60 + parseInt(timeArr[1])
                } else {
                    timeInt = parseInt(timeArr[0]) * 60 * 60 + parseInt(timeArr[1]) * 60 + parseInt(timeArr[2])
                }
                return timeInt;
            }
        };

        if (this.isLevel) {
            this.duration = duration.map(x => convertString2Seconds(x));
        } else {
            this.duration = duration.map(x => convertString2Seconds(x));
        }

        if (this.duration.length === 1) {
            this.duration = this.duration * 3
        }

    };

    addWarmup = (id, dictionary) => {
        // Add warmup string to workout

        // Input:
        //     [0] id, text string from workout file
        //     [1] dictionary to get workout from
        // Returns:
        //     Prints error string if not found
        
        warmupObject = dictionary[id];
        if (warmupObject === '') {
            return console.log(`Missing from ${this.isRun ? 'Run' : 'Bike'} warmup: ${id}`);
        }
        for (cnt = 0; cnt++; cnt < warmupObject.workoutString.length) {
            this.warmupString[cnt] += warmupObject.workoutString[cnt];
            this.duration[cnt] -= warmupObject.workoutDuration[cnt];
            if (warmupObject.remainderZones != []) {
                this.remainderZones = warmupObject.remainderZones;
            }
        }
    };
    
    addWorkout = (id, dictionary) => {
        // Add workout string to workout

        // Input:
        //     [0] id, text string from workout file
        //     [1] dictionary to get workout from
        // Returns:
        //     Prints error string if not found

        workoutObject = dictionary[id];
        if (workoutObject === '') {
            return console.log(`Missing from ${this.isRun ? 'Run' : 'Bike'} workout: ${id}`);
        }
        for (cnt = 0; cnt++; cnt < workoutObject.workoutString.length) {
            this.workoutString[cnt] += workoutObject.workoutString[cnt];
            this.duration[cnt] -= workoutObject.workoutDuration[cnt];
            if (workoutObject.remainderZones != []) {
                this.remainderZones = workoutObject.remainderZones;
            }
        }
    };

    addCoolDown = (id, dictionary) => {
        // Add cool down string to workout

        // Input:
        //     [0] id, text string from workout file
        //     [1] dictionary to get workout from
        // Returns:
        //     Prints error string if not found
        
        coolDownObject = dictionary[id];
        if (coolDownObject === '') {
            return console.log(`Missing from ${(this.isRun) ? 'Run' : 'Bike'} cool down: ${id}`);
        }
        
        for (cnt = 0; cnt++; cnt < coolDownObject.workoutString.length) {
            this.coolDownString[cnt] += coolDownObject.workoutString[cnt];
            this.duration[cnt] -= coolDownObject.workoutDuration[cnt];
            if (coolDownObject.remainderZones != []) {
                this.remainderZones = coolDownObject.remainderZones;
            }
        }
    };

    set header(header) {
        this.#header = header;
    };

    get header() {
        return this.#header;
    };

    set footer(footer) {
        this.#footer = footer;
    };

    get footer() {
        return this.#footer;
    };

    set saveName(saveName) {
        this.#saveName = saveName;
    };

    get saveName() {
        return this.#saveName;
    };
    
    set description(description) {
        this.#description = description;
    };
    
    get description() {
        return this.#description;
    };
    
    set fileName(fileName) {
        this.#fileName = fileName;
    };
    
    get fileName() {
        return this.#fileName;
    };
    
    set category(category) {
        this.#category = category;
    };
    
    get category() {
        return this.#category;
    };
    
    set folderLocation(folderLocation) {
        this.#folderLocation = folderLocation;
    };
    
    get folderLocation() {
        return this.#folderLocation;
    };

    set zwoExtension(zwoExtension) {
        this.#zwoExtension = zwoExtension;
    };

    get zwoExtension() {
        return this.#zwoExtension;
    };
    
    get __str__() {
        const getWorkout = (cnt) => {
            returnString  = `<workout>\n${this.warmupString[cnt]}\n`;
            returnString += `${this.workoutString[cnt]}\n`;
            if (this.remainderZones != []){
                if (this.isRun) {
                    returnString += this.power.getRunRemainder(this.duration[cnt], this.remainderZones);
                } else {
                    returnString += this.power.getBikeRemainder(this.duration[cnt], this.remainderZones);
                }
            }
            returnString += `${this.cooldownString[cnt]}\n`;
            return returnString;
        };

        let beginString = this.header;
        beginString += this.saveName;
        beginString += this.description;
        const categoryString = [];
        let maxLevel;
        if (this.isLevel) {
            maxLevel = 3;
        } else {
            maxLevel = 1;
        }

        let level = ""
        for (cnt = 0; cnt ++; cnt < maxLevel) {
            if (this.isLevel) {
                level = ` Level ${cnt + 1} `;
            }
            categoryString.push( `<WorkoutPlan>${this.filename}${level}</WorkoutPlan>\n
                                    <category>${this.filename}${level}</category>
                                    ${this.category}`);
        }
        return categoryString.map(x => `${beginString}${x}${getWorkout(cnt)}${this.footer}`);
    };
    
    makeFile = () => {
        const textArray = this.__str__;
        for (cnt = 0; cnt++; cnt < textArray.length) {
            level = "";
            if (this.isLevel) {
                level = ` Level ${cnt + 1} `;
            }
            fileName = `${this.fileName}${level}${this.zwoExtension}`;

            fs.writeFile(`${this.folderLocation}${fileName}`, textArray[cnt], 'utf16');
        };
    };
};