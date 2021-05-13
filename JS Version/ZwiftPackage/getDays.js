module.exports = (weekDaySTR, dayText, fileLocation, fileName, folderName, isLevel, EN) => {
    const trimString = require('./trimString');
    const getWorkout = require('./getWorkout');

    dayNum = weekDaySTR.split("#")[1];
    weekdayNum = (parseInt(weekDaySTR.split("#")[1]) - 1) % 7 + 1;
    weekNum = parseInt((parseInt(weekDaySTR.split("#")[1]) - 1) / 7) + 1;

    searchTypeString = ["Run", "Bike", "Swim", "Swim - Intervals", "Swim - Endurance", "Run - VO2 Max"];
    daysEvent = "";
    eventTitle = "";
    eventType = "";
    newLine = false;
    headerString = `<workout_file>
<author>Endurance Nation</author>
<author_alias>Chris Zarlengo</author_alias>
<authorIcon>UI/WhiteOrangeTheme/JerseyIcons/EnduranceNation2019_thumb.tga</authorIcon>
<name>`;
    footerString = "</workout>\n</workout_file>";
    fileCnt = 0;
    zwoName = "";
    prevString = "";
    
    dayText.split('\n').forEach(line => {
        searchTypeString.forEach(search => {
            if (trimString(line) === search && trimString(line) != prevString) {
                if (eventType != "" && eventTitle != "Other") {
                    workoutObject = getWorkout(daysEvent, eventType, isLevel, EN, `${folderName}_${dayNum}`);
                    if (workoutObject != false) {
                        workoutObject.header = `${headerString}Day ${weekdayNum} ${eventTitle}</name>\n`;
                        workoutObject.footer = footerString;
                        workoutObject.saveName = `<activitySaveName>Zwift - EN ${fileName} Day ${dayNum} ${eventType}</activitySaveName>\n`;
                        workoutObject.zwoExtension = `_D${dayNum}_${fileCnt}.zwo`;
                        runString = "";
                        if (eventType == "Run") {
                            runString = `\n${power.runZoneString}`;
                        }
                        workoutObject.description = `<description>${fileName}\nPlan Day #${dayNum}\n${eventTitle}\n${trimString(daysEvent)}${runString}</description>\n`;
                        workoutObject.fileName = fileName;
                        workoutObject.category = `<categoryIndex>0</categoryIndex>
<subcategory>Week ${('00' + weekNum.toString()).slice(-2)}</subcategory>
<sportType>${eventType.toLowerCase()}</sportType>
<tags>${eventTitle}</tags>\n`;

                        workoutObject.folderLocation = fileLocation;
                        workoutObject.makeFile();
                        fileCnt += 1;
                    }
                }
                newLine = true;
                if (search.includes(" ")) {
                    eventType = search.split(" ")[0];
                } else {
                    eventType = search;
                }
                eventTitle = "";
                daysEvent = "";
            }
        });

        if (newLine === true) {
            newLine = false;
        } else if (eventTitle === '') {
            eventTitle = trimString(line);
        } else {
            daysEvent = `${daysEvent}${line}\n`;
        }
        if (line.slice(0, 8) === "Priority") {
            daysEvent = `${ daysEvent }\n`;
        }
        prevString = trimString(line);
    });

    if (trimString(eventTitle) != "") {
        if (eventType == "") {
            eventType = eventTitle.split(" ")[0];
        }
        workoutObject = getWorkout(daysEvent, eventType, isLevel, EN, `${folderName}_${dayNum}`);
        if (workoutObject != false) {
            // console.log({fileName})
            workoutObject.header = `${headerString}Day ${weekdayNum} ${eventTitle}</name>\n`;
            workoutObject.footer = footerString;
            workoutObject.saveName = `<activitySaveName>Zwift - EN ${fileName} Day ${dayNum} ${eventType}</activitySaveName>\n`;
            workoutObject.zwoExtension = `_D${dayNum}_${fileCnt}.zwo`;
            runString = "";
            if (eventType === "Run") {
                runString = `\n${power.runZoneString}`;
            }
            workoutObject.description = `<description>${fileName}\nPlan Day #${dayNum}\n${eventTitle}\n${trimString(daysEvent)}${runString}</description>\n`;
            workoutObject.fileName = fileName;
            workoutObject.category = `<categoryIndex>0</categoryIndex>
<subcategory>Week ${('00' + weekNum.toString()).slice(-2)}</subcategory>
<sportType>${eventType.toLowerCase()}</sportType>
<tags>${eventTitle}</tags>\n`;
            workoutObject.folderLocation = fileLocation;
            // console.log({workoutObject})
            workoutObject.makeFile();
            fileCnt += 1;
        }
    }

};