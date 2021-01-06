import Workout from './Workout';
import PowerLevels from './PowerLevels';

export default (testDistance, testTime) => {

    power = PowerLevels(testDistance, testTime)

    run = {};


    run["6 TO 8 X STRIDES, THEN REMAINDER @ MRP/Z2/STEADY"] = Workout(
        `<IntervalsT Repeat='8' OnDuration='${power.gdt(30, power.runZone4)}' OffDuration='${power.gdt(30, power.runZoneTRP)}' OnPower='${power.runZone4}' OffPower='${power.runZoneTRP}' pace='3' />\n`,
        8 * 60, power.runZone2)
    run["8-10 X STRIDES, THEN REMAINDER @ MP/Z2/STEADY"] = Workout(
        `<IntervalsT Repeat='10' OnDuration='${power.gdt(30, power.runZone4)}' OffDuration='${power.gdt(30, power.runZoneTRP)}' OnPower='${power.runZone4}' OffPower='${power.runZoneTRP}' pace='3' />\n`,
        10 * 60, power.runZone2)
    run["8-10 X STRIDES, THEN REMAINDER @ MRP/Z2/STEADY"] = run["8-10 X STRIDES, THEN REMAINDER @ MP/Z2/STEADY"]
    run["8 TO 10 X STRIDES, THEN REMAINDER @ MRP/Z2/STEADY"] = run["8-10 X STRIDES, THEN REMAINDER @ MP/Z2/STEADY"]
    run["RUN AS 8-10 X STRIDES, THEN REMAINDER @ MP/Z2/STEADY"] = run["8-10 X STRIDES, THEN REMAINDER @ MP/Z2/STEADY"]

    run["15' @ EP/Z1/EASY + 4 X 20'' STRIDES"] = Workout(
        `<SteadyState Duration='${power.gdt(900, power.runZone1)}' Power='${power.runZone1}' pace='3' /> \n
        <IntervalsT Repeat='4' OnDuration='${power.gdt(20, power.runZone4)}' OffDuration='${power.gdt(40, power.runZoneTRP)}' OnPower='${power.runZone4}' OffPower='${power.runZoneTRP}' pace='3' />`,
        (15 + 4) * 60)
    run["20' @ EP/Z1/EASY + 3 X 20'' STRIDES"] = Workout(
        `<SteadyState Duration='${power.gdt(1200, power.runZone1)}' Power='${power.runZone1}' pace='3' /> \n
        <IntervalsT Repeat='3' OnDuration='${power.gdt(20, power.runZone4)}' OffDuration='${power.gdt(40, power.runZoneTRP)}' OnPower='${power.runZone4}' OffPower='${power.runZoneTRP}' pace='3' />`,
        (20 + 3) * 60)
    run["20' @ EP/Z1/EASY + 4 X UPHILL 20'' STRIDES"] = Workout(
        `<SteadyState Duration='${power.gdt(1200, power.runZone1)}' Power='${power.runZone1}' pace='3' /> \n
        <IntervalsT Repeat='4' OnDuration='${power.gdt(20, power.runZone4)}' OffDuration='${power.gdt(40, power.runZoneTRP)}' OnPower='${power.runZone4}' OffPower='${power.runZoneTRP}' pace='3' />`,
        (20 + 4) * 60)

    run["20' @ EP/Z1/EASY + 5 X UPHILL 20'' STRIDES"] = Workout(
        `<SteadyState Duration='${power.gdt(1200, power.runZone1)}' Power='${power.runZone1}' pace='3' /> \n
        <IntervalsT Repeat='5' OnDuration='${power.gdt(20, power.runZone4)}' OffDuration='${power.gdt(40, power.runZoneTRP)}' OnPower='${power.runZone4}' OffPower='${power.runZoneTRP}' pace='3' />`,
        (20 + 5) * 60)
    run["20' @ EP/Z1/EASY + 5 X 20'' STRIDES"] = run["20' @ EP/Z1/EASY + 5 X UPHILL 20'' STRIDES"]
    run["20' @ EP/Z1/EASY + 6 X UPHILL 20'' STRIDES"] = Workout(
        `<SteadyState Duration='${power.gdt(1200, power.runZone1)}' Power='${power.runZone1}' pace='3' /> \n
        <IntervalsT Repeat='6' OnDuration='${power.gdt(20, power.runZone4)}' OffDuration='${power.gdt(40, power.runZoneTRP)}' OnPower='${power.runZone4}' OffPower='${power.runZoneTRP}' pace='3' />`,
        (20 + 6) * 60)
    run["20' @ EP/Z1/EASY + 6 X 20'' STRIDES"] = run["20' @ EP/Z1/EASY + 6 X UPHILL 20'' STRIDES"]
    run["25' @ EP/Z1/EASY, 7 X 20'' UPHILL STRIDES"] = Workout(
        `<SteadyState Duration='${power.gdt(1500, power.runZone1)}' Power='${power.runZone1}' pace='3' /> \n
        <IntervalsT Repeat='7' OnDuration='${power.gdt(20, power.runZone4)}' OffDuration='${power.gdt(40, power.runZoneTRP)}' OnPower='${power.runZone4}' OffPower='${power.runZoneTRP}' pace='3' />`,
        (25 + 7) * 60)
    run["25' @ EP/Z1/EASY, INCLUDE 6 X 90'' (2') @ TP/Z4/HARD"] = Workout(
        `<SteadyState Duration='${power.gdt(240, power.runZone1)}' Power='${power.runZone1}' pace='3' /> \n
        <IntervalsT Repeat='6' OnDuration='${power.gdt(90, power.runZone4)}' OffDuration='${power.gdt(120, power.runZoneTRP)}' OnPower='${power.runZone4}' OffPower='${power.runZoneTRP}' pace='3' />`,
        25 * 60)

    run["30' @ EP/Z1/EASY + 5 X UPHILL 20'' STRIDES"] = Workout(
        `<SteadyState Duration='${power.gdt(1800, power.runZone1)}' Power='${power.runZone1}' pace='3' /> \n
        <IntervalsT Repeat='5' OnDuration='${power.gdt(20, power.runZone4)}' OffDuration='${power.gdt(40, power.runZoneTRP)}' OnPower='${power.runZone4}' OffPower='${power.runZoneTRP}' pace='3' />`,
        (30 + 5) * 60)
    run["30' @ EP/Z1/EASY, INCLUDE 6 X 90'' (2') @ TP/Z4/HARD"] = Workout(
        `<SteadyState Duration='${power.gdt(540, power.runZone1)}' Power='${power.runZone1}' pace='3' /> \n
        <IntervalsT Repeat='6' OnDuration='${power.gdt(90, power.runZone4)}' OffDuration='${power.gdt(120, power.runZoneTRP)}' OnPower='${power.runZone4}' OffPower='${power.runZoneTRP}' pace='3' />`,
        30 * 60)
    run["40' @ ZONE 1 + 6 X 20'' STRIDES"] = Workout(
        `<SteadyState Duration='${power.gdt(2400, power.runZone1)}' Power='${power.runZone1}' pace='3' /> \n
        <IntervalsT Repeat='6' OnDuration='${power.gdt(20, power.runZone4)}' OffDuration='${power.gdt(40, power.runZoneTRP)}' OnPower='${power.runZone4}' OffPower='${power.runZoneTRP}' pace='3' />`,
        (40 + 6) * 60)
    run["40' @ ZONE 1 + 8 X 20'' STRIDES"] = Workout(
        `<SteadyState Duration='${power.gdt(2400, power.runZone1)}' Power='${power.runZone1}' pace='3' /> \n
        <IntervalsT Repeat='8' OnDuration='${power.gdt(20, power.runZone4)}' OffDuration='${power.gdt(40, power.runZoneTRP)}' OnPower='${power.runZone4}' OffPower='${power.runZoneTRP}' pace='3' />`,
        (40 + 8) * 60)
    run["40' @ ZONE 1 + 10 X 20'' STRIDES"] = Workout(
        `<SteadyState Duration='${power.gdt(2400, power.runZone1)}' Power='${power.runZone1}' pace='3' /> \n
        <IntervalsT Repeat='10' OnDuration='${power.gdt(20, power.runZone4)}' OffDuration='${power.gdt(40, power.runZoneTRP)}' OnPower='${power.runZone4}' OffPower='${power.runZoneTRP}' pace='3' />`,
        (40 + 10) * 60)
    run["45' @ ZONE 1 + 8 X 20'' STRIDES"] = Workout(
        `<SteadyState Duration='${power.gdt(2700, power.runZone1)}' Power='${power.runZone1}' pace='3' /> \n
        <IntervalsT Repeat='8' OnDuration='${power.gdt(20, power.runZone4)}' OffDuration='${power.gdt(40, power.runZoneTRP)}' OnPower='${power.runZone4}' OffPower='${power.runZoneTRP}' pace='3' />`,
        (45 + 8) * 60)

    run["20' @ TRP + 3 X 20'' STRIDES"] = Workout(
        `<SteadyState Duration='${power.gdt(1200, power.runZoneTRP)}' Power='${power.runZoneTRP}' pace='3' /> \n
        <IntervalsT Repeat='3' OnDuration='${power.gdt(20, power.runZone4)}' OffDuration='${power.gdt(40, power.runZoneTRP)}' OnPower='${power.runZone4}' OffPower='${power.runZoneTRP}' pace='3' />`,
        (20 + 3) * 60)
    run["25' @ TRP + 3 X 20'' STRIDES"] = Workout(
        `<SteadyState Duration='${power.gdt(1500, power.runZoneTRP)}' Power='${power.runZoneTRP}' pace='3' /> \n
        <IntervalsT Repeat='3' OnDuration='${power.gdt(20, power.runZone4)}' OffDuration='${power.gdt(40, power.runZoneTRP)}' OnPower='${power.runZone4}' OffPower='${power.runZoneTRP}' pace='3' />`,
        (25 + 3) * 60)
    run["30' @ TRP + 3 X 20'' STRIDES"] = Workout(
        `<SteadyState Duration='${power.gdt(1800, power.runZoneTRP)}' Power='${power.runZone1}' pace='3' /> \n
        <IntervalsT Repeat='3' OnDuration='${power.gdt(20, power.runZone4)}' OffDuration='${power.gdt(40, power.runZoneTRP)}' OnPower='${power.runZone4}' OffPower='${power.runZoneTRP}' pace='3' />`,
        (30 + 3) * 60)
    run["35' @ TRP + 3 X 20'' STRIDES"] = Workout(
        `<SteadyState Duration='${power.gdt(2100, power.runZoneTRP)}' Power='${power.runZoneTRP}' pace='3' />\n
        <IntervalsT Repeat='3' OnDuration='${power.gdt(20, power.runZone4)}' OffDuration='${power.gdt(40, power.runZoneTRP)}' OnPower='${power.runZone4}' OffPower='${power.runZoneTRP}' pace='3' />`,
        (35 + 3) * 60)
    run["40' @ TRP + 3 X 20'' STRIDES"] = Workout(
        `<SteadyState Duration='${power.gdt(40, power.runZoneTRP)}' Power='${power.runZoneTRP}' pace='3' /> \n
        <IntervalsT Repeat='3' OnDuration='${power.gdt(20, power.runZone4)}' OffDuration='${power.gdt(40, power.runZoneTRP)}' OnPower='${power.runZone4}' OffPower='${power.runZoneTRP}' pace='3' />`,
        (40 + 3) * 60)

    run["RUN A 5K TIME TRIAL"] = Workout(
        `<Warmup Duration='${power.gdt(660, [power.runZone1, power.runZone2])}' PowerLow='${power.runZone1}' PowerHigh='${power.runZone2}' pace='3' /> \n
        <IntervalsT Repeat='4' OnDuration='${power.gdt(30, power.runZone4)}' OffDuration='${power.gdt(30, power.runZoneTRP)}' OnPower='${power.runZone4}' OffPower='${power.runZoneTRP}' pace='3' /> \n
        <FreeRide Duration='5000' Power='${power.runZone5}' pace='3' /> \n
        <Cooldown Duration='${power.gdt(600, [power.runZone3, power.runZone0])}' PowerLow='${power.runZone3}' PowerHigh='${power.runZone0}' pace='3' />`,
        0, complete_workout = True)
    run["18 MILE RUN DONE AS 30%-50%-20%"] = Workout(
        `<SteadyState Duration='${6 * power.meters_from_miles}' Power='${power.runZone1}' pace='3' /> \n
        <SteadyState Duration='${9 * power.meters_from_miles}' Power='${power.runZoneTRP}' pace='3' /> \n
        <SteadyState Duration='${3 * power.meters_from_miles}' Power='${power.runZone2}' pace='3' />`,
        power.gtd(6, power.runZone1) + power.gtd(9, power.runZoneTRP) + power.gtd(3, power.runZone2))
    run["3 MILE RUN AS OUT AND BACK AT RACE PACE"] = Workout(
            `<SteadyState Duration='${3 * power.meters_from_miles}' Power='${power.runZoneTRP}' pace='3' />`,
            power.gtd(3, power.runZoneTRP))

    run["15' AS HMP/Z3/MOD-HARD OUT AND TP/Z4/HARD BACK"] = Workout(
            power.get_run_remainder(15 * 60, [power.runZone3, power.runZone4]),
            15)
    run["20' MRP/Z2/STEADY OUT, HMP/Z3/MOD-HARD BACK"] = Workout(
            power.get_run_remainder(20 * 60, [power.runZone2, power.runZone3]),
            20)
    run["RUN 20' AS HMP/Z3/MOD-HARD OUT AND TP/Z4/HARD BACK"] = Workout(
            power.get_run_remainder(20 * 60, [power.runZone3, power.runZone4]),
            20)
    run["20' AS HMP/Z3/MOD-HARD OUT AND TP/Z4/HARD BACK"] = run["RUN 20' AS HMP/Z3/MOD-HARD OUT AND TP/Z4/HARD BACK"]
    run["30' MRP/Z2/STEADY OUT, HMP/Z3/MOD-HARD BACK"] = Workout(
            power.get_run_remainder(30 * 60, [power.runZone2, power.runZone3]),
            30)

    run["30' @ TRP"] = Workout(
        `<SteadyState Duration='${power.gdt(1800, power.runZoneTRP)}' Power='${power.runZoneTRP}' pace='3' />`,
        30 * 60)
    run["TEMPO RUN AS 2 X (8') @ ZONE 2, 2' @ ZONE 1, 5' @ TP/ZONE 4, 5' @ ZONE 1"] = Workout(
        `<SteadyState Duration='${power.gdt(480, power.runZone2)}' Power='${power.runZone2}' pace='3' /> \n
            <SteadyState Duration='${power.gdt(120, power.runZone1)}' Power='${power.runZone1}' pace='3' /> \n
            <SteadyState Duration='${power.gdt(300, power.runZone4)}' Power='${power.runZone4}' pace='3' /> \n
            <SteadyState Duration='${power.gdt(300, power.runZone1)}' Power='${power.runZone1}' pace='3' /> \n
        <SteadyState Duration='${power.gdt(480, power.runZone2)}' Power='${power.runZone2}' pace='3' /> \n
            <SteadyState Duration='${power.gdt(120, power.runZone1)}' Power='${power.runZone1}' pace='3' /> \n
            <SteadyState Duration='${power.gdt(300, power.runZone4)}' Power='${power.runZone4}' pace='3' /> \n
            <SteadyState Duration='${power.gdt(300, power.runZone1)}' Power='${power.runZone1}' pace='3' />`,
        40 * 60)
    run["TEMPO RUN AS 2 X (8') @ ZONE 2, 2' @ ZONE 1, 5' @ ZONE 4, 5' @ ZONE 1"] = run["TEMPO RUN AS 2 X (8') @ ZONE 2, 2' @ ZONE 1, 5' @ TP/ZONE 4, 5' @ ZONE 1"]
    run["ENTIRE RUN: 40' TRP, 20' @ ZONE 2, 10' @ ZONE 3 FINISH"] = Workout(
        `<SteadyState Duration='${power.gdt(2400, power.runZoneTRP)}' Power='${power.runZoneTRP}' pace='3' /> \n
        <SteadyState Duration='${power.gdt(1200, power.runZone2)}' Power='${power.runZone2}' pace='3' /> \n
        <SteadyState Duration='${power.gdt(600, power.runZone3)}' Power='${power.runZone3}' pace='3' />`,
        70 * 60)
    run["ENTIRE RUN: 40' TRP, 25' @ ZONE 2, 10' @ ZONE 3 FINISH"] = Workout(
        `<SteadyState Duration='${power.gdt(2400, power.runZoneTRP)}' Power='${power.runZoneTRP}' pace='3' /> \n
        <SteadyState Duration='${power.gdt(1500, power.runZone2)}' Power='${power.runZone2}' pace='3' /> \n
        <SteadyState Duration='${power.gdt(600, power.runZone3)}' Power='${power.runZone3}' pace='3' />`,
        75 * 60)
    run["ENTIRE RUN: 40' TRP, 30' @ ZONE 2, 10' @ ZONE 3 FINISH"] = Workout(
        `<SteadyState Duration='${power.gdt(2400, power.runZoneTRP)}' Power='${power.runZoneTRP}' pace='3' /> \n
        <SteadyState Duration='${power.gdt(1800, power.runZone2)}' Power='${power.runZone2}' pace='3' /> \n
        <SteadyState Duration='${power.gdt(600, power.runZone3)}' Power='${power.runZone3}' pace='3' />`,
        80 * 60)
    run["ENTIRE RUN: 45' TRP, 40' @ ZONE 2, 5' @ ZONE 3 FINISH"] = Workout(
        `<SteadyState Duration='${power.gdt(2700, power.runZoneTRP)}' Power='${power.runZoneTRP}' pace='3' /> \n
        <SteadyState Duration='${power.gdt(2400, power.runZone2)}' Power='${power.runZone2}' pace='3' /> \n
        <SteadyState Duration='${power.gdt(300, power.runZone3)}' Power='${power.runZone3}' pace='3' />`,
        100 * 60)
    run["ENTIRE RUN: 50' TRP, 15' @ ZONE 2, 5' @ ZONE 3 FINISH"] = Workout(
        `<SteadyState Duration='${power.gdt(3000, power.runZoneTRP)}' Power='${power.runZoneTRP}' pace='3' /> \n
        <SteadyState Duration='${power.gdt(900, power.runZone2)}' Power='${power.runZone2}' pace='3' /> \n
        <SteadyState Duration='${power.gdt(300, power.runZone3)}' Power='${power.runZone3}' pace='3' />`,
        70 * 60)
    run["ENTIRE RUN: 50' TRP, 20' @ ZONE 2, 5' @ ZONE 3 FINISH"] = Workout(
            `<SteadyState Duration='${power.gdt(3000, power.runZoneTRP)}' Power='${power.runZoneTRP}' pace='3' /> \n
                <SteadyState Duration='${power.gdt(1200, power.runZone2)}' Power='${power.runZone2}' pace='3' /> \n
                <SteadyState Duration='${power.gdt(300, power.runZone3)}' Power='${power.runZone3}' pace='3' />`,
        75 * 60)
    run["ENTIRE RUN: 50' TRP, 20' @ ZONE 2, 10' @ ZONE 3 FINISH"] = Workout(
            `<SteadyState Duration='${power.gdt(3000, power.runZoneTRP)}' Power='${power.runZoneTRP}' pace='3' /> \n
                <SteadyState Duration='${power.gdt(1200, power.runZone2)}' Power='${power.runZone2}' pace='3' /> \n
                <SteadyState Duration='${power.gdt(600, power.runZone3)}' Power='${power.runZone3}' pace='3' />`,
        80 * 60)
    run["ENTIRE RUN: 50' TRP, 25' @ ZONE 2, 10' @ ZONE 3 FINISH"] = Workout(
            `<SteadyState Duration='${power.gdt(3000, power.runZoneTRP)}' Power='${power.runZoneTRP}' pace='3' /> \n
                <SteadyState Duration='${power.gdt(1500, power.runZone2)}' Power='${power.runZone2}' pace='3' /> \n
                <SteadyState Duration='${power.gdt(600, power.runZone3)}' Power='${power.runZone3}' pace='3' />`,
            85 * 60)
    run["ENTIRE RUN: 50' TRP, 30' @ ZONE 2, 10' @ ZONE 3 FINISH"] = Workout(
            `<SteadyState Duration='${power.gdt(3000, power.runZoneTRP)}' Power='${power.runZoneTRP}' pace='3' /> \n
                <SteadyState Duration='${power.gdt(1800, power.runZone2)}' Power='${power.runZone2}' pace='3' /> \n
                <SteadyState Duration='${power.gdt(600, power.runZone3)}' Power='${power.runZone3}' pace='3' />`,
            90 * 60)
    run["ENTIRE RUN: 55' TRP, 20' @ ZONE 2, 5' @ ZONE 3 FINISH"] = Workout(
            `<SteadyState Duration='${power.gdt(3300, power.runZoneTRP)}' Power='${power.runZoneTRP}' pace='3' /> \n
                <SteadyState Duration='${power.gdt(1200, power.runZone2)}' Power='${power.runZone2}' pace='3' /> \n
                <SteadyState Duration='${power.gdt(300, power.runZone3)}' Power='${power.runZone3}' pace='3' />`,
            80 * 60)
    run["ENTIRE RUN: 60' TRP, 20' @ ZONE 2, 5' @ ZONE 3 FINISH"] = Workout(
            `<SteadyState Duration='${power.gdt(3600, power.runZoneTRP)}' Power='${power.runZoneTRP}' pace='3' /> \n
                <SteadyState Duration='${power.gdt(1200, power.runZone2)}' Power='${power.runZone2}' pace='3' /> \n
                <SteadyState Duration='${power.gdt(300, power.runZone3)}' Power='${power.runZone3}' pace='3' />`,
            85 * 60)
    run["ENTIRE RUN: 60' TRP, 20' @ ZONE 2, 10' @ ZONE 3 FINISH"] = Workout(
            `<SteadyState Duration='${power.gdt(3600, power.runZoneTRP)}' Power='${power.runZoneTRP}' pace='3' /> \n
                <SteadyState Duration='${power.gdt(1200, power.runZone2)}' Power='${power.runZone2}' pace='3' /> \n
                <SteadyState Duration='${power.gdt(600, power.runZone3)}' Power='${power.runZone3}' pace='3' />`,
            90 * 60)
    run["ENTIRE RUN: 60' TRP, 25' @ ZONE 2, 5' @ ZONE 3 FINISH"] = Workout(
            `<SteadyState Duration='${power.gdt(3600, power.runZoneTRP)}' Power='${power.runZoneTRP}' pace='3' /> \n
                <SteadyState Duration='${power.gdt(1500, power.runZone2)}' Power='${power.runZone2}' pace='3' /> \n
                <SteadyState Duration='${power.gdt(300, power.runZone3)}' Power='${power.runZone3}' pace='3' />`,
            90 * 60)
    run["ENTIRE RUN: 60' TRP, 25' @ ZONE 2, 10' @ ZONE 3 FINISH"] = Workout(
            `<SteadyState Duration='${power.gdt(3600, power.runZoneTRP)}' Power='${power.runZoneTRP}' pace='3' /> \n
                <SteadyState Duration='${power.gdt(1500, power.runZone2)}' Power='${power.runZone2}' pace='3' /> \n
                <SteadyState Duration='${power.gdt(600, power.runZone3)}' Power='${power.runZone3}' pace='3' />`,
            95 * 60)
    run["ENTIRE RUN: 60' TRP, 35' @ ZONE 2, 5' @ ZONE 3 FINISH"] = Workout(
            `<SteadyState Duration='${power.gdt(3600, power.runZoneTRP)}' Power='${power.runZoneTRP}' pace='3' /> \n
                <SteadyState Duration='${power.gdt(2100, power.runZone2)}' Power='${power.runZone2}' pace='3' /> \n
                <SteadyState Duration='${power.gdt(300, power.runZone3)}' Power='${power.runZone3}' pace='3' />`,
            100 * 60)
    run["RUN NO MORE THAN THE 30 MINUTES LISTED AS YOU HAVE A LONGER RUN TOMORROW"] = Workout(
            `<SteadyState Duration='${power.gdt(1800, power.runZoneTRP)}' Power='${power.runZoneTRP}' pace='3' />`,
            30 * 60)

    run["RUN AS EASY JOG @ EP/Z1/EASY TO STAY LOOSE"] = Workout('', 0, power.runZone1)
    run["RUN @ TRP EFFORT"] = Workout('', 0, power.runZoneTRP)
    run["RUN @ TRP"] = Workout('', 0, power.runZoneTRP)
    run["RUN @ ZONE 2 OUT AND BACK"] = Workout('', 0, power.runZone2)
    run["RUN, AS MRP/Z2/STEADY OUT, HMP/Z3/MOD-HARD BACK"] = Workout('', 0, power.runZone2)
    run["RUN AS MRP/Z2/STEADY OUT, HMP/Z3/MOD-HARD BACK"] = Workout('', 0, power.runZone2)
    run["RUN AS HMP/Z3/MOD-HARD OUT, MRP/Z2/STEADY BACK"] = Workout('', 0, power.runZone3)
    run["RUN AS HMP/Z3/MOD-HARD OUT AND BACK"] = Workout('', 0, power.runZone3)
    run["RUN, AS HMP/Z3/MOD-HARD OUT AND BACK"] = Workout('', 0, power.runZone3)
    run["REMAINDER OF RUN IS HOW YOU FEEL, BUT TRY TO ACCUMULATE TIME TRP"] = Workout('', 0, power.runZoneTRP)
    run["RUN @ TRP FOR FULL DURATION; NEGATIVE SPLIT @ ZONE 2 EFFORT IF YOU FEEL GOOD"] = Workout('', 0, power.runZoneTRP)
    run["RUN @ ZONE 2 EFFORT, PICK UP THE PACE IN THE LAST MILE IF YOU FEEL GOOD"] = Workout('', 0, power.runZone2)
    run["RUN @ ZONE 2 OUT, ZONE 3 BACK"] = Workout('', 0, [power.runZone2, power.runZone3])

    run["THEN 2 X 200, 2 X 400 ALL @ IP/Z5/VERY HARD WITH FULL RECOVERIES BETWEEN EACH"] = Workout(
        `<IntervalsT Repeat='2' OnDuration='200' OffDuration='${power.gdt(120, power.runZone1)}' OnPower='${power.runZone5}' OffPower='${power.runZone1}' pace='3' /> \n
        <IntervalsT Repeat='2' OnDuration='400' OffDuration='${power.gdt(120, power.runZone1)}' OnPower='${power.runZone5}' OffPower='${power.runZone1}' pace='3' />`,
        power.gtd(2 * 200 + 2 * 400, power.runZone5, False) + 4 * 2 * 60)

    run["2 X 200, 3 X 400, 3 X 200, ALL @ IP/Z5/VERY HARD WITH FULL RECOVERIES BETWEEN EACH"] = Workout(
        `<IntervalsT Repeat='2' OnDuration='200' OffDuration='${power.gdt(120, power.runZone1)}' OnPower='${power.runZone5}' OffPower='${power.runZone1}' pace='3' /> \n
        <IntervalsT Repeat='3' OnDuration='400' OffDuration='${power.gdt(120, power.runZone1)}' OnPower='${power.runZone5}' OffPower='${power.runZone1}' pace='3' /> \n
        <IntervalsT Repeat='3' OnDuration='200' OffDuration='${power.gdt(120, power.runZone1)}' OnPower='${power.runZone5}' OffPower='${power.runZone1}' pace='3' />`,
        power.gtd(2 * 200 + 3 * 400 + 3 * 200, power.runZone5, False) + 8 * 2 * 60)
    run["2 X 200, 3 X 1000, 2 X 200 ALL AT IP/Z5/VERY HARD WITH FULL RECOVERIES BETWEEN EACH"] = Workout(
        `<IntervalsT Repeat='2' OnDuration='200' OffDuration='${power.gdt(120, power.runZone1)}' OnPower='${power.runZone5}' OffPower='${power.runZone1}' pace='3' /> \n
        <IntervalsT Repeat='3' OnDuration='1000' OffDuration='${power.gdt(120, power.runZone1)}' OnPower='${power.runZone5}' OffPower='${power.runZone1}' pace='3' /> \n
        <IntervalsT Repeat='2' OnDuration='200' OffDuration='${power.gdt(120, power.runZone1)}' OnPower='${power.runZone5}' OffPower='${power.runZone1}' pace='3' />`,
        power.gtd(2 * 200 + 3 * 1000 + 2 * 200, power.runZone5, False) + 7 * 2 * 60)
    run["4 X 200, 2 X 800, 4 X 200, 2 X 400 ALL @ IP/Z5/VERY HARD WITH FULL RECOVERIES BETWEEN EACH"] = Workout(
        `<IntervalsT Repeat='4' OnDuration='200' OffDuration='${power.gdt(120, power.runZone1)}' OnPower='${power.runZone5}' OffPower='${power.runZone1}' pace='3' /> \n
        <IntervalsT Repeat='2' OnDuration='800' OffDuration='${power.gdt(120, power.runZone1)}' OnPower='${power.runZone5}' OffPower='${power.runZone1}' pace='3' /> \n
        <IntervalsT Repeat='4' OnDuration='200' OffDuration='${power.gdt(120, power.runZone1)}' OnPower='${power.runZone5}' OffPower='${power.runZone1}' pace='3' /> \n
        <IntervalsT Repeat='2' OnDuration='400' OffDuration='${power.gdt(120, power.runZone1)}' OnPower='${power.runZone5}' OffPower='${power.runZone1}' pace='3' />`,
        power.gtd(4 * 200 + 2 * 800 + 4 * 200 + 2 * 400, power.runZone5, False) + 12 * 2 * 60)

    run["2 X 400 (2'), 3 X 800 (2') ALL @ IP/Z5/VERY HARD"] = Workout(
        `<IntervalsT Repeat='2' OnDuration='400' OffDuration='${power.gdt(120, power.runZone1)}' OnPower='${power.runZone5}' OffPower='${power.runZone1}' pace='3' /> \n
        <IntervalsT Repeat='3' OnDuration='800' OffDuration='${power.gdt(120, power.runZone1)}' OnPower='${power.runZone5}' OffPower='${power.runZone1}' pace='3' />`,
        power.gtd(2 * 200 + 3 * 800, power.runZone5, False) + 5 * 2 * 60)
    run["3 X 400, 2 X 1200 ALL @ IP/Z5/VERY HARD (3')"] = Workout(
        `<IntervalsT Repeat='3' OnDuration='400' OffDuration='${power.gdt(180, power.runZone1)}' OnPower='${power.runZone5}' OffPower='${power.runZone1}' pace='3' /> \n
        <IntervalsT Repeat='2' OnDuration='1200' OffDuration='${power.gdt(180, power.runZone1)}' OnPower='${power.runZone5}' OffPower='${power.runZone1}' pace='3' />`,
        power.gtd(3 * 400 + 2 * 1200, power.runZone5, False) + 5 * 3 * 60)
    run["THEN 4 X 400 ALL @ IP/Z5/VERY HARD WITH FULL RECOVERIES BETWEEN EACH"] = Workout(
        `<IntervalsT Repeat='4' OnDuration='400' OffDuration='${power.gdt(120, power.runZone1)}' OnPower='${power.runZone5}' OffPower='${power.runZone1}' pace='3' />`,
        4 * (power.gtd(400, power.runZone5, False) + 2 * 60))
    run["THEN 6 X 400 ALL @ IP/Z5/VERY HARD WITH FULL RECOVERIES BETWEEN EACH"] = Workout(
        `<IntervalsT Repeat='6' OnDuration='400' OffDuration='${power.gdt(120, power.runZone1)}' OnPower='${power.runZone5}' OffPower='${power.runZone1}' pace='3' />`,
        6 * (power.gtd(400, power.runZone5, False) + 2 * 60))

    run["2 X 800 (2) 1 X 1200 ALL @ IP/Z5/VERY HARD WITH FULL RECOVERIES BETWEEN EACH"] = Workout(
        `<IntervalsT Repeat='2' OnDuration='800' OffDuration='${power.gdt(120, power.runZone1)}' OnPower='${power.runZone5}' OffPower='${power.runZone1}' pace='3' /> \n
        <IntervalsT Repeat='1' OnDuration='1200' OffDuration='${power.gdt(120, power.runZone1)}' OnPower='${power.runZone5}' OffPower='${power.runZone1}' pace='3' />`,
        power.gtd(2 * 800 + 1200, power.runZone5, False) + 3 * 2 * 60)
    run["THEN 3 X 800 ALL AT IP/Z5/VERY HARD WITH FULL RECOVERIES BETWEEN EACH"] = Workout(
        `<IntervalsT Repeat='3' OnDuration='800' OffDuration='${power.gdt(120, power.runZone1)}' OnPower='${power.runZone5}' OffPower='${power.runZone1}' pace='3' />`,
        3 * (power.gtd(800, power.runZone5, False) + 2 * 60))
    run["THEN 3 X 800 ALL @ IP/Z5/VERY HARD WITH FULL RECOVERIES BETWEEN EACH"] = Workout(
        `<IntervalsT Repeat='3' OnDuration='800' OffDuration='${power.gdt(120, power.runZone1)}' OnPower='${power.runZone5}' OffPower='${power.runZone1}' pace='3' />`,
        3 * (power.gtd(800, power.runZone5, False) + 2 * 60))
    run["4 X 800 (2') ALL @ IP/Z5/VERY HARD"] = Workout(
        `<IntervalsT Repeat='4' OnDuration='800' OffDuration='${power.gdt(120, power.runZone1)}' OnPower='${power.runZone5}' OffPower='${power.runZone1}' pace='3' />`,
        4 * (power.gtd(800, power.runZone5, False) + 2 * 60))
    run["3 X 800 ALL @ IP/Z5/VERY HARD WITH FULL RECOVERIES BETWEEN EACH, THEN 1 MILE @ TP/Z4/HARD"] = Workout(
        `<IntervalsT Repeat='3' OnDuration='800' OffDuration='${power.gdt(120, power.runZone1)}' OnPower='${power.runZone5}' OffPower='${power.runZone1}' pace='3' /> \n
        <SteadyState Duration='${power.meters_from_miles}' Power='${power.runZone4}' pace='3' />`,
        3 * power.gtd(800, power.runZone5, False) + power.gtd(1, power.runZone4) + 4 * 2 * 60)
    run["4 X 800 ALL @ IP/Z5/VERY HARD WITH FULL RECOVERIES BETWEEN EACH, THEN 2 X 1 MILE (4') @ TP/Z4/HARD"] = Workout(
        `<IntervalsT Repeat='8' OnDuration='800' OffDuration='${power.gdt(120, power.runZone1)}' OnPower='${power.runZone5}' OffPower='${power.runZone1}' pace='3' /> \n
        <IntervalsT Repeat='2' OnDuration='${power.meters_from_miles}' OffDuration='${power.gdt(240, power.runZone1)}' OnPower='${power.runZone4}' OffPower='${power.runZone1}' pace='3' />`,
        4 * power.gtd(800, power.runZone5, False) + 2 * power.gtd(1, power.runZone4) + 4 * 2 * 60 + 2 * 4 * 60)

    run["2 X 1000 ALL @ IP/Z5/VERY HARD WITH FULL RECOVERIES BETWEEN EACH, THEN 2 X 3/4 MILE (2') @ TP/Z4/HARD"] = Workout(
        `<IntervalsT Repeat='2' OnDuration='1000' OffDuration='${power.gdt(120, power.runZone1)}' OnPower='${power.runZone5}' OffPower='${power.runZone1}' pace='3' /> \n
        <IntervalsT Repeat='2' OnDuration='${power.meters_from_miles * 0.75}' OffDuration='${power.gdt(120, power.runZone1)}' OnPower='${power.runZone4}' OffPower='${power.runZone1}' pace='3' />`,
        2 * power.gtd(1000, power.runZone5, False) + 2 * power.gtd(0.75, power.runZone4) + 4 * 2 * 60)
    run["3 X 1000 ALL @ IP/Z5/VERY HARD WITH FULL RECOVERIES BETWEEN EACH"] = Workout(
        `<IntervalsT Repeat='3' OnDuration='1000' OffDuration='${power.gdt(180, power.runZone1)}' OnPower='${power.runZone5}' OffPower='${power.runZone1}' pace='3' />`,
        3 * (power.gtd(1000, power.runZone5, False) + 3 * 60))
    run["THEN 3 X 1000 ALL AT IP/Z5/VERY HARD WITH FULL RECOVERIES BETWEEN EACH"] = run["3 X 1000 ALL @ IP/Z5/VERY HARD WITH FULL RECOVERIES BETWEEN EACH"]
    run["3 X 1000 ALL @ IP/Z5/VERY HARD WITH FULL RECOVERIES BETWEEN EACH, THEN 2 X 1 MILE (4') @ TP/Z4/HARD"] = Workout(
        `<IntervalsT Repeat='3' OnDuration='1000' OffDuration='${power.gdt(240, power.runZone1)}' OnPower='${power.runZone5}' OffPower='${power.runZone1}' pace='3' /> \n
        <IntervalsT Repeat='2' OnDuration='${power.meters_from_miles}' OffDuration='${power.gdt(240, power.runZone1)}' OnPower='${power.runZone4}' OffPower='${power.runZone1}' pace='3' />`,
        3 * power.gtd(1000, power.runZone5, False) + 2 * power.gtd(1, power.runZone4) + 5 * 2 * 60)

    run["3 X 1200 ALL @ IP/Z5/VERY HARD (3')"] = Workout(
        `<IntervalsT Repeat='3' OnDuration='1200' OffDuration='${power.gdt(180, power.runZone1)}' OnPower='${power.runZone5}' OffPower='${power.runZone1}' pace='3' />\n`,
        3 * (power.gtd(1200, power.runZone5, False) + 3 * 60))
    run["3 X 1200 ALL @ IP/Z5/VERY HARD (3') REMAINDER OF RUN IS HOW YOU FEEL, BUT TRY TO ACCUMULATE MORE HMP/Z3/MOD-HARD TIME"] = Workout(
        `<IntervalsT Repeat='3' OnDuration='1200' OffDuration='${power.gdt(180, power.runZone1)}' OnPower='${power.runZone5}' OffPower='${power.runZone1}' pace='3' />\n`,
        3 * (power.gtd(1200, power.runZone5, False) + 3 * 60), power.runZone3)
    run["3 X (1 X 1200, 1 X 400, 1 X 200) ALL @ IP/Z5/VERY HARD WITH FULL RECOVERIES BETWEEN EACH"] = Workout(
        `<IntervalsT Repeat='1' OnDuration='1200' OffDuration='${power.gdt(120, power.runZone1)}' OnPower='${power.runZone5}' OffPower='${power.runZone1}' pace='3' /> \n
            <IntervalsT Repeat='1' OnDuration='400' OffDuration='${power.gdt(120, power.runZone1)}' OnPower='${power.runZone5}' OffPower='${power.runZone1}' pace='3' /> \n
            <IntervalsT Repeat='1' OnDuration='200' OffDuration='${power.gdt(120, power.runZone1)}' OnPower='${power.runZone5}' OffPower='${power.runZone1}' pace='3' /> \n
        <IntervalsT Repeat='1' OnDuration='1200' OffDuration='${power.gdt(120, power.runZone1)}' OnPower='${power.runZone5}' OffPower='${power.runZone1}' pace='3' /> \n
            <IntervalsT Repeat='1' OnDuration='400' OffDuration='${power.gdt(120, power.runZone1)}' OnPower='${power.runZone5}' OffPower='${power.runZone1}' pace='3' /> \n
            <IntervalsT Repeat='1' OnDuration='200' OffDuration='${power.gdt(120, power.runZone1)}' OnPower='${power.runZone5}' OffPower='${power.runZone1}' pace='3' /> \n
        <IntervalsT Repeat='1' OnDuration='1200' OffDuration='${power.gdt(120, power.runZone1)}' OnPower='${power.runZone5}' OffPower='${power.runZone1}' pace='3' /> \n
            <IntervalsT Repeat='1' OnDuration='400' OffDuration='${power.gdt(120, power.runZone1)}' OnPower='${power.runZone5}' OffPower='${power.runZone1}' pace='3' /> \n
            <IntervalsT Repeat='1' OnDuration='200' OffDuration='${power.gdt(120, power.runZone1)}' OnPower='${power.runZone5}' OffPower='${power.runZone1}' pace='3' />`,
        3 * power.gtd(1200 + 400 + 200, power.runZone5, False) + 9 * 2 * 60)
    run["3 X (1 X 1200, 1 X 400) ALL @ IP/Z5/VERY HARD WITH FULL RECOVERIES BETWEEN"] = Workout(
        `<IntervalsT Repeat='1' OnDuration='1200' OffDuration='${power.gdt(120, power.runZone1)}' OnPower='${power.runZone5}' OffPower='${power.runZone1}' pace='3' /> \n
            <IntervalsT Repeat='1' OnDuration='400' OffDuration='${power.gdt(120, power.runZone1)}' OnPower='${power.runZone5}' OffPower='${power.runZone1}' pace='3' /> \n
        <IntervalsT Repeat='1' OnDuration='1200' OffDuration='${power.gdt(120, power.runZone1)}' OnPower='${power.runZone5}' OffPower='${power.runZone1}' pace='3' /> \n
            <IntervalsT Repeat='1' OnDuration='400' OffDuration='${power.gdt(120, power.runZone1)}' OnPower='${power.runZone5}' OffPower='${power.runZone1}' pace='3' /> \n
        <IntervalsT Repeat='1' OnDuration='1200' OffDuration='${power.gdt(120, power.runZone1)}' OnPower='${power.runZone5}' OffPower='${power.runZone1}' pace='3' /> \n
            <IntervalsT Repeat='1' OnDuration='400' OffDuration='${power.gdt(120, power.runZone1)}' OnPower='${power.runZone5}' OffPower='${power.runZone1}' pace='3' />`,
        3 * power.gtd(1200 + 400, power.runZone5, False) + 6 * 2 * 60)
    run["3 X (1 X 1200, 1 X 400) ALL @ IP/Z5/VERY HARD WITH FULL RECOVERIES BETWEEN EACH"] = run["3 X (1 X 1200, 1 X 400) ALL @ IP/Z5/VERY HARD WITH FULL RECOVERIES BETWEEN"]

    run["1 MILE @ TP/Z4/HARD WITH 4' RECOVERY IN EP/Z1/EASY"] = Workout(
        `<IntervalsT Repeat='1' OnDuration='${power.meters_from_miles}' OffDuration='${power.gdt(240, power.runZone1)}' OnPower='${power.runZone4}' OffPower='${power.runZone1}' pace='3' />`,
        power.gtd(1, power.runZone4) + 4 * 60)
    run["1 MILE (4'), 1/2 MILE (2'), 1 MILE (4') ALL @ TP/Z4/HARD"] = Workout(
        `<IntervalsT Repeat='1' OnDuration='${power.meters_from_miles}' OffDuration='${power.gdt(240, power.runZoneTRP)}' OnPower='${power.runZone4}' OffPower='${power.runZoneTRP}' pace='3' /> \n
        <IntervalsT Repeat='1' OnDuration='${Math.floor(power.meters_from_miles / 2)}' OffDuration='${power.gdt(120, power.runZoneTRP)}' OnPower='${power.runZone4}' OffPower='${power.runZoneTRP}' pace='3' />\n
        <IntervalsT Repeat='1' OnDuration='${power.meters_from_miles}' OffDuration='${power.gdt(240, power.runZoneTRP)}' OnPower='${power.runZone4}' OffPower='${power.runZoneTRP}' pace='3' />`,
        power.gtd(1, power.runZone4) + power.gtd(0.5, power.runZone4) + power.gtd(1, power.runZone4) + (4 + 2 + 4) * 60)
    run["1 X 1 MILE (4'), 2 X 1/2 MILE (3') @ ZONE 4"] = Workout(
        `<IntervalsT Repeat='1' OnDuration='${power.meters_from_miles}' OffDuration='${power.gdt(240, power.runZoneTRP)}' OnPower='${power.runZone4}' OffPower='${power.runZoneTRP}' pace='3' /> \n
        <IntervalsT Repeat='2' OnDuration='${Math.floor(power.meters_from_miles / 2)}' OffDuration='${power.gdt(180, power.runZoneTRP)}' OnPower='${power.runZone4}' OffPower='${power.runZoneTRP}' pace='3' />`,
        1 * (power.gtd(1, power.runZone4) + 4 * 60) + 2 * (power.gtd(0.5, power.runZone4) + 3 * 60))



    run["4 X 1/4 MILE (2') @ ZONE 5"] = Workout(
        `<IntervalsT Repeat='4' OnDuration='${0.25 * power.meters_from_miles}' OffDuration='${power.gdt(120, power.runZone1)}' OnPower='${power.runZone5}' OffPower='${power.runZone1}' pace='3' />`,
        4 * (power.gtd(0.25, power.runZone5) + 2 * 60))
    run["6 X 1/4 MILE (2') @ ZONE 5"] = Workout(
        `<IntervalsT Repeat='6' OnDuration='${0.25 * power.meters_from_miles}' OffDuration='${power.gdt(120, power.runZone1)}' OnPower='${power.runZone5}' OffPower='${power.runZone1}' pace='3' />`,
        6 * (power.gtd(0.25, power.runZone5) + 2 * 60))
    run["8 X 1/4 MILE (2') @ ZONE 5"] = Workout(
        `<IntervalsT Repeat='8' OnDuration='${0.25 * power.meters_from_miles}' OffDuration='${power.gdt(120, power.runZone1)}' OnPower='${power.runZone5}' OffPower='${power.runZone1}' pace='3' />`,
        8 * (power.gtd(0.25, power.runZone5) + 2 * 60))
    run["10 X 1/4 MILE (2') @ ZONE 5"] = Workout(
        `<IntervalsT Repeat='10' OnDuration='${0.25 * power.meters_from_miles}' OffDuration='${power.gdt(120, power.runZone1)}' OnPower='${power.runZone5}' OffPower='${power.runZone1}' pace='3' />`,
        10 * (power.gtd(0.25, power.runZone5) + 2 * 60))

    run["4 X 1/2 MILE @ 5K PACE (2')"] = Workout(
        `<IntervalsT Repeat='4' OnDuration='${0.5 * power.meters_from_miles}' OffDuration='${power.gdt(120, power.runZone1)}' OnPower='${power.runZone4}' OffPower='${power.runZone1}' pace='3' />`,
        4 * (power.gtd(0.5, power.runZone4) + 2 * 60))
    run["2 X 1/2 MILE (2'), 1 MILE (4') WITH 1 MILE @ EP/Z1/EASY IN BETWEEN EACH"] = Workout(
        `<IntervalsT Repeat='2' OnDuration='${0.5 * power.meters_from_miles}' OffDuration='${power.gdt(120, power.runZone1)}' OnPower='${power.runZone4}' OffPower='${power.runZone1}' pace='3' />\n
        <SteadyState Duration='${power.meters_from_miles}' Power='${power.runZone1}' pace='3' /> \n
        <IntervalsT Repeat='1' OnDuration='${power.meters_from_miles}' OffDuration='${power.gdt(240, power.runZone1)}' OnPower='${power.runZone4}' OffPower='${power.runZone1}' pace='3' />`,
        2 * (power.gtd(0.5, power.runZone4) + 2 * 60) + power.gtd(1, power.runZone1) + (power.gtd(1, power.runZone4) + 4 * 60))
    run["2 X 1/2 MILE (2'), 1 MILE (4') ALL @ TP/Z4/HARD"] = Workout(
        `<IntervalsT Repeat='2' OnDuration='${0.5 * power.meters_from_miles}' OffDuration='${power.gdt(120, power.runZone1)}' OnPower='${power.runZone4}' OffPower='${power.runZone1}' pace='3' />\n
        <IntervalsT Repeat='1' OnDuration='${power.meters_from_miles}' OffDuration='${power.gdt(240, power.runZone1)}' OnPower='${power.runZone4}' OffPower='${power.runZone1}' pace='3' />`,
        2 * (power.gtd(0.5, power.runZone4) + 2 * 60) + (power.gtd(1, power.runZone4) + 4 * 60))
    run["2 X 1/2 MILE, 2 X 1 MILE @ TP/Z4/HARD WITH FULL RECOVERIES IN BETWEEN EACH"] = Workout(
        `<IntervalsT Repeat='2' OnDuration='${0.5 * power.meters_from_miles}' OffDuration='${power.gdt(120, power.runZone1)}' OnPower='${power.runZone4}' OffPower='${power.runZone1}' pace='3' />\n
        <IntervalsT Repeat='2' OnDuration='${power.meters_from_miles}' OffDuration='${power.gdt(240, power.runZone1)}' OnPower='${power.runZone4}' OffPower='${power.runZone1}' pace='3' />`,
        2 * (power.gtd(0.5, power.runZone4) + 2 * 60) + 2 * (power.gtd(1, power.runZone4) + 4 * 60))
    run["2 X 1/2 MILE, 2 X 1 MILE (5') @ TP/Z4/HARD"] = Workout(
        `<IntervalsT Repeat='2' OnDuration='${0.5 * power.meters_from_miles}' OffDuration='${power.gdt(120, power.runZone1)}' OnPower='${power.runZone4}' OffPower='${power.runZone1}' pace='3' />\n
        <IntervalsT Repeat='2' OnDuration='${power.meters_from_miles}' OffDuration='${power.gdt(300, power.runZone1)}' OnPower='${power.runZone4}' OffPower='${power.runZone1}' pace='3' />`,
        2 * (power.gtd(0.5, power.runZone4) + 2 * 60) + 2 * (power.gtd(1, power.runZone4) + 5 * 60))

    run["2 X 1"] = Workout(
        `<IntervalsT Repeat='2' OnDuration='${power.meters_from_miles}' OffDuration='${power.gdt(120, power.runZone1)}' OnPower='${power.runZone4}' OffPower='${power.runZone1}' pace='3' />`,
        2 * (power.gtd(1, power.runZone4) + 2 * 60))
    run["2 X 1 MILE (2') @ TP/Z4/HARD"] = run["2 X 1"]
    run["2 X 1 MILE @ TP/Z4/HARD WITH 4' RECOVERIES IN EP/Z1/EASY"] = Workout(
        `<IntervalsT Repeat='2' OnDuration='${power.meters_from_miles}' OffDuration='${power.gdt(240, power.runZone1)}' OnPower='${power.runZone4}' OffPower='${power.runZone1}' pace='3' />`,
        2 * (power.gtd(1, power.runZone4) + 4 * 60))
    run["2 X 1 MILE (4') @ ZONE 4"] = Workout(
        `<IntervalsT Repeat='2' OnDuration='${power.meters_from_miles}' OffDuration='${power.gdt(240, power.runZoneTRP)}' OnPower='${power.runZone4}' OffPower='${power.runZoneTRP}' pace='3' />`,
        2 * (power.gtd(1, power.runZone4) + 4 * 60))
    run["2 X 1 MILE (4') ALL @ TP/Z4/HARD"] = run["2 X 1 MILE (4') @ ZONE 4"]
    run["2 X 1 MILE (4'), 2 X 1/2 MILE (2'), ALL @ ZONE 4"] = Workout(
        `<IntervalsT Repeat='2' OnDuration='${power.meters_from_miles}' OffDuration='${power.gdt(240, power.runZoneTRP)}' OnPower='${power.runZone4}' OffPower='${power.runZoneTRP}' pace='3' /> \n
        <IntervalsT Repeat='2' OnDuration='${Math.floor(power.meters_from_miles / 2)}' OffDuration='${power.gdt(120, power.runZoneTRP)}' OnPower='${power.runZone4}' OffPower='${power.runZoneTRP}' pace='3' />`,
        2 * (power.gtd(1, power.runZone4) + 4 * 60) + 2 * (power.gtd(0.5, power.runZone4) + 2 * 60))
    run["2 X 1 MILE @ TP/Z4/HARD WITH 1 MILE @ EP/Z1/EASY IN BETWEEN EACH"] = Workout(
        `<SteadyState Duration='${power.meters_from_miles}' Power='${power.runZone4}' pace='3' /> \n
        <SteadyState Duration='${power.meters_from_miles}' Power='${power.runZone1}' pace='3' /> \n
        <SteadyState Duration='${power.meters_from_miles}' Power='${power.runZone4}' pace='3' />`,
        2 * power.gtd(1, power.runZone4) + power.gtd(1, power.runZone1))

    run["3 X 1 MILES @ TP/Z4/HARD (4')"] = Workout(
        `<IntervalsT Repeat='3' OnDuration='${power.meters_from_miles}' OffDuration='${power.gdt(240, power.runZone1)}' OnPower='${power.runZone4}' OffPower='${power.runZone1}' pace='3' />`,
        3 * (power.gtd(1, power.runZone4) + 4 * 60))
    run["3 X 1 MILE (4') @ ZONE 4"] = Workout(
        `<IntervalsT Repeat='3' OnDuration='${power.meters_from_miles}' OffDuration='${power.gdt(240, power.runZoneTRP)}' OnPower='${power.runZone4}' OffPower='${power.runZoneTRP}' pace='3' />`,
        3 * (power.gtd(1, power.runZone4) + 4 * 60))
    run["3 X 1 MILE (5') @ TP/Z4/HARD"] = Workout(
        `<IntervalsT Repeat='3' OnDuration='${power.meters_from_miles}' OffDuration='${power.gdt(300, power.runZone1)}' OnPower='${power.runZone4}' OffPower='${power.runZone1}' pace='3' />`,
        3 * (power.gtd(1, power.runZone4) + 5 * 60))
    run["3 X 1 MILE @ TP/Z4/HARD WITH 5' RECOVERIES IN EP/Z1/EASY"] = run["3 X 1 MILE (5') @ TP/Z4/HARD"]
    run["3 X 1 MILE (5') @ 5K TEST PACE WITH FULL RECOVERIES BETWEEN EACH"] = run["3 X 1 MILE (5') @ TP/Z4/HARD"]
    run["3 X 1 MILE (4'), 2 X 1/2 MILE (2') ALL @ ZONE 4"] = Workout(
        `<IntervalsT Repeat='3' OnDuration='${power.meters_from_miles}' OffDuration='${power.gdt(240, power.runZoneTRP)}' OnPower='${power.runZone4}' OffPower='${power.runZoneTRP}' pace='3' /> \n
        <IntervalsT Repeat='2' OnDuration='${Math.floor(power.meters_from_miles / 2)}' OffDuration='${power.gdt(120, power.runZoneTRP)}' OnPower='${power.runZone4}' OffPower='${power.runZoneTRP}' pace='3' />`,
        3 * (power.gtd(1, power.runZone4) + 4 * 60) + 2 * (power.gtd(0.5, power.runZone4) + 2 * 60))
    run["3 X 1 MILE (4'), 2 X 1/2 MILE (2') ALL @ ZONE 4.REMAINDER OF RUN IS HOW YOU FEEL, BUT TRY TO ACCUMULATE TIME TRP"] = Workout(
        `<IntervalsT Repeat='3' OnDuration='${power.meters_from_miles}' OffDuration='${power.gdt(240, power.runZoneTRP)}' OnPower='${power.runZone4}' OffPower='${power.runZoneTRP}' pace='3' /> \n
        <IntervalsT Repeat='2' OnDuration='${Math.floor(power.meters_from_miles / 2)}' OffDuration='${power.gdt(120, power.runZoneTRP)}' OnPower='${power.runZone4}' OffPower='${power.runZoneTRP}' pace='3' />`,
        3 * (power.gtd(1, power.runZone4) + 4 * 60) + 2 * (power.gtd(0.5, power.runZone4) + 2 * 60), remainder_zones=power.runZoneTRP)
    run["3 X 1 MILE @ TP/Z4/HARD WITH 1/2 MILE @ EP/Z1/EASY IN BETWEEN EACH"] = Workout(
        `<IntervalsT Repeat='3' OnDuration='${power.meters_from_miles}' OffDuration='${power.meters_from_miles * .5}' OnPower='${power.runZone4}' OffPower='${power.runZone1}' pace='3' />`,
        3 * power.gtd(1, power.runZone4) + 2 * power.gtd(0.5, power.runZone1))
    run["3 X 1 MILE @ TP/Z4/HARD WITH 1 MILE @ EP/Z1/EASY IN BETWEEN EACH"] = Workout(
        `<IntervalsT Repeat='3' OnDuration='${power.meters_from_miles}' OffDuration='${power.meters_from_miles}' OnPower='${power.runZone4}' OffPower='${power.runZone1}' pace='3' />`,
        3 * power.gtd(1, power.runZone4) + 2 * power.gtd(1, power.runZone1))

    run["RUN 5K AT GOAL RACE PACE"] = Workout(
            `<SteadyState Duration='${5000}' Power='${power.runZoneTRP}' pace='3' />`,
            power.gtd(5000, power.runZoneTRP, False))

    run["4 X 1 MILE (4') @ ZONE 4"] = Workout(
        `<IntervalsT Repeat='3' OnDuration='${power.meters_from_miles}' OffDuration='${power.gdt(240, power.runZoneTRP)}' OnPower='${power.runZone4}' OffPower='${power.runZoneTRP}' pace='3' />`,
        4 * (power.gtd(1, power.runZone4) + 4 * 60))

    run["5 MILE (4') @ TP/Z4/HARD"] = Workout(
        `<IntervalsT Repeat='1' OnDuration='${5 * power.meters_from_miles}' OffDuration='${power.gdt(300, power.runZone1)}' OnPower='${power.runZone4}' OffPower='${power.runZone1}' pace='3' />`,
        power.gtd(5, power.runZone4) + 4 * 60)
    run["5 MILE @ TP/Z4/HARD WITH 5' RECOVERIES IN EP/Z1/EASY"] = Workout(
        `<IntervalsT Repeat='1' OnDuration='${5 * power.meters_from_miles}' OffDuration='${power.gdt(300, power.runZone1)}' OnPower='${power.runZone4}' OffPower='${power.runZone1}' pace='3' />`,
        power.gtd(5, power.runZone4) + 5 * 60)

    run["2 X 1.5 MILE (4') @ TP/Z4/HARD"] = Workout(
        `<IntervalsT Repeat='2' OnDuration='${1.5 * power.meters_from_miles}' OffDuration='${power.gdt(240, power.runZoneTRP)}' OnPower='${power.runZone4}' OffPower='${power.runZoneTRP}' pace='3' />`,
        2 * (power.gtd(1.5, power.runZone4) + 4 * 60))
    run["2 X 1.5 MILE @ TP/Z4/HARD WITH 5' RECOVERIES IN EP/Z1/EASY"] = Workout(
        `<IntervalsT Repeat='2' OnDuration='${1.5 * power.meters_from_miles}' OffDuration='${power.gdt(300, power.runZone1)}' OnPower='${power.runZone4}' OffPower='${power.runZone1}' pace='3' />`,
        2 * (power.gtd(1.5, power.runZone4) + 5 * 60))

    run["2 X 20' (2') @ STR PACE"] = Workout(
        `<IntervalsT Repeat='2' OnDuration='${power.gdt(1200, power.runZoneTRP)}' OffDuration='${power.gdt(120, power.runZone1)}' OnPower='${power.runZoneTRP}' OffPower='${power.runZone1}' pace='3' />`,
        51 * 60)
    run["3 X 15 (2') @ STR PACE"] = Workout(
        `<IntervalsT Repeat='3' OnDuration='${power.gdt(900, power.runZoneTRP)}' OffDuration='${power.gdt(120, power.runZone1)}' OnPower='${power.runZoneTRP}' OffPower='${power.runZone1}' pace='3' />`,
        51 * 60)
    run["3 X 2' (1') @ ZONE 2"] = Workout(
        `<IntervalsT Repeat='3' OnDuration='${power.gdt(120, power.runZone2)}' OffDuration='${power.gdt(60, power.runZone1)}' OnPower='${power.runZone2}' OffPower='${power.runZone1}' pace='3' />`,
        9 * 60)
    run["3 X 3' (1') @ ZONE 2"] = Workout(
        `<IntervalsT Repeat='3' OnDuration='${power.gdt(180, power.runZone2)}' OffDuration='${power.gdt(60, power.runZone1)}' OnPower='${power.runZone2}' OffPower='${power.runZone1}' pace='3' />`,
        12 * 60)
    run["4 X 6' (3') @ SPD PACE"] = Workout(
        `<IntervalsT Repeat='5' OnDuration='${power.gdt(360, power.runZoneSPD)}' OffDuration='${power.gdt(180, power.runZone1)}' OnPower='${power.runZoneSPD}' OffPower='${power.runZone1}' pace='3' />`,
        36 * 60)
    run["5 X 5' (3') @ SPD PACE"] = Workout(
        `<IntervalsT Repeat='5' OnDuration='${power.gdt(300, power.runZoneSPD)}' OffDuration='${power.gdt(180, power.runZone1)}' OnPower='${power.runZoneSPD}' OffPower='${power.runZone1}' pace='3' />`,
        40 * 60)
    run["6 X 4' (3') @ SPD PACE"] = Workout(
        `<IntervalsT Repeat='5' OnDuration='${power.gdt(240, power.runZoneSPD)}' OffDuration='${power.gdt(180, power.runZone1)}' OnPower='${power.runZoneSPD}' OffPower='${power.runZone1}' pace='3' />`,
        42 * 60)
    run["8 X 3' (2') @ SPD PACE"] = Workout(
        `<IntervalsT Repeat='8' OnDuration='${power.gdt(180, power.runZoneSPD)}' OffDuration='${power.gdt(120, power.runZone1)}' OnPower='${power.runZoneSPD}' OffPower='${power.runZone1}' pace='3' />`,
        40 * 60)
    run["12 X 2' (2') @ SPD PACE"] = Workout(
        `<IntervalsT Repeat='12' OnDuration='${power.gdt(120, power.runZoneSPD)}' OffDuration='${power.gdt(120, power.runZone1)}' OnPower='${power.runZoneSPD}' OffPower='${power.runZone1}' pace='3' />`,
        48 * 60)

    run["RUN 3 MILES @ ZONE 2, PUSH THE LAST MILE @ ZONE 3 IF YOU ARE ABLE"] = Workout(
            `<SteadyState Duration='${3 * power.meters_from_miles}' Power='${power.runZone2}' pace='3' />`,
            power.gtd(3 * power.meters_from_miles, power.runZone2, False))
    run["RUN 4 MILES @ TRP, PUSH THE LAST MILE @ ZONE 2 IF YOU ARE ABLE"] = Workout(
            `<SteadyState Duration='${4 * power.meters_from_miles}' Power='${power.runZoneTRP}' pace='3' />`,
            power.gtd(4 * power.meters_from_miles, power.runZoneTRP, False))
    run["RUN 4 MILES @ ZONE 2, PUSH THE LAST MILE @ ZONE 3 IF YOU ARE ABLE"] = Workout(
            `<SteadyState Duration='${4 * power.meters_from_miles}' Power='${power.runZone2}' pace='3' />`,
            power.gtd(4 * power.meters_from_miles, power.runZone2, False))
    run["RUN 5 MILES @ TRP, PUSH THE LAST MILE @ ZONE 2 IF YOU ARE ABLE"] = Workout(
            `<SteadyState Duration='${5 * power.meters_from_miles}' Power='${power.runZoneTRP}' pace='3' />`,
            power.gtd(5 * power.meters_from_miles, power.runZoneTRP, False))
    run["RUN 5 MILES @ ZONE 2, PUSH THE LAST MILE @ ZONE 3 IF YOU ARE ABLE"] = Workout(
            `<SteadyState Duration='${5 * power.meters_from_miles}' Power='${power.runZone2}' pace='3' />`,
            power.gtd(5 * power.meters_from_miles, power.runZone2, False))
    run["RUN 6 MILES @ TRP, PUSH THE LAST MILE @ ZONE 2 IF YOU ARE ABLE"] = Workout(
            `<SteadyState Duration='${6 * power.meters_from_miles}' Power='${power.runZoneTRP}' pace='3' />`,
            power.gtd(6 * power.meters_from_miles, power.runZoneTRP, False))
    run["RUN 7 MILES @ TRP, PUSH THE LAST MILE @ ZONE 2 IF YOU ARE ABLE"] = Workout(
            `<SteadyState Duration='${7 * power.meters_from_miles}' Power='${power.runZoneTRP}' pace='3' />`,
            power.gtd(7 * power.meters_from_miles, power.runZoneTRP, False))

    run["STEADY RUNNING FOR 4 MILES @TRP WITH BURSTS OF SPEED AT @ ZONE 4"] = run["RUN 4 MILES @ TRP, PUSH THE LAST MILE @ ZONE 2 IF YOU ARE ABLE"]
    run["STEADY RUNNING FOR 5 MILES @TRP WITH BURSTS OF SPEED AT @ ZONE 4"] = run["RUN 5 MILES @ TRP, PUSH THE LAST MILE @ ZONE 2 IF YOU ARE ABLE"]

    run["RUN 5 LONG HILLS @ ZONE 3, PUSH THE LAST BIT OVER THE TOP AT @ ZONE 4"] = Workout(
        `<IntervalsT Repeat='5' OnDuration='${power.gdt(60, power.runZone3)}' OffDuration='${power.gdt(120, power.runZone1)}' OnPower='${power.runZone3}' OffPower='${power.runZone1}' pace='3' />`,
        24 * 60)
    run["RUN 6 HILLS @ ZONE 3, PUSH THE LAST BIT OVER THE TOP AT @ ZONE 4"] = Workout(
        `<IntervalsT Repeat='6' OnDuration='${power.gdt(60, power.runZone3)}' OffDuration='${power.gdt(120, power.runZone1)}' OnPower='${power.runZone3}' OffPower='${power.runZone1}' pace='3' />`,
        24 * 60)
    run["RUN 8 HILLS @ ZONE 3, PUSH THE LAST BIT OVER THE TOP AT @ ZONE 4"] = Workout(
        `<IntervalsT Repeat='8' OnDuration='${power.gdt(60, power.runZone3)}' OffDuration='${power.gdt(120, power.runZone1)}' OnPower='${power.runZone3}' OffPower='${power.runZone1}' pace='3' />`,
        24 * 60)

    return run;
};
