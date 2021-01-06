fs = require('fs');

export default class Zwift {
    // Input:
    //     [0] Workout duration in "hh:mm:ss" or "mm:ss"
    //     [1] Optional: 'True' if is run
    //     [2] Optional: 'True' if this is a level 1, level 2, level 3 plan

    constructor(testDistance, testTime, duration, isRun = false, isLevel = false) {
        this.testDistance = testDistance;
        this.testTime = testTime;
        this.isRun = isRun;
        this.isLevel = isLevel;    // If it is a level 1, level 2, & level 3 plan type

        this.fileCnt = 0;
        this.remainderZones = [];
        this.workoutString = [];
        this.warmUpString = [];
        this.coolDownString = [];
        this.header = "";
        this.footer = "";
        this.saveName = "";
        this.description = "";
        this.category = "";
        this.folderLocation = "";
        this.zwoExtension = "";
        this.fileName = "";

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

        if (len(this.duration) === 1) {
            this.duration = this.duration * 3
        }

    };

    addWarmup = (this, id, dictionary) => {
        // Add warmup string to workout

        // Input:
        //     [0] id, text string from workout file
        //     [1] dictionary to get workout from
        // Returns:
        //     Prints error string if not found
        
        warmup_object = dictionary[id]
        if warmup_object == "":
            return print(f"Missing from {'Run' if this.is_run else 'Bike'} warmup: {id}")
        for cnt, value in enumerate(warmup_object.workout_string):
            this.warmup_string[cnt] += value
            this.duration[cnt] -= warmup_object.workout_duration[cnt]
            if warmup_object.remainder_zones != []:
                this.remainder_zones = warmup_object.remainder_zones

    addWorkout = (id, dictionary) => {
        // Add workout string to workout

        // Input:
        //     [0] id, text string from workout file
        //     [1] dictionary to get workout from
        // Returns:
        //     Prints error string if not found

        workout_object = dictionary[id]
        if workout_object == "":
            return print(f"Missing from {'Run' if this.is_run else 'Bike'} workout: {id}")
        for cnt, value in enumerate(workout_object.workout_string):
            this.workout_string[cnt] += value
            this.duration[cnt] -= workout_object.workout_duration[cnt]
            if workout_object.remainder_zones != []:
                this.remainder_zones = workout_object.remainder_zones
    };

    addCooldown = (this, id, dictionary) => {
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
        
        for cnt, value in enumerate(cooldown_object.workout_string):
            this.cooldown_string[cnt] += value
            this.duration[cnt] -= cooldown_object.workout_duration[cnt]
            if cooldown_object.remainder_zones != []:
                this.remainder_zones = cooldown_object.remainder_zones
    };

    set header(header) {
        this.header = header;
    };

    set footer(footer) {
        this.footer = footer;
    };

    set saveName(saveName) {
        this.saveName = saveName;
    };
    
    set description(description) {
        this.description = description;
    };
    
    set filename(filename) {
        this.filename = filename;
    };
    
    set category(category) {
        this.category = category;
    };
    
    set folderLocation(folderLocation) {
        this.folderLocation = folderLocation;
    };

    set zwoExtension(zwoExtension) {
        this.zwoExtension = zwoExtension;
    };
    
    get __str__() {
        const getWorkout = (cnt) => {
            return_string  = `<workout>\n${this.warmup_string[cnt]}\n`;
            return_string += `${this.workout_string[cnt]}\n`;
            power = PowerLevels(test_distance, test_time);
            if (this.remainder_zones != []){
                if (this.isRun) {
                    return_string += power.getRunRemainder(this.duration[cnt], this.remainder_zones);
                } else {
                    return_string += power.getBikeRemainder(this.duration[cnt], this.remainder_zones);
                }
            }
            return_string += `${this.cooldown_string[cnt]}\n`;
            return return_string;
        };

        beginString = this.header;
        beginString += this.saveName;
        beginString += this.description;
        categoryString = [];
        if (this.isLevel) {
            maxLevel = 3;
        } else {
            maxLevel = 1;
        }

        level = ""
        for (cnt = 0; cnt ++; cnt < maxLevel) {
            if (this.is_level) {
                level = ` Level ${cnt + 1} `;
            }
            categoryString.push( `<WorkoutPlan>${this.filename}${level}</WorkoutPlan>\n
                                    <category>${this.filename}${level}</category>
                                    ${this.category}`);
        }
        return categoryString.map(x => `${beginString}${x}${getWorkout(cnt)}${this.footer}`);
    };
    
    makeFile = () => {
        textArray = this.__str__;
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