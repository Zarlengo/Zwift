def searchForTXTFiles(fFolder):
    from os import listdir
    from os.path import isfile, join, exists

    file_dictionary = {}
    for f in [f for f in listdir(fFolder) if isfile(join(fFolder, f))]:
        file_name = f.split(".")[0]
        # if file_name == "146ec384-1a42-4d29-afb9-830e9905e8ec":
        #     pass
        # else:
        #     continue
        # if file_name in [            
        #             "0e141196-b3ae-4092-aeaf-75a30d881503",
        #             "267d65b4-5aaf-454c-8098-84fcde65f6d1",
        #             "3cdc4db2-e92a-4bfb-839e-a2793aaafe8a",
        #             "3cef1fd7-0cd4-44d2-9fcd-9209d5fb1c0e",
        #             "4552b042-c914-4e6a-bf50-2d33593862ad",
        #             "473a9b8a-c706-463d-8747-b46017910e46",
        #             "4b71e6ae-52a0-4732-8c48-4ff1edd3062e",
        #             "50f1c5d4-9143-4424-a21a-0e919892408e",
        #             "78830614-f7a7-4af4-8a64-9ee675f08226",
        #             "f32c2439-ec7a-41d4-b4bd-0506c462c943",

        #             "5e92aed4-8256-443c-93b5-431da4a96cd0",
        #             "6bf2cf9a-1ef1-42bd-8b1f-85db6ee432b3",
        #             "835d391d-6b1f-4477-a1c0-e5d421bb530a",
        #             "952c0599-fa06-45d3-bc27-992c6a25a9c7",
        #             "9cfbc7b7-66bf-4598-8415-4e5dcb2e9e71",
        #             "b0a40780-9267-4da4-8508-46b103eb5fe4",
        #             "bc0831c2-bd97-4c14-ab9b-271fb46ea720",
        #             "c5e9cf28-8918-4ad4-99f1-11aad8855d4d",
        #             "d0564a33-92ce-4c01-bdc5-444ffffbaa7f",
        #             "d06e8300-ece2-4f14-afca-beb87ea95005",
        #             "f873d588-7aee-47d2-a55f-dab0ed9c8741",
        #             "remaining"]:
        #     continue
        if not exists(f"{fFolder}\\{file_name}"):
            with open(fFolder + f, "r", encoding='utf16') as file_contents:
                file_string = "\n".join(file_contents.readlines())

            if "Level 1" in file_string and "Level 2" in file_string and "Level 3" in file_string:
                is_level = True
            elif "SC Athletes" in file_string and "Half Athletes" in file_string and "Full Athletes" in file_string:
                is_level = True
            else:
                is_level = False
            file_dictionary[file_name] = [file_string, is_level]
    return file_dictionary

def createZWOFiles(folderName, input_Array):
    fileTXT = input_Array[0]
    is_level = input_Array[1]
    import os
    import shutil
    if not os.path.isdir(TXT_location + folderName):
        try:
            os.mkdir(TXT_location + folderName)
        except OSError:
            print (f"Creation of the directory {TXT_location}{folderName} failed")
        else:
            print (f"{TXT_location}{folderName}")
    print(folderName)

    day_DICT = {}
    day_string = ""
    day_save = ""
    title_string = ""
    for line in fileTXT.split('\n'):
        if title_string == "":
            title_string = line
        else:
            if trimString(line) == "":
                pass
            elif line[:10] == "Plan Day #" or line[:6] == "Week #":
                if day_save == "":
                    day_save = line
                else:
                    day_DICT[day_save] = day_string
                    day_save = line
                    day_string = ""
            else:
                day_string = day_string + line + '\n'
    fileName = title_string.replace("[", "(").replace("]", ")")
    fileName = fileName.replace("/", " ").replace(":", "")
    fileName = fileName.replace(",", "").replace(".", "")
    day_DICT[day_save] = day_string
    for day_key in day_DICT:
        formatDayTXT(title_string, day_key, day_DICT[day_key], TXT_location + folderName + "\\", fileName, is_level)
    if not os.path.isdir(ZWO_location + fileName) and test_mode == False:
        shutil.copytree(TXT_location + folderName, ZWO_location + fileName)
        print (f"{ZWO_location}{fileName}")
    else:
        print (f"Folder already exists: {ZWO_location}{fileName}")
    # import shutil
    # shutil.rmtree(f"{TXT_location}{folderName}")    
        
def formatDayTXT(header, weekDaySTR, dayText, fileLocation, fileName, isLevel):
    dayNum = weekDaySTR.split("#")[1]
    weekdayNum = (int(weekDaySTR.split("#")[1]) - 1) % 7 + 1
    weekNum = int((int(weekDaySTR.split("#")[1]) - 1) / 7) + 1
    searchString = ["Run", "Bike", "Swim", "Swim - Intervals", "Swim - Endurance", "Run - VO2 Max"]
    daysEvent = ""
    eventTitle = ""
    eventType = ""
    newLine = False
    headerString = ("<workout_file>\n"
                    "<author>Endurance Nation</author>\n"
                    "<author_alias>Chris Zarlengo</author_alias>\n"
                    "<authorIcon>UI/WhiteOrangeTheme/JerseyIcons/EnduranceNation2019_thumb.tga</authorIcon>\n"
                    "<name>")
    footerString = "</workout>\n</workout_file>"
    fileCnt = 0
    zwoName = ""
    prevString = ""
    if isLevel:
        num_of_levels = 2
    else:
        num_of_levels = 0
    for line in dayText.split('\n'):
        for search in searchString:
            if trimString(line) == search and trimString(line) != prevString:
                if eventType != "" and eventTitle != "Other":
                    workout_object = getWorkouts(daysEvent, eventType, isLevel, f"{fileName}_{dayNum}_{eventType}")
                    if workout_object != False:
                        workout_object.add_header_footer(f"{headerString}Day {weekdayNum} {eventTitle}</name>\n", footerString)
                        saveName = f"Zwift - EN {fileName} Day {dayNum} {eventType}"
                        workout_object.add_save(f"<activitySaveName>{saveName}</activitySaveName>\n")
                        zwo_extension = f"_D{dayNum}_{fileCnt}.zwo"
                        runString = ""
                        if eventType == "Run":
                            runString = f"\n{power.runZoneString}"
                        workout_object.add_description(f"<description>{fileName}\nPlan Day #{dayNum}\n{eventTitle}\n{trimString(daysEvent)}{runString}</description>\n")
                        workout_object.add_filename(fileName)
                        workout_object.add_category(f"<categoryIndex>0</categoryIndex>\n"
                            f"<subcategory>Week {('00' + str(weekNum))[-2:]}</subcategory>\n"
                            f"<sportType>{eventType.lower()}</sportType>\n"
                            f"<tags>{eventTitle}</tags>\n")

                        workout_object.savefile_location(fileLocation, zwo_extension)
                        workout_object.make_file()
                        fileCnt += 1

                newLine = True
                if " " in search:
                    eventType = search.split(" ")[0]
                else:
                    eventType = search
                eventTitle = ""
                daysEvent = ""


        if newLine == True:
            newLine = False
        elif eventTitle == "":
            eventTitle = trimString(line)
        else:
            daysEvent = f"{daysEvent}{line}\n"
        
        if line[:8] == "Priority":
            daysEvent = daysEvent + "\n"
        prevString = trimString(line)
    if trimString(eventTitle) != "":
        if eventType == "":
            eventType = eventTitle.split(" ")[0]
        workout_object = getWorkouts(daysEvent, eventType, isLevel, f"{fileName}_{dayNum}_{eventType}")
        if workout_object != False:
            workout_object.add_header_footer(f"{headerString}Day {weekdayNum} {eventTitle}</name>\n", footerString)
            saveName = f"Zwift - EN {fileName} Day {dayNum} {eventType}"
            workout_object.add_save(f"<activitySaveName>{saveName}</activitySaveName>\n")
            zwo_extension = f"_D{dayNum}_{fileCnt}.zwo"
            runString = ""
            if eventType == "Run":
                runString = f"\n{power.runZoneString}"
            workout_object.add_description(f"<description>{fileName}\nPlan Day #{dayNum}\n{eventTitle}\n{trimString(daysEvent)}{runString}</description>\n")
            workout_object.add_filename(fileName)
            workout_object.add_category(f"<categoryIndex>0</categoryIndex>\n"
                f"<subcategory>Week {('00' + str(weekNum))[-2:]}</subcategory>\n"
                f"<sportType>{eventType.lower()}</sportType>\n"
                f"<tags>{eventTitle}</tags>\n")

            workout_object.savefile_location(fileLocation, zwo_extension)
            workout_object.make_file()
            fileCnt += 1

def getWorkouts(originalTXT, swimBikeRun, isLevel, levelString):
    workoutTXT = originalTXT.upper()
    exitLoop = False
    if swimBikeRun not in ["Run", "Bike"] and workoutTXT != "":
        return False
    if swimBikeRun == "Run":
        is_run = True
    else:
        is_run = False

    if isLevel:
        num_of_levels = 2
    else:
        num_of_levels = 0



    replaceArr = [chr(10),   chr(13) + chr(13),           chr(34), 	     chr(96), chr(145), chr(146), chr(180)]
    newChrArr = [chr(13),           chr(13) ,       chr(39) + chr(39), chr(39),  chr(39),  chr(39),  chr(39)]
    for cnt in range(len(replaceArr)):
        workoutTXT = workoutTXT.replace(replaceArr[cnt], newChrArr[cnt])
# ********** LEVEL NEED TO GET DURATION OUT OF IT *******
    if "PLANNED:" in workoutTXT:
        priorityStr = workoutTXT[workoutTXT.index("PLANNED:") + 8:]
        priorityStr = trimString(priorityStr[:priorityStr.index(chr(13))])
        if ":" in priorityStr:
            workout_object = Zwift([priorityStr], is_run, isLevel)
            workoutTXT = workoutTXT[workoutTXT.index("PLANNED:"):]
            workoutTXT = workoutTXT[workoutTXT.index(chr(13)):]
        else:
            workout_object = Zwift(["0:00:00"], is_run, isLevel)
            print("MILES ONLY? {swimBikeRun}\n{workoutTXT}")
    elif isLevel:
        if "CHOOSE YOUR ABILITY LEVEL: " in workoutTXT:
            if swimBikeRun == "Run":
                LevelDictionary = runLevel
            elif swimBikeRun == "Bike":
                LevelDictionary = bikeLevel
            if LevelDictionary[levelString] == "":
                print(f"LEVEL****Missing from {swimBikeRun} cool down: {levelString}")
                return False
            else:
                workout_object = Zwift(LevelDictionary[levelString].workout_duration, is_run, isLevel)
                workout_object.add_warmup(levelString, LevelDictionary)

            if test_mode == True:
                return False
            return workout_object


            print(workoutTXT)
            locate_arr = [  [workoutTXT.index("LEVEL 1:") + 8, workoutTXT.index(chr(13), workoutTXT.index("LEVEL 1:") + 8)],
                            [workoutTXT.index("LEVEL 2:") + 8, workoutTXT.index(chr(13), workoutTXT.index("LEVEL 2:") + 8)],
                            [workoutTXT.index("LEVEL 3:") + 8, workoutTXT.index(chr(13), workoutTXT.index("LEVEL 3:") + 8)]]
            print(locate_arr)
            time_array = [trimString(workoutTXT[locate_arr[0][0]:locate_arr[0][1]]).replace("'", ":00"),
                          trimString(workoutTXT[locate_arr[1][0]:locate_arr[1][1]]).replace("'", ":00"),
                          trimString(workoutTXT[locate_arr[2][0]:locate_arr[2][1]]).replace("'", ":00")]
            workout_object = Zwift(time_array, is_run, isLevel)
            return False


            print(workoutTXT[priorityStr:workoutTXT.index("\n", workoutTXT.index("LEVEL 1:")) - 1])
            priorityStr = workoutTXT[workoutTXT.index("LEVEL 2:") + 8:]
            print(workoutTXT[priorityStr:workoutTXT.index("\n", workoutTXT.index("LEVEL 2:")) - 1])
            priorityStr = workoutTXT[workoutTXT.index("LEVEL 3:") + 8:]
            print(workoutTXT[priorityStr:workoutTXT.index("\n", workoutTXT.index("LEVEL 3:")) - 1])
    else:
        print(f"NO PLAN: {workoutTXT}")
    leftArr = ["PRIORITY:", "CHOOSE YOUR ABILITY LEVEL:", "INDOOR SWEAT TEST", "ALL ABILITY LEVELS:"] #, "RUN:"]
    for cnt in range(len(leftArr)):
        if leftArr[cnt] in workoutTXT:
            workoutTXT = workoutTXT[workoutTXT.index(leftArr[cnt]):]
            workoutTXT = workoutTXT[workoutTXT.index(chr(13)) + 1:]
    if len(workoutTXT) <= 1:
        return False    
    while ord(workoutTXT[0]) == 13:
        if len(workoutTXT) == 1:
            return False
        workoutTXT = workoutTXT[1:]

    rightArr = ["COACH NOTE", "WARM DOWN: AS NEEDED.", "GOAL IS TO BE STEADY HERE, NOT FLASHY", "SWEAT TEST:"]
    for cnt in range(len(rightArr)):
        if rightArr[cnt] in workoutTXT:
            workoutTXT = workoutTXT[:workoutTXT.index(rightArr[cnt])]
    if len(workoutTXT) == 1:
        return False
    while workoutTXT[-1] == chr(13):
        workoutTXT = workoutTXT[:-1]
        if len(workoutTXT) == 1:
            return False
    
    # Exit scenarios, don't make a workout
    singleArr = ["HR TEST", "DO NOT DO BOTH TESTS!", "HR ATHELTES DO THIS WORKOUT"]
    for cnt in range(len(singleArr)):
        if singleArr[cnt] in workoutTXT:
            return False

    if swimBikeRun == "Run":
        WUDictionary = runWU
        MSDictionary = runMS
        CDDictionary = runCD
    elif swimBikeRun == "Bike":
        WUDictionary = bikeWU
        MSDictionary = bikeMS
        CDDictionary = bikeCD
    else:
        print("1 Wrong sport type")

    # Full workouts
    fullArr = ["BIKE TEST, FOR POWER ATHLETES ONLY!"]
    for cnt in range(len(fullArr)):
        if fullArr[cnt] in workoutTXT:
            workout_object.add_workout(fullArr[cnt], MSDictionary)
            return workout_object


    WUString = ""
    WUArr = ["WU:", "WARM UP"]
    for cnt in range(len(WUArr)):
        # print(workoutTXT)
        itemCnt = (len(workoutTXT) - len(workoutTXT.replace(WUArr[cnt], ""))) // len(WUArr[cnt])
        if itemCnt == 1:
            WUString = workoutTXT[:workoutTXT.index(WUArr[cnt]) - 1]
            WUString = WUString.split(chr(13))[0]
            WUString = WUString.split(".")[0]
            workoutTXT = trimString(workoutTXT[len(WUString):])
            WUString = trimString(WUString)
            workout_object.add_warmup(WUString, WUDictionary)

    CDString = ""
    CDArr = ["CD:", "WD:", "WARM DOWN:", "REMAINDER OF", "REMAINDER AS"]
    for cnt in range(len(CDArr)):
        itemCnt = (len(workoutTXT) - len(workoutTXT.replace(CDArr[cnt], ""))) // len(CDArr[cnt])
        if itemCnt == 1:
            CDString = workoutTXT[workoutTXT.index(CDArr[cnt]):]
            workoutTXT = trimString(workoutTXT[:workoutTXT.index(CDString) - 1])
            CDString = CDString.split(chr(13))[0]
            CDString = CDString.split(".")[0]
            workout_object.add_cooldown(CDString, CDDictionary)

    num_of_levels = 3
    workoutArr = [""] * num_of_levels
    break_mode = False

    if "''ON''" in workoutTXT and ("''OFF''" in workoutTXT or "ON/OFF" in workoutTXT):
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
        for special in specialString:
            if special in workoutTXT:
                workout_object.add_workout(special, MSDictionary)
                workoutTXT = workoutTXT.replace(special, "")


    for lineWithSpace in workoutTXT.split(chr(13)):
        line = trimString(lineWithSpace)
        if line == "" or line[:11] == "ONLY DO ONE" or line[:13] == "IF DON'T NEED":
            continue
        else:
            # Full workout line in one string
            # Time: -1 is need to create string, not enough info for block
            # Time: -2 is do not include additional data, full workout included (i.e. run test)
            # Time: -3 is out and back 2 different zones, needs 2 iterations of the calculator
            # Time: other - #'s need a remainder at zone added to the workout
            for workoutLNG in line.split(". "):
                workout = trimString(workoutLNG)
                if workout == "":
                    continue
                elif  workout in ["TAKE SHORT RECOVERIES AS NEEDED (EAT, DRINK, ETC)",
                                "MS: RACE REHEARSAL BRICK",
                                "RACE REHEARSAL BRICK SET UP TRANSITION AT CAR/HOUSE, IF POSSIBLE",
                                "SET UP TRANSITION AT CAR/HOUSE, IF POSSIBLE",
                                "MAKE THIS TRANSITION AS YOU SEE FIT; DON'T FORCE IT!",
                                "NOTE HR, HOW YOU FEEL, ETC",
                                "FRIDAY WOULD BE OFF IN THIS SCENARIO",
                                "WARM DOWN: AS NEEDED",
                                "THEN ADD 5 MINUTES TO THAT TIME",
                                ""]:
                    continue
                elif workout == "":
                    continue
                if any(x in workout for x in ["MS: RUN A 5K TIME TRIAL", "FOR HR ATHLETES"]):
                    workout_object.add_workout('RUN A 5K TIME TRIAL', MSDictionary)
                    break_mode = True
                    break
                elif workout[:11] == "ENTIRE RUN:" or workout[:4] == "RUN " or workout[:4] == "RIDE":
                    workout_object.add_workout(workout, MSDictionary)
                elif workout == "REMAINDER OF RUN IS HOW YOU FEEL, BUT TRY TO ACCUMULATE TIME TRP.":
                    workout_object.add_workout(workout, MSDictionary)
                elif ("**" in workout or workout[:23] == "THESE SESSIONS ARE YOUR" or 
                        workout[:25] == "PURPOSE OF THESE SESSIONS" or workout[:12] == "THIS RIDE IS"):
                    break
                elif "FULL ATHLETES" in workout or "HALF ATHLETES" in workout or "SC ATHLETES" in workout:
                    print(f"Specialty: {workout}")
                elif "LEVEL 1" in workout and "LEVEL 2" in workout and "LEVEL 3" in workout:
                    print(f"LEVEL: {workout}")


                    # levelNum = TrimString(Right(Left(workout, InStr(workout, ":") - 1), 1)) - 1
                    # workout = TrimString(Right(workout, len(workout) - InStr(workout, ":")))
                    # If MSDictionary.Exists(workout) Then
                    #     If MSDictionary(workout)(1) < 0 Then
                    #         If MSDictionary(workout)(2) <> "" Then
                    #             workoutArr(levelNum) = workoutArr(levelNum) & vbCrLf & MSDictionary(workout)(0)
                    #         End If
                    #         workoutArr(levelNum) = getMSRun(MSDictionary(workout)(0), workoutTime)
                    #     Else
                    #         If InStr(MSDictionary(workout)(0), "<") <= 0 Then
                    #             Wscript.Echo "6 ERROR BIKE MAIN SET:" & line & vbCrLf & workout & vbCrLf
                    #         Else
                    #             workoutArr(levelNum) = workoutArr(levelNum) & vbCrLf & MSDictionary(workout)(0)
                    #             workoutTime = workoutTime - MSDictionary(workout)(1)
                    #         End If
                    #     End If
                    # Else
                    #     Wscript.Echo "7 MISSING MAIN SET FOR " & swimBikeRun & " |" & MSDictionary.Exists(workout) & "|" & workout & "|" & workoutLNG & "|"
                    # End If
                elif (workout[:2] == "MS" or workout[:8] == "MAIN SET" or
                        "STRIDES" in workout or workout[:10] == "REPEAT FOR" or
                        workout[:7] == "5 MILE " or workout[:5] == "THEN " or 
                        workout[:12] == "15' @ 80-85%"):
                    if ":" in workout and workout.index(":") != len(workout):
                        workout = trimString(workout[workout.index(":") + 1:])
                    if workout != "":
                        workout_object.add_workout(workout, MSDictionary)
                    
                else:
                    # print(f"MISSING IGNORES FOR: {workout}\n{workoutTXT}\n")
                    pass
            if break_mode == True:
                break
        if break_mode == True:
            break
    if test_mode == True:
        return False
    return workout_object

def trimString(VarIn):
    if VarIn is None or len(VarIn) == 0:
        return ""
    remove_string = [chr(10), chr(13), chr(32), '\n', chr(46), chr(59)]
    while VarIn[-1] in remove_string:
        VarIn = VarIn[:-1]
    while VarIn[0] in remove_string:
        VarIn = VarIn[1:]
                        #  ’       '         
    return VarIn.replace(chr(8217), chr(39))

if __name__ == "__main__":
    test_distance = 21097.5
    test_time = "2:35:00"
    TXT_location = "W:\\Zwift_VBS\\TXT Files\\"
    ZWO_location = "W:\\Zwift_VBS\\ZWO Files\\"
    test_mode = False

    from collections import defaultdict
    from Zwift_Package import *
    power = PowerLevels(test_distance, test_time)

    # if test_mode:
    #     that_workout = Zwift("1:40:00", True)
    #     that_workout.add_warmup("WU: 20' TO 30' @ ZONE 1 TO ZONE 2", runWU)
    #     that_workout.add_cooldown("CD:EASY SPIN", runCD)

    #     that_workout.add_workout("25' @ EP/Z1/EASY, 7 X 20'' UPHILL STRIDES", runMS)
    #     print(that_workout.__str__())

    #     this_workout = Zwift("1:40:00", False)
    #     this_workout.add_warmup("WU: 20' TO 30' @ ZONE 1 TO ZONE 2", bikeWU)
    #     this_workout.add_cooldown("CD:EASY SPIN", bikeCD)

    #     this_workout.add_workout("5 X (2' @ ZONE 5, THEN 1' @ ZONE 2, THEN 5' @ ZONE 4, THEN 5' @ ZONE 2)", bikeMS)
    #     print(this_workout.__str__())



    all_file_contents = searchForTXTFiles(TXT_location)
    for key in all_file_contents:
        # print([key, all_file_contents[key].split('\n')[0]])
        if test_mode == True:
            createZWOFiles(key, all_file_contents[key])
            break
        else:
            createZWOFiles(key, all_file_contents[key])
            break
    print("Complete")