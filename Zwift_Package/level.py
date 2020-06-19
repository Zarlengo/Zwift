from collections import defaultdict
from . import zwift_class
from __main__ import test_distance
from __main__ import test_time
Workout = zwift_class.Workout
PowerLevels = zwift_class.PowerLevels
power = PowerLevels(test_distance, test_time)

bikeLevelDictionary = defaultdict(lambda: "")
runLevelDictionary = defaultdict(lambda: "")

#"146ec384-1a42-4d29-afb9-830e9905e8ec"
bikeLevelDictionary["2020 Half Run Focused Plan (All Levels) 12 weeks_7_Bike"] = Workout([
            f"<Warmup Duration='600' PowerLow='{power.bikeZone0}' PowerHigh='{power.bikeZone2}'/>\n"
            f"<SteadyState Duration='6600' Power='{power.bikeZone2}'/>",
            f"<Warmup Duration='600' PowerLow='{power.bikeZone0}' PowerHigh='{power.bikeZone2}'/>\n"
            f"<SteadyState Duration='1800' Power='{power.bikeZone3}'/>\n"
            f"<SteadyState Duration='4800' Power='{power.bikeZone2}'/>",
            f"<Warmup Duration='600' PowerLow='{power.bikeZone0}' PowerHigh='{power.bikeZone2}'/>\n"
            f"<SteadyState Duration='2700' Power='{power.bikeZone3}'/>\n"
            f"<SteadyState Duration='3900' Power='{power.bikeZone2}'/>"],
            [120 * 60, 120 * 60, 120 * 60])
bikeLevelDictionary["2020 Half Run Focused Plan (All Levels) 12 weeks_14_Bike"] = Workout([
            f"<Warmup Duration='600' PowerLow='{power.bikeZone0}' PowerHigh='{power.bikeZone2}'/>\n"
            f"<SteadyState Duration='7200' Power='{power.bikeZone2}'/>",
            f"<Warmup Duration='600' PowerLow='{power.bikeZone0}' PowerHigh='{power.bikeZone2}'/>\n"
            f"<SteadyState Duration='1800' Power='{power.bikeZone3}'/>\n"
            f"<SteadyState Duration='5400' Power='{power.bikeZone2}'/>",
            f"<Warmup Duration='600' PowerLow='{power.bikeZone0}' PowerHigh='{power.bikeZone2}'/>\n"
            f"<SteadyState Duration='2700' Power='{power.bikeZone3}'/>\n"
            f"<SteadyState Duration='5100' Power='{power.bikeZone2}'/>"],
            [130 * 60, 130 * 60, 140 * 60])
bikeLevelDictionary["2020 Half Run Focused Plan (All Levels) 12 weeks_20_Bike"] = Workout([
            f"<Warmup Duration='600' PowerLow='{power.bikeZone0}' PowerHigh='{power.bikeZone2}'/>\n"
            f"<SteadyState Duration='12000' Power='{power.bikeZone1}'/>",
            f"<Warmup Duration='600' PowerLow='{power.bikeZone0}' PowerHigh='{power.bikeZone2}'/>\n"
            f"<SteadyState Duration='13800' Power='{power.bikeZone1}'/>",
            f"<Warmup Duration='600' PowerLow='{power.bikeZone0}' PowerHigh='{power.bikeZone2}'/>\n"
            f"<SteadyState Duration='15600' Power='{power.bikeZone1}'/>"],
            [210 * 60, 240 * 60, 270 * 60])
bikeLevelDictionary["2020 Half Run Focused Plan (All Levels) 12 weeks_28_Bike"] = Workout([
            f"<Warmup Duration='600' PowerLow='{power.bikeZone0}' PowerHigh='{power.bikeZone2}'/>\n"
            f"<SteadyState Duration='1500' Power='{power.bikeZone3}'/>\n"
            f"<SteadyState Duration='5700' Power='{power.bikeZone2}'/>",
            f"<Warmup Duration='600' PowerLow='{power.bikeZone0}' PowerHigh='{power.bikeZone2}'/>\n"
            f"<SteadyState Duration='2400' Power='{power.bikeZone3}'/>\n"
            f"<SteadyState Duration='5400' Power='{power.bikeZone2}'/>",
            f"<Warmup Duration='600' PowerLow='{power.bikeZone0}' PowerHigh='{power.bikeZone2}'/>\n"
            f"<SteadyState Duration='3600' Power='{power.bikeZone3}'/>\n"
            f"<SteadyState Duration='4800' Power='{power.bikeZone2}'/>"],
            [130 * 60, 140 * 60, 150 * 60])

runLevelDictionary["2020 Half Run Focused Plan (All Levels) 12 weeks_6_Run"] = Workout([
            f"<Warmup Duration='600' PowerLow='{power.bikeZone0}' PowerHigh='{power.bikeZone3}'/>\n"
            f"<SteadyState Duration='{power.gdt(600, power.runZone2)}' Power='{power.runZone2}' pace='3' />",
            f"<Warmup Duration='600' PowerLow='{power.bikeZone0}' PowerHigh='{power.bikeZone3}'/>\n"
            f"<SteadyState Duration='{power.gdt(900, power.runZone2)}' Power='{power.runZone2}' pace='3' />",
            f"<Warmup Duration='600' PowerLow='{power.bikeZone0}' PowerHigh='{power.bikeZone3}'/>\n"
            f"<SteadyState Duration='{power.gdt(1200, power.runZone2)}' Power='{power.runZone2}' pace='3' />"],
            [20 * 60, 25 * 60, 30 * 60])
runLevelDictionary["2020 Half Run Focused Plan (All Levels) 12 weeks_13_Run"] = Workout([
            f"<Warmup Duration='600' PowerLow='{power.bikeZone0}' PowerHigh='{power.bikeZone3}'/>\n"
            f"<SteadyState Duration='{power.gdt(900, power.runZone2)}' Power='{power.runZone2}' pace='3' />",
            f"<Warmup Duration='600' PowerLow='{power.bikeZone0}' PowerHigh='{power.bikeZone3}'/>\n"
            f"<SteadyState Duration='{power.gdt(1200, power.runZone2)}' Power='{power.runZone2}' pace='3' />",
            f"<Warmup Duration='600' PowerLow='{power.bikeZone0}' PowerHigh='{power.bikeZone3}'/>\n"
            f"<SteadyState Duration='{power.gdt(1500, power.runZone2)}' Power='{power.runZone2}' pace='3' />"],
            [25 * 60, 30 * 60, 35 * 60])
runLevelDictionary["2020 Half Run Focused Plan (All Levels) 12 weeks_27_Run"] = Workout([
            f"<Warmup Duration='600' PowerLow='{power.bikeZone0}' PowerHigh='{power.bikeZone3}'/>\n"
            f"<SteadyState Duration='{power.gdt(1200, power.runZone2)}' Power='{power.runZone2}' pace='3' />",
            f"<Warmup Duration='600' PowerLow='{power.bikeZone0}' PowerHigh='{power.bikeZone3}'/>\n"
            f"<SteadyState Duration='{power.gdt(1500, power.runZone2)}' Power='{power.runZone2}' pace='3' />",
            f"<Warmup Duration='600' PowerLow='{power.bikeZone0}' PowerHigh='{power.bikeZone3}'/>\n"
            f"<SteadyState Duration='{power.gdt(1800, power.runZone2)}' Power='{power.runZone2}' pace='3' />"],
            [30 * 60, 35 * 60, 40 * 60])
runLevelDictionary["2020 Half Run Focused Plan (All Levels) 12 weeks_30_Run"] = Workout([
            f"<SteadyState Duration='{power.gdt(600, power.runZone2)}' Power='{power.runZone2}' pace='3' />\n"
            f"<SteadyState Duration='{power.gdt(600, power.runZone3)}' Power='{power.runZone3}' pace='3' />",
            f"<SteadyState Duration='{power.gdt(900, power.runZone2)}' Power='{power.runZone2}' pace='3' />\n"
            f"<SteadyState Duration='{power.gdt(900, power.runZone3)}' Power='{power.runZone3}' pace='3' />",
            f"<SteadyState Duration='{power.gdt(1200, power.runZone2)}' Power='{power.runZone2}' pace='3' />\n"
            f"<SteadyState Duration='{power.gdt(1200, power.runZone3)}' Power='{power.runZone3}' pace='3' />"],
            [20 * 60, 30 * 60, 40 * 60])
runLevelDictionary["2020 Half Run Focused Plan (All Levels) 12 weeks_34_Run"] = runLevelDictionary["2020 Half Run Focused Plan (All Levels) 12 weeks_27_Run"]
runLevelDictionary["2020 Half Run Focused Plan (All Levels) 12 weeks_37_Run"] = runLevelDictionary["2020 Half Run Focused Plan (All Levels) 12 weeks_30_Run"]
runLevelDictionary["2020 Half Run Focused Plan (All Levels) 12 weeks_41_Run"] = runLevelDictionary["2020 Half Run Focused Plan (All Levels) 12 weeks_27_Run"]
runLevelDictionary["2020 Half Run Focused Plan (All Levels) 12 weeks_44_Run"] = runLevelDictionary["2020 Half Run Focused Plan (All Levels) 12 weeks_30_Run"]
runLevelDictionary["2020 Half Run Focused Plan (All Levels) 12 weeks_51_Run"] = runLevelDictionary["2020 Half Run Focused Plan (All Levels) 12 weeks_30_Run"]
runLevelDictionary["2020 Half Run Focused Plan (All Levels) 12 weeks_55_Run"] = runLevelDictionary["2020 Half Run Focused Plan (All Levels) 12 weeks_27_Run"]
runLevelDictionary["2020 Half Run Focused Plan (All Levels) 12 weeks_58_Run"] = runLevelDictionary["2020 Half Run Focused Plan (All Levels) 12 weeks_30_Run"]
runLevelDictionary["2020 Half Run Focused Plan (All Levels) 12 weeks_73_Run"] = runLevelDictionary["2020 Half Run Focused Plan (All Levels) 12 weeks_30_Run"]









# - Bike warm up of 10' to 15' is recommended.
# - Level 1 [TSS 103 | IF 0.68]: Warm up, then ride steady in Zone 1 to Zone 2 for 120’.
# - Level 2 [TSS 106 | IF 0.73]: Warm up, then ride 30' @ Zone 3 with the remainder at Zone 2. Target is 120' total ride time. 
# - Level 3 [TSS 110 | IF 0.74]: Warm up, then ride 45’ @ Zone 3 with the remainder at Zone 2. Target is 120' total ride time. 

#  -Level 1 [TSS XXX | IF 0.63]: Long ride day, all Zone 1. Goal is to challenge your fitness and mental limits with this ride. Target ride time is 3.5 hours.
#  -Level 2 [TSS XXX | IF 0.63]: Long ride day, all Zone 1. Goal is to challenge your fitness and mental limits with this ride. Target ride time is 4 hours. 
#  -Level 3 [TSS 179 | IF 0.63]: Long ride day, all Zone 1. Goal is to challenge your fitness and mental limits with this ride. Target ride time is 4.5 hours.

#  - Level 1: 25'
#  - Level 2: 30'
#  - Level 3: 35'
# MS: Run @ Zone 2 out and back. 
# Coach Notes: Run warm up of 10'

# - Level 1 [TSS 105 | IF 0.68]: Warm up, then ride steady in Zone 1 to Zone 2 for 130’.
# - Level 2 [TSS 112 | IF 0.72]: Warm up, then ride 30' @ Zone 3 with the remainder at Zone 2. Target is 130' total ride time. 
# - Level 3 [TSS 124 | IF 0.73]: Warm up, then ride 45’ @ Zone 3 with the remainder at Zone 2. Target is 140' total ride time. 
# Coach Notes: 
# - Bike warm up of 10' to 15' is recommended.

#  -Level 1 [TSS XXX | IF 0.63]: Long ride day, all Zone 1. Goal is to challenge your fitness and mental limits with this ride. Target ride time is 3.5 hours.
#  -Level 2 [TSS XXX | IF 0.63]: Long ride day, all Zone 1. Goal is to challenge your fitness and mental limits with this ride. Target ride time is 4 hours. 
#  -Level 3 [TSS 179 | IF 0.63]: Long ride day, all Zone 1. Goal is to challenge your fitness and mental limits with this ride. Target ride time is 4.5 hours.

# - Level 1: 30'
# - Level 2: 40'
# - Level 3: 45'
# Run @ TRP effort.

#  - Level 1: 30'
#  - Level 2: 35'
#  - Level 3: 40'
# MS: Run @ Zone 2 effort

#  - Level 1 [TSS 111 | IF 0.72]: Warm up, then ride 25' @ Zone 3 with the remainder at Zone 2. Target is 130’ total ride time.
#  - Level 2 [TSS 123 | IF 0.73]: Warm up, then ride 40' @ Zone 3 with the remainder at Zone 2. Target is 140' total ride time. 
# - Level 3 [TSS 136 | IF 0.74]: Warm up, then ride 60’ @ Zone 3 with the remainder at Zone 2. Target is 150' total ride time. 
# Coach Notes: 
# - Bike warm up of 10' to 15' is recommended.

# - Level 1: 20'
# - Level 2: 30'
# - Level 3: 40'
# MS: Run @ Zone 2 out, Zone 3 back. 

