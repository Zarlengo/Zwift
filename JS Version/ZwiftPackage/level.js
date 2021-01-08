module.exports = (Workout, power) => {    
    levels = {};    

    // "146ec384-1a42-4d29-afb9-830e9905e8ec"
    levels.bike["2020 Half Run Focused Plan (All Levels) 12 weeks_7_Bike"] = Workout([
                `<Warmup Duration='600' PowerLow='${power.bikeZone0}' PowerHigh='${power.bikeZone2}'/>\n
                <SteadyState Duration='6600' Power='${power.bikeZone2}'/>`,
                `<Warmup Duration='600' PowerLow='${power.bikeZone0}' PowerHigh='${power.bikeZone2}'/>\n
                <SteadyState Duration='1800' Power='${power.bikeZone3}'/>\n
                <SteadyState Duration='4800' Power='${power.bikeZone2}'/>`,
                `<Warmup Duration='600' PowerLow='${power.bikeZone0}' PowerHigh='${power.bikeZone2}'/>\n
                <SteadyState Duration='2700' Power='${power.bikeZone3}'/>\n
                <SteadyState Duration='3900' Power='${power.bikeZone2}'/>`],
                [120 * 60, 120 * 60, 120 * 60])
    levels.bike["2020 Half Run Focused Plan (All Levels) 12 weeks_14_Bike"] = Workout([
                `<Warmup Duration='600' PowerLow='${power.bikeZone0}' PowerHigh='${power.bikeZone2}'/>\n
                <SteadyState Duration='7200' Power='${power.bikeZone2}'/>`,
                `<Warmup Duration='600' PowerLow='${power.bikeZone0}' PowerHigh='${power.bikeZone2}'/>\n
                <SteadyState Duration='1800' Power='${power.bikeZone3}'/>\n
                <SteadyState Duration='5400' Power='${power.bikeZone2}'/>`,
                `<Warmup Duration='600' PowerLow='${power.bikeZone0}' PowerHigh='${power.bikeZone2}'/>\n
                <SteadyState Duration='2700' Power='${power.bikeZone3}'/>\n
                <SteadyState Duration='5100' Power='${power.bikeZone2}'/>`],
                [130 * 60, 130 * 60, 140 * 60])
    levels.bike["2020 Half Run Focused Plan (All Levels) 12 weeks_20_Bike"] = Workout([
                `<Warmup Duration='600' PowerLow='${power.bikeZone0}' PowerHigh='${power.bikeZone2}'/>\n
                <SteadyState Duration='12000' Power='${power.bikeZone1}'/>`,
                `<Warmup Duration='600' PowerLow='${power.bikeZone0}' PowerHigh='${power.bikeZone2}'/>\n"
                <SteadyState Duration='13800' Power='${power.bikeZone1}'/>`,
                `<Warmup Duration='600' PowerLow='${power.bikeZone0}' PowerHigh='${power.bikeZone2}'/>\n"
                <SteadyState Duration='15600' Power='${power.bikeZone1}'/>`],
                [210 * 60, 240 * 60, 270 * 60])
    levels.bike["2020 Half Run Focused Plan (All Levels) 12 weeks_28_Bike"] = Workout([
                `<Warmup Duration='600' PowerLow='${power.bikeZone0}' PowerHigh='${power.bikeZone2}'/>\n
                <SteadyState Duration='1500' Power='${power.bikeZone3}'/>\n
                <SteadyState Duration='5700' Power='${power.bikeZone2}'/>`,
                `<Warmup Duration='600' PowerLow='${power.bikeZone0}' PowerHigh='${power.bikeZone2}'/>\n
                <SteadyState Duration='2400' Power='${power.bikeZone3}'/>\n
                <SteadyState Duration='5400' Power='${power.bikeZone2}'/>`,
                `<Warmup Duration='600' PowerLow='${power.bikeZone0}' PowerHigh='${power.bikeZone2}'/>\n
                <SteadyState Duration='3600' Power='${power.bikeZone3}'/>\n
                <SteadyState Duration='4800' Power='${power.bikeZone2}'/>`],
                [130 * 60, 140 * 60, 150 * 60])

    levels.run["2020 Half Run Focused Plan (All Levels) 12 weeks_6_Run"] = Workout([
                `<Warmup Duration='600' PowerLow='${power.bikeZone0}' PowerHigh='${power.bikeZone3}'/>\n
                <SteadyState Duration='${power.gdt(600, power.runZone2)}' Power='${power.runZone2}' pace='3' />`,
                `<Warmup Duration='600' PowerLow='${power.bikeZone0}' PowerHigh='${power.bikeZone3}'/>\n
                <SteadyState Duration='${power.gdt(900, power.runZone2)}' Power='${power.runZone2}' pace='3' />`,
                `<Warmup Duration='600' PowerLow='${power.bikeZone0}' PowerHigh='${power.bikeZone3}'/>\n
                <SteadyState Duration='${power.gdt(1200, power.runZone2)}' Power='${power.runZone2}' pace='3' />`],
                [20 * 60, 25 * 60, 30 * 60])
    levels.run["2020 Half Run Focused Plan (All Levels) 12 weeks_13_Run"] = Workout([
                `<Warmup Duration='600' PowerLow='${power.bikeZone0}' PowerHigh='${power.bikeZone3}'/>\n
                <SteadyState Duration='${power.gdt(900, power.runZone2)}' Power='${power.runZone2}' pace='3' />`,
                `<Warmup Duration='600' PowerLow='${power.bikeZone0}' PowerHigh='${power.bikeZone3}'/>\n
                <SteadyState Duration='${power.gdt(1200, power.runZone2)}' Power='${power.runZone2}' pace='3' />`,
                `<Warmup Duration='600' PowerLow='${power.bikeZone0}' PowerHigh='${power.bikeZone3}'/>\n
                <SteadyState Duration='${power.gdt(1500, power.runZone2)}' Power='${power.runZone2}' pace='3' />`],
                [25 * 60, 30 * 60, 35 * 60])
    levels.run["2020 Half Run Focused Plan (All Levels) 12 weeks_27_Run"] = Workout([
                `<Warmup Duration='600' PowerLow='${power.bikeZone0}' PowerHigh='${power.bikeZone3}'/>\n
                <SteadyState Duration='${power.gdt(1200, power.runZone2)}' Power='${power.runZone2}' pace='3' />`,
                `<Warmup Duration='600' PowerLow='${power.bikeZone0}' PowerHigh='${power.bikeZone3}'/>\n
                <SteadyState Duration='${power.gdt(1500, power.runZone2)}' Power='${power.runZone2}' pace='3' />`,
                `<Warmup Duration='600' PowerLow='${power.bikeZone0}' PowerHigh='${power.bikeZone3}'/>\n
                <SteadyState Duration='${power.gdt(1800, power.runZone2)}' Power='${power.runZone2}' pace='3' />`],
                [30 * 60, 35 * 60, 40 * 60])
    levels.run["2020 Half Run Focused Plan (All Levels) 12 weeks_30_Run"] = Workout([
                `<SteadyState Duration='${power.gdt(600, power.runZone2)}' Power='${power.runZone2}' pace='3' />\n
                <SteadyState Duration='${power.gdt(600, power.runZone3)}' Power='${power.runZone3}' pace='3' />`,
                `<SteadyState Duration='${power.gdt(900, power.runZone2)}' Power='${power.runZone2}' pace='3' />\n
                <SteadyState Duration='${power.gdt(900, power.runZone3)}' Power='${power.runZone3}' pace='3' />`,
                `<SteadyState Duration='${power.gdt(1200, power.runZone2)}' Power='${power.runZone2}' pace='3' />\n
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

    return levels;
} 

