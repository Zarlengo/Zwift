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
 End If

Dim runTimeCalc0, runTimeCalc1, runTimeCalc2, runTimeCalc3
Dim runMSDictionary : Set runMSDictionary = CreateObject("Scripting.Dictionary")
runMSDictionary.CompareMode = vbTextCompare

    runTimeCalc0 = Int(35 * runKMperMin * runZoneTRP)
    runTimeCalc1 = Int(20/60 * runKMperMin * runZone4)
    runTimeCalc2 = Int(40/60 * runKMperMin * runZoneTRP)
runMSDictionary.Add "35' @ TRP + 3 X 20'' STRIDES", array( _
    "<SteadyState Duration='" & runTimeCalc0 & "' Power='" & runZoneTRP & "' pace='3' />" & vbCrLf & _
    "<IntervalsT Repeat='3' OnDuration='" & runTimeCalc1 & "' OffDuration='" & runTimeCalc2 & "' OnPower='" & runZone4 & "' OffPower='" & runZoneTRP & "' pace='3' />", _  
    46)

    runTimeCalc0 = Int(40 * runKMperMin * runZoneTRP)
    runTimeCalc1 = Int(20/60 * runKMperMin * runZone4)
    runTimeCalc2 = Int(40/60 * runKMperMin * runZoneTRP)
runMSDictionary.Add "40' @ TRP + 3 X 20'' STRIDES", array( _
    "<SteadyState Duration='" & runTimeCalc0 & "' Power='" & runZoneTRP & "' pace='3' />" & vbCrLf & _
    "<IntervalsT Repeat='3' OnDuration='" & runTimeCalc1 & "' OffDuration='" & runTimeCalc2 & "' OnPower='" & runZone4 & "' OffPower='" & runZoneTRP & "' pace='3' />", _  
    46)

    runTimeCalc0 = Int(40 * (runKMperMin * (runZone1 + runZone2) / 2))
    runTimeCalc1 = Int(20/60 * (runKMperMin * runZone4))
    runTimeCalc2 = Int(40/60 * (runKMperMin * runZoneTRP))
runMSDictionary.Add "40' @ ZONE 1 + 6 X 20'' STRIDES", array( _
    "<SteadyState Duration='" & runTimeCalc0 & "' Power='" & runZone1 & "' pace='3' />" & vbCrLf & _
    "<IntervalsT Repeat='6' OnDuration='" & runTimeCalc1 & "' OffDuration='" & runTimeCalc2 & "' OnPower='" & runZone4 & "' OffPower='" & runZoneTRP & "' pace='3' />", _  
    46)

    runTimeCalc0 = Int(40 * (runKMperMin * (runZone1 + runZone2) / 2))
    runTimeCalc1 = Int(20/60 * (runKMperMin * runZone4))
    runTimeCalc2 = Int(40/60 * (runKMperMin * runZoneTRP))
runMSDictionary.Add "40' @ ZONE 1 + 8 X 20'' STRIDES", array( _
    "<SteadyState Duration='" & runTimeCalc0 & "' Power='" & runZone1 & "' pace='3' />" & vbCrLf & _
    "<IntervalsT Repeat='8' OnDuration='" & runTimeCalc1 & "' OffDuration='" & runTimeCalc2 & "' OnPower='" & runZone4 & "' OffPower='" & runZoneTRP & "' pace='3' />", _  
    48)

    runTimeCalc0 = Int(45 * (runKMperMin * (runZone1 + runZone2) / 2))
    runTimeCalc1 = Int(20/60 * (runKMperMin * runZone4))
    runTimeCalc2 = Int(40/60 * (runKMperMin * runZoneTRP))
runMSDictionary.Add "45' @ ZONE 1 + 8 X 20'' STRIDES", array( _
    "<SteadyState Duration='" & runTimeCalc0 & "' Power='" & runZone1 & "' pace='3' />" & vbCrLf & _
    "<IntervalsT Repeat='6' OnDuration='" & runTimeCalc1 & "' OffDuration='" & runTimeCalc2 & "' OnPower='" & runZone4 & "' OffPower='" & runZoneTRP & "' pace='3' />", _  
    53)

    runTimeCalc0 = Int(40 * (runKMperMin * (runZone1 + runZone2) / 2))
    runTimeCalc1 = Int(20/60 * (runKMperMin * runZone4))
    runTimeCalc2 = Int(40/60 * (runKMperMin * runZoneTRP))
runMSDictionary.Add "40' @ ZONE 1 + 10 X 20'' STRIDES", array( _
    "<SteadyState Duration='" & runTimeCalc0 & "' Power='" & runZone1 & "' pace='3' />" & vbCrLf & _
    "<IntervalsT Repeat='10' OnDuration='" & runTimeCalc1 & "' OffDuration='" & runTimeCalc2 & "' OnPower='" & runZone4 & "' OffPower='" & runZoneTRP & "' pace='3' />", _  
    50)

    runTimeCalc0 = Int(30/60 * (runKMperMin * runZone4))
    runTimeCalc1 = Int(30/60 * (runKMperMin * runZoneTRP))
    runTimeCalc2 = Int(30 * runKMperMin * runZone2)
runMSDictionary.Add "8-10 X STRIDES, THEN REMAINDER @ MP/Z2/STEADY", array( _
    "<IntervalsT Repeat='10' OnDuration='" & runTimeCalc0 & "' OffDuration='" & runTimeCalc1 & "' OnPower='" & runZone4 & "' OffPower='" & runZoneTRP & "' pace='3' />"  & vbCrLf & _
    "<SteadyState Duration='" & runTimeCalc2 & "' Power='" & runZone2 & "' pace='3' />", _  
    40)

    runTimeCalc0 = Int(30/60 * (runKMperMin * runZone4))
    runTimeCalc1 = Int(30/60 * (runKMperMin * runZoneTRP))
    runTimeCalc2 = Int(35 * runKMperMin * runZone2)
runMSDictionary.Add "8-10 X STRIDES, THEN REMAINDER @ MRP/Z2/STEADY", array( _
    "<IntervalsT Repeat='10' OnDuration='" & runTimeCalc0 & "' OffDuration='" & runTimeCalc1 & "' OnPower='" & runZone4 & "' OffPower='" & runZoneTRP & "' pace='3' />"  & vbCrLf & _
    "<SteadyState Duration='" & runTimeCalc2 & "' Power='" & runZone2 & "' pace='3' />", _  
    45)

    runTimeCalc0 = Int(30/60 * (runKMperMin * runZone4))
    runTimeCalc1 = Int(30/60 * (runKMperMin * runZoneTRP))
    runTimeCalc2 = Int(35 * runKMperMin * runZone2)
runMSDictionary.Add "RUN AS 8-10 X STRIDES, THEN REMAINDER @ MP/Z2/STEADY", array( _
    "<IntervalsT Repeat='10' OnDuration='" & runTimeCalc0 & "' OffDuration='" & runTimeCalc1 & "' OnPower='" & runZone4 & "' OffPower='" & runZoneTRP & "' pace='3' />"  & vbCrLf & _
    "<SteadyState Duration='" & runTimeCalc2 & "' Power='" & runZone2 & "' pace='3' />", _  
    45)


    runTimeCalc0 = Int(20 * (runKMperMin * (runZone1 + runZone2) / 2))
    runTimeCalc1 = Int(20/60 * (runKMperMin * runZone4))
    runTimeCalc2 = Int(40/60 * (runKMperMin * runZoneTRP))
runMSDictionary.Add "20' @ TRP + 3 X 20'' STRIDES", array( _
    "<SteadyState Duration='" & runTimeCalc0 & "' Power='" & runZone1 & "' pace='3' />" & vbCrLf & _
    "<IntervalsT Repeat='3' OnDuration='" & runTimeCalc1 & "' OffDuration='" & runTimeCalc2 & "' OnPower='" & runZone4 & "' OffPower='" & runZoneTRP & "' pace='3' />", _  
    23)

    runTimeCalc0 = Int(20 * (runKMperMin * (runZone1 + runZone2) / 2))
    runTimeCalc1 = Int(20/60 * (runKMperMin * runZone4))
    runTimeCalc2 = Int(40/60 * (runKMperMin * runZoneTRP))
runMSDictionary.Add "25' @ TRP + 3 X 20'' STRIDES", array( _
    "<SteadyState Duration='" & runTimeCalc0 & "' Power='" & runZone1 & "' pace='3' />" & vbCrLf & _
    "<IntervalsT Repeat='3' OnDuration='" & runTimeCalc1 & "' OffDuration='" & runTimeCalc2 & "' OnPower='" & runZone4 & "' OffPower='" & runZoneTRP & "' pace='3' />", _  
    23)

    runTimeCalc0 = Int(20 * (runKMperMin * (runZone1 + runZone2) / 2))
    runTimeCalc1 = Int(20/60 * (runKMperMin * runZone4))
    runTimeCalc2 = Int(40/60 * (runKMperMin * runZoneTRP))
runMSDictionary.Add "30' @ TRP + 3 X 20'' STRIDES", array( _
    "<SteadyState Duration='" & runTimeCalc0 & "' Power='" & runZone1 & "' pace='3' />" & vbCrLf & _
    "<IntervalsT Repeat='3' OnDuration='" & runTimeCalc1 & "' OffDuration='" & runTimeCalc2 & "' OnPower='" & runZone4 & "' OffPower='" & runZoneTRP & "' pace='3' />", _  
    23)

    runTimeCalc0 = Int(20 * (runKMperMin * (runZone1 + runZone2) / 2))
    runTimeCalc1 = Int(20/60 * (runKMperMin * runZone4))
    runTimeCalc2 = Int(40/60 * (runKMperMin * runZoneTRP))
runMSDictionary.Add "20' @ EP/Z1/EASY + 3 X 20'' STRIDES", array( _
    "<SteadyState Duration='" & runTimeCalc0 & "' Power='" & runZone1 & "' pace='3' />" & vbCrLf & _
    "<IntervalsT Repeat='3' OnDuration='" & runTimeCalc1 & "' OffDuration='" & runTimeCalc2 & "' OnPower='" & runZone4 & "' OffPower='" & runZoneTRP & "' pace='3' />", _  
    23)

    runTimeCalc0 = Int(30 * (runKMperMin * (runZone1 + runZone2) / 2))
    runTimeCalc1 = Int(20/60 * (runKMperMin * runZone4))
    runTimeCalc2 = Int(40/60 * (runKMperMin * runZoneTRP))
runMSDictionary.Add "30' @ EP/Z1/EASY + 5 X UPHILL 20'' STRIDES", array( _
    "<SteadyState Duration='" & runTimeCalc0 & "' Power='" & runZone1 & "' pace='3' />" & vbCrLf & _
    "<IntervalsT Repeat='5' OnDuration='" & runTimeCalc1 & "' OffDuration='" & runTimeCalc2 & "' OnPower='" & runZone4 & "' OffPower='" & runZoneTRP & "' pace='3' />", _  
    35)

    runTimeCalc0 = Int(20 * (runKMperMin * (runZone1 + runZone2) / 2))
    runTimeCalc1 = Int(20/60 * (runKMperMin * runZone4))
    runTimeCalc2 = Int(40/60 * (runKMperMin * runZoneTRP))
runMSDictionary.Add "20' @ EP/Z1/EASY + 5 X 20'' STRIDES", array( _
    "<SteadyState Duration='" & runTimeCalc0 & "' Power='" & runZone1 & "' pace='3' />" & vbCrLf & _
    "<IntervalsT Repeat='5' OnDuration='" & runTimeCalc1 & "' OffDuration='" & runTimeCalc2 & "' OnPower='" & runZone4 & "' OffPower='" & runZoneTRP & "' pace='3' />", _  
    25)

    runTimeCalc0 = Int(25 * (runKMperMin * (runZone1 + runZone2) / 2))
    runTimeCalc1 = Int(20/60 * (runKMperMin * runZone4))
    runTimeCalc2 = Int(40/60 * (runKMperMin * runZoneTRP))
runMSDictionary.Add "25' @ EP/Z1/EASY, 7 X 20'' UPHILL STRIDES", array( _
    "<SteadyState Duration='" & runTimeCalc0 & "' Power='" & runZone1 & "' pace='3' />" & vbCrLf & _
    "<IntervalsT Repeat='7' OnDuration='" & runTimeCalc1 & "' OffDuration='" & runTimeCalc2 & "' OnPower='" & runZone4 & "' OffPower='" & runZoneTRP & "' pace='3' />", _  
    32)

    runTimeCalc0 = Int(30 * runKMperMin * runZone1)
    runTimeCalc1 = Int(90/60 * runKMperMin * runZone4)
    runTimeCalc2 = Int(2 * runKMperMin * runZoneTRP)
runMSDictionary.Add "30' @ EP/Z1/EASY, INCLUDE 6 X 90'' (2') @ TP/Z4/HARD", array( _
    "<SteadyState Duration='" & runTimeCalc0 & "' Power='" & runZone1 & "' pace='3' />" & vbCrLf & _
    "<IntervalsT Repeat='6' OnDuration='" & runTimeCalc1 & "' OffDuration='" & runTimeCalc2 & "' OnPower='" & runZone4 & "' OffPower='" & runZoneTRP & "' pace='3' />", _  
    32)

    runTimeCalc0 = Int(11 * (runKMperMin * (runZone1 + runZone2) / 2))
    runTimeCalc1 = Int(.5 * (runKMperMin * runZone4))
    runTimeCalc2 = Int(.5 * (runKMperMin * runZoneTRP))
    runTimeCalc3 = Int(10 * (runKMperMin * (runZone3 + runZone0) / 2))
runMSDictionary.Add "RUN A 5K TIME TRIAL", array( _
    "<Warmup Duration='" & runTimeCalc0 & "' PowerLow='" & runZone1 & "' PowerHigh='" & runZone2 & "' pace='3' />" & vbCrLf & _
    "<IntervalsT Repeat='4' OnDuration='" & runTimeCalc1 & "' OffDuration='" & runTimeCalc2 & "' OnPower='" & runZone4 & "' OffPower='" & runZoneTRP & "' pace='3' />" & vbCrLf & _
    "<FreeRide Duration='5000' Power='" & runZone5 & "' pace='3' />" & vbCrLf & _
    "<Cooldown Duration='" & runTimeCalc3 & "' PowerLow='" & runZone3 & "' PowerHigh='" & runZone0 & "' pace='3' />", _  
    -2)

    runTimeCalc0 = Int((6 + 9 + 3) * MIDistance / runKMperMin)
runMSDictionary.Add "18 MILE RUN DONE AS 30%-50%-20%", array( _
    "<SteadyState Duration='" & 6 * MIDistance & "' Power='" & runZone1 & "' pace='3' />" & vbCrLf & _  
    "<SteadyState Duration='" & 9 * MIDistance & "' Power='" & runZoneTRP & "' pace='3' />" & vbCrLf & _  
    "<SteadyState Duration='" & 3 * MIDistance & "' Power='" & runZone2 & "' pace='3' />", _  
    runTimeCalc0)

    runTimeCalc0 = Int(3 * MIDistance / runKMperMin * runZoneTRP)
runMSDictionary.Add "3 MILE RUN AS OUT AND BACK AT RACE PACE", array( _
        "<SteadyState Duration='" & MIDistance * 3 & "' Power='" & runZoneTRP & "' pace='3' />", _
        runTimeCalc0)

    runTimeCalc0 = Int(10 * (runKMperMin * runZone3))
    runTimeCalc1 = Int(10 * (runKMperMin * runZone4))
runMSDictionary.Add "RUN 20' AS HMP/Z3/MOD-HARD OUT AND TP/Z4/HARD BACK", array( _
        "<SteadyState Duration='" & runTimeCalc0 & "' Power='" & runZone3 & "' pace='3' />" & vbCrLf & _
        "<SteadyState Duration='" & runTimeCalc1 & "' Power='" & runZone4 & "' pace='3' />", _
        20)

    runTimeCalc0 = Int(10 * (runKMperMin * runZone3))
    runTimeCalc1 = Int(10 * (runKMperMin * runZone4))
runMSDictionary.Add "20' AS HMP/Z3/MOD-HARD OUT AND TP/Z4/HARD BACK", array( _
        "<SteadyState Duration='" & runTimeCalc0 & "' Power='" & runZone3 & "' pace='3' />" & vbCrLf & _
        "<SteadyState Duration='" & runTimeCalc1 & "' Power='" & runZone4 & "' pace='3' />", _
        20)

    runTimeCalc0 = Int(15 * (runKMperMin * runZone2))
    runTimeCalc1 = Int(15 * (runKMperMin * runZone3))
runMSDictionary.Add "30' MRP/Z2/STEADY OUT, HMP/Z3/MOD-HARD BACK", array( _
        "<SteadyState Duration='" & runTimeCalc0 & "' Power='" & runZone2 & "' pace='3' />" & vbCrLf & _
        "<SteadyState Duration='" & runTimeCalc1 & "' Power='" & runZone3 & "' pace='3' />", _
        30)


    runTimeCalc0 = Int(5 * (runKMperMin * runZoneTRP))
    runTimeCalc1 = Int(2 * (5 + MIDistance / runKMperMin * runZone4))
runMSDictionary.Add "2 X 1.5 MILE @ TP/Z4/HARD WITH 5' RECOVERIES IN EP/Z1/EASY", array( _
    "<IntervalsT Repeat='2' OnDuration='" & 1.5 * MIDistance & "' OffDuration='" & runTimeCalc0 & "' OnPower='" & runZone4 & "' OffPower='" & runZoneTRP & "' pace='3' />", _  
    runTimeCalc1)


    runTimeCalc0 = Int(4 * (runKMperMin * runZoneTRP))
    runTimeCalc1 = Int(2 * (4 + MIDistance / runKMperMin * runZone4))
runMSDictionary.Add "2 X 1.5 MILE (4') @ TP/Z4/HARD", array( _
    "<IntervalsT Repeat='2' OnDuration='" & 1.5 * MIDistance & "' OffDuration='" & runTimeCalc0 & "' OnPower='" & runZone4 & "' OffPower='" & runZoneTRP & "' pace='3' />", _  
    runTimeCalc1)

    runTimeCalc0 = Int(4 * (runKMperMin * runZoneTRP))
    runTimeCalc1 = Int(2 * (4 + MIDistance / runKMperMin * runZone4))
runMSDictionary.Add "2 X 1 MILE (4') @ ZONE 4", array( _
    "<IntervalsT Repeat='2' OnDuration='" & MIDistance & "' OffDuration='" & runTimeCalc0 & "' OnPower='" & runZone4 & "' OffPower='" & runZoneTRP & "' pace='3' />", _  
    runTimeCalc1)

    runTimeCalc0 = Int(4 * (runKMperMin * runZoneTRP))
    runTimeCalc1 = Int(2 * (runKMperMin * runZoneTRP))
    runTimeCalc2 = Int(2 * (6 + 1.5 * MIDistance / runKMperMin * runZone4))
runMSDictionary.Add "2 X 1 MILE (4'), 2 X 1/2 MILE (2'), ALL @ ZONE 4", array( _
    "<IntervalsT Repeat='2' OnDuration='" & MIDistance & "' OffDuration='" & runTimeCalc0 & "' OnPower='" & runZone4 & "' OffPower='" & runZoneTRP & "' pace='3' />" & vbCrLf & _  
    "<IntervalsT Repeat='2' OnDuration='" & Int(MIDistance / 2) & "' OffDuration='" & runTimeCalc1 & "' OnPower='" & runZone4 & "' OffPower='" & runZoneTRP & "' pace='3' />", _  
    runTimeCalc2)

    runTimeCalc0 = Int(4 * (runKMperMin * runZoneTRP))
    runTimeCalc1 = Int(3 * (runKMperMin * runZoneTRP))
    runTimeCalc2 = Int(10 + 2 * MIDistance / runKMperMin * runZone4)
runMSDictionary.Add "1 X 1 MILE (4'), 2 X 1/2 MILE (3') @ ZONE 4", array( _
    "<IntervalsT Repeat='1' OnDuration='" & MIDistance & "' OffDuration='" & runTimeCalc0 & "' OnPower='" & runZone4 & "' OffPower='" & runZoneTRP & "' pace='3' />" & vbCrLf & _  
    "<IntervalsT Repeat='2' OnDuration='" & Int(MIDistance / 2) & "' OffDuration='" & runTimeCalc1 & "' OnPower='" & runZone4 & "' OffPower='" & runZoneTRP & "' pace='3' />", _  
    runTimeCalc2)

    runTimeCalc0 = Int(4 * (runKMperMin * runZoneTRP))
    runTimeCalc1 = Int(3 * (4 + MIDistance / runKMperMin * runZone4))
runMSDictionary.Add "3 X 1 MILE (4') @ ZONE 4", array( _
    "<IntervalsT Repeat='3' OnDuration='" & MIDistance & "' OffDuration='" & runTimeCalc0 & "' OnPower='" & runZone4 & "' OffPower='" & runZoneTRP & "' pace='3' />", _  
    runTimeCalc1)

    runTimeCalc0 = Int(4 * (runKMperMin * runZoneTRP))
    runTimeCalc1 = Int(2 * (runKMperMin * runZoneTRP))
    runTimeCalc2 = Int(12 + 4 + 4 * MIDistance / runKMperMin * runZone4)
runMSDictionary.Add "3 X 1 MILE (4'), 2 X 1/2 MILE (2') ALL @ ZONE 4", array( _
    "<IntervalsT Repeat='3' OnDuration='" & MIDistance & "' OffDuration='" & runTimeCalc0 & "' OnPower='" & runZone4 & "' OffPower='" & runZoneTRP & "' pace='3' />" & vbCrLf & _  
    "<IntervalsT Repeat='2' OnDuration='" & Int(MIDistance / 2) & "' OffDuration='" & runTimeCalc1 & "' OnPower='" & runZone4 & "' OffPower='" & runZoneTRP & "' pace='3' />", _  
    runTimeCalc2)

    runTimeCalc0 = Int(4 * (runKMperMin * runZoneTRP))
    runTimeCalc1 = Int(2 * (runKMperMin * runZoneTRP))
    runTimeCalc2 = Int(12 + 4 + 4 * MIDistance / runKMperMin * runZone4)
runMSDictionary.Add "3 X 1 MILE (4'), 2 X 1/2 MILE (2') ALL @ ZONE 4.REMAINDER OF RUN IS HOW YOU FEEL, BUT TRY TO ACCUMULATE TIME TRP", array( _
    "<IntervalsT Repeat='3' OnDuration='" & MIDistance & "' OffDuration='" & runTimeCalc0 & "' OnPower='" & runZone4 & "' OffPower='" & runZoneTRP & "' pace='3' />" & vbCrLf & _  
    "<IntervalsT Repeat='2' OnDuration='" & Int(MIDistance / 2) & "' OffDuration='" & runTimeCalc1 & "' OnPower='" & runZone4 & "' OffPower='" & runZoneTRP & "' pace='3' />", _  
    runTimeCalc2)

    runTimeCalc0 = Int(4 * (runKMperMin * runZoneTRP))
    runTimeCalc1 = Int(4 * (4 + MIDistance / runKMperMin * runZone4))
runMSDictionary.Add "4 X 1 MILE (4') @ ZONE 4", array( _
    "<IntervalsT Repeat='3' OnDuration='" & MIDistance & "' OffDuration='" & runTimeCalc0 & "' OnPower='" & runZone4 & "' OffPower='" & runZoneTRP & "' pace='3' />", _  
    runTimeCalc1)

    runTimeCalc0 = Int(8 * (runKMperMin * runZone2))
    runTimeCalc1 = Int(2 * (runKMperMin * runZone1))
    runTimeCalc2 = Int(5 * (runKMperMin * runZone4))
    runTimeCalc3 = Int(5 * (runKMperMin * runZone1))
runMSDictionary.Add "TEMPO RUN AS 2 X (8') @ ZONE 2, 2' @ ZONE 1, 5' @ TP/ZONE 4, 5' @ ZONE 1", array( _
        "<SteadyState Duration='" & runTimeCalc0 & "' Power='" & runZone2 & "' pace='3' />" & vbCrLf & _
            "<SteadyState Duration='" & runTimeCalc1 & "' Power='" & runZone1 & "' pace='3' />" & vbCrLf & _
            "<SteadyState Duration='" & runTimeCalc2 & "' Power='" & runZone4 & "' pace='3' />" & vbCrLf & _
            "<SteadyState Duration='" & runTimeCalc3 & "' Power='" & runZone1 & "' pace='3' />" & vbCrLf & _
        "<SteadyState Duration='" & runTimeCalc0 & "' Power='" & runZone2 & "' pace='3' />" & vbCrLf & _
            "<SteadyState Duration='" & runTimeCalc1 & "' Power='" & runZone1 & "' pace='3' />" & vbCrLf & _
            "<SteadyState Duration='" & runTimeCalc2 & "' Power='" & runZone4 & "' pace='3' />" & vbCrLf & _
            "<SteadyState Duration='" & runTimeCalc3 & "' Power='" & runZone1 & "' pace='3' />", _
        40)

    runTimeCalc0 = Int(8 * (runKMperMin * runZone2))
    runTimeCalc1 = Int(2 * (runKMperMin * runZone1))
    runTimeCalc2 = Int(5 * (runKMperMin * runZone4))
    runTimeCalc3 = Int(5 * (runKMperMin * runZone1))
runMSDictionary.Add "TEMPO RUN AS 2 X (8') @ ZONE 2, 2' @ ZONE 1, 5' @ ZONE 4, 5' @ ZONE 1", array( _
        "<SteadyState Duration='" & runTimeCalc0 & "' Power='" & runZone2 & "' pace='3' />" & vbCrLf & _
            "<SteadyState Duration='" & runTimeCalc1 & "' Power='" & runZone1 & "' pace='3' />" & vbCrLf & _
            "<SteadyState Duration='" & runTimeCalc2 & "' Power='" & runZone4 & "' pace='3' />" & vbCrLf & _
            "<SteadyState Duration='" & runTimeCalc3 & "' Power='" & runZone1 & "' pace='3' />" & vbCrLf & _
        "<SteadyState Duration='" & runTimeCalc0 & "' Power='" & runZone2 & "' pace='3' />" & vbCrLf & _
            "<SteadyState Duration='" & runTimeCalc1 & "' Power='" & runZone1 & "' pace='3' />" & vbCrLf & _
            "<SteadyState Duration='" & runTimeCalc2 & "' Power='" & runZone4 & "' pace='3' />" & vbCrLf & _
            "<SteadyState Duration='" & runTimeCalc3 & "' Power='" & runZone1 & "' pace='3' />", _
        40)

    runTimeCalc0 = Int(40 * (runKMperMin * runZoneTRP))
    runTimeCalc1 = Int(20 * (runKMperMin * runZone2))
    runTimeCalc2 = Int(10 * (runKMperMin * runZone3))
runMSDictionary.Add "ENTIRE RUN: 40' TRP, 20' @ ZONE 2, 10' @ ZONE 3 FINISH", array( _
        "<SteadyState Duration='" & runTimeCalc0 & "' Power='" & runZoneTRP & "' pace='3' />" & vbCrLf & _
            "<SteadyState Duration='" & runTimeCalc1 & "' Power='" & runZone2 & "' pace='3' />" & vbCrLf & _
            "<SteadyState Duration='" & runTimeCalc2 & "' Power='" & runZone3 & "' pace='3' />", _
        70)

    runTimeCalc0 = Int(40 * (runKMperMin * runZoneTRP))
    runTimeCalc1 = Int(25 * (runKMperMin * runZone2))
    runTimeCalc2 = Int(10 * (runKMperMin * runZone3))
runMSDictionary.Add "ENTIRE RUN: 40' TRP, 25' @ ZONE 2, 10' @ ZONE 3 FINISH", array( _
        "<SteadyState Duration='" & runTimeCalc0 & "' Power='" & runZoneTRP & "' pace='3' />" & vbCrLf & _
            "<SteadyState Duration='" & runTimeCalc1 & "' Power='" & runZone2 & "' pace='3' />" & vbCrLf & _
            "<SteadyState Duration='" & runTimeCalc2 & "' Power='" & runZone3 & "' pace='3' />", _
        75)

    runTimeCalc0 = Int(40 * (runKMperMin * runZoneTRP))
    runTimeCalc1 = Int(30 * (runKMperMin * runZone2))
    runTimeCalc2 = Int(10 * (runKMperMin * runZone3))
runMSDictionary.Add "ENTIRE RUN: 40' TRP, 30' @ ZONE 2, 10' @ ZONE 3 FINISH", array( _
        "<SteadyState Duration='" & runTimeCalc0 & "' Power='" & runZoneTRP & "' pace='3' />" & vbCrLf & _
            "<SteadyState Duration='" & runTimeCalc1 & "' Power='" & runZone2 & "' pace='3' />" & vbCrLf & _
            "<SteadyState Duration='" & runTimeCalc2 & "' Power='" & runZone3 & "' pace='3' />", _
        80)

    runTimeCalc0 = Int(45 * (runKMperMin * runZoneTRP))
    runTimeCalc1 = Int(40 * (runKMperMin * runZone2))
    runTimeCalc2 = Int(5 * (runKMperMin * runZone3))
runMSDictionary.Add "ENTIRE RUN: 45' TRP, 40' @ ZONE 2, 5' @ ZONE 3 FINISH", array( _
        "<SteadyState Duration='" & runTimeCalc0 & "' Power='" & runZoneTRP & "' pace='3' />" & vbCrLf & _
            "<SteadyState Duration='" & runTimeCalc1 & "' Power='" & runZone2 & "' pace='3' />" & vbCrLf & _
            "<SteadyState Duration='" & runTimeCalc2 & "' Power='" & runZone3 & "' pace='3' />", _
        100)

    runTimeCalc0 = Int(50 * (runKMperMin * runZoneTRP))
    runTimeCalc1 = Int(15 * (runKMperMin * runZone2))
    runTimeCalc2 = Int(5 * (runKMperMin * runZone3))
runMSDictionary.Add "ENTIRE RUN: 50' TRP, 15' @ ZONE 2, 5' @ ZONE 3 FINISH", array( _
        "<SteadyState Duration='" & runTimeCalc0 & "' Power='" & runZoneTRP & "' pace='3' />" & vbCrLf & _
            "<SteadyState Duration='" & runTimeCalc1 & "' Power='" & runZone2 & "' pace='3' />" & vbCrLf & _
            "<SteadyState Duration='" & runTimeCalc2 & "' Power='" & runZone3 & "' pace='3' />", _
        70)

    runTimeCalc0 = Int(50 * (runKMperMin * runZoneTRP))
    runTimeCalc1 = Int(20 * (runKMperMin * runZone2))
    runTimeCalc2 = Int(5 * (runKMperMin * runZone3))
runMSDictionary.Add "ENTIRE RUN: 50' TRP, 20' @ ZONE 2, 5' @ ZONE 3 FINISH", array( _
        "<SteadyState Duration='" & runTimeCalc0 & "' Power='" & runZoneTRP & "' pace='3' />" & vbCrLf & _
            "<SteadyState Duration='" & runTimeCalc1 & "' Power='" & runZone2 & "' pace='3' />" & vbCrLf & _
            "<SteadyState Duration='" & runTimeCalc2 & "' Power='" & runZone3 & "' pace='3' />", _
        75)

    runTimeCalc0 = Int(50 * (runKMperMin * runZoneTRP))
    runTimeCalc1 = Int(20 * (runKMperMin * runZone2))
    runTimeCalc2 = Int(10 * (runKMperMin * runZone3))
runMSDictionary.Add "ENTIRE RUN: 50' TRP, 20' @ ZONE 2, 10' @ ZONE 3 FINISH", array( _
        "<SteadyState Duration='" & runTimeCalc0 & "' Power='" & runZoneTRP & "' pace='3' />" & vbCrLf & _
            "<SteadyState Duration='" & runTimeCalc1 & "' Power='" & runZone2 & "' pace='3' />" & vbCrLf & _
            "<SteadyState Duration='" & runTimeCalc2 & "' Power='" & runZone3 & "' pace='3' />", _
        80)

    runTimeCalc0 = Int(50 * (runKMperMin * runZoneTRP))
    runTimeCalc1 = Int(25 * (runKMperMin * runZone2))
    runTimeCalc2 = Int(10 * (runKMperMin * runZone3))
runMSDictionary.Add "ENTIRE RUN: 50' TRP, 25' @ ZONE 2, 10' @ ZONE 3 FINISH", array( _
        "<SteadyState Duration='" & runTimeCalc0 & "' Power='" & runZoneTRP & "' pace='3' />" & vbCrLf & _
            "<SteadyState Duration='" & runTimeCalc1 & "' Power='" & runZone2 & "' pace='3' />" & vbCrLf & _
            "<SteadyState Duration='" & runTimeCalc2 & "' Power='" & runZone3 & "' pace='3' />", _
        85)

    runTimeCalc0 = Int(50 * (runKMperMin * runZoneTRP))
    runTimeCalc1 = Int(30 * (runKMperMin * runZone2))
    runTimeCalc2 = Int(10 * (runKMperMin * runZone3))
runMSDictionary.Add "ENTIRE RUN: 50' TRP, 30' @ ZONE 2, 10' @ ZONE 3 FINISH", array( _
        "<SteadyState Duration='" & runTimeCalc0 & "' Power='" & runZoneTRP & "' pace='3' />" & vbCrLf & _
            "<SteadyState Duration='" & runTimeCalc1 & "' Power='" & runZone2 & "' pace='3' />" & vbCrLf & _
            "<SteadyState Duration='" & runTimeCalc2 & "' Power='" & runZone3 & "' pace='3' />", _
        90)

    runTimeCalc0 = Int(55 * (runKMperMin * runZoneTRP))
    runTimeCalc1 = Int(20 * (runKMperMin * runZone2))
    runTimeCalc2 = Int(5 * (runKMperMin * runZone3))
runMSDictionary.Add "ENTIRE RUN: 55' TRP, 20' @ ZONE 2, 5' @ ZONE 3 FINISH", array( _
        "<SteadyState Duration='" & runTimeCalc0 & "' Power='" & runZoneTRP & "' pace='3' />" & vbCrLf & _
            "<SteadyState Duration='" & runTimeCalc1 & "' Power='" & runZone2 & "' pace='3' />" & vbCrLf & _
            "<SteadyState Duration='" & runTimeCalc2 & "' Power='" & runZone3 & "' pace='3' />", _
        80)

    runTimeCalc0 = Int(60 * (runKMperMin * runZoneTRP))
    runTimeCalc1 = Int(20 * (runKMperMin * runZone2))
    runTimeCalc2 = Int(5 * (runKMperMin * runZone3))
runMSDictionary.Add "ENTIRE RUN: 60' TRP, 20' @ ZONE 2, 5' @ ZONE 3 FINISH", array( _
        "<SteadyState Duration='" & runTimeCalc0 & "' Power='" & runZoneTRP & "' pace='3' />" & vbCrLf & _
            "<SteadyState Duration='" & runTimeCalc1 & "' Power='" & runZone2 & "' pace='3' />" & vbCrLf & _
            "<SteadyState Duration='" & runTimeCalc2 & "' Power='" & runZone3 & "' pace='3' />", _
        85)

    runTimeCalc0 = Int(60 * (runKMperMin * runZoneTRP))
    runTimeCalc1 = Int(20 * (runKMperMin * runZone2))
    runTimeCalc2 = Int(10 * (runKMperMin * runZone3))
runMSDictionary.Add "ENTIRE RUN: 60' TRP, 20' @ ZONE 2, 10' @ ZONE 3 FINISH", array( _
        "<SteadyState Duration='" & runTimeCalc0 & "' Power='" & runZoneTRP & "' pace='3' />" & vbCrLf & _
            "<SteadyState Duration='" & runTimeCalc1 & "' Power='" & runZone2 & "' pace='3' />" & vbCrLf & _
            "<SteadyState Duration='" & runTimeCalc2 & "' Power='" & runZone3 & "' pace='3' />", _
        90)

    runTimeCalc0 = Int(60 * (runKMperMin * runZoneTRP))
    runTimeCalc1 = Int(25 * (runKMperMin * runZone2))
    runTimeCalc2 = Int(5 * (runKMperMin * runZone3))
runMSDictionary.Add "ENTIRE RUN: 60' TRP, 25' @ ZONE 2, 5' @ ZONE 3 FINISH", array( _
        "<SteadyState Duration='" & runTimeCalc0 & "' Power='" & runZoneTRP & "' pace='3' />" & vbCrLf & _
            "<SteadyState Duration='" & runTimeCalc1 & "' Power='" & runZone2 & "' pace='3' />" & vbCrLf & _
            "<SteadyState Duration='" & runTimeCalc2 & "' Power='" & runZone3 & "' pace='3' />", _
        90)

    runTimeCalc0 = Int(60 * (runKMperMin * runZoneTRP))
    runTimeCalc1 = Int(25 * (runKMperMin * runZone2))
    runTimeCalc2 = Int(10 * (runKMperMin * runZone3))
runMSDictionary.Add "ENTIRE RUN: 60' TRP, 25' @ ZONE 2, 10' @ ZONE 3 FINISH", array( _
        "<SteadyState Duration='" & runTimeCalc0 & "' Power='" & runZoneTRP & "' pace='3' />" & vbCrLf & _
            "<SteadyState Duration='" & runTimeCalc1 & "' Power='" & runZone2 & "' pace='3' />" & vbCrLf & _
            "<SteadyState Duration='" & runTimeCalc2 & "' Power='" & runZone3 & "' pace='3' />", _
        95)

    runTimeCalc0 = Int(60 * (runKMperMin * runZoneTRP))
    runTimeCalc1 = Int(35 * (runKMperMin * runZone2))
    runTimeCalc2 = Int(5 * (runKMperMin * runZone3))
runMSDictionary.Add "ENTIRE RUN: 60' TRP, 35' @ ZONE 2, 5' @ ZONE 3 FINISH", array( _
        "<SteadyState Duration='" & runTimeCalc0 & "' Power='" & runZoneTRP & "' pace='3' />" & vbCrLf & _
            "<SteadyState Duration='" & runTimeCalc1 & "' Power='" & runZone2 & "' pace='3' />" & vbCrLf & _
            "<SteadyState Duration='" & runTimeCalc2 & "' Power='" & runZone3 & "' pace='3' />", _
        100)

    runTimeCalc0 = Int(30 * (runKMperMin * runZoneTRP))
runMSDictionary.Add "RUN NO MORE THAN THE 30 MINUTES LISTED AS YOU HAVE A LONGER RUN TOMORROW", array( _
        "<SteadyState Duration='" & runTimeCalc0 & "' Power='" & runZoneTRP & "' pace='3' />", _
        30)

runMSDictionary.Add "RUN AS EASY JOG @ EP/Z1/EASY TO STAY LOOSE", array(runZone1, -1, "")
runMSDictionary.Add "RUN @ TRP EFFORT", array(runZoneTRP, -1, "")
runMSDictionary.Add "RUN @ ZONE 2 OUT AND BACK", array(runZone2, -1, "")
runMSDictionary.Add "RUN, AS MRP/Z2/STEADY OUT, HMP/Z3/MOD-HARD BACK", array(runZone2, -1, "")
runMSDictionary.Add "RUN AS MRP/Z2/STEADY OUT, HMP/Z3/MOD-HARD BACK", array(runZone2, -1, "")
runMSDictionary.Add "RUN AS HMP/Z3/MOD-HARD OUT, MRP/Z2/STEADY BACK", array(runZone3, -1, "")
runMSDictionary.Add "RUN AS HMP/Z3/MOD-HARD OUT AND BACK", array(runZone3, -1, "")
runMSDictionary.Add "RUN, AS HMP/Z3/MOD-HARD OUT AND BACK", array(runZone3, -1, "")
runMSDictionary.Add "REMAINDER OF RUN IS HOW YOU FEEL, BUT TRY TO ACCUMULATE TIME TRP", array(runZoneTRP, -1, "")
runMSDictionary.Add "RUN @ TRP FOR FULL DURATION; NEGATIVE SPLIT @ ZONE 2 EFFORT IF YOU FEEL GOOD", array(runZoneTRP, -1, "")
runMSDictionary.Add "RUN @ ZONE 2 EFFORT, PICK UP THE PACE IN THE LAST MILE IF YOU FEEL GOOD", array(runZone2, -1, "")
runMSDictionary.Add "RUN @ ZONE 2 OUT, ZONE 3 BACK", array(runZone2, -3, "")
Function getMSRun(zone, duration)
    runTimeCalc0 = Int(duration * (runKMperMin * zone))
    getMSRun = "<SteadyState Duration='" & runTimeCalc0 & "' Power='" & zone & "' pace='3' />"
 End Function





    runTimeCalc0 = Int(4 * (runKMperMin * runZone1))
    runTimeCalc1 = Int(1 * (4 + MIDistance / runKMperMin * runZone4))
runMSDictionary.Add "1 MILE @ TP/Z4/HARD WITH 4' RECOVERY IN EP/Z1/EASY", array( _
    "<IntervalsT Repeat='1' OnDuration='" & MIDistance & "' OffDuration='" & runTimeCalc0 & "' OnPower='" & runZone4 & "' OffPower='" & runZone1& "' pace='3' />", _  
    runTimeCalc1)

    runTimeCalc0 = Int(4 * (runKMperMin * runZone1))
    runTimeCalc1 = Int(1 * (4 + 5 * MIDistance / runKMperMin * runZone4))
runMSDictionary.Add "5 MILE (4') @ TP/Z4/HARD", array( _
    "<IntervalsT Repeat='1' OnDuration='" & 5 * MIDistance & "' OffDuration='" & runTimeCalc0 & "' OnPower='" & runZone4 & "' OffPower='" & runZone1& "' pace='3' />", _  
    runTimeCalc1)

    runTimeCalc0 = Int(5 * (runKMperMin * runZone1))
    runTimeCalc1 = Int(1 * (5 + 5 * MIDistance / runKMperMin * runZone4))
runMSDictionary.Add "5 MILE @ TP/Z4/HARD WITH 5' RECOVERIES IN EP/Z1/EASY", array( _
    "<IntervalsT Repeat='1' OnDuration='" & 5 * MIDistance & "' OffDuration='" & runTimeCalc0 & "' OnPower='" & runZone4 & "' OffPower='" & runZone1& "' pace='3' />", _  
    runTimeCalc1)

    runTimeCalc0 = Int(2 * (runKMperMin * runZone1))
    runTimeCalc1 = Int(2 * (2 + MIDistance / runKMperMin * runZone4))
runMSDictionary.Add "2 X 1 MILE (2') @ TP/Z4/HARD", array( _
    "<IntervalsT Repeat='2' OnDuration='" & MIDistance & "' OffDuration='" & runTimeCalc0 & "' OnPower='" & runZone4 & "' OffPower='" & runZone1& "' pace='3' />", _  
    runTimeCalc1)

    runTimeCalc0 = Int(2 * (runKMperMin * runZone1))
    runTimeCalc1 = Int(2 * (2 + MIDistance / runKMperMin * runZone4))
runMSDictionary.Add "2 X 1", array( _
    "<IntervalsT Repeat='2' OnDuration='" & MIDistance & "' OffDuration='" & runTimeCalc0 & "' OnPower='" & runZone4 & "' OffPower='" & runZone1& "' pace='3' />", _  
    runTimeCalc1)

    runTimeCalc0 = Int(4 * (runKMperMin * runZone1))
    runTimeCalc1 = Int(2 * (4 + MIDistance / runKMperMin * runZone4))
runMSDictionary.Add "2 X 1 MILE @ TP/Z4/HARD WITH 4' RECOVERIES IN EP/Z1/EASY", array( _
    "<IntervalsT Repeat='2' OnDuration='" & MIDistance & "' OffDuration='" & runTimeCalc0 & "' OnPower='" & runZone4 & "' OffPower='" & runZone1& "' pace='3' />", _  
    runTimeCalc1)

    runTimeCalc0 = Int(5 * (runKMperMin * runZone1))
    runTimeCalc1 = Int(3 * (5 + MIDistance / runKMperMin * runZone4))
runMSDictionary.Add "3 X 1 MILE (5') @ TP/Z4/HARD", array( _
    "<IntervalsT Repeat='3' OnDuration='" & MIDistance & "' OffDuration='" & runTimeCalc0 & "' OnPower='" & runZone4 & "' OffPower='" & runZone1& "' pace='3' />", _  
    runTimeCalc1)

    runTimeCalc0 = Int(4 * (runKMperMin * runZone1))
    runTimeCalc1 = Int(3 * (4 + MIDistance / runKMperMin * runZone4))
runMSDictionary.Add "3 X 1 MILES @ TP/Z4/HARD (4')", array( _
    "<IntervalsT Repeat='3' OnDuration='" & MIDistance & "' OffDuration='" & runTimeCalc0 & "' OnPower='" & runZone4 & "' OffPower='" & runZone1& "' pace='3' />", _  
    runTimeCalc1)

    runTimeCalc0 = Int(5 * (runKMperMin * runZone1))
    runTimeCalc1 = Int(3 * (5 + MIDistance / runKMperMin * runZone4))
runMSDictionary.Add "3 X 1 MILE (5') @ 5K TEST PACE WITH FULL RECOVERIES BETWEEN EACH", array( _
    "<IntervalsT Repeat='3' OnDuration='" & MIDistance & "' OffDuration='" & runTimeCalc0 & "' OnPower='" & runZone4 & "' OffPower='" & runZone1 & "' pace='3' />", _  
    runTimeCalc1)

    runTimeCalc0 = Int(3 * (runKMperMin * runZone1))
    runTimeCalc1 = Int(3 * (3 + 1000 / runKMperMin * runZone5))
runMSDictionary.Add "3 X 1000 ALL @ IP/Z5/VERY HARD WITH FULL RECOVERIES BETWEEN EACH", array( _
    "<IntervalsT Repeat='3' OnDuration='1000' OffDuration='" & runTimeCalc0 & "' OnPower='" & runZone5 & "' OffPower='" & runZone1 & "' pace='3' />", _  
    runTimeCalc1)

    runTimeCalc0 = Int(2 * (runKMperMin * runZone1))
    runTimeCalc1 = Int(3 * (2 + 800 / runKMperMin * runZone5))
runMSDictionary.Add "THEN 3 X 800 ALL @ IP/Z5/VERY HARD WITH FULL RECOVERIES BETWEEN EACH", array( _
    "<IntervalsT Repeat='3' OnDuration='800' OffDuration='" & runTimeCalc0 & "' OnPower='" & runZone5 & "' OffPower='" & runZone1 & "' pace='3' />", _  
    runTimeCalc1)

    runTimeCalc0 = Int(2 * (runKMperMin * runZone1))
    runTimeCalc1 = Int(3 * (2 + 1000 / runKMperMin * runZone5))
runMSDictionary.Add "THEN 3 X 1000 ALL AT IP/Z5/VERY HARD WITH FULL RECOVERIES BETWEEN EACH", array( _
    "<IntervalsT Repeat='3' OnDuration='1000' OffDuration='" & runTimeCalc0 & "' OnPower='" & runZone5 & "' OffPower='" & runZone1 & "' pace='3' />", _  
    runTimeCalc1)

    runTimeCalc0 = Int(2 * (runKMperMin * runZone1))
    runTimeCalc1 = Int(4 * (2 + 800 / runKMperMin * runZone5))
runMSDictionary.Add "4 X 800 (2') ALL @ IP/Z5/VERY HARD", array( _
    "<IntervalsT Repeat='4' OnDuration='800' OffDuration='" & runTimeCalc0 & "' OnPower='" & runZone5 & "' OffPower='" & runZone1 & "' pace='3' />", _  
    runTimeCalc1)

    runTimeCalc0 = Int(2 * (runKMperMin * runZone1))
    runTimeCalc1 = Int(4 * (2 + 400 / runKMperMin * runZone5))
runMSDictionary.Add "THEN 4 X 400 ALL @ IP/Z5/VERY HARD WITH FULL RECOVERIES BETWEEN EACH", array( _
    "<IntervalsT Repeat='4' OnDuration='400' OffDuration='" & runTimeCalc0 & "' OnPower='" & runZone5 & "' OffPower='" & runZone1 & "' pace='3' />", _  
    runTimeCalc1)


    runTimeCalc0 = Int(3 * (runKMperMin * runZone1))
    runTimeCalc1 = (60 - Int(3 * (3 + 1200 / runKMperMin * runZone5))) * runZone3
runMSDictionary.Add "3 X 1200 ALL @ IP/Z5/VERY HARD (3') REMAINDER OF RUN IS HOW YOU FEEL, BUT TRY TO ACCUMULATE MORE HMP/Z3/MOD-HARD TIME", array( _
    "<IntervalsT Repeat='3' OnDuration='1200' OffDuration='" & runTimeCalc0 & "' OnPower='" & runZone5 & "' OffPower='" & runZone1 & "' pace='3' />"  & vbCrLf & _
    "<SteadyState Duration='" & runTimeCalc1 & "' Power='" & runZone3 & "' pace='3' />", _  
    60)

    runTimeCalc0 = Int(3 * (MIDistance / runKMperMin * (runZone4 + runZone1)))
runMSDictionary.Add "3 X 1 MILE @ TP/Z4/HARD WITH 1 MILE @ EP/Z1/EASY IN BETWEEN EACH", array( _
    "<IntervalsT Repeat='3' OnDuration='" & MIDistance & "' OffDuration='" & MIDistance & "' OnPower='" & runZone4 & "' OffPower='" & runZone1 & "' pace='3' />", _  
    runTimeCalc0)

    runTimeCalc0 = Int(3 * (MIDistance / runKMperMin * (runZone4 + runZone1)))
runMSDictionary.Add "3 X 1 MILE @ TP/Z4/HARD WITH 1/2 MILE @ EP/Z1/EASY IN BETWEEN EACH", array( _
    "<IntervalsT Repeat='3' OnDuration='" & MIDistance & "' OffDuration='" & MIDistance * .5 & "' OnPower='" & runZone4 & "' OffPower='" & runZone1 & "' pace='3' />", _  
    runTimeCalc0)

    runTimeCalc0 = Int(2 * (runKMperMin * runZone1))
    runTimeCalc1 = Int(2 * 8 + (400 + 1200 + 600) / runKMperMin * runZone5)
runMSDictionary.Add "2 X 200, 3 X 400, 3 X 200, ALL @ IP/Z5/VERY HARD WITH FULL RECOVERIES BETWEEN EACH", array( _
    "<IntervalsT Repeat='2' OnDuration='200' OffDuration='" & runTimeCalc0 & "' OnPower='" & runZone5 & "' OffPower='" & runZone1 & "' pace='3' />" & vbCrLf & _  
    "<IntervalsT Repeat='3' OnDuration='400' OffDuration='" & runTimeCalc0 & "' OnPower='" & runZone5 & "' OffPower='" & runZone1 & "' pace='3' />" & vbCrLf & _  
    "<IntervalsT Repeat='3' OnDuration='200' OffDuration='" & runTimeCalc0 & "' OnPower='" & runZone5 & "' OffPower='" & runZone1 & "' pace='3' />" & vbCrLf, _
    runTimeCalc1)

    runTimeCalc0 = Int(2 * (runKMperMin * runZone1))
    runTimeCalc1 = Int(2 * 7 + (400 + 3000 + 600) / runKMperMin * runZone5)
runMSDictionary.Add "2 X 200, 3 X 1000, 2 X 200 ALL AT IP/Z5/VERY HARD WITH FULL RECOVERIES BETWEEN EACH", array( _
    "<IntervalsT Repeat='2' OnDuration='200' OffDuration='" & runTimeCalc0 & "' OnPower='" & runZone5 & "' OffPower='" & runZone1 & "' pace='3' />" & vbCrLf & _  
    "<IntervalsT Repeat='3' OnDuration='1000' OffDuration='" & runTimeCalc0 & "' OnPower='" & runZone5 & "' OffPower='" & runZone1 & "' pace='3' />" & vbCrLf & _  
    "<IntervalsT Repeat='2' OnDuration='200' OffDuration='" & runTimeCalc0 & "' OnPower='" & runZone5 & "' OffPower='" & runZone1 & "' pace='3' />" & vbCrLf, _
    runTimeCalc1)

    runTimeCalc0 = Int(2 * (runKMperMin * runZone1))
    runTimeCalc1 = Int(2 * 9 + 3 * (1200 + 400 + 200) / runKMperMin * runZone5)
runMSDictionary.Add "3 X (1 X 1200, 1 X 400, 1 X 200) ALL @ IP/Z5/VERY HARD WITH FULL RECOVERIES BETWEEN EACH", array( _
    "<IntervalsT Repeat='1' OnDuration='1200' OffDuration='" & runTimeCalc0 & "' OnPower='" & runZone5 & "' OffPower='" & runZone1 & "' pace='3' />" & vbCrLf & _  
        "<IntervalsT Repeat='1' OnDuration='400' OffDuration='" & runTimeCalc0 & "' OnPower='" & runZone5 & "' OffPower='" & runZone1 & "' pace='3' />" & vbCrLf & _  
        "<IntervalsT Repeat='1' OnDuration='200' OffDuration='" & runTimeCalc0 & "' OnPower='" & runZone5 & "' OffPower='" & runZone1 & "' pace='3' />" & vbCrLf & _
    "<IntervalsT Repeat='1' OnDuration='1200' OffDuration='" & runTimeCalc0 & "' OnPower='" & runZone5 & "' OffPower='" & runZone1 & "' pace='3' />" & vbCrLf & _  
        "<IntervalsT Repeat='1' OnDuration='400' OffDuration='" & runTimeCalc0 & "' OnPower='" & runZone5 & "' OffPower='" & runZone1 & "' pace='3' />" & vbCrLf & _  
        "<IntervalsT Repeat='1' OnDuration='200' OffDuration='" & runTimeCalc0 & "' OnPower='" & runZone5 & "' OffPower='" & runZone1 & "' pace='3' />" & vbCrLf & _
    "<IntervalsT Repeat='1' OnDuration='1200' OffDuration='" & runTimeCalc0 & "' OnPower='" & runZone5 & "' OffPower='" & runZone1 & "' pace='3' />" & vbCrLf & _  
        "<IntervalsT Repeat='1' OnDuration='400' OffDuration='" & runTimeCalc0 & "' OnPower='" & runZone5 & "' OffPower='" & runZone1 & "' pace='3' />" & vbCrLf & _  
        "<IntervalsT Repeat='1' OnDuration='200' OffDuration='" & runTimeCalc0 & "' OnPower='" & runZone5 & "' OffPower='" & runZone1 & "' pace='3' />" & vbCrLf, _
    runTimeCalc1)

    runTimeCalc0 = Int(2 * (runKMperMin * runZone1))
    runTimeCalc1 = Int(12 * 2 + 3 * (800 + 1600 + 800 + 800) / runKMperMin * runZone5)
runMSDictionary.Add "4 X 200, 2 X 800, 4 X 200, 2 X 400 ALL @ IP/Z5/VERY HARD WITH FULL RECOVERIES BETWEEN EACH", array( _
    "<IntervalsT Repeat='4' OnDuration='200' OffDuration='" & runTimeCalc0 & "' OnPower='" & runZone5 & "' OffPower='" & runZone1 & "' pace='3' />" & vbCrLf & _  
    "<IntervalsT Repeat='2' OnDuration='800' OffDuration='" & runTimeCalc0 & "' OnPower='" & runZone5 & "' OffPower='" & runZone1 & "' pace='3' />" & vbCrLf & _  
    "<IntervalsT Repeat='4' OnDuration='200' OffDuration='" & runTimeCalc0 & "' OnPower='" & runZone5 & "' OffPower='" & runZone1 & "' pace='3' />" & vbCrLf & _
    "<IntervalsT Repeat='2' OnDuration='400' OffDuration='" & runTimeCalc0 & "' OnPower='" & runZone5 & "' OffPower='" & runZone1 & "' pace='3' />" & vbCrLf, _
    runTimeCalc1)

    runTimeCalc0 = Int(2 * (runKMperMin * runZone1))
    runTimeCalc1 = Int(2 * 4 + 1000 / runKMperMin * runZone5 + MIDistance * 0.75 / runKMperMin * runZone4)
runMSDictionary.Add "2 X 1000 ALL @ IP/Z5/VERY HARD WITH FULL RECOVERIES BETWEEN EACH, THEN 2 X 3/4 MILE (2') @ TP/Z4/HARD", array( _
    "<IntervalsT Repeat='2' OnDuration='1000' OffDuration='" & runTimeCalc0 & "' OnPower='" & runZone5 & "' OffPower='" & runZone1 & "' pace='3' />" & vbCrLf & _  
    "<IntervalsT Repeat='2' OnDuration='" & MIDistance * 0.75 & "' OffDuration='" & runTimeCalc0 & "' OnPower='" & runZone4 & "' OffPower='" & runZone1 & "' pace='3' />", _
    runTimeCalc1)

    runTimeCalc0 = Int(2 * (runKMperMin * runZone1))
    runTimeCalc1 = Int(2 * 3 + 3 * 800 / runKMperMin * runZone5 + MIDistance / runKMperMin * runZone4)
runMSDictionary.Add "3 X 800 ALL @ IP/Z5/VERY HARD WITH FULL RECOVERIES BETWEEN EACH, THEN 1 MILE @ TP/Z4/HARD", array( _
    "<IntervalsT Repeat='3' OnDuration='800' OffDuration='" & runTimeCalc0 & "' OnPower='" & runZone5 & "' OffPower='" & runZone1 & "' pace='3' />" & vbCrLf & _  
    "<SteadyState Duration='" & MIDistance & "' Power='" & runZone4 & "' pace='3' />", _  
    runTimeCalc1)

    runTimeCalc0 = Int(4 * (runKMperMin * runZone1))
    runTimeCalc1 = Int(4 * 5 + 3 * 1000 / runKMperMin * runZone5  + 2 * MIDistance / runKMperMin * runZone4)
runMSDictionary.Add "3 X 1000 ALL @ IP/Z5/VERY HARD WITH FULL RECOVERIES BETWEEN EACH, THEN 2 X 1 MILE (4') @ TP/Z4/HARD", array( _
    "<IntervalsT Repeat='3' OnDuration='1000' OffDuration='" & runTimeCalc0 & "' OnPower='" & runZone5 & "' OffPower='" & runZone1 & "' pace='3' />" & vbCrLf & _  
    "<IntervalsT Repeat='2' OnDuration='" & MIDistance & "' OffDuration='" & runTimeCalc0 & "' OnPower='" & runZone4 & "' OffPower='" & runZone1 & "' pace='3' />", _
    runTimeCalc1)

    runTimeCalc0 = Int(2 * (runKMperMin * runZone1))
    runTimeCalc1 = Int(4 * (runKMperMin * runZone1))
    runTimeCalc2 = Int(8 * 2 + 4 * 2 + 8 * 800 / runKMperMin * runZone5 + 2 * MIDistance / runKMperMin * runZone4)
runMSDictionary.Add "4 X 800 ALL @ IP/Z5/VERY HARD WITH FULL RECOVERIES BETWEEN EACH, THEN 2 X 1 MILE (4') @ TP/Z4/HARD", array( _
    "<IntervalsT Repeat='8' OnDuration='800' OffDuration='" & runTimeCalc0 & "' OnPower='" & runZone5 & "' OffPower='" & runZone1 & "' pace='3' />" & vbCrLf & _  
    "<IntervalsT Repeat='2' OnDuration='" & MIDistance & "' OffDuration='" & runTimeCalc1 & "' OnPower='" & runZone4 & "' OffPower='" & runZone1 & "' pace='3' />", _
    runTimeCalc2)

    runTimeCalc0 = Int(20 * runKMperMin * runZoneTRP)
    runTimeCalc1 = Int(2 * runKMperMin * runZone1)
    runTimeCalc2 = Int(2 * (runTimeCalc0 + runTimeCalc1))
runMSDictionary.Add "2 X 20' (2') @ STR PACE", array( _
    "<IntervalsT Repeat='2' OnDuration='" & runTimeCalc0 & "' OffDuration='" & runTimeCalc1 & "' OnPower='" & runZoneTRP & "' OffPower='" & runZone1 & "' pace='3' />", _
    51)

    runTimeCalc0 = Int(15 * runKMperMin * runZoneTRP)
    runTimeCalc1 = Int(2 * runKMperMin * runZone1)
    runTimeCalc2 = Int(3 * (runTimeCalc0 + runTimeCalc1))
runMSDictionary.Add "3 X 15 (2') @ STR PACE", array( _
    "<IntervalsT Repeat='3' OnDuration='" & runTimeCalc0 & "' OffDuration='" & runTimeCalc1 & "' OnPower='" & runZoneTRP & "' OffPower='" & runZone1 & "' pace='3' />", _
    51)

    runTimeCalc0 = Int(2 * runKMperMin * runZone2)
    runTimeCalc1 = Int(1 * runKMperMin * runZone1)
    runTimeCalc2 = Int(3 * (runTimeCalc0 + runTimeCalc1))
runMSDictionary.Add "3 X 2' (1') @ ZONE 2", array( _
    "<IntervalsT Repeat='3' OnDuration='" & runTimeCalc0 & "' OffDuration='" & runTimeCalc1 & "' OnPower='" & runZone2 & "' OffPower='" & runZone1 & "' pace='3' />", _
    9)

    runTimeCalc0 = Int(3 * runKMperMin * runZone2)
    runTimeCalc1 = Int(1 * runKMperMin * runZone1)
    runTimeCalc2 = Int(3 * (runTimeCalc0 + runTimeCalc1))
runMSDictionary.Add "3 X 3' (1') @ ZONE 2", array( _
    "<IntervalsT Repeat='3' OnDuration='" & runTimeCalc0 & "' OffDuration='" & runTimeCalc1 & "' OnPower='" & runZone2 & "' OffPower='" & runZone1 & "' pace='3' />", _
    12)

    runTimeCalc0 = Int(6 * runKMperMin * runSPD)
    runTimeCalc1 = Int(3 * runKMperMin * runZone1)
    runTimeCalc2 = Int(4 * (runTimeCalc0 + runTimeCalc1))
runMSDictionary.Add "4 X 6' (3') @ SPD PACE", array( _
    "<IntervalsT Repeat='5' OnDuration='" & runTimeCalc0 & "' OffDuration='" & runTimeCalc1 & "' OnPower='" & runSPD & "' OffPower='" & runZone1 & "' pace='3' />", _
    36)

    runTimeCalc0 = Int(5 * runKMperMin * runSPD)
    runTimeCalc1 = Int(3 * runKMperMin * runZone1)
    runTimeCalc2 = Int(5 * (runTimeCalc0 + runTimeCalc1))
runMSDictionary.Add "5 X 5' (3') @ SPD PACE", array( _
    "<IntervalsT Repeat='5' OnDuration='" & runTimeCalc0 & "' OffDuration='" & runTimeCalc1 & "' OnPower='" & runSPD & "' OffPower='" & runZone1 & "' pace='3' />", _
    40)

    runTimeCalc0 = Int(4 * runKMperMin * runSPD)
    runTimeCalc1 = Int(3 * runKMperMin * runZone1)
    runTimeCalc2 = Int(6 * (runTimeCalc0 + runTimeCalc1))
runMSDictionary.Add "6 X 4' (3') @ SPD PACE", array( _
    "<IntervalsT Repeat='5' OnDuration='" & runTimeCalc0 & "' OffDuration='" & runTimeCalc1 & "' OnPower='" & runSPD & "' OffPower='" & runZone1 & "' pace='3' />", _
    42)

    runTimeCalc0 = Int(3 * runKMperMin * runSPD)
    runTimeCalc1 = Int(2 * runKMperMin * runZone1)
    runTimeCalc2 = Int(8 * (runTimeCalc0 + runTimeCalc1))
runMSDictionary.Add "8 X 3' (2') @ SPD PACE", array( _
    "<IntervalsT Repeat='8' OnDuration='" & runTimeCalc0 & "' OffDuration='" & runTimeCalc1 & "' OnPower='" & runSPD & "' OffPower='" & runZone1 & "' pace='3' />", _
    40)

    runTimeCalc0 = Int(2 * runKMperMin * runSPD)
    runTimeCalc1 = Int(2 * runKMperMin * runZone1)
    runTimeCalc2 = Int(12 * (runTimeCalc0 + runTimeCalc1))
runMSDictionary.Add "12 X 2' (2') @ SPD PACE", array( _
    "<IntervalsT Repeat='12' OnDuration='" & runTimeCalc0 & "' OffDuration='" & runTimeCalc1 & "' OnPower='" & runSPD & "' OffPower='" & runZone1 & "' pace='3' />", _
    48)

'*****



If IsEmpty(casesLocation) Then
    Wscript.Echo runMSDictionary("3 X 3' (1') @ ZONE 2")(0)
End If

