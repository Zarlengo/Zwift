If IsEmpty(casesLocation) Then
    ' HM Time of 2:35:30 (11:51) 711s
    HMString = "2:35:00"
    HMDistance = 21097.5 'M
    MIDistance = 1609 'M
    HMArr = Split(HMString, ":")
    runKMperMin = HMDistance / (HMArr(0) * 60 + HMArr(1) + HMArr(2) / 60)
    runZone0 =   0.60	' Zone 0 / Walk: 60%
    runSPD = 	   0.78 ' SPD / Interval Pace
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


Dim bikeWUDictionary : Set bikeWUDictionary = CreateObject("Scripting.Dictionary")
bikeWUDictionary.CompareMode = vbTextCompare
' bikeWUDictionary.Add "", array("Great", 10)

bikeWUDictionary.Add "WU: 10' TO 15' EASY, 3 X 1' (1') @ 95-100%/ZONE4/HARD.MS: 2 X 8' (2') @ 95-100%/ZONE4/HARD", array( _
        "<Warmup Duration='540' PowerLow='" & bikeZone0 & "' PowerHigh='" & bikeZone3 & "'/>" & vbCrLf & _
        "<IntervalsT Repeat='3' OnDuration='60' OffDuration='60' OnPower='" & bikeZone4 & "' OffPower='" & bikeZone0 & "'/>" & vbCrLf & _
        "<IntervalsT Repeat='2' OnDuration='480' OffDuration='120' OnPower='" & bikeZone4 & "' OffPower='" & bikeZone0 & "'/>", _
        21)

bikeWUDictionary.Add "15' ZONE 1, 6 X 30'' STRIDES", array( _
        "<Warmup Duration='900' PowerLow='" & bikeZone1 & "' PowerHigh='" & bikeZone2 & "'/>" & vbCrLf & _
        "<IntervalsT Repeat='6' OnDuration='30' OffDuration='30' OnPower='" & bikeZone4 & "' OffPower='" & bikeZone0 & "'/>", _
        21)

bikeWUDictionary.Add "WU: 10' TO 15', THEN 3 X 1' (1') @ ZONE 4, TO OPEN UP YOUR LEGS", array( _
        "<Warmup Duration='540' PowerLow='" & bikeZone0 & "' PowerHigh='" & bikeZone3 & "'/>" & vbCrLf & _
        "<IntervalsT Repeat='3' OnDuration='60' OffDuration='60' OnPower='" & bikeZone4 & "' OffPower='" & bikeZone0 & "'/>", _
        15)
bikeWUDictionary.Add "WU: 10' TO 15' EASY, 3 X 1' (1') @ 95-100%/ZONE4/HARD", array( _
        "<Warmup Duration='540' PowerLow='" & bikeZone0 & "' PowerHigh='" & bikeZone3 & "'/>" & vbCrLf & _
        "<IntervalsT Repeat='3' OnDuration='60' OffDuration='60' OnPower='" & bikeZone4 & "' OffPower='" & bikeZone0 & "'/>", _
        15)

bikeWUDictionary.Add "WU: 10' TO 15', THEN 3 X 1' (1') @ 95-100%/ ZONE 4, TO OPEN UP YOUR LEGS", array( _
        "<Warmup Duration='540' PowerLow='" & bikeZone0 & "' PowerHigh='" & bikeZone3 & "'/>" & vbCrLf & _
        "<IntervalsT Repeat='3' OnDuration='60' OffDuration='60' OnPower='" & bikeZone4 & "' OffPower='" & bikeZone0 & "'/>", _
        15)

bikeWUDictionary.Add "WU: 15' TO 20' @ 60-65%/ZONE1/EASY", array( _
        "<Warmup Duration='1200' PowerLow='" & bikeZone1 & "' PowerHigh='" & bikeZone2 & "'/>", _
        20)

bikeWUDictionary.Add "10' TO 15' @ ZONE 1 TO ZONE 2 RUNNING", array( _
        "<Warmup Duration='900' PowerLow='" & bikeZone1 & "' PowerHigh='" & bikeZone2 & "'/>", _
        20)

bikeWUDictionary.Add "WARM UP FOR ALL ABILITIES: 20' TO 30' @ ZONE 1 TO ZONE 2", array( _
        "<Warmup Duration='1800' PowerLow='" & bikeZone1 & "' PowerHigh='" & bikeZone2 & "'/>", _
        30)

bikeWUDictionary.Add "WU: 20' TO 30' @ ZONE 1 TO ZONE 2", array( _
        "<Warmup Duration='1800' PowerLow='" & bikeZone1 & "' PowerHigh='" & bikeZone2 & "'/>", _
        30)

bikeWUDictionary.Add "WU: 15' EASY, INCLUDE 4 X 30'' SPINUPS", array( _
        "<Warmup Duration='540' PowerLow='" & bikeZone0 & "' PowerHigh='" & bikeZone3 & "'/>" & vbCrLf & _
        "<IntervalsT Repeat='3' OnDuration='60' OffDuration='60' OnPower='" & bikeZone4 & "' OffPower='" & bikeZone0 & "'/>", _
        15)

bikeWUDictionary.Add "WU: 10' EASY, THEN 8' BUILDING FROM 50% ESTIMATED FTP TO 100% ESTIMATED FTP IN 2' INCREMENTS, 2' EASY", array( _
        "<Warmup Duration='600' PowerLow='" & bikeZone0 & "' PowerHigh='" & bikeZone2 & "'/>" & vbCrLf & _
        "<IntervalsT Repeat='3' OnDuration='60' OffDuration='60' OnPower='" & bikeZone4 & "' OffPower='" & bikeZone0 & "'/>" & vbCrLf & _
        "<SteadyState Duration='120' Power='0.50'/>" & vbCrLf & _
        "<SteadyState Duration='120' Power='0.67'/>" & vbCrLf & _
        "<SteadyState Duration='120' Power='0.83'/>" & vbCrLf & _
        "<SteadyState Duration='120' Power='1.00'/>" & vbCrLf & _
        "<SteadyState Duration='120' Power='" & bikeZone1 & "'/>", _
        20)





Dim runTimeCalc0, runTimeCalc1, runTimeCalc2
Dim runWUDictionary : Set runWUDictionary = CreateObject("Scripting.Dictionary")
runWUDictionary.CompareMode = vbTextCompare

        runTimeCalc0 = Int(11 * (runKMperMin * (runZone1 + runZone2) / 2))
        runTimeCalc1 = Int(.5 * (runKMperMin * runZone4))
        runTimeCalc2 = Int(.5 * (runKMperMin * runZoneTRP))
runWUDictionary.Add "WU: 15' INCLUDING 4 X 30'' AT 5K PACE", array( _
    "<Warmup Duration='" & runTimeCalc0 & "' PowerLow='" & runZone1 & "' PowerHigh='" & runZone2 & "' pace='3' />" & vbCrLf & _
    "<IntervalsT Repeat='4' OnDuration='" & runTimeCalc1 & "' OffDuration='" & runTimeCalc2 & "' OnPower='" & runZone4 & "' OffPower='" & runZoneTRP & "' pace='3' />", _  
    15)

        runTimeCalc0 = Int(11 * (runKMperMin * (runZone1 + runZone2) / 2))
        runTimeCalc1 = Int(.5 * (runKMperMin * runZone4))
        runTimeCalc2 = Int(.5 * (runKMperMin * runZoneTRP))
runWUDictionary.Add "WU: 15' INCLUDING 4 X 30 SECS AT 5K PACE", array( _
    "<Warmup Duration='" & runTimeCalc0 & "' PowerLow='" & runZone1 & "' PowerHigh='" & runZone2 & "' pace='3' />" & vbCrLf & _
    "<IntervalsT Repeat='4' OnDuration='" & runTimeCalc1 & "' OffDuration='" & runTimeCalc2 & "' OnPower='" & runZone4 & "' OffPower='" & runZoneTRP & "' pace='3' />", _  
    15)

        runTimeCalc0 = Int(15 * (runKMperMin * (runZone1 + runZone2) / 2))
        runTimeCalc1 = Int(.5 * (runKMperMin * runZone4))
        runTimeCalc2 = Int(.5 * (runKMperMin * runZoneTRP))
runWUDictionary.Add "WU: 15' ZONE 1, 6 X 30'' STRIDES", array( _
    "<Warmup Duration='" & runTimeCalc0 & "' PowerLow='" & runZone1 & "' PowerHigh='" & runZone2 & "' pace='3' />" & vbCrLf & _
    "<IntervalsT Repeat='6' OnDuration='" & runTimeCalc1 & "' OffDuration='" & runTimeCalc2 & "' OnPower='" & runZone4 & "' OffPower='" & runZoneTRP & "' pace='3' />", _  
    21)

        runTimeCalc0 = Int(15 * (runKMperMin * (runZone1 + runZone2) / 2))
runWUDictionary.Add "WARM UP: 10' TO 15' @ ZONE 1 TO ZONE 2 RUNNING", array( _
    "<Warmup Duration='" & runTimeCalc0 & "' PowerLow='" & runZone1 & "' PowerHigh='" & runZone2 & "' pace='3' />", _  
    15)

' ************

If IsEmpty(casesLocation) Then
    Wscript.Echo bikeWUDictionary("WU: 10' EASY, THEN 8' BUILDING FROM 50% ESTIMATED FTP TO 100% ESTIMATED FTP IN 2' INCREMENTS, 2' EASY")(0)
    Wscript.Echo runWUDictionary("WU: 15' INCLUDING 4 X 30 SECS AT 5K PACE")(0)
End If



