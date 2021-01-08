module.exports = (Workout, power) => {
    bike = {};

    bike["RACE REHEARSAL BRICK SET UP TRANSITION AT CAR/HOUSE, IF POSSIBLE"] = new Workout(
        `<SteadyState Duration='900' Power='${power.bikeZone3}'/>\n
        <SteadyState Duration='2700' Power='${power.bikeZone4}'/>`,
        60 * 60)

    bike["SPEND AS MUCH TIME @ ZONE 3 AS POSSIBLE"] = new Workout("", 0, power.bikeZone3)
    bike["REMAINDER OF AVAILABLE RIDE TIME AT ZONE 3"] = new Workout("", 0, power.bikeZone3)
    bike["REMAINDER OF RIDE TIME IS @ZONE 2"] = new Workout("", 0, power.bikeZone2)

    bike["BIKE TEST, FOR POWER ATHLETES ONLY!"] = new Workout(
        `<Warmup Duration='540' PowerLow='${power.bikeZone0}' PowerHigh='${power.bikeZone3}'/>\n
        <IntervalsT Repeat='3' OnDuration='60' OffDuration='60' OnPower='${power.bikeZone4}' OffPower='${power.bikeZone0}'/>\n
        <SteadyState Duration='300' Power='${power.bikeZone1}'/>\n
        <MaxEffort Duration='300''/>\n
        <SteadyState Duration='600' Power='${power.bikeZone1}'/>\n
        <FreeRide FTPTest='1' Duration='1200''/>\n
        <Cooldown Duration='600' PowerLow='${power.bikeZone2}' PowerHigh='${power.bikeZone0}'/>`,
        0, completeWorkout=true)

    bike["2 X (2' @ ZONE 5, THEN 1' @ ZONE 2, THEN 5' @ 95-100%/ZONE 4, THEN 10' @ ZONE 2)"] = new Workout(
        `<SteadyState Duration='120' Power='${power.bikeZone5}'/>\n
            <SteadyState Duration='60' Power='${power.bikeZone2}'/>\n
            <SteadyState Duration='300' Power='${power.bikeZone4}'/>\n
            <SteadyState Duration='600' Power='${power.bikeZone2}'/>\n
        <SteadyState Duration='120' Power='${power.bikeZone5}'/>\n
            <SteadyState Duration='60' Power='${power.bikeZone2}'/>\n
            <SteadyState Duration='300' Power='${power.bikeZone4}'/>\n
            <SteadyState Duration='600' Power='${power.bikeZone2}'/>`,
        36 * 60)
    bike["3 X (2' @ ZONE 5, THEN 1' @ ZONE 2, THEN 5' @ 95-100%/ZONE 4, THEN 10' @ ZONE 2)"] = new Workout(
        `<SteadyState Duration='120' Power='${power.bikeZone5}'/>\n
            <SteadyState Duration='60' Power='${power.bikeZone2}'/>\n
            <SteadyState Duration='300' Power='${power.bikeZone4}'/>\n
            <SteadyState Duration='600' Power='${power.bikeZone2}'/>\n
        <SteadyState Duration='120' Power='${power.bikeZone5}'/>\n
            <SteadyState Duration='60' Power='${power.bikeZone2}'/>\n
            <SteadyState Duration='300' Power='${power.bikeZone4}'/>\n
            <SteadyState Duration='600' Power='${power.bikeZone2}'/>\n
        <SteadyState Duration='120' Power='${power.bikeZone5}'/>\n
            <SteadyState Duration='60' Power='${power.bikeZone2}'/>\n
            <SteadyState Duration='300' Power='${power.bikeZone4}'/>\n
            <SteadyState Duration='600' Power='${power.bikeZone2}'/>`,
        54 * 60)
    bike["3 X (2' @ ZONE 5, THEN 1' @ ZONE 2, THEN 5' @ ZONE 4, THEN 10' @ ZONE 2)"] = bike["3 X (2' @ ZONE 5, THEN 1' @ ZONE 2, THEN 5' @ 95-100%/ZONE 4, THEN 10' @ ZONE 2)"]
    bike["4 X (2' @ ZONE 5, THEN 1' @ ZONE 2, THEN 5' @ 95-100%/ZONE 4, THEN 10' @ ZONE 2)"] = new Workout(
        `<SteadyState Duration='120' Power='${power.bikeZone5}'/>\n
            <SteadyState Duration='60' Power='${power.bikeZone2}'/>\n
            <SteadyState Duration='300' Power='${power.bikeZone4}'/>\n
            <SteadyState Duration='600' Power='${power.bikeZone2}'/>\n
        <SteadyState Duration='120' Power='${power.bikeZone5}'/>\n
            <SteadyState Duration='60' Power='${power.bikeZone2}'/>\n
            <SteadyState Duration='300' Power='${power.bikeZone4}'/>\n
            <SteadyState Duration='600' Power='${power.bikeZone2}'/>\n
        <SteadyState Duration='120' Power='${power.bikeZone5}'/>\n
            <SteadyState Duration='60' Power='${power.bikeZone2}'/>\n
            <SteadyState Duration='300' Power='${power.bikeZone4}'/>\n
            <SteadyState Duration='600' Power='${power.bikeZone2}'/>\n
        <SteadyState Duration='120' Power='${power.bikeZone5}'/>\n
            <SteadyState Duration='60' Power='${power.bikeZone2}'/>\n
            <SteadyState Duration='300' Power='${power.bikeZone4}'/>\n
            <SteadyState Duration='600' Power='${power.bikeZone2}'/>`,
        72 * 60)
    bike["4 X (2' @ ZONE 5, THEN 1' @ ZONE 2, THEN 5' @ ZONE 4, THEN 10' @ ZONE 2)"] = bike["4 X (2' @ ZONE 5, THEN 1' @ ZONE 2, THEN 5' @ 95-100%/ZONE 4, THEN 10' @ ZONE 2)"]
    bike["4 X (2' @ ZONE 5, THEN 1' @ ZONE 2, THEN 5' @ 95-100%/ZONE 4, THEN 5' @ ZONE 2)"] = new Workout(
        `<SteadyState Duration='120' Power='${power.bikeZone5}'/>\n
            <SteadyState Duration='60' Power='${power.bikeZone2}'/>\n
            <SteadyState Duration='300' Power='${power.bikeZone4}'/>\n
            <SteadyState Duration='300' Power='${power.bikeZone2}'/>\n
        <SteadyState Duration='120' Power='${power.bikeZone5}'/>\n
            <SteadyState Duration='60' Power='${power.bikeZone2}'/>\n
            <SteadyState Duration='300' Power='${power.bikeZone4}'/>\n
            <SteadyState Duration='300' Power='${power.bikeZone2}'/>\n
        <SteadyState Duration='120' Power='${power.bikeZone5}'/>\n
            <SteadyState Duration='60' Power='${power.bikeZone2}'/>\n
            <SteadyState Duration='300' Power='${power.bikeZone4}'/>\n
            <SteadyState Duration='300' Power='${power.bikeZone2}'/>\n
        <SteadyState Duration='120' Power='${power.bikeZone5}'/>\n
            <SteadyState Duration='60' Power='${power.bikeZone2}'/>\n
            <SteadyState Duration='300' Power='${power.bikeZone4}'/>\n
            <SteadyState Duration='300' Power='${power.bikeZone2}'/>`,
        52 * 60)
    bike["5 X (2' @ ZONE 5, THEN 1' @ ZONE 2, THEN 5' @ ZONE 4, THEN 5' @ ZONE 2)"] = new Workout(
        `<SteadyState Duration='120' Power='${power.bikeZone5}'/>\n
            <SteadyState Duration='60' Power='${power.bikeZone2}'/>\n
            <SteadyState Duration='300' Power='${power.bikeZone4}'/>\n
            <SteadyState Duration='300' Power='${power.bikeZone2}'/>\n
        <SteadyState Duration='120' Power='${power.bikeZone5}'/>\n
            <SteadyState Duration='60' Power='${power.bikeZone2}'/>\n
            <SteadyState Duration='300' Power='${power.bikeZone4}'/>\n
            <SteadyState Duration='300' Power='${power.bikeZone2}'/>\n
        <SteadyState Duration='120' Power='${power.bikeZone5}'/>\n
            <SteadyState Duration='60' Power='${power.bikeZone2}'/>\n
            <SteadyState Duration='300' Power='${power.bikeZone4}'/>\n
            <SteadyState Duration='300' Power='${power.bikeZone2}'/>\n
        <SteadyState Duration='120' Power='${power.bikeZone5}'/>\n
            <SteadyState Duration='60' Power='${power.bikeZone2}'/>\n
            <SteadyState Duration='300' Power='${power.bikeZone4}'/>\n
            <SteadyState Duration='300' Power='${power.bikeZone2}'/>\n
        <SteadyState Duration='120' Power='${power.bikeZone5}'/>\n
            <SteadyState Duration='60' Power='${power.bikeZone2}'/>\n
            <SteadyState Duration='300' Power='${power.bikeZone4}'/>\n
            <SteadyState Duration='300' Power='${power.bikeZone2}'/>`,
        65 * 60)
    bike["5 X (2' @ ZONE 5, THEN 1' @ ZONE 2, THEN 5' @ 95-100%/ZONE 4, THEN 10' @ ZONE 2)"] = new Workout(
        `<SteadyState Duration='120' Power='${power.bikeZone5}'/>\n
            <SteadyState Duration='60' Power='${power.bikeZone2}'/>\n
            <SteadyState Duration='300' Power='${power.bikeZone4}'/>\n
            <SteadyState Duration='600' Power='${power.bikeZone2}'/>\n
        <SteadyState Duration='120' Power='${power.bikeZone5}'/>\n
            <SteadyState Duration='60' Power='${power.bikeZone2}'/>\n
            <SteadyState Duration='300' Power='${power.bikeZone4}'/>\n
            <SteadyState Duration='600' Power='${power.bikeZone2}'/>\n
        <SteadyState Duration='120' Power='${power.bikeZone5}'/>\n
            <SteadyState Duration='60' Power='${power.bikeZone2}'/>\n
            <SteadyState Duration='300' Power='${power.bikeZone4}'/>\n
            <SteadyState Duration='600' Power='${power.bikeZone2}'/>\n
        <SteadyState Duration='120' Power='${power.bikeZone5}'/>\n
            <SteadyState Duration='60' Power='${power.bikeZone2}'/>\n
            <SteadyState Duration='300' Power='${power.bikeZone4}'/>\n
            <SteadyState Duration='600' Power='${power.bikeZone2}'/>\n
        <SteadyState Duration='120' Power='${power.bikeZone5}'/>\n
            <SteadyState Duration='60' Power='${power.bikeZone2}'/>\n
            <SteadyState Duration='300' Power='${power.bikeZone4}'/>\n
            <SteadyState Duration='600' Power='${power.bikeZone2}'/>`,
        90 * 60)
    bike["6 X (2' @ ZONE 5, THEN 1' @ ZONE 2, THEN 5' @ 95-100%/ZONE 4, THEN 5' @ ZONE 2)"] = new Workout(
        `<SteadyState Duration='120' Power='${power.bikeZone5}'/>\n
            <SteadyState Duration='60' Power='${power.bikeZone2}'/>\n
            <SteadyState Duration='300' Power='${power.bikeZone4}'/>\n
            <SteadyState Duration='300' Power='${power.bikeZone2}'/>\n
        <SteadyState Duration='120' Power='${power.bikeZone5}'/>\n
            <SteadyState Duration='60' Power='${power.bikeZone2}'/>\n
            <SteadyState Duration='300' Power='${power.bikeZone4}'/>\n
            <SteadyState Duration='300' Power='${power.bikeZone2}'/>\n
        <SteadyState Duration='120' Power='${power.bikeZone5}'/>\n
            <SteadyState Duration='60' Power='${power.bikeZone2}'/>\n
            <SteadyState Duration='300' Power='${power.bikeZone4}'/>\n
            <SteadyState Duration='300' Power='${power.bikeZone2}'/>\n
        <SteadyState Duration='120' Power='${power.bikeZone5}'/>\n
            <SteadyState Duration='60' Power='${power.bikeZone2}'/>\n
            <SteadyState Duration='300' Power='${power.bikeZone4}'/>\n
            <SteadyState Duration='300' Power='${power.bikeZone2}'/>\n
        <SteadyState Duration='120' Power='${power.bikeZone5}'/>\n
            <SteadyState Duration='60' Power='${power.bikeZone2}'/>\n
            <SteadyState Duration='300' Power='${power.bikeZone4}'/>\n
            <SteadyState Duration='300' Power='${power.bikeZone2}'/>\n
        <SteadyState Duration='120' Power='${power.bikeZone5}'/>\n
            <SteadyState Duration='60' Power='${power.bikeZone2}'/>\n
            <SteadyState Duration='300' Power='${power.bikeZone4}'/>\n
            <SteadyState Duration='300' Power='${power.bikeZone2}'/>`,
        78 * 60)

    bike["THEN 1 X 5' (5') @ 95-100%/ZONE4/HARD"] = new Workout(
        `<IntervalsT Repeat='1' OnDuration='300' OffDuration='300' OnPower='${power.bikeZone4}' OffPower='${power.bikeZone0}'/>`,
        20 * 60)
    bike["THEN 1 X 6' (5') @ 95-100%/ZONE4/HARD"] = new Workout(
        `<IntervalsT Repeat='1' OnDuration='360' OffDuration='300' OnPower='${power.bikeZone4}' OffPower='${power.bikeZone0}'/>`,
        20 * 60)


    bike["2 X 6' (2') @ 95-100%/ZONE4/HARD"] = new Workout(
        `<IntervalsT Repeat='2' OnDuration='360' OffDuration='120' OnPower='${power.bikeZone4}' OffPower='${power.bikeZone0}'/>`,
        16 * 60)
    bike["2 X 8' (2') @ 95-100%/ZONE4/HARD"] = new Workout(
        `<IntervalsT Repeat='2' OnDuration='480' OffDuration='120' OnPower='${power.bikeZone4}' OffPower='${power.bikeZone0}'/>`,
        20 * 60)
    bike["2 X 8' (3') @ 95-100%/ZONE4/HARD REMAINDER OF AVAILABLE TIME AT 80-85%/ZONE4/HARD"] = new Workout(
        `<IntervalsT Repeat='2' OnDuration='480' OffDuration='180' OnPower='${power.bikeZone4}' OffPower='${power.bikeZone0}'/>`,
        22 * 60, power.bikeZone4)
    bike["2 X 8' (3') @ 95-100%/ZONE4/HARD"] = new Workout(
        `<IntervalsT Repeat='2' OnDuration='480' OffDuration='180' OnPower='${power.bikeZone4}' OffPower='${power.bikeZone0}'/>`,
        22 * 60)
    bike["2 X 8' (4') @ ZONE 4"] = new Workout(
        `<IntervalsT Repeat='2' OnDuration='480' OffDuration='240' OnPower='${power.bikeZone4}' OffPower='${power.bikeZone0}'/>`,
        24 * 60)
    bike["2 X 8' (4') @ 95-100%/ZONE4/HARD"] = bike["2 X 8' (4') @ ZONE 4"]
    bike["2 X 10' (4') @ 95-100%/ZONE4/HARD"] = new Workout(
        `<IntervalsT Repeat='2' OnDuration='600' OffDuration='240' OnPower='${power.bikeZone4}' OffPower='${power.bikeZone0}'/>`,
        28 * 60)
    bike["2 X 10' (4') @ ZONE 4"] = bike["2 X 10' (4') @ 95-100%/ZONE4/HARD"]
    bike["2 X 10' (4') @ 95-100%/ZONE4/HARD REMAINDER @ 75-80%/ZONE2/STEADY"] = new Workout(
        `<IntervalsT Repeat='2' OnDuration='600' OffDuration='240' OnPower='${power.bikeZone4}' OffPower='${power.bikeZone0}'/>`,
        32 * 60, power.bikeZone2)
    bike["2 X 10' (3') @ 95-100%/ZONE4/HARD"] = new Workout(
        `<IntervalsT Repeat='2' OnDuration='600' OffDuration='180' OnPower='${power.bikeZone4}' OffPower='${power.bikeZone0}'/>`,
        26 * 60)
    bike["2 X 10' (3') @ 95-100%/ZONE4/HARD REMAINDER OF TIME AT 80-85%/ZONE3/MOD-HARD"] = new Workout(
        `<IntervalsT Repeat='2' OnDuration='600' OffDuration='180' OnPower='${power.bikeZone4}' OffPower='${power.bikeZone0}'/>`,
        26 * 60, power.bikeZone3)
    bike["2 X 12 (4') @ 95-100%/ZONE4/HARD"] = new Workout(
        `<IntervalsT Repeat='2' OnDuration='720' OffDuration='240' OnPower='${power.bikeZone4}' OffPower='${power.bikeZone0}'/>`,
        32 * 60)
    bike["2 X 12' (4') @ 95-100%/ZONE4/HARD"] = bike["2 X 12 (4') @ 95-100%/ZONE4/HARD"]
    bike["2 X 12' (4') @ ZONE 4"] = bike["2 X 12 (4') @ 95-100%/ZONE4/HARD"]
    bike["2 X 12' (4') @ 95-100%/ZONE4/HARD REMAINDER OF TIME AT 80-85%/ZONE3/MOD-HARD"] = new Workout(
        `<IntervalsT Repeat='2' OnDuration='720' OffDuration='240' OnPower='${power.bikeZone4}' OffPower='${power.bikeZone0}'/>`,
        32 * 60, power.bikeZone3)
    bike["THEN 2 X 15' (2') @ 80-85%/ZONE3/MOD-HARD"] = new Workout(
        `<IntervalsT Repeat='2' OnDuration='900' OffDuration='120' OnPower='${power.bikeZone4}' OffPower='${power.bikeZone0}'/>`,
        20 * 60)
    bike["2 X 15' (4') @ 95-100%/ZONE4/HARD"] = new Workout(
        `<IntervalsT Repeat='2' OnDuration='900' OffDuration='240' OnPower='${power.bikeZone4}' OffPower='${power.bikeZone0}'/>`,
        38 * 60)
    bike["2 X 15' (4') @ ZONE 4"] = bike["2 X 15' (4') @ 95-100%/ZONE4/HARD"]
    bike["2 X 18' (4') @ 95-100%/ZONE4/HARD"] = new Workout(
        `<IntervalsT Repeat='2' OnDuration='1080' OffDuration='240' OnPower='${power.bikeZone4}' OffPower='${power.bikeZone0}'/>`,
        44 * 60)
    bike["2 X 20' (4') @ 95-100%/ZONE4/HARD"] = new Workout(
        `<IntervalsT Repeat='2' OnDuration='1200' OffDuration='240' OnPower='${power.bikeZone4}' OffPower='${power.bikeZone0}'/>`,
        48 * 60)
    bike["2 X 20 (4') @ 95-100%/ZONE4/HARD"] = bike["2 X 20' (4') @ 95-100%/ZONE4/HARD"]
    bike["2 X 20 (4') @ ZONE 4"] = bike["2 X 20' (4') @ 95-100%/ZONE4/HARD"]
    bike["2 X 20' (4') @ 95-100%/ZONE4/HARD.REMAINDER OF TIME AT 80-85%/ZONE3/MOD-HARD"] = new Workout(
        `<IntervalsT Repeat='2' OnDuration='1200' OffDuration='240' OnPower='${power.bikeZone4}' OffPower='${power.bikeZone0}'/>\n
        <SteadyState Duration='3120' Power='${power.bikeZone3}'/>`,
        100 * 60)

    bike["3 X 4' (4') @ 95-100%/ZONE4/HARD REMAINDER @ 75-80%/ZONE2/STEADY"] = new Workout(
        `<IntervalsT Repeat='3' OnDuration='240' OffDuration='240' OnPower='${power.bikeZone4}' OffPower='${power.bikeZone0}'/>`,
        24 * 60)
    bike["3 X 4' (4') @ 95-100%/ZONE4/HARD REMAINDER @ 75-80%/ZONE2/STEADY WD: 5' EASY"] = new Workout(
        `<IntervalsT Repeat='3' OnDuration='240' OffDuration='240' OnPower='${power.bikeZone4}' OffPower='${power.bikeZone0}'/>"
        <Cooldown Duration='300' PowerLow='${power.bikeZone2}' PowerHigh='${power.bikeZone0}'/>`,
        29 * 60)
    bike["3 X 5' (2') @ 95-100%/ZONE4/HARD"] = new Workout(
        `<IntervalsT Repeat='3' OnDuration='300' OffDuration='120' OnPower='${power.bikeZone4}' OffPower='${power.bikeZone0}'/>`,
        21 * 60)
    bike["3 X 6' (4') @ 95-100%/ZONE4/HARD REMAINDER @ 75-80%/ZONE2/STEADY WD: 5' EASY"] = new Workout(
        `<IntervalsT Repeat='3' OnDuration='360' OffDuration='240' OnPower='${power.bikeZone4}' OffPower='${power.bikeZone0}'/>"
        <Cooldown Duration='300' PowerLow='${power.bikeZone2}' PowerHigh='${power.bikeZone0}'/>`,
        35 * 60)
    bike["3 X 6' (4') @ 95-100%/ZONE4/HARD REMAINDER @ 75-80%/ZONE2/STEADY"] = new Workout(
        `<IntervalsT Repeat='3' OnDuration='360' OffDuration='240' OnPower='${power.bikeZone4}' OffPower='${power.bikeZone0}'/>"
        <Cooldown Duration='300' PowerLow='${power.bikeZone2}' PowerHigh='${power.bikeZone0}'/>`,
        35 * 60, power.bikeZone2)
    bike["3 X 8' (2') @ 95-100%/ZONE4/HARD"] = new Workout(
        `<IntervalsT Repeat='3' OnDuration='480' OffDuration='120' OnPower='${power.bikeZone4}' OffPower='${power.bikeZone0}'/>`,
        30 * 60)
    bike["3 X 8' (4') @ 95-100%/ZONE4/HARD REMAINDER @ 75-80%/ZONE2/STEADY WD: 5' EASY"] = new Workout(
        `<IntervalsT Repeat='3' OnDuration='480' OffDuration='240' OnPower='${power.bikeZone4}' OffPower='${power.bikeZone0}'/>"
        <Cooldown Duration='300' PowerLow='${power.bikeZone2}' PowerHigh='${power.bikeZone0}'/>`,
        41 * 60)
    bike["3 X 8' (4') ALL @ ZONE 4, REMAINDER IN ZONE 2"] = new Workout(
        `<IntervalsT Repeat='3' OnDuration='600' OffDuration='300' OnPower='${power.bikeZone4}' OffPower='${power.bikeZone0}'/>`,
        36 * 60, power.bikeZone2)
    bike["3 X 8' (4') @ 95-100%/ZONE4/HARD REMAINDER @ 75-80%/ZONE2/STEADY"] = bike["3 X 8' (4') ALL @ ZONE 4, REMAINDER IN ZONE 2"]
    bike["3 X 8' (4') @ ZONE 4"] = new Workout(
        `<IntervalsT Repeat='3' OnDuration='480' OffDuration='240' OnPower='${power.bikeZone4}' OffPower='${power.bikeZone0}'/>`,
        36 * 60)
    bike["3 X 10' (4') @ ZONE 4"] = new Workout(
        `<IntervalsT Repeat='3' OnDuration='600' OffDuration='240' OnPower='${power.bikeZone4}' OffPower='${power.bikeZone0}'/>`,
        42 * 60)
    bike["3 X 10' (4') @ 95-100%/ZONE4/HARD"] = bike["3 X 10' (4') @ ZONE 4"]
    bike["3 X 10' (5') ALL @ ZONE 4, REMAINDER IN ZONE 2"] = new Workout(
        `<IntervalsT Repeat='3' OnDuration='600' OffDuration='300' OnPower='${power.bikeZone4}' OffPower='${power.bikeZone0}'/>`,
        45 * 60, power.bikeZone2)
    bike["3 X 12' (4') @ 95-100%/ZONE4/HARD"] = new Workout(
        `<IntervalsT Repeat='3' OnDuration='720' OffDuration='240' OnPower='${power.bikeZone4}' OffPower='${power.bikeZone0}'/>`,
        48 * 60)
    bike["3 X 12' (5') ALL @ ZONE 4, REMAINDER IN ZONE 2"] = new Workout(
        `<IntervalsT Repeat='3' OnDuration='600' OffDuration='300' OnPower='${power.bikeZone4}' OffPower='${power.bikeZone0}'/>`,
        51 * 60, power.bikeZone2)
    bike["3 X 14' (6') ALL @ ZONE 4, REMAINDER IN ZONE 2"] = new Workout(
        `<IntervalsT Repeat='3' OnDuration='600' OffDuration='300' OnPower='${power.bikeZone4}' OffPower='${power.bikeZone0}'/>`,
        60 * 60, power.bikeZone2)
    bike["3 X 20' (5') @ ZONE 2 TO ZONE 3 AS YOU FEEL"] = new Workout(
        `<IntervalsT Repeat='3' OnDuration='1200' OffDuration='300' OnPower='${power.bikeZone3}' OffPower='${power.bikeZone0}'/>`,
        75 * 60, power.bikeZone3)


    bike["4 X 8' (4') ALL @ ZONE 4, REMAINDER IN ZONE 2"] = new Workout(
        `<IntervalsT Repeat='3' OnDuration='600' OffDuration='300' OnPower='${power.bikeZone4}' OffPower='${power.bikeZone0}'/>`,
        48 * 60, power.bikeZone2)
    bike["4 X 25' (5') @ ZONE 2 TO ZONE 3 AS YOU FEEL"] = new Workout(
        `<IntervalsT Repeat='4' OnDuration='1500' OffDuration='300' OnPower='${power.bikeZone3}' OffPower='${power.bikeZone0}'/>`,
        20 * 60)

    bike["5 X 1.5' (1.5') @ ZONE 5"] = new Workout(
        `<IntervalsT Repeat='5' OnDuration='90' OffDuration='90' OnPower='${power.bikeZone5}' OffPower='${power.bikeZone0}'/>`,
        15 * 60)
    bike["5 X 2' (2') @ ZONE 5"] = new Workout(
        `<IntervalsT Repeat='5' OnDuration='120' OffDuration='120' OnPower='${power.bikeZone5}' OffPower='${power.bikeZone0}'/>`,
        20 * 60)
    bike["5 X 9' (3') ALL @ ZONE 4, REMAINDER IN ZONE 2"] = new Workout(
        `<IntervalsT Repeat='3' OnDuration='600' OffDuration='300' OnPower='${power.bikeZone4}' OffPower='${power.bikeZone0}'/>`,
        60 * 60, power.bikeZone2)

    bike["6 X 1.5' (1.5') @ ZONE 5"] = new Workout(
        `<IntervalsT Repeat='6' OnDuration='90' OffDuration='90' OnPower='${power.bikeZone5}' OffPower='${power.bikeZone0}'/>`,
        18 * 60)
    bike["6 X 2'(2') @ ZONE 5"] = new Workout(
        `<IntervalsT Repeat='6' OnDuration='120' OffDuration='120' OnPower='${power.bikeZone5}' OffPower='${power.bikeZone0}'/>`,
        24 * 60)
    bike["6 X 7' (3') ALL @ ZONE 4, REMAINDER IN ZONE 2"] = new Workout(
        `<IntervalsT Repeat='3' OnDuration='600' OffDuration='300' OnPower='${power.bikeZone4}' OffPower='${power.bikeZone0}'/>`,
        60 * 60, power.bikeZone2)

    bike["7 X 1' (1') @ ZONE 5"] = new Workout(
        `<IntervalsT Repeat='7' OnDuration='60' OffDuration='60' OnPower='${power.bikeZone5}' OffPower='${power.bikeZone0}'/>`,
        14 * 60)
    bike["7 X 1'(2') @ ZONE 5"] = new Workout(
        `<IntervalsT Repeat='7' OnDuration='60' OffDuration='120' OnPower='${power.bikeZone5}' OffPower='${power.bikeZone0}'/>`,
        21 * 60)
    bike["7 X 1.5' (1.5') @ ZONE 5"] = new Workout(
        `<IntervalsT Repeat='7' OnDuration='90' OffDuration='90' OnPower='${power.bikeZone5}' OffPower='${power.bikeZone0}'/>`,
        21 * 60)
    bike["7 X 2'(2') @ ZONE 5"] = new Workout(
        `<IntervalsT Repeat='7' OnDuration='120' OffDuration='120' OnPower='${power.bikeZone5}' OffPower='${power.bikeZone0}'/>`,
        28 * 60)

    bike["8' (4') @ ZONE 4"] = new Workout(
        `<IntervalsT Repeat='1' OnDuration='480' OffDuration='240' OnPower='${power.bikeZone4}' OffPower='${power.bikeZone0}'/>`,
        12 * 60)

    bike["10' (4') @ ZONE 4"] = new Workout(
        `<IntervalsT Repeat='1' OnDuration='600' OffDuration='240' OnPower='${power.bikeZone4}' OffPower='${power.bikeZone0}'/>`,
        14 * 60)
    bike["10' (4'), 14' (5'), 18' (6') ALL @ ZONE 4, REMAINDER IN ZONE 2"] = new Workout(
        `<IntervalsT Repeat='1' OnDuration='600' OffDuration='240' OnPower='${power.bikeZone4}' OffPower='${power.bikeZone0}'/>\n
        <IntervalsT Repeat='1' OnDuration='840' OffDuration='300' OnPower='${power.bikeZone4}' OffPower='${power.bikeZone0}'/>\n
        <IntervalsT Repeat='1' OnDuration='1080' OffDuration='360' OnPower='${power.bikeZone4}' OffPower='${power.bikeZone0}'/>`,
        57 * 60, power.bikeZone2)

    bike["12' (4'), 15' (5'), 18' (6') ALL @ ZONE 4, REMAINDER IN ZONE 2"] = new Workout(
        `<IntervalsT Repeat='1' OnDuration='720' OffDuration='240' OnPower='${power.bikeZone4}' OffPower='${power.bikeZone0}'/>\n
        <IntervalsT Repeat='1' OnDuration='900' OffDuration='300' OnPower='${power.bikeZone4}' OffPower='${power.bikeZone0}'/>\n
        <IntervalsT Repeat='1' OnDuration='1080' OffDuration='360' OnPower='${power.bikeZone4}' OffPower='${power.bikeZone0}'/>`,
        60 * 60, power.bikeZone2)

    bike["15' @ 80-85%/ZONE3/MOD-HARD 45' @ 95-100%/ZONE4/HARD FAST TRANSITION STRAIGHT TO RUN"] = new Workout(
            `<SteadyState Duration='900' Power='${power.bikeZone3}'/>\n
            <SteadyState Duration='2700' Power='${power.bikeZone4}'/>`,
        20 * 60)

    bike["THEN RIDE STEADY IN ZONE 1 TO ZONE 2 FOR 140'"] = new Workout(
        `<Warmup Duration='8400' PowerLow='${power.bikeZone1}' PowerHigh='${power.bikeZone2}'/>`,
        140 * 60)

    bike["MS: 1' ''ON'' @ 120%/ZONE5/VERY HARD, 1' ''OFF'' @ 60-65%/ZONE1/EASY. REPEAT FOR A TOTAL OF 6' OF ''ON'' TIME"] = new Workout(
        `<IntervalsT Repeat='6' OnDuration='60' OffDuration='60' OnPower='${power.bikeZone4}' OffPower='${power.bikeZone0}'/>`,
        12 * 60)
    bike["MS: 1' ''ON'' @ 120%/ZONE5/VERY HARD, 1' ''OFF'' @ 60-65%/ZONE1/EASY. REPEAT FOR A TOTAL OF 8' OF ''ON'' TIME"] = new Workout(
        `<IntervalsT Repeat='8' OnDuration='60' OffDuration='60' OnPower='${power.bikeZone4}' OffPower='${power.bikeZone0}'/>`,
        16 * 60)
    bike["MS: 1' ''ON'' @ 120%/ZONE5/VERY HARD, 1' ''OFF'' @ 60-65%/ZONE1/EASY. REPEAT FOR A TOTAL OF 10' OF ''ON'' TIME"] = new Workout(
        `<IntervalsT Repeat='10' OnDuration='60' OffDuration='60' OnPower='${power.bikeZone4}' OffPower='${power.bikeZone0}'/>`,
        20 * 60)
    bike["MS: 1' ''ON'' @ 120%/ZONE5/VERY HARD, 1' ''OFF'' @ 60-65%/ZONE1/EASY. REPEAT FOR A TOTAL OF 12' OF ''ON'' TIME"] = new Workout(
        `<IntervalsT Repeat='12' OnDuration='60' OffDuration='60' OnPower='${power.bikeZone4}' OffPower='${power.bikeZone0}'/>`,
        24 * 60)
    bike["MS: 1' ''ON'' @ 120%/ZONE5/VERY HARD, 1' ''OFF'' @ 60-65%/ZONE1/EASY. REPEAT FOR A TOTAL OF 14' OF ''ON'' TIME"] = new Workout(
        `<IntervalsT Repeat='14' OnDuration='60' OffDuration='60' OnPower='${power.bikeZone4}' OffPower='${power.bikeZone0}'/>`,
        28 * 60)

    bike["10' OF ''ON'' TIME"] = bike["MS: 1' ''ON'' @ 120%/ZONE5/VERY HARD, 1' ''OFF'' @ 60-65%/ZONE1/EASY. REPEAT FOR A TOTAL OF 10' OF ''ON'' TIME"]
    bike["MS: 8' OF ''ON'' TIME, AS WHATEVER COMBINATION OF ON/OFF INTERVALS FEELS RIGHT FOR YOU TODAY"] = bike["MS: 1' ''ON'' @ 120%/ZONE5/VERY HARD, 1' ''OFF'' @ 60-65%/ZONE1/EASY. REPEAT FOR A TOTAL OF 8' OF ''ON'' TIME"]
    bike["MS: 10' OF ''ON'' TIME, AS WHATEVER COMBINATION OF ON/OFF INTERVALS FEELS RIGHT FOR YOU TODAY"] = bike["MS: 1' ''ON'' @ 120%/ZONE5/VERY HARD, 1' ''OFF'' @ 60-65%/ZONE1/EASY. REPEAT FOR A TOTAL OF 10' OF ''ON'' TIME"]
    bike["MS: 12' OF ''ON'' TIME, AS WHATEVER COMBINATION OF ON/OFF INTERVALS FEELS RIGHT FOR YOU TODAY"] = bike["MS: 1' ''ON'' @ 120%/ZONE5/VERY HARD, 1' ''OFF'' @ 60-65%/ZONE1/EASY. REPEAT FOR A TOTAL OF 12' OF ''ON'' TIME"]
    bike["MS: 14' OF ''ON'' TIME, AS WHATEVER COMBINATION OF ON/OFF INTERVALS FEELS RIGHT FOR YOU TODAY"] = bike["MS: 1' ''ON'' @ 120%/ZONE5/VERY HARD, 1' ''OFF'' @ 60-65%/ZONE1/EASY. REPEAT FOR A TOTAL OF 14' OF ''ON'' TIME"]

    // # bike["MS: 1' ''ON'' @ 120%/ZONE5/VERY HARD, 1' ''OFF'' @ 60-65%/ZONE1/EASY. REPEAT FOR A TOTAL OF 8' OF ''ON'' TIME, AS WHATEVER COMBINATION OF ON/OFF INTERVALS FEELS RIGHT FOR YOU TODAY"] = bike["MS: 1' ''ON'' @ 120%/ZONE5/VERY HARD, 1' ''OFF'' @ 60-65%/ZONE1/EASY. REPEAT FOR A TOTAL OF 8' OF ''ON'' TIME"]
    // # bike["MS: 1' ''ON'' @ 120%/ZONE5/VERY HARD, 1' ''OFF'' @ 60-65%/ZONE1/EASY. REPEAT FOR A TOTAL OF 10' OF ''ON'' TIME, AS WHATEVER COMBINATION OF ON/OFF INTERVALS FEELS RIGHT FOR YOU TODAY"] = bike["MS: 1' ''ON'' @ 120%/ZONE5/VERY HARD, 1' ''OFF'' @ 60-65%/ZONE1/EASY. REPEAT FOR A TOTAL OF 10' OF ''ON'' TIME"]
    // # bike["MS: 1' ''ON'' @ 120%/ZONE5/VERY HARD, 1' ''OFF'' @ 60-65%/ZONE1/EASY. REPEAT FOR A TOTAL OF 14' OF ''ON'' TIME, AS WHATEVER COMBINATION OF ON/OFF INTERVALS FEELS RIGHT FOR YOU TODAY"] = bike["MS: 1' ''ON'' @ 120%/ZONE5/VERY HARD, 1' ''OFF'' @ 60-65%/ZONE1/EASY. REPEAT FOR A TOTAL OF 14' OF ''ON'' TIME"]


    bike["RIDE NO MORE THAN 112 MILES OR 6 HOURS, WHICHEVER COMES FIRST"] = new Workout(
        `<SteadyState Duration='21600' Power='${power.bikeZone2}'/>`,
        360 * 60)


    return bike;
};