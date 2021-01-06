import Workout from './Workout';
import PowerLevels from './PowerLevels';

export default (test_distance, test_time) => {
    
    power = PowerLevels(test_distance, test_time)
    
    warmUp = {};

    warmUp.bike["WU: 5-10', THEN 3 X 1' (1') @ ZONE 4, TO OPEN UP YOUR LEGS"] = Workout(
        `<Warmup Duration='540' PowerLow='${power.bikeZone0}' PowerHigh='${power.bikeZone3}'/>\n
        <IntervalsT Repeat='3' OnDuration='60' OffDuration='60' OnPower='${power.bikeZone4}' OffPower='${power.bikeZone0}'/>`,
        10 * 60)


    warmUp.bike["WU: 15' EASY, INCLUDE 4 X 30'' SPINUPS"] = Workout(
        `<Warmup Duration='900' PowerLow='${power.bikeZone0}' PowerHigh='${power.bikeZone3}'/>\n
        <IntervalsT Repeat='4' OnDuration='30' OffDuration='30' OnPower='${power.bikeZone5}' OffPower='${power.bikeZone0}'/>`,
        19 * 60)

    warmUp.bike["WU: 10' TO 15', THEN 3 X 1' (1') @ ZONE 4, TO OPEN UP YOUR LEGS"] = Workout(
        `<Warmup Duration='900' PowerLow='${power.bikeZone0}' PowerHigh='${power.bikeZone3}'/>\n
        <IntervalsT Repeat='3' OnDuration='60' OffDuration='60' OnPower='${power.bikeZone4}' OffPower='${power.bikeZone0}'/>`,
        21 * 60)
    warmUp.bike["WU: 10-15' EASY, 3 X 1' (1') @ 95-100%/ZONE4/HARD"] = warmUp.bike["WU: 10' TO 15', THEN 3 X 1' (1') @ ZONE 4, TO OPEN UP YOUR LEGS"]
    warmUp.bike["WU: 10' TO 15' EASY, 3 X 1' (1') @ 95-100%/ZONE4/HARD"] = warmUp.bike["WU: 10' TO 15', THEN 3 X 1' (1') @ ZONE 4, TO OPEN UP YOUR LEGS"]
    warmUp.bike["WU: 10' TO 15', THEN 3 X 1' (1') @ 95-100%/ ZONE 4, TO OPEN UP YOUR LEGS"] = warmUp.bike["WU: 10' TO 15', THEN 3 X 1' (1') @ ZONE 4, TO OPEN UP YOUR LEGS"]

    warmUp.bike["WU: 10-15' EASY, THEN 3 X 1' (1') HARD / Z4 / 100% TO OPEN UP YOUR LEGS"] = warmUp.bike["WU: 10' TO 15', THEN 3 X 1' (1') @ ZONE 4, TO OPEN UP YOUR LEGS"]
    warmUp.bike["WU: 10-15' EASY, THEN 3 X 1' (1') ZONE 4 TO OPEN UP YOUR LEGS"] = warmUp.bike["WU: 10' TO 15', THEN 3 X 1' (1') @ ZONE 4, TO OPEN UP YOUR LEGS"]
    warmUp.bike["WU: 10-15' EASY, THEN 3 X 1' (1') ZONE 4 TO WARM UP"] = warmUp.bike["WU: 10' TO 15', THEN 3 X 1' (1') @ ZONE 4, TO OPEN UP YOUR LEGS"]

    warmUp.bike["WU: 10' TO 15' EASY, 3 X 1' (1') @ 95-100%/ZONE4/HARD.MS: 2 X 8' (2') @ 95-100%/ZONE4/HARD"] = Workout(
        `<Warmup Duration='900' PowerLow='${power.bikeZone0}' PowerHigh='${power.bikeZone3}'/>\n
        <IntervalsT Repeat='3' OnDuration='60' OffDuration='60' OnPower='${power.bikeZone4}' OffPower='${power.bikeZone0}'/>\n
        <IntervalsT Repeat='2' OnDuration='480' OffDuration='120' OnPower='${power.bikeZone4}' OffPower='${power.bikeZone0}'/>`,
        41 * 60)

    warmUp.bike["WU: 15' TO 20' @ 60-65%/ZONE1/EASY"] = Workout(
        `<Warmup Duration='1200' PowerLow='${power.bikeZone1}' PowerHigh='${power.bikeZone2}'/>`,
        20 * 60)
    warmUp.bike["WU: 15-20' @ 60-65%/ZONE1/EASY"] = warmUp.bike["WU: 15' TO 20' @ 60-65%/ZONE1/EASY"]
    warmUp.bike["WU: 20' @ ZONE 1"] = warmUp.bike["WU: 15' TO 20' @ 60-65%/ZONE1/EASY"]

    warmUp.bike["WARM UP: 30' OF EASY TO STEADY SPINNING"] = Workout(
        `<Warmup Duration='1800' PowerLow='${power.bikeZone1}' PowerHigh='${power.bikeZone2}'/>`,
        30 * 60)

    warmUp.bike["WARM UP: 60' OF EASY TO STEADY SPINNING"] = Workout(
        `<Warmup Duration='3600' PowerLow='${power.bikeZone1}' PowerHigh='${power.bikeZone2}'/>`,
        60 * 60)

    warmUp.bike["WU: 10' EASY, THEN 8' BUILDING FROM 50% ESTIMATED FTP TO 100% ESTIMATED FTP IN 2' INCREMENTS, 2' EASY"] = Workout(
        `<Warmup Duration='600' PowerLow='${power.bikeZone0}' PowerHigh='${power.bikeZone2}'/>\n
        <IntervalsT Repeat='3' OnDuration='60' OffDuration='60' OnPower='${power.bikeZone4}' OffPower='${power.bikeZone0}'/>\n
        <SteadyState Duration='120' Power='0.50'/>\n
        <SteadyState Duration='120' Power='0.67'/>\n
        <SteadyState Duration='120' Power='0.83'/>\n
        <SteadyState Duration='120' Power='1.00'/>\n
        <SteadyState Duration='120' Power='${power.bikeZone1}'/>`,
        20 * 60)

    warmUp.bike["WU: 10 TO 15' OF SPINNING IN ZONES 1 AND 2"] = Workout(
        `<Warmup Duration='900' PowerLow='${power.bikeZone1}' PowerHigh='${power.bikeZone2}'/>`,
        15 * 60)
    warmUp.bike["WU: 15' @ ZONE 1 TO ZONE 2"] = warmUp.bike["WU: 10 TO 15' OF SPINNING IN ZONES 1 AND 2"]

    warmUp.bike["WARM UP 20' IN ZONES 1 TO 2"] = Workout(
        `<Warmup Duration='1200' PowerLow='${power.bikeZone1}' PowerHigh='${power.bikeZone2}'/>`,
        20 * 60)

    warmUp.bike["WARM UP FOR ALL ABILITIES: 20' TO 30' @ ZONE 1 TO ZONE 2"] = Workout(
        `<Warmup Duration='1800' PowerLow='${power.bikeZone1}' PowerHigh='${power.bikeZone2}'/>`,
        30 * 60)
    warmUp.bike["WU: 20' TO 30' @ ZONE 1 TO ZONE 2"] = warmUp.bike["WARM UP FOR ALL ABILITIES: 20' TO 30' @ ZONE 1 TO ZONE 2"]
    warmUp.bike["WARM UP 20' TO 30' IN ZONES 1 TO 2"] = warmUp.bike["WARM UP FOR ALL ABILITIES: 20' TO 30' @ ZONE 1 TO ZONE 2"]
    warmUp.bike["WU: 20-30' @ ZONE 1 TO ZONE 2"] = warmUp.bike["WARM UP FOR ALL ABILITIES: 20' TO 30' @ ZONE 1 TO ZONE 2"]
    warmUp.bike["WU: 20-30' @ ZONE 1 TO ZONE 2"] = warmUp.bike["WARM UP FOR ALL ABILITIES: 20' TO 30' @ ZONE 1 TO ZONE 2"]
    warmUp.bike["WU: 30' @ ZONE 1 TO ZONE 2"] = warmUp.bike["WARM UP FOR ALL ABILITIES: 20' TO 30' @ ZONE 1 TO ZONE 2"]

    warmUp.bike["WU: 45' @ ZONE 1 TO ZONE 2"] = Workout(
        `<Warmup Duration='2700' PowerLow='${power.bikeZone1}' PowerHigh='${power.bikeZone2}'/>`,
        45 * 60)


    warmUp.run["WARM UP: 10' TO 15' @ ZONE 1 TO ZONE 2 RUNNING"] = Workout(
        `<Warmup Duration='${power.gdt(900, [power.runZone1, power.runZone2])}' PowerLow='${power.runZone1}' PowerHigh='${power.runZone2}' pace='3' />`,
        15 * 60)
    warmUp.run["WU: 15' INCLUDING 4 X 30'' AT 5K PACE"] = Workout(
        `<Warmup Duration='${power.gdt(660, [power.runZone1, power.runZone2])}' PowerLow='${power.runZone1}' PowerHigh='${power.runZone2}' pace='3' />\n
        <IntervalsT Repeat='4' OnDuration='${power.gdt(30, power.runZone4)}' OffDuration='${power.gdt(30, power.runZoneTRP)}' OnPower='${power.runZone4}' OffPower='${power.runZoneTRP}' pace='3' />`,
        15 * 60)
    warmUp.run["WU: 15' INCLUDING 4 X 30 SECS AT 5K PACE"] = warmUp.run["WU: 15' INCLUDING 4 X 30'' AT 5K PACE"]
    warmUp.run["WU: 15' ZONE 1, 6 X 30'' STRIDES"] = Workout(
        `<Warmup Duration='${power.gdt(900, [power.runZone1, power.runZone2])}' PowerLow='${power.runZone1}' PowerHigh='${power.runZone2}' pace='3' />\n
        <IntervalsT Repeat='6' OnDuration='${power.gdt(30, power.runZone4)}' OffDuration='${power.gdt(30, power.runZoneTRP)}' OnPower='${power.runZone4}' OffPower='${power.runZoneTRP}' pace='3' />`,
        21 * 60)

        return warmUp;
}