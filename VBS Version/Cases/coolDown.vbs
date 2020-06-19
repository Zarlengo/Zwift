If IsEmpty(casesLocation) Then
    ' HM Time of 2:35:30 (11:51) 711s
    HMString = "2:35:00"
    HMDistance = 21097.5 'M
    MIDistance = 1609 'M
    HMArr = Split(HMString, ":")
    runKMperMin = HMDistance / (HMArr(0) * 60 + HMArr(1) + HMArr(2) / 60)
    runZone0 =   0.60	' Zone 0 / Walk: 60%
    runSPD = 	 0.78   ' SPD / Interval Pace
    runZone1 =   0.84	' Zone 1 / LRP / Easy: 84%
    runZoneTRP = 0.90	' TRP / Run Durability: 90% (STR)
    runZone2 =   0.96	' Zone 2 / MP / Steady: 96%
    runZone3 =   0.98	' Zone 3 / HMP / ModHard: 98%
    runZone4 =   1.03	' Zone 4 / TP / Hard: 103%
    runZone5 =   1.11	' Zone 5 / IP / Very Hard 111%

    bikeZone0 = 0.25
    bikeZone1 = 0.65
    bikeZone2 = 0.72
    bikeZone3 = 0.82
    bikeZone4 = 1.00
    bikeZone5 = 1.15
End If


Dim bikeCDDictionary : Set bikeCDDictionary = CreateObject("Scripting.Dictionary")
bikeCDDictionary.CompareMode = vbTextCompare

bikeCDDictionary.Add "CD: 5' TO 10' @ ZONE 1", array( _
        "<Cooldown Duration='600' PowerLow='" & bikeZone2 & "' PowerHigh='" & bikeZone0 & "'/>", _
        1)


bikeCDDictionary.Add "WD: 10' EASY SPIN", array( _
        "<Cooldown Duration='600' PowerLow='" & bikeZone2 & "' PowerHigh='" & bikeZone0 & "'/>", _
        1)

bikeCDDictionary.Add "CD:EASY SPIN", array( bikeZone1, -1, "")
bikeCDDictionary.Add "CD: EASY SPIN", array( bikeZone1, -1, "")
bikeCDDictionary.Add "WD: 10' EASY", array( bikeZone1, -1, "")
bikeCDDictionary.Add "REMAINDER OF RIDE AT ZONE 2 OR AT YOUR TARGET RACE EFFORT AS YOU ARE ABLE", array( bikeZone3, -1, "")
bikeCDDictionary.Add "REMAINDER OF TIME AT 80-85%/ZONE3/MOD-HARD", array( bikeZone3, -1, "")
bikeCDDictionary.Add "REMAINDER OF TIME AT ZONE 2 AS ABLE", array( bikeZone2, -1, "")
bikeCDDictionary.Add "REMAINDER OF AVAILABLE RIDE TIME AT 80-85%/ZONE3/MOD-HARD", array( bikeZone3, -1, "")


Dim runTimeCalc0, runTimeCalc1, runTimeCalc2
Dim runCDDictionary : Set runCDDictionary = CreateObject("Scripting.Dictionary")
runCDDictionary.CompareMode = vbTextCompare


    runTimeCalc0 = Int(20/60 * (runKMperMin * runZone4))
    runTimeCalc1 = Int(40/60 * (runKMperMin * runZoneTRP))
runCDDictionary.Add "REMAINDER AS YOU FEEL, INCLUDE 5 X 20'' STRIDES", array( _
    "<IntervalsT Repeat='5' OnDuration='" & runTimeCalc0 & "' OffDuration='" & runTimeCalc1 & "' OnPower='" & runZone4 & "' OffPower='" & runZoneTRP & "' pace='3' />", _  
    5)


runCDDictionary.Add "REMAINDER OF RUN IS HOW YOU FEEL, BUT TRY TO ACCUMULATE MORE HMP/Z3/MOD-HARD TIME", array( runZone3, -1, "")
runCDDictionary.Add "REMAINDER OF RUN IS TO BUILD FROM RECOVERY EFFORT TO HMP/Z3/MOD-HARD PACE TO SIMULATE THE END OF YOUR RUN", array( runZone3, -1, "")
runCDDictionary.Add "CD:WALKING, JOGGING AS NEEDED, ETC", array( runZone0, -1, "")
runCDDictionary.Add "REMAINDER OF TIME @ EP/Z1/EASY", array( runZone1, -1, "")
runCDDictionary.Add "REMAINDER OF RUN IS HOW YOU FEEL, BUT TRY TO ACCUMULATE MORE MP/Z2/STEADY TIME", array( runZone2, -1, "")
runCDDictionary.Add "REMAINDER OF RUN IS HOW YOU FEEL, BUT TRY TO ACCUMULATE TIME TRP", array(runZoneTRP, -1, "")
runCDDictionary.Add "REMAINDER AS YOU FEEL IN ZONE 1 TO ZONE 2", array(runZoneTRP, -1, "")

    runTimeCalc0 = Int(10 * (runKMperMin * runZoneTRP))
runCDDictionary.Add "CD: 5-10' EASY JOG/WALK", array( _
        "<SteadyState Duration='" & runTimeCalc0 & "' Power='" & runZone0 & "' pace='3' />", _
        10)

' *********


If IsEmpty(casesLocation) Then
    Wscript.Echo bikeCDDictionary("REMAINDER OF AVAILABLE RIDE TIME AT 80-85%/ZONE3/MOD-HARD")(0)
    Wscript.Echo runCDDictionary("CD: 5-10' EASY JOG/WALK")(0)
End If





