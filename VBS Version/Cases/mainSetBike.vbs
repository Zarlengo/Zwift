If IsEmpty(casesLocation) Then
        bikeZone0 = 0.25
        bikeZone1 = 0.65
        bikeZone2 = 0.72
        bikeZone3 = 0.82
        bikeZone4 = 1.00
        bikeZone5 = 1.15
 End If

Dim bikeMSDictionary : Set bikeMSDictionary = CreateObject("Scripting.Dictionary")
bikeMSDictionary.CompareMode = vbTextCompare
'bikeMSDictionary.Add "", array("Great", 10)

bikeMSDictionary.Add "RACE REHEARSAL BRICK SET UP TRANSITION AT CAR/HOUSE, IF POSSIBLE", array( _
        "<SteadyState Duration='900' Power='" & bikeZone3 & "'/>" & vbCrLf & _
        "<SteadyState Duration='2700' Power='" & bikeZone4 & "'/>" & vbCrLf, _
        60)


bikeMSDictionary.Add "SPEND AS MUCH TIME @ ZONE 3 AS POSSIBLE", array(bikeZone3, -1, "")
bikeMSDictionary.Add "REMAINDER OF AVAILABLE RIDE TIME AT ZONE 3", array(bikeZone3, -1, "")
bikeMSDictionary.Add "REMAINDER OF RIDE TIME IS @ZONE 2", array(bikeZone2, -1, "")
Function getMSBike(zone, duration)
 getMSBike = "<SteadyState Duration='" & duration * 60 & "' Power='" & zone & "'/>"
 End Function


bikeMSDictionary.Add "BIKE TEST, FOR POWER ATHLETES ONLY!", array( _
        "<Warmup Duration='540' PowerLow='" & bikeZone0 & "' PowerHigh='" & bikeZone3 & "'/>" & vbCrLf & _
        "<IntervalsT Repeat='3' OnDuration='60' OffDuration='60' OnPower='" & bikeZone4 & "' OffPower='" & bikeZone0 & "'/>" & vbCrLf & _
        "<SteadyState Duration='300' Power='" & bikeZone1 & "'/>" & vbCrLf & _
        "<MaxEffort Duration='300''/>" & vbCrLf & _
        "<SteadyState Duration='600' Power='" & bikeZone1 & "'/>" & vbCrLf & _
        "<FreeRide FTPTest='1' Duration='1200''/>" & vbCrLf & _
        "<Cooldown Duration='600' PowerLow='" & bikeZone2 & "' PowerHigh='" & bikeZone0 & "'/>", _
        -2)

bikeMSDictionary.Add "2 X (2' @ ZONE 5, THEN 1' @ ZONE 2, THEN 5' @ 95-100%/ZONE 4, THEN 10' @ ZONE 2)", array( _
        "<SteadyState Duration='120' Power='" & bikeZone5 & "'/>" & vbCrLf & _
            "<SteadyState Duration='60' Power='" & bikeZone2 & "'/>" & vbCrLf & _
            "<SteadyState Duration='300' Power='" & bikeZone4 & "'/>" & vbCrLf & _
            "<SteadyState Duration='600' Power='" & bikeZone2 & "'/>" & vbCrLf & _
        "<SteadyState Duration='120' Power='" & bikeZone5 & "'/>" & vbCrLf & _
            "<SteadyState Duration='60' Power='" & bikeZone2 & "'/>" & vbCrLf & _
            "<SteadyState Duration='300' Power='" & bikeZone4 & "'/>" & vbCrLf & _
            "<SteadyState Duration='600' Power='" & bikeZone2 & "'/>", _
        36)

bikeMSDictionary.Add "3 X (2' @ ZONE 5, THEN 1' @ ZONE 2, THEN 5' @ 95-100%/ZONE 4, THEN 10' @ ZONE 2)", array( _
        "<SteadyState Duration='120' Power='" & bikeZone5 & "'/>" & vbCrLf & _
            "<SteadyState Duration='60' Power='" & bikeZone2 & "'/>" & vbCrLf & _
            "<SteadyState Duration='300' Power='" & bikeZone4 & "'/>" & vbCrLf & _
            "<SteadyState Duration='600' Power='" & bikeZone2 & "'/>" & vbCrLf & _
        "<SteadyState Duration='120' Power='" & bikeZone5 & "'/>" & vbCrLf & _
            "<SteadyState Duration='60' Power='" & bikeZone2 & "'/>" & vbCrLf & _
            "<SteadyState Duration='300' Power='" & bikeZone4 & "'/>" & vbCrLf & _
            "<SteadyState Duration='600' Power='" & bikeZone2 & "'/>" & vbCrLf & _
        "<SteadyState Duration='120' Power='" & bikeZone5 & "'/>" & vbCrLf & _
            "<SteadyState Duration='60' Power='" & bikeZone2 & "'/>" & vbCrLf & _
            "<SteadyState Duration='300' Power='" & bikeZone4 & "'/>" & vbCrLf & _
            "<SteadyState Duration='600' Power='" & bikeZone2 & "'/>", _
        54)

bikeMSDictionary.Add "3 X (2' @ ZONE 5, THEN 1' @ ZONE 2, THEN 5' @ ZONE 4, THEN 10' @ ZONE 2)", array( _
        "<SteadyState Duration='120' Power='" & bikeZone5 & "'/>" & vbCrLf & _
            "<SteadyState Duration='60' Power='" & bikeZone2 & "'/>" & vbCrLf & _
            "<SteadyState Duration='300' Power='" & bikeZone4 & "'/>" & vbCrLf & _
            "<SteadyState Duration='600' Power='" & bikeZone2 & "'/>" & vbCrLf & _
        "<SteadyState Duration='120' Power='" & bikeZone5 & "'/>" & vbCrLf & _
            "<SteadyState Duration='60' Power='" & bikeZone2 & "'/>" & vbCrLf & _
            "<SteadyState Duration='300' Power='" & bikeZone4 & "'/>" & vbCrLf & _
            "<SteadyState Duration='600' Power='" & bikeZone2 & "'/>" & vbCrLf & _
        "<SteadyState Duration='120' Power='" & bikeZone5 & "'/>" & vbCrLf & _
            "<SteadyState Duration='60' Power='" & bikeZone2 & "'/>" & vbCrLf & _
            "<SteadyState Duration='300' Power='" & bikeZone4 & "'/>" & vbCrLf & _
            "<SteadyState Duration='600' Power='" & bikeZone2 & "'/>", _
        54)

bikeMSDictionary.Add "4 X (2' @ ZONE 5, THEN 1' @ ZONE 2, THEN 5' @ 95-100%/ZONE 4, THEN 10' @ ZONE 2)", array( _
        "<SteadyState Duration='120' Power='" & bikeZone5 & "'/>" & vbCrLf & _
            "<SteadyState Duration='60' Power='" & bikeZone2 & "'/>" & vbCrLf & _
            "<SteadyState Duration='300' Power='" & bikeZone4 & "'/>" & vbCrLf & _
            "<SteadyState Duration='600' Power='" & bikeZone2 & "'/>" & vbCrLf & _
        "<SteadyState Duration='120' Power='" & bikeZone5 & "'/>" & vbCrLf & _
            "<SteadyState Duration='60' Power='" & bikeZone2 & "'/>" & vbCrLf & _
            "<SteadyState Duration='300' Power='" & bikeZone4 & "'/>" & vbCrLf & _
            "<SteadyState Duration='600' Power='" & bikeZone2 & "'/>" & vbCrLf & _
        "<SteadyState Duration='120' Power='" & bikeZone5 & "'/>" & vbCrLf & _
            "<SteadyState Duration='60' Power='" & bikeZone2 & "'/>" & vbCrLf & _
            "<SteadyState Duration='300' Power='" & bikeZone4 & "'/>" & vbCrLf & _
            "<SteadyState Duration='600' Power='" & bikeZone2 & "'/>" & vbCrLf & _
        "<SteadyState Duration='120' Power='" & bikeZone5 & "'/>" & vbCrLf & _
            "<SteadyState Duration='60' Power='" & bikeZone2 & "'/>" & vbCrLf & _
            "<SteadyState Duration='300' Power='" & bikeZone4 & "'/>" & vbCrLf & _
            "<SteadyState Duration='600' Power='" & bikeZone2 & "'/>", _
        72)

bikeMSDictionary.Add "4 X (2' @ ZONE 5, THEN 1' @ ZONE 2, THEN 5' @ ZONE 4, THEN 10' @ ZONE 2)", array( _
        "<SteadyState Duration='120' Power='" & bikeZone5 & "'/>" & vbCrLf & _
            "<SteadyState Duration='60' Power='" & bikeZone2 & "'/>" & vbCrLf & _
            "<SteadyState Duration='300' Power='" & bikeZone4 & "'/>" & vbCrLf & _
            "<SteadyState Duration='600' Power='" & bikeZone2 & "'/>" & vbCrLf & _
        "<SteadyState Duration='120' Power='" & bikeZone5 & "'/>" & vbCrLf & _
            "<SteadyState Duration='60' Power='" & bikeZone2 & "'/>" & vbCrLf & _
            "<SteadyState Duration='300' Power='" & bikeZone4 & "'/>" & vbCrLf & _
            "<SteadyState Duration='600' Power='" & bikeZone2 & "'/>" & vbCrLf & _
        "<SteadyState Duration='120' Power='" & bikeZone5 & "'/>" & vbCrLf & _
            "<SteadyState Duration='60' Power='" & bikeZone2 & "'/>" & vbCrLf & _
            "<SteadyState Duration='300' Power='" & bikeZone4 & "'/>" & vbCrLf & _
            "<SteadyState Duration='600' Power='" & bikeZone2 & "'/>" & vbCrLf & _
        "<SteadyState Duration='120' Power='" & bikeZone5 & "'/>" & vbCrLf & _
            "<SteadyState Duration='60' Power='" & bikeZone2 & "'/>" & vbCrLf & _
            "<SteadyState Duration='300' Power='" & bikeZone4 & "'/>" & vbCrLf & _
            "<SteadyState Duration='600' Power='" & bikeZone2 & "'/>", _
        72)

bikeMSDictionary.Add "5 X (2' @ ZONE 5, THEN 1' @ ZONE 2, THEN 5' @ 95-100%/ZONE 4, THEN 10' @ ZONE 2)", array( _
        "<SteadyState Duration='120' Power='" & bikeZone5 & "'/>" & vbCrLf & _
            "<SteadyState Duration='60' Power='" & bikeZone2 & "'/>" & vbCrLf & _
            "<SteadyState Duration='300' Power='" & bikeZone4 & "'/>" & vbCrLf & _
            "<SteadyState Duration='600' Power='" & bikeZone2 & "'/>" & vbCrLf & _
        "<SteadyState Duration='120' Power='" & bikeZone5 & "'/>" & vbCrLf & _
            "<SteadyState Duration='60' Power='" & bikeZone2 & "'/>" & vbCrLf & _
            "<SteadyState Duration='300' Power='" & bikeZone4 & "'/>" & vbCrLf & _
            "<SteadyState Duration='600' Power='" & bikeZone2 & "'/>" & vbCrLf & _
        "<SteadyState Duration='120' Power='" & bikeZone5 & "'/>" & vbCrLf & _
            "<SteadyState Duration='60' Power='" & bikeZone2 & "'/>" & vbCrLf & _
            "<SteadyState Duration='300' Power='" & bikeZone4 & "'/>" & vbCrLf & _
            "<SteadyState Duration='600' Power='" & bikeZone2 & "'/>" & vbCrLf & _
        "<SteadyState Duration='120' Power='" & bikeZone5 & "'/>" & vbCrLf & _
            "<SteadyState Duration='60' Power='" & bikeZone2 & "'/>" & vbCrLf & _
            "<SteadyState Duration='300' Power='" & bikeZone4 & "'/>" & vbCrLf & _
            "<SteadyState Duration='600' Power='" & bikeZone2 & "'/>" & vbCrLf & _
        "<SteadyState Duration='120' Power='" & bikeZone5 & "'/>" & vbCrLf & _
            "<SteadyState Duration='60' Power='" & bikeZone2 & "'/>" & vbCrLf & _
            "<SteadyState Duration='300' Power='" & bikeZone4 & "'/>" & vbCrLf & _
            "<SteadyState Duration='600' Power='" & bikeZone2 & "'/>", _
        90)

bikeMSDictionary.Add "4 X (2' @ ZONE 5, THEN 1' @ ZONE 2, THEN 5' @ 95-100%/ZONE 4, THEN 5' @ ZONE 2)", array( _
        "<SteadyState Duration='120' Power='" & bikeZone5 & "'/>" & vbCrLf & _
            "<SteadyState Duration='60' Power='" & bikeZone2 & "'/>" & vbCrLf & _
            "<SteadyState Duration='300' Power='" & bikeZone4 & "'/>" & vbCrLf & _
            "<SteadyState Duration='300' Power='" & bikeZone2 & "'/>" & vbCrLf & _
        "<SteadyState Duration='120' Power='" & bikeZone5 & "'/>" & vbCrLf & _
            "<SteadyState Duration='60' Power='" & bikeZone2 & "'/>" & vbCrLf & _
            "<SteadyState Duration='300' Power='" & bikeZone4 & "'/>" & vbCrLf & _
            "<SteadyState Duration='300' Power='" & bikeZone2 & "'/>" & vbCrLf & _
        "<SteadyState Duration='120' Power='" & bikeZone5 & "'/>" & vbCrLf & _
            "<SteadyState Duration='60' Power='" & bikeZone2 & "'/>" & vbCrLf & _
            "<SteadyState Duration='300' Power='" & bikeZone4 & "'/>" & vbCrLf & _
            "<SteadyState Duration='300' Power='" & bikeZone2 & "'/>" & vbCrLf & _
        "<SteadyState Duration='120' Power='" & bikeZone5 & "'/>" & vbCrLf & _
            "<SteadyState Duration='60' Power='" & bikeZone2 & "'/>" & vbCrLf & _
            "<SteadyState Duration='300' Power='" & bikeZone4 & "'/>" & vbCrLf & _
            "<SteadyState Duration='300' Power='" & bikeZone2 & "'/>", _
        52)

bikeMSDictionary.Add "5 X (2' @ ZONE 5, THEN 1' @ ZONE 2, THEN 5' @ ZONE 4, THEN 5' @ ZONE 2)", array( _
        "<SteadyState Duration='120' Power='" & bikeZone5 & "'/>" & vbCrLf & _
            "<SteadyState Duration='60' Power='" & bikeZone2 & "'/>" & vbCrLf & _
            "<SteadyState Duration='300' Power='" & bikeZone4 & "'/>" & vbCrLf & _
            "<SteadyState Duration='300' Power='" & bikeZone2 & "'/>" & vbCrLf & _
        "<SteadyState Duration='120' Power='" & bikeZone5 & "'/>" & vbCrLf & _
            "<SteadyState Duration='60' Power='" & bikeZone2 & "'/>" & vbCrLf & _
            "<SteadyState Duration='300' Power='" & bikeZone4 & "'/>" & vbCrLf & _
            "<SteadyState Duration='300' Power='" & bikeZone2 & "'/>" & vbCrLf & _
        "<SteadyState Duration='120' Power='" & bikeZone5 & "'/>" & vbCrLf & _
            "<SteadyState Duration='60' Power='" & bikeZone2 & "'/>" & vbCrLf & _
            "<SteadyState Duration='300' Power='" & bikeZone4 & "'/>" & vbCrLf & _
            "<SteadyState Duration='300' Power='" & bikeZone2 & "'/>" & vbCrLf & _
        "<SteadyState Duration='120' Power='" & bikeZone5 & "'/>" & vbCrLf & _
            "<SteadyState Duration='60' Power='" & bikeZone2 & "'/>" & vbCrLf & _
            "<SteadyState Duration='300' Power='" & bikeZone4 & "'/>" & vbCrLf & _
            "<SteadyState Duration='300' Power='" & bikeZone2 & "'/>" & vbCrLf & _
        "<SteadyState Duration='120' Power='" & bikeZone5 & "'/>" & vbCrLf & _
            "<SteadyState Duration='60' Power='" & bikeZone2 & "'/>" & vbCrLf & _
            "<SteadyState Duration='300' Power='" & bikeZone4 & "'/>" & vbCrLf & _
            "<SteadyState Duration='300' Power='" & bikeZone2 & "'/>", _
        65)

bikeMSDictionary.Add "6 X (2' @ ZONE 5, THEN 1' @ ZONE 2, THEN 5' @ 95-100%/ZONE 4, THEN 5' @ ZONE 2)", array( _
        "<SteadyState Duration='120' Power='" & bikeZone5 & "'/>" & vbCrLf & _
            "<SteadyState Duration='60' Power='" & bikeZone2 & "'/>" & vbCrLf & _
            "<SteadyState Duration='300' Power='" & bikeZone4 & "'/>" & vbCrLf & _
            "<SteadyState Duration='300' Power='" & bikeZone2 & "'/>" & vbCrLf & _
        "<SteadyState Duration='120' Power='" & bikeZone5 & "'/>" & vbCrLf & _
            "<SteadyState Duration='60' Power='" & bikeZone2 & "'/>" & vbCrLf & _
            "<SteadyState Duration='300' Power='" & bikeZone4 & "'/>" & vbCrLf & _
            "<SteadyState Duration='300' Power='" & bikeZone2 & "'/>" & vbCrLf & _
        "<SteadyState Duration='120' Power='" & bikeZone5 & "'/>" & vbCrLf & _
            "<SteadyState Duration='60' Power='" & bikeZone2 & "'/>" & vbCrLf & _
            "<SteadyState Duration='300' Power='" & bikeZone4 & "'/>" & vbCrLf & _
            "<SteadyState Duration='300' Power='" & bikeZone2 & "'/>" & vbCrLf & _
        "<SteadyState Duration='120' Power='" & bikeZone5 & "'/>" & vbCrLf & _
            "<SteadyState Duration='60' Power='" & bikeZone2 & "'/>" & vbCrLf & _
            "<SteadyState Duration='300' Power='" & bikeZone4 & "'/>" & vbCrLf & _
            "<SteadyState Duration='300' Power='" & bikeZone2 & "'/>" & vbCrLf & _
        "<SteadyState Duration='120' Power='" & bikeZone5 & "'/>" & vbCrLf & _
            "<SteadyState Duration='60' Power='" & bikeZone2 & "'/>" & vbCrLf & _
            "<SteadyState Duration='300' Power='" & bikeZone4 & "'/>" & vbCrLf & _
            "<SteadyState Duration='300' Power='" & bikeZone2 & "'/>" & vbCrLf & _
        "<SteadyState Duration='120' Power='" & bikeZone5 & "'/>" & vbCrLf & _
            "<SteadyState Duration='60' Power='" & bikeZone2 & "'/>" & vbCrLf & _
            "<SteadyState Duration='300' Power='" & bikeZone4 & "'/>" & vbCrLf & _
            "<SteadyState Duration='300' Power='" & bikeZone2 & "'/>", _
        78)

bikeMSDictionary.Add "2 X 8' (4') @ ZONE 4", array( _
        "<IntervalsT Repeat='2' OnDuration='480' OffDuration='240' OnPower='" & bikeZone4 & "' OffPower='" & bikeZone0 & "'/>", _
        24)

bikeMSDictionary.Add "15' @ 80-85%/ZONE3/MOD-HARD 45' @ 95-100%/ZONE4/HARD FAST TRANSITION STRAIGHT TO RUN", array( _
            "<SteadyState Duration='900' Power='" & bikeZone3 & "'/>" & vbCrLf & _
            "<SteadyState Duration='2700' Power='" & bikeZone4 & "'/>", _
        20)

bikeMSDictionary.Add "2 X 10' (4') @ ZONE 4", array( _
        "<IntervalsT Repeat='2' OnDuration='600' OffDuration='240' OnPower='" & bikeZone4 & "' OffPower='" & bikeZone0 & "'/>", _
        28)

bikeMSDictionary.Add "2 X 12' (4') @ ZONE 4", array( _
        "<IntervalsT Repeat='2' OnDuration='720' OffDuration='240' OnPower='" & bikeZone4 & "' OffPower='" & bikeZone0 & "'/>", _
        32)

bikeMSDictionary.Add "2 X 15' (4') @ ZONE 4", array( _
        "<IntervalsT Repeat='2' OnDuration='900' OffDuration='240' OnPower='" & bikeZone4 & "' OffPower='" & bikeZone0 & "'/>", _
        38)

bikeMSDictionary.Add "2 X 20 (4') @ ZONE 4", array( _
        "<IntervalsT Repeat='2' OnDuration='1200' OffDuration='240' OnPower='" & bikeZone4 & "' OffPower='" & bikeZone0 & "'/>", _
        48)

bikeMSDictionary.Add "3 X 8' (4') @ ZONE 4", array( _
        "<IntervalsT Repeat='3' OnDuration='480' OffDuration='240' OnPower='" & bikeZone4 & "' OffPower='" & bikeZone0 & "'/>", _
        36)

bikeMSDictionary.Add "3 X 10' (4') @ ZONE 4", array( _
        "<IntervalsT Repeat='3' OnDuration='600' OffDuration='240' OnPower='" & bikeZone4 & "' OffPower='" & bikeZone0 & "'/>", _
        42)

bikeMSDictionary.Add "5 X 1.5' (1.5') @ ZONE 5", array( _
        "<IntervalsT Repeat='5' OnDuration='90' OffDuration='90' OnPower='" & bikeZone5 & "' OffPower='" & bikeZone0 & "'/>", _
        15)

bikeMSDictionary.Add "5 X 2' (2') @ ZONE 5", array( _
        "<IntervalsT Repeat='5' OnDuration='120' OffDuration='120' OnPower='" & bikeZone5 & "' OffPower='" & bikeZone0 & "'/>", _
        20)

bikeMSDictionary.Add "6 X 1.5' (1.5') @ ZONE 5", array( _
        "<IntervalsT Repeat='6' OnDuration='90' OffDuration='90' OnPower='" & bikeZone5 & "' OffPower='" & bikeZone0 & "'/>", _
        18)

bikeMSDictionary.Add "6 X 2'(2') @ ZONE 5", array( _
        "<IntervalsT Repeat='6' OnDuration='120' OffDuration='120' OnPower='" & bikeZone5 & "' OffPower='" & bikeZone0 & "'/>", _
        24)

bikeMSDictionary.Add "7 X 1' (1') @ ZONE 5", array( _
        "<IntervalsT Repeat='7' OnDuration='60' OffDuration='60' OnPower='" & bikeZone5 & "' OffPower='" & bikeZone0 & "'/>", _
        14)

bikeMSDictionary.Add "7 X 1'(2') @ ZONE 5", array( _
        "<IntervalsT Repeat='7' OnDuration='60' OffDuration='120' OnPower='" & bikeZone5 & "' OffPower='" & bikeZone0 & "'/>", _
        21)

bikeMSDictionary.Add "7 X 1.5' (1.5') @ ZONE 5", array( _
        "<IntervalsT Repeat='7' OnDuration='90' OffDuration='90' OnPower='" & bikeZone5 & "' OffPower='" & bikeZone0 & "'/>", _
        21)

bikeMSDictionary.Add "7 X 2'(2') @ ZONE 5", array( _
        "<IntervalsT Repeat='7' OnDuration='120' OffDuration='120' OnPower='" & bikeZone5 & "' OffPower='" & bikeZone0 & "'/>", _
        28)

bikeMSDictionary.Add "8' (4') @ ZONE 4", array( _
        "<IntervalsT Repeat='1' OnDuration='480' OffDuration='240' OnPower='" & bikeZone4 & "' OffPower='" & bikeZone0 & "'/>", _
        12)

bikeMSDictionary.Add "10' (4') @ ZONE 4", array( _
        "<IntervalsT Repeat='1' OnDuration='600' OffDuration='240' OnPower='" & bikeZone4 & "' OffPower='" & bikeZone0 & "'/>", _
        14)

bikeMSDictionary.Add "4 X 25' (5') @ ZONE 2 TO ZONE 3 AS YOU FEEL", array( _
        "<IntervalsT Repeat='4' OnDuration='1500' OffDuration='300' OnPower='" & bikeZone3 & "' OffPower='" & bikeZone0 & "'/>", _
        20)

bikeMSDictionary.Add "THEN 1 X 6' (5') @ 95-100%/ZONE4/HARD", array( _
        "<IntervalsT Repeat='1' OnDuration='360' OffDuration='300' OnPower='" & bikeZone4 & "' OffPower='" & bikeZone0 & "'/>", _
        20)

bikeMSDictionary.Add "THEN 1 X 5' (5') @ 95-100%/ZONE4/HARD", array( _
        "<IntervalsT Repeat='1' OnDuration='300' OffDuration='300' OnPower='" & bikeZone4 & "' OffPower='" & bikeZone0 & "'/>", _
        20)

bikeMSDictionary.Add "THEN 2 X 15' (2') @ 80-85%/ZONE3/MOD-HARD", array( _
        "<IntervalsT Repeat='2' OnDuration='900' OffDuration='120' OnPower='" & bikeZone4 & "' OffPower='" & bikeZone0 & "'/>", _
        20)

bikeMSDictionary.Add "2 X 8' (2') @ 95-100%/ZONE4/HARD", array( _
        "<IntervalsT Repeat='2' OnDuration='480' OffDuration='120' OnPower='" & bikeZone4 & "' OffPower='" & bikeZone0 & "'/>", _
        20)

bikeMSDictionary.Add "2 X 10' (4') @ 95-100%/ZONE4/HARD", array( _
        "<IntervalsT Repeat='2' OnDuration='600' OffDuration='240' OnPower='" & bikeZone4 & "' OffPower='" & bikeZone0 & "'/>", _
        28)

bikeMSDictionary.Add "2 X 12 (4') @ 95-100%/ZONE4/HARD", array( _
        "<IntervalsT Repeat='2' OnDuration='720' OffDuration='240' OnPower='" & bikeZone4 & "' OffPower='" & bikeZone0 & "'/>", _
        32)

bikeMSDictionary.Add "2 X 12' (4') @ 95-100%/ZONE4/HARD", array( _
        "<IntervalsT Repeat='2' OnDuration='720' OffDuration='240' OnPower='" & bikeZone4 & "' OffPower='" & bikeZone0 & "'/>", _
        32)

bikeMSDictionary.Add "2 X 15' (4') @ 95-100%/ZONE4/HARD", array( _
        "<IntervalsT Repeat='2' OnDuration='900' OffDuration='240' OnPower='" & bikeZone4 & "' OffPower='" & bikeZone0 & "'/>", _
        38)

bikeMSDictionary.Add "2 X 18' (4') @ 95-100%/ZONE4/HARD", array( _
        "<IntervalsT Repeat='2' OnDuration='1080' OffDuration='240' OnPower='" & bikeZone4 & "' OffPower='" & bikeZone0 & "'/>", _
        44)

bikeMSDictionary.Add "2 X 20' (4') @ 95-100%/ZONE4/HARD", array( _
        "<IntervalsT Repeat='2' OnDuration='1200' OffDuration='240' OnPower='" & bikeZone4 & "' OffPower='" & bikeZone0 & "'/>", _
        48)

bikeMSDictionary.Add "2 X 20 (4') @ 95-100%/ZONE4/HARD", array( _
        "<IntervalsT Repeat='2' OnDuration='1200' OffDuration='240' OnPower='" & bikeZone4 & "' OffPower='" & bikeZone0 & "'/>", _
        48)

bikeMSDictionary.Add "2 X 20' (4') @ 95-100%/ZONE4/HARD.REMAINDER OF TIME AT 80-85%/ZONE3/MOD-HARD", array( _
        "<IntervalsT Repeat='2' OnDuration='1200' OffDuration='240' OnPower='" & bikeZone4 & "' OffPower='" & bikeZone0 & "'/>" & vbCrLf & _
        "<SteadyState Duration='3120' Power='" & bikeZone3 & "'/>", _
        100)

bikeMSDictionary.Add "3 X 8' (2') @ 95-100%/ZONE4/HARD", array( _
        "<IntervalsT Repeat='3' OnDuration='480' OffDuration='120' OnPower='" & bikeZone4 & "' OffPower='" & bikeZone0 & "'/>", _
        30)

bikeMSDictionary.Add "3 X 10' (4') @ 95-100%/ZONE4/HARD", array( _
        "<IntervalsT Repeat='3' OnDuration='600' OffDuration='240' OnPower='" & bikeZone4 & "' OffPower='" & bikeZone0 & "'/>", _
        42)

bikeMSDictionary.Add "3 X 12' (4') @ 95-100%/ZONE4/HARD", array( _
        "<IntervalsT Repeat='3' OnDuration='720' OffDuration='240' OnPower='" & bikeZone4 & "' OffPower='" & bikeZone0 & "'/>", _
        48)

bikeMSDictionary.Add "2 X 8' (3') @ 95-100%/ZONE4/HARD REMAINDER OF AVAILABLE TIME AT 80-85%/ZONE4/HARD", array( _
        "<IntervalsT Repeat='2' OnDuration='480' OffDuration='180' OnPower='" & bikeZone4 & "' OffPower='" & bikeZone0 & "'/>", _
        22)

bikeMSDictionary.Add "2 X 10' (3') @ 95-100%/ZONE4/HARD REMAINDER OF TIME AT 80-85%/ZONE3/MOD-HARD", array( _
        "<IntervalsT Repeat='2' OnDuration='600' OffDuration='180' OnPower='" & bikeZone4 & "' OffPower='" & bikeZone0 & "'/>", _
        26)

bikeMSDictionary.Add "2 X 12' (4') @ 95-100%/ZONE4/HARD REMAINDER OF TIME AT 80-85%/ZONE3/MOD-HARD", array( _
        "<IntervalsT Repeat='2' OnDuration='720' OffDuration='240' OnPower='" & bikeZone4 & "' OffPower='" & bikeZone0 & "'/>", _
        32)

bikeMSDictionary.Add "3 X 4' (4') @ 95-100%/ZONE4/HARD REMAINDER @ 75-80%/ZONE2/STEADY WD: 5' EASY", array( _
        "<IntervalsT Repeat='3' OnDuration='240' OffDuration='240' OnPower='" & bikeZone4 & "' OffPower='" & bikeZone0 & "'/>", _
        24)

bikeMSDictionary.Add "3 X 6' (4') @ 95-100%/ZONE4/HARD REMAINDER @ 75-80%/ZONE2/STEADY WD: 5' EASY", array( _
        "<IntervalsT Repeat='3' OnDuration='360' OffDuration='240' OnPower='" & bikeZone4 & "' OffPower='" & bikeZone0 & "'/>", _
        30)

bikeMSDictionary.Add "3 X 8' (4') @ 95-100%/ZONE4/HARD REMAINDER @ 75-80%/ZONE2/STEADY WD: 5' EASY", array( _
        "<IntervalsT Repeat='3' OnDuration='480' OffDuration='240' OnPower='" & bikeZone4 & "' OffPower='" & bikeZone0 & "'/>", _
        36)

bikeMSDictionary.Add "REPEAT FOR A TOTAL OF 8' OF ''ON'' TIME", array( _
        "<IntervalsT Repeat='8' OnDuration='60' OffDuration='60' OnPower='" & bikeZone4 & "' OffPower='" & bikeZone0 & "'/>", _
        2)

bikeMSDictionary.Add "10' OF ''ON'' TIME", array( _
        "<SteadyState Duration='600' Power='" & bikeZone2 & "'/>", _
        10)

bikeMSDictionary.Add "10' OF ''ON'' TIME, AS WHATEVER COMBINATION OF ON/OFF INTERVALS FEELS RIGHT FOR YOU TODAY", array( _
        "<SteadyState Duration='600' Power='" & bikeZone2 & "'/>", _
        10)

bikeMSDictionary.Add "REPEAT FOR A TOTAL OF 10' OF ''ON'' TIME", array( _
        "<IntervalsT Repeat='10' OnDuration='60' OffDuration='60' OnPower='" & bikeZone4 & "' OffPower='" & bikeZone0 & "'/>", _
        2)

bikeMSDictionary.Add "14' OF ''ON'' TIME, AS WHATEVER COMBINATION OF ON/OFF INTERVALS FEELS RIGHT FOR YOU TODAY", array( _
        "<SteadyState Duration='600' Power='" & bikeZone2 & "'/>", _
        14)

bikeMSDictionary.Add "REPEAT FOR A TOTAL OF 14' OF ''ON'' TIME", array( _
        "<IntervalsT Repeat='10' OnDuration='60' OffDuration='60' OnPower='" & bikeZone4 & "' OffPower='" & bikeZone0 & "'/>", _
        2)

bikeMSDictionary.Add "RIDE NO MORE THAN 112 MILES OR 6 HOURS, WHICHEVER COMES FIRST", array( _
        "<SteadyState Duration='21600' Power='" & bikeZone2 & "'/>", _
        360)

bikeMSDictionary.Add "3 X 8' (4') ALL @ ZONE 4, REMAINDER IN ZONE 2", array( bikeZone2, -36, _
        "<IntervalsT Repeat='3' OnDuration='600' OffDuration='300' OnPower='" & bikeZone4 & "' OffPower='" & bikeZone0 & "'/>")

bikeMSDictionary.Add "3 X 10' (5') ALL @ ZONE 4, REMAINDER IN ZONE 2", array( bikeZone2, -45, _
        "<IntervalsT Repeat='3' OnDuration='600' OffDuration='300' OnPower='" & bikeZone4 & "' OffPower='" & bikeZone0 & "'/>")
 
bikeMSDictionary.Add "3 X 12' (5') ALL @ ZONE 4, REMAINDER IN ZONE 2", array( bikeZone2, -51, _
        "<IntervalsT Repeat='3' OnDuration='600' OffDuration='300' OnPower='" & bikeZone4 & "' OffPower='" & bikeZone0 & "'/>")

bikeMSDictionary.Add "3 X 14' (6') ALL @ ZONE 4, REMAINDER IN ZONE 2", array( bikeZone2, -60, _
        "<IntervalsT Repeat='3' OnDuration='600' OffDuration='300' OnPower='" & bikeZone4 & "' OffPower='" & bikeZone0 & "'/>")

bikeMSDictionary.Add "4 X 8' (4') ALL @ ZONE 4, REMAINDER IN ZONE 2", array( bikeZone2, -48, _
        "<IntervalsT Repeat='3' OnDuration='600' OffDuration='300' OnPower='" & bikeZone4 & "' OffPower='" & bikeZone0 & "'/>")

bikeMSDictionary.Add "6 X 7' (3') ALL @ ZONE 4, REMAINDER IN ZONE 2", array( bikeZone2, -60, _
        "<IntervalsT Repeat='3' OnDuration='600' OffDuration='300' OnPower='" & bikeZone4 & "' OffPower='" & bikeZone0 & "'/>")

bikeMSDictionary.Add "5 X 9' (3') ALL @ ZONE 4, REMAINDER IN ZONE 2", array( bikeZone2, -60, _
        "<IntervalsT Repeat='3' OnDuration='600' OffDuration='300' OnPower='" & bikeZone4 & "' OffPower='" & bikeZone0 & "'/>")

bikeMSDictionary.Add "10' (4'), 14' (5'), 18' (6') ALL @ ZONE 4, REMAINDER IN ZONE 2", array( bikeZone2, -57, _
        "<IntervalsT Repeat='1' OnDuration='600' OffDuration='240' OnPower='" & bikeZone4 & "' OffPower='" & bikeZone0 & "'/>" & vbCrLf & _
        "<IntervalsT Repeat='1' OnDuration='840' OffDuration='300' OnPower='" & bikeZone4 & "' OffPower='" & bikeZone0 & "'/>" & vbCrLf & _
        "<IntervalsT Repeat='1' OnDuration='1080' OffDuration='360' OnPower='" & bikeZone4 & "' OffPower='" & bikeZone0 & "'/>")

bikeMSDictionary.Add "12' (4'), 15' (5'), 18' (6') ALL @ ZONE 4, REMAINDER IN ZONE 2", array( bikeZone2, -60, _
        "<IntervalsT Repeat='1' OnDuration='720' OffDuration='240' OnPower='" & bikeZone4 & "' OffPower='" & bikeZone0 & "'/>" & vbCrLf & _
        "<IntervalsT Repeat='1' OnDuration='900' OffDuration='300' OnPower='" & bikeZone4 & "' OffPower='" & bikeZone0 & "'/>" & vbCrLf & _
        "<IntervalsT Repeat='1' OnDuration='1080' OffDuration='360' OnPower='" & bikeZone4 & "' OffPower='" & bikeZone0 & "'/>")

bikeMSDictionary.Add "THEN RIDE STEADY IN ZONE 1 TO ZONE 2 FOR 140'", array( _
            "<Warmup Duration='8400' PowerLow='" & bikeZone1 & "' PowerHigh='" & bikeZone2 & "'/>", _
        140)

' ***************5 X 9' (3') ALL @ ZONE 4, REMAINDER IN ZONE 2

If IsEmpty(casesLocation) Then
    Wscript.Echo bikeMSDictionary("5 X 9' (3') ALL @ ZONE 4, REMAINDER IN ZONE 2")(0)
End If


