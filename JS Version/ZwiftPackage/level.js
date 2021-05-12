module.exports = (Workout, power) => {    
    levels = {
        bike: {},
        run: {},
    };    
    
    const warmup15BikeSprints = `<Warmup Duration='600' PowerLow='${power.bikeZone0}' PowerHigh='${power.bikeZone3}'/>
                <IntervalsT Repeat='4' OnDuration='30' OffDuration='30' OnPower='${power.bikeZone5}' OffPower='${power.bikeZone0}'/>
                <SteadyState Duration='60' Power='${power.bikeZone2}'/>`;
    const warmup30BikeSprints = `<Warmup Duration='900' PowerLow='${power.bikeZone0}' PowerHigh='${power.bikeZone3}'/>
                <IntervalsT Repeat='4' OnDuration='30' OffDuration='30' OnPower='${power.bikeZone5}' OffPower='${power.bikeZone0}'/>
                <SteadyState Duration='660' Power='${power.bikeZone2}'/>`;
    const warmup60BikeSprints = `<Warmup Duration='1500' PowerLow='${power.bikeZone0}' PowerHigh='${power.bikeZone3}'/>
                <IntervalsT Repeat='4' OnDuration='30' OffDuration='30' OnPower='${power.bikeZone5}' OffPower='${power.bikeZone0}'/>
                <SteadyState Duration='1860' Power='${power.bikeZone2}'/>`;
                
    // "146ec384-1a42-4d29-afb9-830e9905e8ec"
    levels.bike["2020 Half Run Focused Plan (All Levels) 12 weeks_7_Bike"] = new Workout([
                `<Warmup Duration='600' PowerLow='${power.bikeZone0}' PowerHigh='${power.bikeZone2}'/>
                <SteadyState Duration='6600' Power='${power.bikeZone2}'/>`,
                `<Warmup Duration='600' PowerLow='${power.bikeZone0}' PowerHigh='${power.bikeZone2}'/>
                <SteadyState Duration='1800' Power='${power.bikeZone3}'/>
                <SteadyState Duration='4800' Power='${power.bikeZone2}'/>`,
                `<Warmup Duration='600' PowerLow='${power.bikeZone0}' PowerHigh='${power.bikeZone2}'/>
                <SteadyState Duration='2700' Power='${power.bikeZone3}'/>
                <SteadyState Duration='3900' Power='${power.bikeZone2}'/>`],
                [120 * 60, 120 * 60, 120 * 60])
    levels.bike["2020 Half Run Focused Plan (All Levels) 12 weeks_14_Bike"] = new Workout([
                `<Warmup Duration='600' PowerLow='${power.bikeZone0}' PowerHigh='${power.bikeZone2}'/>
                <SteadyState Duration='7200' Power='${power.bikeZone2}'/>`,
                `<Warmup Duration='600' PowerLow='${power.bikeZone0}' PowerHigh='${power.bikeZone2}'/>
                <SteadyState Duration='1800' Power='${power.bikeZone3}'/>
                <SteadyState Duration='5400' Power='${power.bikeZone2}'/>`,
                `<Warmup Duration='600' PowerLow='${power.bikeZone0}' PowerHigh='${power.bikeZone2}'/>
                <SteadyState Duration='2700' Power='${power.bikeZone3}'/>
                <SteadyState Duration='5100' Power='${power.bikeZone2}'/>`],
                [130 * 60, 130 * 60, 140 * 60])
    levels.bike["2020 Half Run Focused Plan (All Levels) 12 weeks_20_Bike"] = new Workout([
                `<Warmup Duration='600' PowerLow='${power.bikeZone0}' PowerHigh='${power.bikeZone2}'/>
                <SteadyState Duration='12000' Power='${power.bikeZone1}'/>`,
                `<Warmup Duration='600' PowerLow='${power.bikeZone0}' PowerHigh='${power.bikeZone2}'/>"
                <SteadyState Duration='13800' Power='${power.bikeZone1}'/>`,
                `<Warmup Duration='600' PowerLow='${power.bikeZone0}' PowerHigh='${power.bikeZone2}'/>"
                <SteadyState Duration='15600' Power='${power.bikeZone1}'/>`],
                [210 * 60, 240 * 60, 270 * 60])
    levels.bike["2020 Half Run Focused Plan (All Levels) 12 weeks_28_Bike"] = new Workout([
                `<Warmup Duration='600' PowerLow='${power.bikeZone0}' PowerHigh='${power.bikeZone2}'/>
                <SteadyState Duration='1500' Power='${power.bikeZone3}'/>
                <SteadyState Duration='5700' Power='${power.bikeZone2}'/>`,
                `<Warmup Duration='600' PowerLow='${power.bikeZone0}' PowerHigh='${power.bikeZone2}'/>
                <SteadyState Duration='2400' Power='${power.bikeZone3}'/>
                <SteadyState Duration='5400' Power='${power.bikeZone2}'/>`,
                `<Warmup Duration='600' PowerLow='${power.bikeZone0}' PowerHigh='${power.bikeZone2}'/>
                <SteadyState Duration='3600' Power='${power.bikeZone3}'/>
                <SteadyState Duration='4800' Power='${power.bikeZone2}'/>`],
                [130 * 60, 140 * 60, 150 * 60])

    levels.run["2020 Half Run Focused Plan (All Levels) 12 weeks_6_Run"] = new Workout([
                `<Warmup Duration='600' PowerLow='${power.bikeZone0}' PowerHigh='${power.bikeZone3}'/>
                <SteadyState Duration='${power.gdt(600, power.runZone2)}' Power='${power.runZone2}' pace='3' />`,
                `<Warmup Duration='600' PowerLow='${power.bikeZone0}' PowerHigh='${power.bikeZone3}'/>
                <SteadyState Duration='${power.gdt(900, power.runZone2)}' Power='${power.runZone2}' pace='3' />`,
                `<Warmup Duration='600' PowerLow='${power.bikeZone0}' PowerHigh='${power.bikeZone3}'/>
                <SteadyState Duration='${power.gdt(1200, power.runZone2)}' Power='${power.runZone2}' pace='3' />`],
                [20 * 60, 25 * 60, 30 * 60])
    levels.run["2020 Half Run Focused Plan (All Levels) 12 weeks_13_Run"] = new Workout([
                `<Warmup Duration='600' PowerLow='${power.bikeZone0}' PowerHigh='${power.bikeZone3}'/>
                <SteadyState Duration='${power.gdt(900, power.runZone2)}' Power='${power.runZone2}' pace='3' />`,
                `<Warmup Duration='600' PowerLow='${power.bikeZone0}' PowerHigh='${power.bikeZone3}'/>
                <SteadyState Duration='${power.gdt(1200, power.runZone2)}' Power='${power.runZone2}' pace='3' />`,
                `<Warmup Duration='600' PowerLow='${power.bikeZone0}' PowerHigh='${power.bikeZone3}'/>
                <SteadyState Duration='${power.gdt(1500, power.runZone2)}' Power='${power.runZone2}' pace='3' />`],
                [25 * 60, 30 * 60, 35 * 60])
    levels.run["2020 Half Run Focused Plan (All Levels) 12 weeks_27_Run"] = new Workout([
                `<Warmup Duration='600' PowerLow='${power.bikeZone0}' PowerHigh='${power.bikeZone3}'/>
                <SteadyState Duration='${power.gdt(1200, power.runZone2)}' Power='${power.runZone2}' pace='3' />`,
                `<Warmup Duration='600' PowerLow='${power.bikeZone0}' PowerHigh='${power.bikeZone3}'/>
                <SteadyState Duration='${power.gdt(1500, power.runZone2)}' Power='${power.runZone2}' pace='3' />`,
                `<Warmup Duration='600' PowerLow='${power.bikeZone0}' PowerHigh='${power.bikeZone3}'/>
                <SteadyState Duration='${power.gdt(1800, power.runZone2)}' Power='${power.runZone2}' pace='3' />`],
                [30 * 60, 35 * 60, 40 * 60])
    levels.run["2020 Half Run Focused Plan (All Levels) 12 weeks_30_Run"] = new Workout([
                `<SteadyState Duration='${power.gdt(600, power.runZone2)}' Power='${power.runZone2}' pace='3' />
                <SteadyState Duration='${power.gdt(600, power.runZone3)}' Power='${power.runZone3}' pace='3' />`,
                `<SteadyState Duration='${power.gdt(900, power.runZone2)}' Power='${power.runZone2}' pace='3' />
                <SteadyState Duration='${power.gdt(900, power.runZone3)}' Power='${power.runZone3}' pace='3' />`,
                `<SteadyState Duration='${power.gdt(1200, power.runZone2)}' Power='${power.runZone2}' pace='3' />
                <SteadyState Duration='${power.gdt(1200, power.runZone3)}' Power='${power.runZone3}' pace='3' />`],
                [20 * 60, 30 * 60, 40 * 60])
    levels.run["2020 Half Run Focused Plan (All Levels) 12 weeks_34_Run"] = levels.run["2020 Half Run Focused Plan (All Levels) 12 weeks_27_Run"]
    levels.run["2020 Half Run Focused Plan (All Levels) 12 weeks_37_Run"] = levels.run["2020 Half Run Focused Plan (All Levels) 12 weeks_30_Run"]
    levels.run["2020 Half Run Focused Plan (All Levels) 12 weeks_41_Run"] = levels.run["2020 Half Run Focused Plan (All Levels) 12 weeks_27_Run"]
    levels.run["2020 Half Run Focused Plan (All Levels) 12 weeks_44_Run"] = levels.run["2020 Half Run Focused Plan (All Levels) 12 weeks_30_Run"]
    levels.run["2020 Half Run Focused Plan (All Levels) 12 weeks_51_Run"] = levels.run["2020 Half Run Focused Plan (All Levels) 12 weeks_30_Run"]
    levels.run["2020 Half Run Focused Plan (All Levels) 12 weeks_55_Run"] = levels.run["2020 Half Run Focused Plan (All Levels) 12 weeks_27_Run"]
    levels.run["2020 Half Run Focused Plan (All Levels) 12 weeks_58_Run"] = levels.run["2020 Half Run Focused Plan (All Levels) 12 weeks_30_Run"]
    levels.run["2020 Half Run Focused Plan (All Levels) 12 weeks_73_Run"] = levels.run["2020 Half Run Focused Plan (All Levels) 12 weeks_30_Run"]

    // d2d76305-e16e-46da-8855-deb67ac07193
    levels.bike["d2d76305-e16e-46da-8855-deb67ac07193_2"] = new Workout([
        `${warmup15BikeSprints}
        <IntervalsT Repeat='6' OnDuration='300' OffDuration='180' OnPower='${power.bikeZone4}' OffPower='${power.bikeZone2}'/>`,
        `${warmup15BikeSprints}
        <IntervalsT Repeat='5' OnDuration='360' OffDuration='120' OnPower='${power.bikeZone4}' OffPower='${power.bikeZone2}'/>`,
        `${warmup15BikeSprints}
        <IntervalsT Repeat='3' OnDuration='600' OffDuration='180' OnPower='${power.bikeZone4}' OffPower='${power.bikeZone2}'/>`],
        [63 * 60, 55 * 60, 54 * 60])
    levels.bike["d2d76305-e16e-46da-8855-deb67ac07193_4"] = new Workout([
        `${warmup15BikeSprints}
        <IntervalsT Repeat='4' OnDuration='600' OffDuration='300' OnPower='${power.bikeZone3}' OffPower='${power.bikeZone2}'/>`,
        `${warmup15BikeSprints}
        <IntervalsT Repeat='3' OnDuration='780' OffDuration='300' OnPower='${power.bikeZone3}' OffPower='${power.bikeZone2}'/>`,
        `${warmup15BikeSprints}
        <IntervalsT Repeat='2' OnDuration='1200' OffDuration='300' OnPower='${power.bikeZone3}' OffPower='${power.bikeZone2}'/>`],
        [75 * 60, 69 * 60, 65 * 60])
    levels.bike["d2d76305-e16e-46da-8855-deb67ac07193_6"] = new Workout([
        `<SteadyState Duration='10800' Power='${power.bikeZone1}'/>
        <IntervalsT Repeat='4' OnDuration='600' OffDuration='300' OnPower='${power.bikeZone2}' OffPower='${power.bikeZone1}'/>`,
        `<SteadyState Duration='9600' Power='${power.bikeZone1}'/>
        <IntervalsT Repeat='5' OnDuration='720' OffDuration='240' OnPower='${power.bikeZone2_5}' OffPower='${power.bikeZone1}'/>`,
        `<SteadyState Duration='8400' Power='${power.bikeZone1}'/>
        <IntervalsT Repeat='4' OnDuration='1200' OffDuration='300' OnPower='${power.bikeZone3}' OffPower='${power.bikeZone1}'/>`],
        [240 * 60, 240 * 60, 240 * 60])
    levels.bike["d2d76305-e16e-46da-8855-deb67ac07193_7"] = new Workout([
        `${warmup15BikeSprints}
        <SteadyState Duration='1500' Power='${power.bikeZone2}'/>`,
        `${warmup15BikeSprints}
        <SteadyState Duration='1500' Power='${power.bikeZone2_5}'/>`,
        `${warmup15BikeSprints}
        <SteadyState Duration='1500' Power='${power.bikeZone3}'/>`],
        [40 * 60, 40 * 60, 40 * 60])
    levels.bike["d2d76305-e16e-46da-8855-deb67ac07193_9"] = new Workout([
        `${warmup15BikeSprints}
        <IntervalsT Repeat='7' OnDuration='300' OffDuration='180' OnPower='${power.bikeZone4}' OffPower='${power.bikeZone2}'/>`,
        `${warmup15BikeSprints}
        <IntervalsT Repeat='5' OnDuration='420' OffDuration='120' OnPower='${power.bikeZone4}' OffPower='${power.bikeZone2}'/>`,
        `${warmup15BikeSprints}
        <IntervalsT Repeat='3' OnDuration='720' OffDuration='180' OnPower='${power.bikeZone4}' OffPower='${power.bikeZone2}'/>`],
        [56 * 60, 45 * 60, 45 * 60])
    levels.bike["d2d76305-e16e-46da-8855-deb67ac07193_11"] = new Workout([
        `${warmup15BikeSprints}
        <IntervalsT Repeat='4' OnDuration='720' OffDuration='300' OnPower='${power.bikeZone3}' OffPower='${power.bikeZone2}'/>`,
        `${warmup15BikeSprints}
        <IntervalsT Repeat='3' OnDuration='960' OffDuration='300' OnPower='${power.bikeZone3}' OffPower='${power.bikeZone2}'/>`,
        `${warmup15BikeSprints}
        <IntervalsT Repeat='2' OnDuration='1500' OffDuration='300' OnPower='${power.bikeZone3}' OffPower='${power.bikeZone2}'/>`],
        [68 * 60, 62 * 60, 60 * 60])
    levels.bike["d2d76305-e16e-46da-8855-deb67ac07193_13"] = new Workout([
        `<SteadyState Duration='12000' Power='${power.bikeZone1}'/>
        <IntervalsT Repeat='3' OnDuration='960' OffDuration='300' OnPower='${power.bikeZone2}' OffPower='${power.bikeZone1}'/>
        <SteadyState Duration='420' Power='${power.bikeZone1}'/>`,
        `<SteadyState Duration='10800' Power='${power.bikeZone1}'/>
        <IntervalsT Repeat='4' OnDuration='1080' OffDuration='270' OnPower='${power.bikeZone2_5}' OffPower='${power.bikeZone1}'/>`,
        `<SteadyState Duration='9000' Power='${power.bikeZone1}'/>
        <IntervalsT Repeat='4' OnDuration='1500' OffDuration='300' OnPower='${power.bikeZone3}' OffPower='${power.bikeZone1}'/>`],
        [270 * 60, 270 * 60, 270 * 60])
    levels.bike["d2d76305-e16e-46da-8855-deb67ac07193_14"] = new Workout([
        `${warmup15BikeSprints}
        <SteadyState Duration='1800' Power='${power.bikeZone2}'/>`,
        `${warmup15BikeSprints}
        <SteadyState Duration='1800' Power='${power.bikeZone2_5}'/>`,
        `${warmup15BikeSprints}
        <SteadyState Duration='1800' Power='${power.bikeZone3}'/>`],
        [45 * 60, 45 * 60, 45 * 60])
    levels.bike["d2d76305-e16e-46da-8855-deb67ac07193_16"] = new Workout([
        `${warmup15BikeSprints}
        <IntervalsT Repeat='5' OnDuration='540' OffDuration='180' OnPower='${power.bikeZone4}' OffPower='${power.bikeZone2}'/>`,
        `${warmup15BikeSprints}
        <IntervalsT Repeat='4' OnDuration='660' OffDuration='120' OnPower='${power.bikeZone4}' OffPower='${power.bikeZone2}'/>`,
        `${warmup15BikeSprints}
        <IntervalsT Repeat='3' OnDuration='900' OffDuration='180' OnPower='${power.bikeZone4}' OffPower='${power.bikeZone2}'/>`],
        [60 * 60, 52 * 60, 54 * 60])
    levels.bike["d2d76305-e16e-46da-8855-deb67ac07193_18"] = new Workout([
        `${warmup15BikeSprints}
        <IntervalsT Repeat='4' OnDuration='900' OffDuration='300' OnPower='${power.bikeZone3}' OffPower='${power.bikeZone2}'/>`,
        `${warmup15BikeSprints}
        <IntervalsT Repeat='3' OnDuration='1200' OffDuration='300' OnPower='${power.bikeZone3}' OffPower='${power.bikeZone2}'/>`,
        `${warmup15BikeSprints}
        <IntervalsT Repeat='2' OnDuration='1800' OffDuration='300' OnPower='${power.bikeZone3}' OffPower='${power.bikeZone2}'/>`],
        [80 * 60, 75 * 60, 70 * 60])
    levels.bike["d2d76305-e16e-46da-8855-deb67ac07193_20"] = new Workout([
        `<SteadyState Duration='13200' Power='${power.bikeZone1}'/>
        <IntervalsT Repeat='3' OnDuration='1200' OffDuration='400' OnPower='${power.bikeZone2}' OffPower='${power.bikeZone1}'/>`,
        `<SteadyState Duration='12000' Power='${power.bikeZone1}'/>
        <IntervalsT Repeat='4' OnDuration='1200' OffDuration='300' OnPower='${power.bikeZone2_5}' OffPower='${power.bikeZone1}'/>`,
        `<SteadyState Duration='9600' Power='${power.bikeZone1}'/>
        <IntervalsT Repeat='4' OnDuration='1800' OffDuration='300' OnPower='${power.bikeZone3}' OffPower='${power.bikeZone1}'/>`],
        [300 * 60, 300 * 60, 300 * 60])
    levels.bike["d2d76305-e16e-46da-8855-deb67ac07193_21"] = new Workout([
        `${warmup15BikeSprints}
        <SteadyState Duration='1950' Power='${power.bikeZone2}'/>`,
        `${warmup15BikeSprints}
        <SteadyState Duration='2100' Power='${power.bikeZone2_5}'/>`,
        `${warmup15BikeSprints}
        <SteadyState Duration='2100' Power='${power.bikeZone3}'/>`],
        [45 * 60, 45 * 60, 45 * 60])
    levels.bike["d2d76305-e16e-46da-8855-deb67ac07193_23"] = new Workout([
        `${warmup15BikeSprints}
        <IntervalsT Repeat='15' OnDuration='60' OffDuration='60' OnPower='${power.bikeZone5}' OffPower='${power.bikeZone2}'/>`,
        `${warmup15BikeSprints}
        <IntervalsT Repeat='10' OnDuration='90' OffDuration='120' OnPower='${power.bikeZone5}' OffPower='${power.bikeZone2}'/>`,
        `${warmup15BikeSprints}
        <IntervalsT Repeat='7' OnDuration='120' OffDuration='240' OnPower='${power.bikeZone5}' OffPower='${power.bikeZone2}'/>`],
        [60 * 60, 52 * 60, 54 * 60])
    levels.bike["d2d76305-e16e-46da-8855-deb67ac07193_25"] = new Workout([
        `${warmup15BikeSprints}
        <IntervalsT Repeat='5' OnDuration='840' OffDuration='300' OnPower='${power.bikeZone3}' OffPower='${power.bikeZone2}'/>`,
        `${warmup15BikeSprints}
        <IntervalsT Repeat='4' OnDuration='1050' OffDuration='300' OnPower='${power.bikeZone3}' OffPower='${power.bikeZone2}'/>`,
        `${warmup15BikeSprints}
        <IntervalsT Repeat='2' OnDuration='2100' OffDuration='300' OnPower='${power.bikeZone3}' OffPower='${power.bikeZone2}'/>`],
        [80 * 60, 75 * 60, 70 * 60])
    levels.bike["d2d76305-e16e-46da-8855-deb67ac07193_27"] = new Workout([
        `<SteadyState Duration='5400' Power='${power.bikeZone1}'/>
        <SteadyState Duration='16200' Power='${power.bikeZone2}'/>`,
        `<SteadyState Duration=3600' Power='${power.bikeZone1}'/>
        <SteadyState Duration='16800' Power='${power.bikeZone2}'/>
        <SteadyState Duration='1200' Power='${power.bikeZone3}'/>`,
        `<SteadyState Duration='1800' Power='${power.bikeZone1}'/>
        <SteadyState Duration='18000' Power='${power.bikeZone1}'/>
        <SteadyState Duration='1800' Power='${power.bikeZone3}'/>`],
        [300 * 60, 300 * 60, 300 * 60])
    levels.bike["d2d76305-e16e-46da-8855-deb67ac07193_28"] = new Workout([
        `<SteadyState Duration='5400' Power='${power.bikeZone1}'/>`,
        `<SteadyState Duration='5400' Power='${power.bikeZone1}'/>`,
        `<SteadyState Duration='5400' Power='${power.bikeZone1}'/>`],
        [45 * 60, 45 * 60, 45 * 60])
    levels.bike["d2d76305-e16e-46da-8855-deb67ac07193_30"] = new Workout([
        `${warmup15BikeSprints}
        <IntervalsT Repeat='8' OnDuration='300' OffDuration='180' OnPower='${power.bikeZone4}' OffPower='${power.bikeZone2}'/>`,
        `${warmup15BikeSprints}
        <IntervalsT Repeat='5' OnDuration='480' OffDuration='120' OnPower='${power.bikeZone4}' OffPower='${power.bikeZone2}'/>`,
        `${warmup15BikeSprints}
        <IntervalsT Repeat='2' OnDuration='1200' OffDuration='360' OnPower='${power.bikeZone4}' OffPower='${power.bikeZone2}'/>`],
        [60 * 60, 52 * 60, 54 * 60])
    levels.bike["d2d76305-e16e-46da-8855-deb67ac07193_32"] = new Workout([
        `${warmup15BikeSprints}
        <IntervalsT Repeat='5' OnDuration='960' OffDuration='300' OnPower='${power.bikeZone3}' OffPower='${power.bikeZone2}'/>`,
        `${warmup15BikeSprints}
        <IntervalsT Repeat='4' OnDuration='1200' OffDuration='300' OnPower='${power.bikeZone3}' OffPower='${power.bikeZone2}'/>`,
        `${warmup15BikeSprints}
        <IntervalsT Repeat='2' OnDuration='2400' OffDuration='300' OnPower='${power.bikeZone3}' OffPower='${power.bikeZone2}'/>`],
        [80 * 60, 75 * 60, 70 * 60])
    levels.bike["d2d76305-e16e-46da-8855-deb67ac07193_34"] = new Workout([
        `<SteadyState Duration='13200' Power='${power.bikeZone1}'/>
        <IntervalsT Repeat='3' OnDuration='1200' OffDuration='400' OnPower='${power.bikeZone2}' OffPower='${power.bikeZone1}'/>`,
        `<SteadyState Duration='12000' Power='${power.bikeZone1}'/>
        <IntervalsT Repeat='4' OnDuration='1200' OffDuration='300' OnPower='${power.bikeZone2_5}' OffPower='${power.bikeZone1}'/>`,
        `<SteadyState Duration='9600' Power='${power.bikeZone1}'/>
        <IntervalsT Repeat='4' OnDuration='1800' OffDuration='300' OnPower='${power.bikeZone3}' OffPower='${power.bikeZone1}'/>`],
        [300 * 60, 300 * 60, 300 * 60])
    levels.bike["d2d76305-e16e-46da-8855-deb67ac07193_35"] = new Workout([
        `<SteadyState Duration='1200' Power='${power.bikeZone3}'/>`,
        `<SteadyState Duration='1440' Power='${power.bikeZone3}'/>`,
        `<SteadyState Duration='1800' Power='${power.bikeZone4}'/>`],
        [45 * 60, 45 * 60, 45 * 60])
    levels.bike["d2d76305-e16e-46da-8855-deb67ac07193_37"] = new Workout([
        `${warmup15BikeSprints}
        <IntervalsT Repeat='5' OnDuration='600' OffDuration='240' OnPower='${power.bikeZone4}' OffPower='${power.bikeZone2}'/>`,
        `${warmup15BikeSprints}
        <IntervalsT Repeat='4' OnDuration='750' OffDuration='240' OnPower='${power.bikeZone4}' OffPower='${power.bikeZone2}'/>`,
        `${warmup15BikeSprints}
        <IntervalsT Repeat='3' OnDuration='1020' OffDuration='240' OnPower='${power.bikeZone4}' OffPower='${power.bikeZone2}'/>`],
        [60 * 60, 52 * 60, 54 * 60])
    levels.bike["d2d76305-e16e-46da-8855-deb67ac07193_39"] = new Workout([
        `${warmup15BikeSprints}
        <IntervalsT Repeat='5' OnDuration='1080' OffDuration='300' OnPower='${power.bikeZone3}' OffPower='${power.bikeZone2}'/>`,
        `${warmup15BikeSprints}
        <IntervalsT Repeat='4' OnDuration='1350' OffDuration='300' OnPower='${power.bikeZone3}' OffPower='${power.bikeZone2}'/>`,
        `${warmup15BikeSprints}
        <IntervalsT Repeat='3' OnDuration='1800' OffDuration='300' OnPower='${power.bikeZone3}' OffPower='${power.bikeZone2}'/>`],
        [80 * 60, 75 * 60, 70 * 60])
    levels.bike["d2d76305-e16e-46da-8855-deb67ac07193_41"] = new Workout([
        `<SteadyState Duration='13200' Power='${power.bikeZone1}'/>
        <IntervalsT Repeat='5' OnDuration='1080' OffDuration='300' OnPower='${power.bikeZone2}' OffPower='${power.bikeZone1}'/>`,
        `<SteadyState Duration='12000' Power='${power.bikeZone1}'/>
        <IntervalsT Repeat='5' OnDuration='1320' OffDuration='450' OnPower='${power.bikeZone2_5}' OffPower='${power.bikeZone1}'/>`,
        `<SteadyState Duration='9600' Power='${power.bikeZone1}'/>
        <IntervalsT Repeat='6' OnDuration='1500' OffDuration='300' OnPower='${power.bikeZone3}' OffPower='${power.bikeZone1}'/>`],
        [300 * 60, 300 * 60, 300 * 60])
    levels.bike["d2d76305-e16e-46da-8855-deb67ac07193_42"] = new Workout([
        `${warmup15BikeSprints}
        <SteadyState Duration='1440' Power='${power.bikeZone3}'/>`,
        `${warmup15BikeSprints}
        <SteadyState Duration='1680' Power='${power.bikeZone3}'/>`,
        `${warmup15BikeSprints}
        <SteadyState Duration='2040' Power='${power.bikeZone4}'/>`],
        [45 * 60, 45 * 60, 45 * 60])
    levels.bike["d2d76305-e16e-46da-8855-deb67ac07193_44"] = new Workout([
        `${warmup15BikeSprints}
        <IntervalsT Repeat='5' OnDuration='720' OffDuration='300' OnPower='${power.bikeZone4}' OffPower='${power.bikeZone2}'/>`,
        `${warmup15BikeSprints}
        <IntervalsT Repeat='4' OnDuration='900' OffDuration='300' OnPower='${power.bikeZone4}' OffPower='${power.bikeZone2}'/>`,
        `${warmup15BikeSprints}
        <IntervalsT Repeat='3' OnDuration='1200' OffDuration='300' OnPower='${power.bikeZone4}' OffPower='${power.bikeZone2}'/>`],
        [60 * 60, 52 * 60, 54 * 60])
    levels.bike["d2d76305-e16e-46da-8855-deb67ac07193_46"] = new Workout([
        `${warmup15BikeSprints}
        <IntervalsT Repeat='4' OnDuration='1350' OffDuration='300' OnPower='${power.bikeZone3}' OffPower='${power.bikeZone2}'/>`,
        `${warmup15BikeSprints}
        <IntervalsT Repeat='3' OnDuration='1800' OffDuration='300' OnPower='${power.bikeZone3}' OffPower='${power.bikeZone2}'/>`,
        `${warmup15BikeSprints}
        <IntervalsT Repeat='2' OnDuration='2700' OffDuration='300' OnPower='${power.bikeZone3}' OffPower='${power.bikeZone2}'/>`],
        [80 * 60, 75 * 60, 70 * 60])
    levels.bike["d2d76305-e16e-46da-8855-deb67ac07193_48"] = new Workout([
        `<SteadyState Duration='13200' Power='${power.bikeZone1}'/>
        <IntervalsT Repeat='4' OnDuration='1350' OffDuration='300' OnPower='${power.bikeZone2}' OffPower='${power.bikeZone1}'/>`,
        `<SteadyState Duration='12000' Power='${power.bikeZone1}'/>
        <IntervalsT Repeat='4' OnDuration='1650' OffDuration='450' OnPower='${power.bikeZone2_5}' OffPower='${power.bikeZone1}'/>`,
        `<SteadyState Duration='9600' Power='${power.bikeZone1}'/>
        <IntervalsT Repeat='5' OnDuration='1800' OffDuration='300' OnPower='${power.bikeZone3}' OffPower='${power.bikeZone1}'/>`],
        [300 * 60, 300 * 60, 300 * 60])
    levels.bike["d2d76305-e16e-46da-8855-deb67ac07193_49"] = new Workout([
        `${warmup15BikeSprints}
        <SteadyState Duration='1680' Power='${power.bikeZone3}'/>`,
        `${warmup15BikeSprints}
        <SteadyState Duration='1920' Power='${power.bikeZone3}'/>`,
        `${warmup15BikeSprints}
        <SteadyState Duration='2400' Power='${power.bikeZone4}'/>`],
        [45 * 60, 45 * 60, 45 * 60])
    levels.bike["d2d76305-e16e-46da-8855-deb67ac07193_51"] = new Workout([
        `${warmup15BikeSprints}
        <IntervalsT Repeat='10' OnDuration='90' OffDuration='180' OnPower='${power.bikeZone5}' OffPower='${power.bikeZone2}'/>`,
        `${warmup15BikeSprints}
        <IntervalsT Repeat='7' OnDuration='120' OffDuration='240' OnPower='${power.bikeZone5}' OffPower='${power.bikeZone2}'/>`,
        `${warmup15BikeSprints}
        <IntervalsT Repeat='4' OnDuration='60' OffDuration='120' OnPower='${power.bikeZone5}' OffPower='${power.bikeZone2}'/>
        <IntervalsT Repeat='1' OnDuration='180' OffDuration='360' OnPower='${power.bikeZone5}' OffPower='${power.bikeZone2}'/>`],
        [60 * 60, 52 * 60, 54 * 60])
    levels.bike["d2d76305-e16e-46da-8855-deb67ac07193_53"] = new Workout([
        `${warmup15BikeSprints}
        <IntervalsT Repeat='4' OnDuration='1350' OffDuration='300' OnPower='${power.bikeZone3}' OffPower='${power.bikeZone2}'/>`,
        `${warmup15BikeSprints}
        <IntervalsT Repeat='3' OnDuration='1800' OffDuration='300' OnPower='${power.bikeZone3}' OffPower='${power.bikeZone2}'/>`,
        `${warmup15BikeSprints}
        <IntervalsT Repeat='2' OnDuration='2700' OffDuration='300' OnPower='${power.bikeZone3}' OffPower='${power.bikeZone2}'/>`],
        [80 * 60, 75 * 60, 70 * 60])
    levels.bike["d2d76305-e16e-46da-8855-deb67ac07193_55"] = new Workout([
        `<SteadyState Duration='5400' Power='${power.bikeZone1}'/>
        <SteadyState Duration='16200' Power='${power.bikeZone2}'/>`,
        `<SteadyState Duration=3600' Power='${power.bikeZone1}'/>
        <SteadyState Duration='16800' Power='${power.bikeZone2}'/>
        <SteadyState Duration='1200' Power='${power.bikeZone3}'/>`,
        `<SteadyState Duration='1800' Power='${power.bikeZone1}'/>
        <SteadyState Duration='18000' Power='${power.bikeZone1}'/>
        <SteadyState Duration='1800' Power='${power.bikeZone3}'/>`],
        [300 * 60, 300 * 60, 300 * 60])
    levels.bike["d2d76305-e16e-46da-8855-deb67ac07193_56"] = new Workout([
        `<SteadyState Duration='5400' Power='${power.bikeZone1}'/>`,
        `<SteadyState Duration='5400' Power='${power.bikeZone1}'/>`,
        `<SteadyState Duration='5400' Power='${power.bikeZone1}'/>`],
        [45 * 60, 45 * 60, 45 * 60])
    levels.bike["d2d76305-e16e-46da-8855-deb67ac07193_58"] = new Workout([
        `${warmup15BikeSprints}
        <IntervalsT Repeat='2' OnDuration='180' OffDuration='180' OnPower='${power.bikeZone5}' OffPower='${power.bikeZone2}'/>
        <SteadyState Duration='600' Power='${power.bikeZone2}'/>
        <IntervalsT Repeat='6' OnDuration='30' OffDuration='150' OnPower='${power.bikeZone5}' OffPower='${power.bikeZone2}'/>`,
        `${warmup15BikeSprints}
        <IntervalsT Repeat='2' OnDuration='240' OffDuration='240' OnPower='${power.bikeZone5}' OffPower='${power.bikeZone2}'/>
        <SteadyState Duration='720' Power='${power.bikeZone2}'/>
        <IntervalsT Repeat='6' OnDuration='30' OffDuration='150' OnPower='${power.bikeZone5}' OffPower='${power.bikeZone2}'/>`,
        `${warmup15BikeSprints}
        <IntervalsT Repeat='2' OnDuration='300' OffDuration='300' OnPower='${power.bikeZone5}' OffPower='${power.bikeZone2}'/>
        <SteadyState Duration='900' Power='${power.bikeZone2}'/>
        <IntervalsT Repeat='6' OnDuration='30' OffDuration='150' OnPower='${power.bikeZone5}' OffPower='${power.bikeZone2}'/>`],
        [60 * 60, 52 * 60, 54 * 60])
    levels.bike["d2d76305-e16e-46da-8855-deb67ac07193_60"] = new Workout([
        `${warmup15BikeSprints}
            <SteadyState Duration='120' Power='${power.bikeZone3}'/>
                <SteadyState Duration='600' Power='${power.bikeZone4}'/>
                <SteadyState Duration='300' Power='${power.bikeZone2}'/>
            <SteadyState Duration='120' Power='${power.bikeZone3}'/>
                <SteadyState Duration='600' Power='${power.bikeZone4}'/>
                <SteadyState Duration='300' Power='${power.bikeZone2}'/>
            <SteadyState Duration='120' Power='${power.bikeZone3}'/>
                <SteadyState Duration='600' Power='${power.bikeZone4}'/>
                <SteadyState Duration='300' Power='${power.bikeZone2}'/>
            <SteadyState Duration='120' Power='${power.bikeZone3}'/>
                <SteadyState Duration='600' Power='${power.bikeZone4}'/>
                <SteadyState Duration='300' Power='${power.bikeZone2}'/>
            <SteadyState Duration='120' Power='${power.bikeZone3}'/>
                <SteadyState Duration='600' Power='${power.bikeZone4}'/>
                <SteadyState Duration='300' Power='${power.bikeZone2}'/>`,
        `${warmup15BikeSprints}
            <SteadyState Duration='180' Power='${power.bikeZone3}'/>
                <SteadyState Duration='720' Power='${power.bikeZone4}'/>
                <SteadyState Duration='300' Power='${power.bikeZone2}'/>
            <SteadyState Duration='180' Power='${power.bikeZone3}'/>
                <SteadyState Duration='720' Power='${power.bikeZone4}'/>
                <SteadyState Duration='300' Power='${power.bikeZone2}'/>
            <SteadyState Duration='180' Power='${power.bikeZone3}'/>
                <SteadyState Duration='720' Power='${power.bikeZone4}'/>
                <SteadyState Duration='300' Power='${power.bikeZone2}'/>
            <SteadyState Duration='180' Power='${power.bikeZone3}'/>
                <SteadyState Duration='720' Power='${power.bikeZone4}'/>
                <SteadyState Duration='300' Power='${power.bikeZone2}'/>`,
        `${warmup15BikeSprints}
            <SteadyState Duration='300' Power='${power.bikeZone3}'/>
                <SteadyState Duration='900' Power='${power.bikeZone4}'/>
                <SteadyState Duration='300' Power='${power.bikeZone2}'/>
            <SteadyState Duration='300' Power='${power.bikeZone3}'/>
                <SteadyState Duration='900' Power='${power.bikeZone4}'/>
                <SteadyState Duration='300' Power='${power.bikeZone2}'/>
            <SteadyState Duration='300' Power='${power.bikeZone3}'/>
                <SteadyState Duration='900' Power='${power.bikeZone4}'/>
                <SteadyState Duration='300' Power='${power.bikeZone2}'/>
            <SteadyState Duration='300' Power='${power.bikeZone3}'/>
                <SteadyState Duration='900' Power='${power.bikeZone4}'/>
                <SteadyState Duration='300' Power='${power.bikeZone2}'/>`],
        [80 * 60, 75 * 60, 70 * 60])
    levels.bike["d2d76305-e16e-46da-8855-deb67ac07193_62"] = new Workout([
        `${warmup30BikeSprints}
        <IntervalsT Repeat='9' OnDuration='1200' OffDuration='600' OnPower='${power.bikeZone2_5}' OffPower='${power.bikeZone1}'/>`,
        `${warmup30BikeSprints}
        <IntervalsT Repeat='9' OnDuration='1440' OffDuration='360' OnPower='${power.bikeZone2_5}' OffPower='${power.bikeZone1}'/>`,
        `${warmup30BikeSprints}
        <IntervalsT Repeat='8' OnDuration='1800' OffDuration='300' OnPower='${power.bikeZone2_5}' OffPower='${power.bikeZone1}'/>`],
        [300 * 60, 300 * 60, 300 * 60])
    levels.bike["d2d76305-e16e-46da-8855-deb67ac07193_63"] = new Workout([
        `${warmup30BikeSprints}
        <IntervalsT Repeat='6' OnDuration='480' OffDuration='240' OnPower='${power.bikeZone4}' OffPower='${power.bikeZone1}'/>`,
        `${warmup30BikeSprints}
        <IntervalsT Repeat='5' OnDuration='600' OffDuration='240' OnPower='${power.bikeZone4}' OffPower='${power.bikeZone1}'/>`,
        `${warmup30BikeSprints}
        <IntervalsT Repeat='4' OnDuration='900' OffDuration='180' OnPower='${power.bikeZone4}' OffPower='${power.bikeZone1}'/>`],
        [45 * 60, 45 * 60, 45 * 60])
    levels.bike["d2d76305-e16e-46da-8855-deb67ac07193_65"] = new Workout([
        `${warmup15BikeSprints}
        <IntervalsT Repeat='2' OnDuration='180' OffDuration='180' OnPower='${power.bikeZone5}' OffPower='${power.bikeZone2}'/>
        <SteadyState Duration='1080' Power='${power.bikeZone2}'/>
        <SteadyState Duration='720' Power='${power.bikeZone3}'/>
        <SteadyState Duration='300' Power='${power.bikeZone2}'/>
        <IntervalsT Repeat='6' OnDuration='30' OffDuration='150' OnPower='${power.bikeZone5}' OffPower='${power.bikeZone2}'/>`,
        `${warmup15BikeSprints}
        <IntervalsT Repeat='2' OnDuration='240' OffDuration='240' OnPower='${power.bikeZone5}' OffPower='${power.bikeZone2}'/>
        <SteadyState Duration='1260' Power='${power.bikeZone2}'/>
        <SteadyState Duration='900' Power='${power.bikeZone3}'/>
        <SteadyState Duration='300' Power='${power.bikeZone2}'/>
        <IntervalsT Repeat='6' OnDuration='30' OffDuration='150' OnPower='${power.bikeZone5}' OffPower='${power.bikeZone2}'/>`,
        `${warmup15BikeSprints}
        <IntervalsT Repeat='2' OnDuration='300' OffDuration='300' OnPower='${power.bikeZone5}' OffPower='${power.bikeZone2}'/>
        <SteadyState Duration='1020' Power='${power.bikeZone2}'/>
        <SteadyState Duration='1080' Power='${power.bikeZone3}'/>
        <SteadyState Duration='300' Power='${power.bikeZone2}'/>
        <IntervalsT Repeat='6' OnDuration='30' OffDuration='150' OnPower='${power.bikeZone5}' OffPower='${power.bikeZone2}'/>`,],
        [60 * 60, 52 * 60, 54 * 60])
    levels.bike["d2d76305-e16e-46da-8855-deb67ac07193_69"] = new Workout([
        `${warmup30BikeSprints}
        <IntervalsT Repeat='4' OnDuration='1200' OffDuration='600' OnPower='${power.bikeZone2_5}' OffPower='${power.bikeZone1}'/>
            <SteadyState Duration='3600' Power='${power.bikeZone2}'/>
        <IntervalsT Repeat='4' OnDuration='1200' OffDuration='600' OnPower='${power.bikeZone2_5}' OffPower='${power.bikeZone1}'/>
            <SteadyState Duration='3600' Power='${power.bikeZone2}'/>`,
        `${warmup30BikeSprints}
        <IntervalsT Repeat='4' OnDuration='1440' OffDuration='360' OnPower='${power.bikeZone2_5}' OffPower='${power.bikeZone1}'/>
            <SteadyState Duration='3600' Power='${power.bikeZone2}'/>
        <IntervalsT Repeat='4' OnDuration='1440' OffDuration='360' OnPower='${power.bikeZone2_5}' OffPower='${power.bikeZone1}'/>
            <SteadyState Duration='3600' Power='${power.bikeZone2}'/>`,
        `${warmup30BikeSprints}
        <IntervalsT Repeat='3' OnDuration='2100' OffDuration='600' OnPower='${power.bikeZone2_5}' OffPower='${power.bikeZone1}'/>
            <SteadyState Duration='3600' Power='${power.bikeZone2}'/>
        <IntervalsT Repeat='3' OnDuration='2100' OffDuration='600' OnPower='${power.bikeZone2_5}' OffPower='${power.bikeZone1}'/>
            <SteadyState Duration='3600' Power='${power.bikeZone2}'/>`],
        [300 * 60, 300 * 60, 300 * 60])
    levels.bike["d2d76305-e16e-46da-8855-deb67ac07193_70"] = new Workout([
        `${warmup30BikeSprints}
        <IntervalsT Repeat='5' OnDuration='600' OffDuration='240' OnPower='${power.bikeZone4}' OffPower='${power.bikeZone1}'/>`,
        `${warmup30BikeSprints}
        <IntervalsT Repeat='4' OnDuration='840' OffDuration='240' OnPower='${power.bikeZone4}' OffPower='${power.bikeZone1}'/>`,
        `${warmup30BikeSprints}
        <IntervalsT Repeat='3' OnDuration='1200' OffDuration='180' OnPower='${power.bikeZone4}' OffPower='${power.bikeZone1}'/>`],
        [45 * 60, 45 * 60, 45 * 60])
    levels.bike["d2d76305-e16e-46da-8855-deb67ac07193_72"] = new Workout([
        `${warmup15BikeSprints}
        <IntervalsT Repeat='2' OnDuration='180' OffDuration='180' OnPower='${power.bikeZone5}' OffPower='${power.bikeZone2}'/>
        <SteadyState Duration='960' Power='${power.bikeZone2}'/>
        <SteadyState Duration='840' Power='${power.bikeZone3}'/>
        <SteadyState Duration='300' Power='${power.bikeZone2}'/>
        <IntervalsT Repeat='6' OnDuration='30' OffDuration='150' OnPower='${power.bikeZone5}' OffPower='${power.bikeZone2}'/>`,
        `${warmup15BikeSprints}
        <IntervalsT Repeat='2' OnDuration='240' OffDuration='240' OnPower='${power.bikeZone5}' OffPower='${power.bikeZone2}'/>
        <SteadyState Duration='1260' Power='${power.bikeZone2}'/>
        <SteadyState Duration='900' Power='${power.bikeZone3}'/>
        <SteadyState Duration='300' Power='${power.bikeZone2}'/>
        <IntervalsT Repeat='7' OnDuration='30' OffDuration='150' OnPower='${power.bikeZone5}' OffPower='${power.bikeZone2}'/>`,
        `${warmup15BikeSprints}
        <IntervalsT Repeat='2' OnDuration='300' OffDuration='300' OnPower='${power.bikeZone5}' OffPower='${power.bikeZone2}'/>
        <SteadyState Duration='1020' Power='${power.bikeZone2}'/>
        <SteadyState Duration='1080' Power='${power.bikeZone3}'/>
        <SteadyState Duration='300' Power='${power.bikeZone2}'/>
        <IntervalsT Repeat='8' OnDuration='30' OffDuration='150' OnPower='${power.bikeZone5}' OffPower='${power.bikeZone2}'/>`,],
        [60 * 60, 52 * 60, 54 * 60])
    levels.bike["d2d76305-e16e-46da-8855-deb67ac07193_74"] = new Workout([
        `${warmup15BikeSprints}
            <SteadyState Duration='240' Power='${power.bikeZone3}'/>
                <SteadyState Duration='720' Power='${power.bikeZone4}'/>
                <SteadyState Duration='300' Power='${power.bikeZone2}'/>
            <SteadyState Duration='240' Power='${power.bikeZone3}'/>
                <SteadyState Duration='720' Power='${power.bikeZone4}'/>
                <SteadyState Duration='300' Power='${power.bikeZone2}'/>
            <SteadyState Duration='240' Power='${power.bikeZone3}'/>
                <SteadyState Duration='720' Power='${power.bikeZone4}'/>
                <SteadyState Duration='300' Power='${power.bikeZone2}'/>
            <SteadyState Duration='240' Power='${power.bikeZone3}'/>
                <SteadyState Duration='720' Power='${power.bikeZone4}'/>
                <SteadyState Duration='300' Power='${power.bikeZone2}'/>
            <SteadyState Duration='240' Power='${power.bikeZone3}'/>
                <SteadyState Duration='720' Power='${power.bikeZone4}'/>
                <SteadyState Duration='300' Power='${power.bikeZone2}'/>`,
        `${warmup15BikeSprints}
            <SteadyState Duration='300' Power='${power.bikeZone3}'/>
                <SteadyState Duration='900' Power='${power.bikeZone4}'/>
                <SteadyState Duration='300' Power='${power.bikeZone2}'/>
            <SteadyState Duration='300' Power='${power.bikeZone3}'/>
                <SteadyState Duration='900' Power='${power.bikeZone4}'/>
                <SteadyState Duration='300' Power='${power.bikeZone2}'/>
            <SteadyState Duration='300' Power='${power.bikeZone3}'/>
                <SteadyState Duration='900' Power='${power.bikeZone4}'/>
                <SteadyState Duration='300' Power='${power.bikeZone2}'/>
            <SteadyState Duration='300' Power='${power.bikeZone3}'/>
                <SteadyState Duration='900' Power='${power.bikeZone4}'/>
                <SteadyState Duration='300' Power='${power.bikeZone2}'/>`,
        `${warmup15BikeSprints}
            <SteadyState Duration='720' Power='${power.bikeZone3}'/>
                <SteadyState Duration='1080' Power='${power.bikeZone4}'/>
                <SteadyState Duration='300' Power='${power.bikeZone2}'/>
            <SteadyState Duration='720' Power='${power.bikeZone3}'/>
                <SteadyState Duration='1080' Power='${power.bikeZone4}'/>
                <SteadyState Duration='300' Power='${power.bikeZone2}'/>
            <SteadyState Duration='720' Power='${power.bikeZone3}'/>
                <SteadyState Duration='1080' Power='${power.bikeZone4}'/>
                <SteadyState Duration='300' Power='${power.bikeZone2}'/>
            <SteadyState Duration='720' Power='${power.bikeZone3}'/>
                <SteadyState Duration='1080' Power='${power.bikeZone4}'/>
                <SteadyState Duration='300' Power='${power.bikeZone2}'/>`],
        [80 * 60, 75 * 60, 70 * 60])
    levels.bike["d2d76305-e16e-46da-8855-deb67ac07193_76"] = new Workout([
        `${warmup30BikeSprints}
        <IntervalsT Repeat='7' OnDuration='1500' OffDuration='600' OnPower='${power.bikeZone2_5}' OffPower='${power.bikeZone1}'/>`,
        `${warmup30BikeSprints}
        <IntervalsT Repeat='6' OnDuration='1800' OffDuration='600' OnPower='${power.bikeZone2_5}' OffPower='${power.bikeZone1}'/>`,
        `${warmup30BikeSprints}
        <IntervalsT Repeat='6' OnDuration='2400' OffDuration='300' OnPower='${power.bikeZone2_5}' OffPower='${power.bikeZone1}'/>`],
        [300 * 60, 300 * 60, 300 * 60])
    levels.bike["d2d76305-e16e-46da-8855-deb67ac07193_77"] = new Workout([
        `${warmup30BikeSprints}
        <IntervalsT Repeat='4' OnDuration='720' OffDuration='360' OnPower='${power.bikeZone4}' OffPower='${power.bikeZone1}'/>`,
        `${warmup30BikeSprints}
        <IntervalsT Repeat='4' OnDuration='900' OffDuration='300' OnPower='${power.bikeZone4}' OffPower='${power.bikeZone1}'/>`,
        `${warmup30BikeSprints}
        <IntervalsT Repeat='4' OnDuration='1200' OffDuration='300' OnPower='${power.bikeZone4}' OffPower='${power.bikeZone1}'/>`],
        [45 * 60, 45 * 60, 45 * 60])
    levels.bike["d2d76305-e16e-46da-8855-deb67ac07193_79"] = new Workout([
        `${warmup15BikeSprints}
        <IntervalsT Repeat='4' OnDuration='120' OffDuration='120' OnPower='${power.bikeZone5}' OffPower='${power.bikeZone2}'/>
        <SteadyState Duration='840' Power='${power.bikeZone2}'/>
        <SteadyState Duration='840' Power='${power.bikeZone3}'/>
        <SteadyState Duration='300' Power='${power.bikeZone2}'/>
        <IntervalsT Repeat='4' OnDuration='30' OffDuration='150' OnPower='${power.bikeZone5}' OffPower='${power.bikeZone2}'/>`,
        `${warmup15BikeSprints}
        <IntervalsT Repeat='3' OnDuration='180' OffDuration='180' OnPower='${power.bikeZone5}' OffPower='${power.bikeZone2}'/>
        <SteadyState Duration='1080' Power='${power.bikeZone2}'/>
        <SteadyState Duration='960' Power='${power.bikeZone3}'/>
        <SteadyState Duration='300' Power='${power.bikeZone2}'/>
        <IntervalsT Repeat='5' OnDuration='30' OffDuration='150' OnPower='${power.bikeZone5}' OffPower='${power.bikeZone2}'/>`,
        `${warmup15BikeSprints}
        <IntervalsT Repeat='3' OnDuration='240' OffDuration='240' OnPower='${power.bikeZone5}' OffPower='${power.bikeZone2}'/>
        <SteadyState Duration='900' Power='${power.bikeZone2}'/>
        <SteadyState Duration='1200' Power='${power.bikeZone3}'/>
        <SteadyState Duration='300' Power='${power.bikeZone2}'/>
        <IntervalsT Repeat='6' OnDuration='30' OffDuration='150' OnPower='${power.bikeZone5}' OffPower='${power.bikeZone2}'/>`,],
        [60 * 60, 52 * 60, 54 * 60])
    levels.bike["d2d76305-e16e-46da-8855-deb67ac07193_83"] = new Workout([
        `${warmup60BikeSprints}
        <SteadyState Duration='18000' Power='${power.bikeZone2_5}'/>`,
        `${warmup60BikeSprints}
        <SteadyState Duration='18000' Power='${power.bikeZone2_5}'/>`,
        `${warmup60BikeSprints}
        <SteadyState Duration='18000' Power='${power.bikeZone2_5}'/>`],
        [300 * 60, 300 * 60, 300 * 60])
    levels.bike["d2d76305-e16e-46da-8855-deb67ac07193_84"] = new Workout([
        `${warmup30BikeSprints}
        <IntervalsT Repeat='4' OnDuration='840' OffDuration='360' OnPower='${power.bikeZone4}' OffPower='${power.bikeZone1}'/>`,
        `${warmup30BikeSprints}
        <IntervalsT Repeat='4' OnDuration='960' OffDuration='300' OnPower='${power.bikeZone4}' OffPower='${power.bikeZone1}'/>`,
        `${warmup30BikeSprints}
        <IntervalsT Repeat='3' OnDuration='1500' OffDuration='300' OnPower='${power.bikeZone4}' OffPower='${power.bikeZone1}'/>`],
        [45 * 60, 45 * 60, 45 * 60])
    levels.bike["d2d76305-e16e-46da-8855-deb67ac07193_86"] = new Workout([
        `${warmup15BikeSprints}
        <SteadyState Duration='1800' Power='${power.bikeZone2}'/>
        <IntervalsT Repeat='5' OnDuration='120' OffDuration='60' OnPower='${power.bikeZone4}' OffPower='${power.bikeZone1}'/>`,
        `${warmup15BikeSprints}
        <SteadyState Duration='1800' Power='${power.bikeZone2}'/>
        <IntervalsT Repeat='5' OnDuration='120' OffDuration='60' OnPower='${power.bikeZone4}' OffPower='${power.bikeZone1}'/>`,
        `${warmup15BikeSprints}
        <SteadyState Duration='1800' Power='${power.bikeZone2}'/>
        <IntervalsT Repeat='5' OnDuration='120' OffDuration='60' OnPower='${power.bikeZone4}' OffPower='${power.bikeZone1}'/>`,],
        [60 * 60, 52 * 60, 54 * 60])
    levels.bike["d2d76305-e16e-46da-8855-deb67ac07193_88"] = new Workout([
        `${warmup15BikeSprints}
            <SteadyState Duration='480' Power='${power.bikeZone3}'/>
                <SteadyState Duration='30' Power='${power.bikeZone5}'/>
                <SteadyState Duration='300' Power='${power.bikeZone2}'/>
            <SteadyState Duration='480' Power='${power.bikeZone3}'/>
                <SteadyState Duration='30' Power='${power.bikeZone5}'/>
                <SteadyState Duration='300' Power='${power.bikeZone2}'/>
            <SteadyState Duration='480' Power='${power.bikeZone3}'/>
                <SteadyState Duration='30' Power='${power.bikeZone5}'/>
                <SteadyState Duration='300' Power='${power.bikeZone2}'/>
            <SteadyState Duration='480' Power='${power.bikeZone3}'/>
                <SteadyState Duration='30' Power='${power.bikeZone5}'/>
                <SteadyState Duration='300' Power='${power.bikeZone2}'/>
            <SteadyState Duration='480' Power='${power.bikeZone3}'/>
                <SteadyState Duration='30' Power='${power.bikeZone5}'/>
                <SteadyState Duration='300' Power='${power.bikeZone2}'/>
            <SteadyState Duration='480' Power='${power.bikeZone3}'/>
                <SteadyState Duration='30' Power='${power.bikeZone5}'/>
                <SteadyState Duration='300' Power='${power.bikeZone2}'/>`,
        `${warmup15BikeSprints}
            <SteadyState Duration='600' Power='${power.bikeZone3}'/>
                <SteadyState Duration='30' Power='${power.bikeZone5}'/>
                <SteadyState Duration='300' Power='${power.bikeZone2}'/>
            <SteadyState Duration='600' Power='${power.bikeZone3}'/>
                <SteadyState Duration='30' Power='${power.bikeZone5}'/>
                <SteadyState Duration='300' Power='${power.bikeZone2}'/>
            <SteadyState Duration='600' Power='${power.bikeZone3}'/>
                <SteadyState Duration='30' Power='${power.bikeZone5}'/>
                <SteadyState Duration='300' Power='${power.bikeZone2}'/>
            <SteadyState Duration='600' Power='${power.bikeZone3}'/>
                <SteadyState Duration='30' Power='${power.bikeZone5}'/>
                <SteadyState Duration='300' Power='${power.bikeZone2}'/>
            <SteadyState Duration='600' Power='${power.bikeZone3}'/>
                <SteadyState Duration='30' Power='${power.bikeZone5}'/>
                <SteadyState Duration='300' Power='${power.bikeZone2}'/>`,
        `${warmup15BikeSprints}
            <SteadyState Duration='720' Power='${power.bikeZone3}'/>
                <SteadyState Duration='30' Power='${power.bikeZone5}'/>
                <SteadyState Duration='300' Power='${power.bikeZone2}'/>
            <SteadyState Duration='720' Power='${power.bikeZone3}'/>
                <SteadyState Duration='30' Power='${power.bikeZone5}'/>
                <SteadyState Duration='300' Power='${power.bikeZone2}'/>
            <SteadyState Duration='720' Power='${power.bikeZone3}'/>
                <SteadyState Duration='30' Power='${power.bikeZone5}'/>
                <SteadyState Duration='300' Power='${power.bikeZone2}'/>
            <SteadyState Duration='720' Power='${power.bikeZone3}'/>
                <SteadyState Duration='30' Power='${power.bikeZone5}'/>
                <SteadyState Duration='300' Power='${power.bikeZone2}'/>
            <SteadyState Duration='720' Power='${power.bikeZone3}'/>
                <SteadyState Duration='30' Power='${power.bikeZone5}'/>
                <SteadyState Duration='300' Power='${power.bikeZone2}'/>`],
        [80 * 60, 75 * 60, 70 * 60])
    levels.bike["d2d76305-e16e-46da-8855-deb67ac07193_90"] = new Workout([
        `${warmup60BikeSprints}
        <SteadyState Duration='7200' Power='${power.bikeZone1}'/>
        <IntervalsT Repeat='4' OnDuration='720' OffDuration='300' OnPower='${power.bikeZone2}' OffPower='${power.bikeZone1}'/>`,
        `${warmup60BikeSprints}
        <SteadyState Duration='6300' Power='${power.bikeZone1}'/>
        <IntervalsT Repeat='5' OnDuration='600' OffDuration='300' OnPower='${power.bikeZone2}' OffPower='${power.bikeZone1}'/>`,
        `${warmup60BikeSprints}
        <SteadyState Duration='5400' Power='${power.bikeZone1}'/>
        <IntervalsT Repeat='5' OnDuration='720' OffDuration='360' OnPower='${power.bikeZone2}' OffPower='${power.bikeZone1}'/>`],
        [300 * 60, 300 * 60, 300 * 60])
    levels.bike["d2d76305-e16e-46da-8855-deb67ac07193_91"] = new Workout([
        `${warmup15BikeSprints}
        <SteadyState Duration='1500' Power='${power.bikeZone4}'/>`,
        `${warmup15BikeSprints}
        <SteadyState Duration='1800' Power='${power.bikeZone4}'/>`,
        `${warmup15BikeSprints}
        <SteadyState Duration='2400' Power='${power.bikeZone4}'/>`],
        [45 * 60, 45 * 60, 45 * 60])
    levels.bike["d2d76305-e16e-46da-8855-deb67ac07193_93"] = new Workout([
        `${warmup15BikeSprints}
        <SteadyState Duration='2700' Power='${power.bikeZone2}'/>
        <IntervalsT Repeat='5' OnDuration='120' OffDuration='60' OnPower='${power.bikeZone4}' OffPower='${power.bikeZone1}'/>`,
        `${warmup15BikeSprints}
        <SteadyState Duration='2700' Power='${power.bikeZone2}'/>
        <IntervalsT Repeat='5' OnDuration='120' OffDuration='60' OnPower='${power.bikeZone4}' OffPower='${power.bikeZone1}'/>`,
        `${warmup15BikeSprints}
        <SteadyState Duration='2700' Power='${power.bikeZone2}'/>
        <IntervalsT Repeat='5' OnDuration='120' OffDuration='60' OnPower='${power.bikeZone4}' OffPower='${power.bikeZone1}'/>`,],
        [60 * 60, 52 * 60, 54 * 60])
    levels.bike["d2d76305-e16e-46da-8855-deb67ac07193_94"] = new Workout([
        `${warmup15BikeSprints}
        <SteadyState Duration='900' Power='${power.bikeZone2}'/>
        <IntervalsT Repeat='3' OnDuration='300' OffDuration='300' OnPower='${power.bikeZone4}' OffPower='${power.bikeZone1}'/>`,
        `${warmup15BikeSprints}
        <SteadyState Duration='900' Power='${power.bikeZone2}'/>
        <IntervalsT Repeat='3' OnDuration='300' OffDuration='300' OnPower='${power.bikeZone4}' OffPower='${power.bikeZone1}'/>`,
        `${warmup15BikeSprints}
        <SteadyState Duration='900' Power='${power.bikeZone2}'/>
        <IntervalsT Repeat='3' OnDuration='300' OffDuration='300' OnPower='${power.bikeZone4}' OffPower='${power.bikeZone1}'/>`,],
        [60 * 60, 52 * 60, 54 * 60])





    levels.bike["d2d76305-e16e-46da-8855-deb67ac07193_95"] = new Workout([
        `${warmup15BikeSprints}
            <SteadyState Duration='300' Power='${power.bikeZone3}'/>
                <SteadyState Duration='30' Power='${power.bikeZone5}'/>
                <SteadyState Duration='600' Power='${power.bikeZone2}'/>
            <SteadyState Duration='300' Power='${power.bikeZone3}'/>
                <SteadyState Duration='30' Power='${power.bikeZone5}'/>
                <SteadyState Duration='600' Power='${power.bikeZone2}'/>
            <SteadyState Duration='300' Power='${power.bikeZone3}'/>
                <SteadyState Duration='30' Power='${power.bikeZone5}'/>
                <SteadyState Duration='600' Power='${power.bikeZone2}'/>`,
        `${warmup15BikeSprints}
        <SteadyState Duration='360' Power='${power.bikeZone3}'/>
            <SteadyState Duration='30' Power='${power.bikeZone5}'/>
            <SteadyState Duration='600' Power='${power.bikeZone2}'/>
        <SteadyState Duration='360' Power='${power.bikeZone3}'/>
            <SteadyState Duration='30' Power='${power.bikeZone5}'/>
            <SteadyState Duration='600' Power='${power.bikeZone2}'/>
        <SteadyState Duration='360' Power='${power.bikeZone3}'/>
            <SteadyState Duration='30' Power='${power.bikeZone5}'/>
            <SteadyState Duration='600' Power='${power.bikeZone2}'/>`,
        `${warmup15BikeSprints}
        <SteadyState Duration='480' Power='${power.bikeZone3}'/>
            <SteadyState Duration='30' Power='${power.bikeZone5}'/>
            <SteadyState Duration='600' Power='${power.bikeZone2}'/>
        <SteadyState Duration='480' Power='${power.bikeZone3}'/>
            <SteadyState Duration='30' Power='${power.bikeZone5}'/>
            <SteadyState Duration='600' Power='${power.bikeZone2}'/>
        <SteadyState Duration='480' Power='${power.bikeZone3}'/>
            <SteadyState Duration='30' Power='${power.bikeZone5}'/>
            <SteadyState Duration='600' Power='${power.bikeZone2}'/>`],
        [80 * 60, 75 * 60, 70 * 60])
    return levels;
} 
