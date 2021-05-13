module.exports = class Zwift {
    // Input:
    //     [0] Workout duration in "hh:mm:ss" or "mm:ss"
    //     [1] Optional: 'True' if is run
    //     [2] Optional: 'True' if this is a level 1, level 2, level 3 plan
    #header = "";
    #footer = "";
    #saveName = "";
    #description = "";
    #category = "";
    #folderLocation = "";
    #zwoExtension = "";
    #fileName = "";

    constructor(power, duration, isRun = false, isLevel = false, priority = null) {
        this.power = power;
        this.isRun = isRun;
        this.isLevel = isLevel;    // If it is a level 1, level 2, & level 3 plan type
        this.priority = priority;

        this.fileCnt = 0;
        this.remainderZones = ['','',''];
        this.workoutString = ['','',''];
        this.warmUpString = ['','',''];
        this.coolDownString = ['','',''];

        const convertString2Seconds = (durationString) => {
            const timeArr = durationString.split(':');
            let timeInt;
            if (timeArr.length === 1) {
                return parseInt(durationString);
            }
            
            if (2 > timeArr.length > 3) {
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
        };

        if (this.isLevel) {
            this.duration = duration.map(x => convertString2Seconds(x));
        } else {
            this.duration = duration.map(x => convertString2Seconds(x));
        }
        
        if (this.duration.length === 1) {
            this.duration = [this.duration[0], this.duration[0], this.duration[0]];
        }

    };

    addWarmup = (id, dictionary) => {
        // Add warmup string to workout

        // Input:
        //     [0] id, text string from workout file
        //     [1] dictionary to get workout from
        // Returns:
        //     Prints error string if not found
        
        if (id === '') {
            return
        }

        let warmupObj = dictionary[id];
        if (typeof warmupObj === 'undefined') {
            return console.log(`Missing from ${this.isRun ? 'Run' : 'Bike'} warmup: ${id}`);
        }
        for (let cnt = 0; cnt < warmupObj.text.length; cnt++) {
            this.warmUpString[cnt] += warmupObj.text[cnt];
            this.duration[cnt] -= warmupObj.duration[cnt];
            if (warmupObj.remainderZones != []) {
                this.remainderZones = warmupObj.remainderZones;
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
        if (id === '') {
            return
        }
        
        let workoutObj = dictionary[id];
        if (typeof workoutObj === 'undefined') {
            return console.log(`Missing from ${this.isRun ? 'Run' : 'Bike'} workout: ${id}`);
        }
        for (let cnt = 0; cnt < workoutObj.text.length; cnt++) {
            this.workoutString[cnt] += workoutObj.text[cnt];
            this.duration[cnt] -= workoutObj.duration[cnt];
            if (workoutObj.remainderZones != []) {
                this.remainderZones = workoutObj.remainderZones;
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
        
        if (id === '') {
            return
        }
        
        let coolDownObj = dictionary[id];
        if (typeof coolDownObj === 'undefined') {
            return console.log(`Missing from ${(this.isRun) ? 'Run' : 'Bike'} cool down: ${id}`);
        }
        
        for (let cnt = 0; cnt < coolDownObj.text.length; cnt++) {
            this.coolDownString[cnt] += coolDownObj.text[cnt];
            this.duration[cnt] -= coolDownObj.duration[cnt];
            if (coolDownObj.remainderZones != []) {
                this.remainderZones = coolDownObj.remainderZones;
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
            let returnString = `<workout>\n
                ${this.warmUpString[cnt]}\n`;
            
            returnString += `${this.workoutString[cnt]}\n`;
            if (this.remainderZones != []){
                if (this.isRun) {
                    returnString += this.power.getRunRemainder(this.duration[cnt], this.remainderZones);
                } else {
                    returnString += this.power.getBikeRemainder(this.duration[cnt], this.remainderZones);
                }
            }
            returnString += `${this.coolDownString[cnt]}\n`;
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
        for (let cnt = 0; cnt < maxLevel; cnt ++) {
            if (this.isLevel) {
                level = ` Level ${cnt + 1} `;
            }
            categoryString.push( `<WorkoutPlan>${this.fileName}${level}</WorkoutPlan>\n
<category>${this.fileName}${level}</category>
${this.category}`);
        }
        return categoryString.map((x, index) => `${beginString}${x}${getWorkout(index)}${this.footer}`);
    };
    
    makeFile = () => {
        let fs = require('fs');
        const textArray = this.__str__;
        for (let cnt = 0; cnt < textArray.length; cnt++) {
            let level = "";
            if (this.isLevel) {
                level = ` Level ${cnt + 1}`;
            }
            let fn = `${this.fileName}${level}${this.zwoExtension}`;
            console.log(`${this.folderLocation}${fn}`);
            fs.writeFileSync(`${this.folderLocation}${fn}`, textArray[cnt]);
        };
    };
};