module.exports = (weekDaySTR, dayText, fileLocation, fileName, isLevel) => {
    console.log(dayText);
    console.log('------');
    const Zwift = require('./Zwift');
    const trimString = require('./trimString');

    

    const getWorkouts = (originalTXT, swimBikeRun, isLevel, levelString) => {
        return false;
        workoutTXT = originalTXT.toUpperCase();
        exitLoop = false
        if (!["Run", "Bike"].includes(swimBikeRun) && workoutTXT != '') {
            return false
        }
        if (swimBikeRun === 'Run') {
            isRun = true
        } else {
            isRun = false
        }

        replaceArr = [String.fromCharCode(10),  String.fromCharCode(13) + String.fromCharCode(13),  String.fromCharCode(34), 	                        String.fromCharCode(96),    String.fromCharCode(145),   String.fromCharCode(146),   String.fromCharCode(180)]
        newChrArr =  [String.fromCharCode(13),  String.fromCharCode(13),                            String.fromCharCode(39) + String.fromCharCode(39),  String.fromCharCode(39),    String.fromCharCode(39),    String.fromCharCode(39),    String.fromCharCode(39)]
        for (cnt = 0; cnt ++; cnt < replaceArr.length) {
            workoutTXT = workoutTXT.replace(replaceArr[cnt], newChrArr[cnt])
        }
        // # ********** LEVEL NEED TO GET DURATION OUT OF IT *******
        if (workoutTXT.includes('PLANNED:')) {
            priorityStr = workoutTXT.slice(workoutTXT.indexOf("PLANNED:") + 8)
            priorityStr = trimString(priorityStr.slice(0, priorityStr.indexOf( String.fromCharCode(13))));
            if (priorityStr.includes(':')) {
                workoutObject = new Zwift(power, [priorityStr], isRun, isLevel)
                workoutTXT = workoutTXT.slice(workoutTXT.indexOf("PLANNED:"));
                workoutTXT = workoutTXT.slice(workoutTXT.indexOf( String.fromCharCode(13)));
            } else {
                workoutObject = new Zwift(power, ["0:00:00"], isRun, isLevel)
                console.log(`MILES ONLY? ${swimBikeRun}\n${workoutTXT}`);
            }
        } else if (isLevel) {
            if ("CHOOSE YOUR ABILITY LEVEL: " in workoutTXT) {
                if (swimBikeRun === 'Run') {
                    LevelDictionary = runLevel
                } else if (swimBikeRun === 'Bike') {
                    LevelDictionary = bikeLevel
                }
                if (LevelDictionary[levelString] == "") {
                    console.log(`LEVEL****Missing from ${swimBikeRun} cool down: ${levelString}`)
                    return False
                } else {
                    workoutObject = new Zwift(power, LevelDictionary[levelString].workoutDuration, isRun, isLevel)
                    workoutObject.addWarmup(levelString, LevelDictionary)
                }
                if (testMode) {
                    return false;
                }
                return workoutObject;


                // print(workoutTXT)
                // locate_arr = [  [workoutTXT.index("LEVEL 1:") + 8, workoutTXT.index(chr(13), workoutTXT.index("LEVEL 1:") + 8)],
                //                 [workoutTXT.index("LEVEL 2:") + 8, workoutTXT.index(chr(13), workoutTXT.index("LEVEL 2:") + 8)],
                //                 [workoutTXT.index("LEVEL 3:") + 8, workoutTXT.index(chr(13), workoutTXT.index("LEVEL 3:") + 8)]]
                // print(locate_arr)
                // time_array = [trimString(workoutTXT[locate_arr[0][0]:locate_arr[0][1]]).replace("'", ":00"),
                //               trimString(workoutTXT[locate_arr[1][0]:locate_arr[1][1]]).replace("'", ":00"),
                //               trimString(workoutTXT[locate_arr[2][0]:locate_arr[2][1]]).replace("'", ":00")]
                // workoutObject = new Zwift(time_array, isRun, isLevel)
                // return False


                // print(workoutTXT[priorityStr:workoutTXT.index("\n", workoutTXT.index("LEVEL 1:")) - 1])
                // priorityStr = workoutTXT[workoutTXT.index("LEVEL 2:") + 8:]
                // print(workoutTXT[priorityStr:workoutTXT.index("\n", workoutTXT.index("LEVEL 2:")) - 1])
                // priorityStr = workoutTXT[workoutTXT.index("LEVEL 3:") + 8:]
                // print(workoutTXT[priorityStr:workoutTXT.index("\n", workoutTXT.index("LEVEL 3:")) - 1])
            }
        } else {
            console.log(`NO PLAN: ${workoutTXT}`);
        }
        leftArr = ["PRIORITY:", "CHOOSE YOUR ABILITY LEVEL:", "INDOOR SWEAT TEST", "ALL ABILITY LEVELS:"] //, "RUN:"]
        for (cnt = 0; cnt++; cnt < leftArr.length) {
            if (workoutTXT.includes(leftArr[cnt])) {
                workoutTXT = workoutTXT.slice(workoutTXT.indexOf(leftArr[cnt]))
                workoutTXT = workoutTXT.slice(workoutTXT.indexOf( String.fromCharCode(13)) + 1)
            }
        }
        if (workoutTXT.length <= 1) {
            return false;
        }
        while (workoutTXT.charCodeAt(0) === 13) {
            if (workoutTXT.length === 1) {
                return false;
            }
            workoutTXT = workoutTXT.slice(1)
        }
        rightArr = ["COACH NOTE", "WARM DOWN: AS NEEDED.", "GOAL IS TO BE STEADY HERE, NOT FLASHY", "SWEAT TEST:"]
        for (cnt = 0; cnt++; cnt < rightArr.length) {
            if (workoutTXT.includes(rightArr[cnt])) {
                workoutTXT = workoutTXT.slice(0, workoutTXT.indexOf(rightArr[cnt]))
            }
        }
        if (workoutTXT.length === 1) {
            return false;
        }
        while (workoutTXT.slice(-1) ===  String.fromCharCode(13)){
            workoutTXT = workoutTXT.slice(0, -1)
            if (workoutTXT.length === 1){
                return false;
            }
        }
        // # Exit scenarios, don't make a workout
        singleArr = ["HR TEST", "DO NOT DO BOTH TESTS!", "HR ATHELTES DO THIS WORKOUT"]
        for (cnt = 0; cnt++; cnt < singleArr.length) {
            if (workoutTXT.includes(singleArr[cnt])) {
                return false;
            }
        }
        if (swimBikeRun === "Run" || swimBikeRun === "Bike") {
            WUDictionary = warmUp[swimBikeRun.toLowerCase()];
            MSDictionary = mainSet[swimBikeRun.toLowerCase()];
            CDDictionary = coolDown[swimBikeRun.toLowerCase()];
        } else {
            console.log("1 Wrong sport type")
        }

        // # Full workouts
        fullArr = ["BIKE TEST, FOR POWER ATHLETES ONLY!"]
        for (cnt = 0; cnt++; cnt < fullArr.length){
            if (workoutTXT.includes(fullArr[cnt])){
                workoutObject.addWorkout(fullArr[cnt], MSDictionary)
                return workoutObject
            }
        }

        WUString = ""
        WUArr = ["WU:", "WARM UP"]
        for (cnt = 0; cnt++; cnt < WUArr.length) {
            // # print(workoutTXT)
            itemCnt = Math.floor((workoutTXT.length - workoutTXT.replace(WUArr[cnt], "").length) / WUArr[cnt].length)
            if (itemCnt === 1){
                WUString = workoutTXT.slice(0, workoutTXT.indexOf(WUArr[cnt]) - 1)
                WUString = WUString.split( String.fromCharCode(13))[0]
                WUString = WUString.split(".")[0]
                workoutTXT = trimString(workoutTXT.slice(WUString.length))
                WUString = trimString(WUString)
                workoutObject.addWarmup(WUString, WUDictionary)
            }
        }
        CDString = ""
        CDArr = ["CD:", "WD:", "WARM DOWN:", "REMAINDER OF", "REMAINDER AS"]
        for (cnt = 0; cnt++; cnt < CDArr.length) {
            itemCnt = Math.floor((workoutTXT.length - len(workoutTXT.replace(CDArr[cnt], ""))) / CDArr[cnt].length)
            if (itemCnt == 1) {
                CDString = workoutTXT.slice(workoutTXT.indexOf(CDArr[cnt]))
                workoutTXT = trimString(workoutTXT.slice(0, workoutTXT.indexOf(CDString) - 1))
                CDString = CDString.split( String.fromCharCode(13))[0]
                CDString = CDString.split(".")[0]
                workoutObject.addCooldown(CDString, CDDictionary)
            }
        }

        numOfLevels = 3
        workoutArr = [""] * numOfLevels
        breakMode = false

        if ( workoutTXT.includes("''ON''") && (workoutTXT.includes("''OFF''") || workoutTXT.includes("ON/OFF"))) {
            specialString = [
                "MS: 1' ''ON'' @ 120%/ZONE5/VERY HARD, 1' ''OFF'' @ 60-65%/ZONE1/EASY. REPEAT FOR A TOTAL OF 6' OF ''ON'' TIME",
                "MS: 1' ''ON'' @ 120%/ZONE5/VERY HARD, 1' ''OFF'' @ 60-65%/ZONE1/EASY. REPEAT FOR A TOTAL OF 8' OF ''ON'' TIME",
                "MS: 1' ''ON'' @ 120%/ZONE5/VERY HARD, 1' ''OFF'' @ 60-65%/ZONE1/EASY. REPEAT FOR A TOTAL OF 10' OF ''ON'' TIME",
                "MS: 1' ''ON'' @ 120%/ZONE5/VERY HARD, 1' ''OFF'' @ 60-65%/ZONE1/EASY. REPEAT FOR A TOTAL OF 12' OF ''ON'' TIME",
                "MS: 1' ''ON'' @ 120%/ZONE5/VERY HARD, 1' ''OFF'' @ 60-65%/ZONE1/EASY. REPEAT FOR A TOTAL OF 14' OF ''ON'' TIME",
                "MS: 8' OF ''ON'' TIME, AS WHATEVER COMBINATION OF ON/OFF INTERVALS FEELS RIGHT FOR YOU TODAY",
                "MS: 10' OF ''ON'' TIME, AS WHATEVER COMBINATION OF ON/OFF INTERVALS FEELS RIGHT FOR YOU TODAY",
                "MS: 12' OF ''ON'' TIME, AS WHATEVER COMBINATION OF ON/OFF INTERVALS FEELS RIGHT FOR YOU TODAY",
                "MS: 14' OF ''ON'' TIME, AS WHATEVER COMBINATION OF ON/OFF INTERVALS FEELS RIGHT FOR YOU TODAY"]
            for (special in specialString) {
                if (special in workoutTXT){
                    workoutObject.addWorkout(special, MSDictionary)
                    workoutTXT = workoutTXT.replace(special, "")
                }
            }
        }

        for (lineWithSpace in workoutTXT.split( String.fromCharCode(13))){
            line = trimString(lineWithSpace)
            if (line === '' || line.slice(0, 11) === "ONLY DO ONE" || line.slice(0, 13) === "IF DON'T NEED") {
                continue
            } else {
                // # Full workout line in one string
                // # Time: -1 is need to create string, not enough info for block
                // # Time: -2 is do not include additional data, full workout included (i.e. run test)
                // # Time: -3 is out and back 2 different zones, needs 2 iterations of the calculator
                // # Time: other - #'s need a remainder at zone added to the workout
                for (workoutLNG in line.split(". ")) {
                    workout = trimString(workoutLNG)
                    if (workout == "") {
                        continue
                    } else if  (workout in ["TAKE SHORT RECOVERIES AS NEEDED (EAT, DRINK, ETC)",
                                    "MS: RACE REHEARSAL BRICK",
                                    "RACE REHEARSAL BRICK SET UP TRANSITION AT CAR/HOUSE, IF POSSIBLE",
                                    "SET UP TRANSITION AT CAR/HOUSE, IF POSSIBLE",
                                    "MAKE THIS TRANSITION AS YOU SEE FIT; DON'T FORCE IT!",
                                    "NOTE HR, HOW YOU FEEL, ETC",
                                    "FRIDAY WOULD BE OFF IN THIS SCENARIO",
                                    "WARM DOWN: AS NEEDED",
                                    "THEN ADD 5 MINUTES TO THAT TIME",
                                    ""]) {
                        continue
                    } else if (workout == "") {
                        continue
                    }
                    if (["MS: RUN A 5K TIME TRIAL", "FOR HR ATHLETES"].some((element) => workout.includes(element))) {
                        workoutObject.addWorkout('RUN A 5K TIME TRIAL', MSDictionary)
                        breakMode = True
                        break
                    } else if (workout.slice(0, 11) === "ENTIRE RUN:" || workout.slice(0, 4) === "RUN " || workout.slice(0, 4) === "RIDE") {
                        workoutObject.addWorkout(workout, MSDictionary)
                    } else if (workout == "REMAINDER OF RUN IS HOW YOU FEEL, BUT TRY TO ACCUMULATE TIME TRP.") {
                        workoutObject.addWorkout(workout, MSDictionary)
                    } else if ( workout.includes("**") ||
                                workout.slice(0, 23) === "THESE SESSIONS ARE YOUR" || 
                                workout.slice(0, 25) === "PURPOSE OF THESE SESSIONS" ||
                                workout.slice(0, 12) === "THIS RIDE IS") {
                        break
                    } else if (workout.includes("FULL ATHLETES") || workout.includes("HALF ATHLETES") || workout.includes("SC ATHLETES")) {
                        console.log(`Specialty: ${workout}`)
                    } else if (workout.includes("LEVEL 1") && workout.includes("LEVEL 2") && workout.includes("LEVEL 3")) {
                        console.log(`LEVEL: ${workout}`)


                        // # levelNum = TrimString(Right(Left(workout, InStr(workout, ":") - 1), 1)) - 1
                        // # workout = TrimString(Right(workout, len(workout) - InStr(workout, ":")))
                        // # If MSDictionary.Exists(workout) Then
                        // #     If MSDictionary(workout)(1) < 0 Then
                        // #         If MSDictionary(workout)(2) <> "" Then
                        // #             workoutArr(levelNum) = workoutArr(levelNum) & vbCrLf & MSDictionary(workout)(0)
                        // #         End If
                        // #         workoutArr(levelNum) = getMSRun(MSDictionary(workout)(0), workoutTime)
                        // #     Else
                        // #         If InStr(MSDictionary(workout)(0), "<") <= 0 Then
                        // #             Wscript.Echo "6 ERROR BIKE MAIN SET:" & line & vbCrLf & workout & vbCrLf
                        // #         Else
                        // #             workoutArr(levelNum) = workoutArr(levelNum) & vbCrLf & MSDictionary(workout)(0)
                        // #             workoutTime = workoutTime - MSDictionary(workout)(1)
                        // #         End If
                        // #     End If
                        // # Else
                        // #     Wscript.Echo "7 MISSING MAIN SET FOR " & swimBikeRun & " |" & MSDictionary.Exists(workout) & "|" & workout & "|" & workoutLNG & "|"
                        // # End If
                    } else if ( workout.slice(0, 2) === "MS" ||
                                workout.slice(0, 8) === "MAIN SET" ||
                                workout.includes("STRIDES") ||
                                workout.slice(0, 10) === "REPEAT FOR" ||
                                workout.slice(0, 7) === "5 MILE " ||
                                workout.slice(0, 5) === "THEN " ||
                                workout.slice(0, 12) === "15' @ 80-85%") {
                        if (workout.includes(':') && workout.indexOf(":") != workout.length) {
                            workout = trimString(workout.slice(workout.indexOf(":") + 1))
                        }
                        if (workout != "") {
                            workoutObject.addWorkout(workout, MSDictionary)
                        }
                    } else {
                        // print(f"MISSING IGNORES FOR: {workout}\n{workoutTXT}\n")
                    }
                }
                if (breakMode) {
                    break
                }
            }
            if (breakMode) {
                break
            }
        }
        if (testMode) {
            return false
        }
        return workoutObject
    };

    dayNum = weekDaySTR.split("#")[1];
    weekdayNum = (parseInt(weekDaySTR.split("#")[1]) - 1) % 7 + 1;
    weekNum = parseInt((parseInt(weekDaySTR.split("#")[1]) - 1) / 7) + 1;

    searchTypeString = ["Run", "Bike", "Swim", "Swim - Intervals", "Swim - Endurance", "Run - VO2 Max"];
    daysEvent = "";
    eventTitle = "";
    eventType = "";
    newLine = false;
    headerString = `<workout_file>\n
                    <author>Endurance Nation</author>\n
                    <author_alias>Chris Zarlengo</author_alias>\n
                    <authorIcon>UI/WhiteOrangeTheme/JerseyIcons/EnduranceNation2019_thumb.tga</authorIcon>\n
                    <name>`;
    footerString = "</workout>\n</workout_file>";
    fileCnt = 0;
    zwoName = "";
    prevString = "";
    
    dayText.split('\n').forEach(line => {
        searchTypeString.forEach(search => {
            if (trimString(line) === search && trimString(line) != prevString) {
                if (eventType != "" && eventTitle != "Other") {
                    workoutObject = getWorkouts(daysEvent, eventType, isLevel, `${fileName}_${dayNum}_${eventType}`);
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
                        workoutObject.category = `<categoryIndex>0</categoryIndex>\n
                            <subcategory>Week ${('00' + str(weekNum)).slice(-2)}</subcategory>\n
                            <sportType>${eventType.lower()}</sportType>\n
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
        workoutObject = getWorkouts(daysEvent, eventType, isLevel, `${fileName}_${dayNum}_${eventType}`);
        if (workoutObject != false) {
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
            workoutObject.category = `<categoryIndex>0</categoryIndex>\n
                <subcategory>Week ${('00' + weekNum.toString()).slice(-2)}</subcategory>\n
                <sportType>${eventType.toLowerCase()}</sportType>\n
                <tags>${eventTitle}</tags>\n`;
            workoutObject.folderLocation = fileLocation;
            workoutObject.makeFile();
            fileCnt += 1;
        }
    }

};