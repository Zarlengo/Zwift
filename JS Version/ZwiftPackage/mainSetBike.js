from collections import defaultdict
from . import zwift_class
from __main__ import test_distance
from __main__ import test_time
Workout = zwift_class.Workout
PowerLevels = zwift_class.PowerLevels
power = PowerLevels(test_distance, test_time)

bikeMSDictionary = defaultdict(lambda: "")

bikeMSDictionary["RACE REHEARSAL BRICK SET UP TRANSITION AT CAR/HOUSE, IF POSSIBLE"] = Workout(
    "<SteadyState Duration='900' Power='{power.bikeZone3}'/>\n"
    "<SteadyState Duration='2700' Power='{power.bikeZone4}'/>",
    60 * 60)

bikeMSDictionary["SPEND AS MUCH TIME @ ZONE 3 AS POSSIBLE"] = Workout("", 0, power.bikeZone3)
bikeMSDictionary["REMAINDER OF AVAILABLE RIDE TIME AT ZONE 3"] = Workout("", 0, power.bikeZone3)
bikeMSDictionary["REMAINDER OF RIDE TIME IS @ZONE 2"] = Workout("", 0, power.bikeZone2)

bikeMSDictionary["BIKE TEST, FOR POWER ATHLETES ONLY!"] = Workout(
    f"<Warmup Duration='540' PowerLow='{power.bikeZone0}' PowerHigh='{power.bikeZone3}'/>\n"
    f"<IntervalsT Repeat='3' OnDuration='60' OffDuration='60' OnPower='{power.bikeZone4}' OffPower='{power.bikeZone0}'/>\n"
    f"<SteadyState Duration='300' Power='{power.bikeZone1}'/>\n"
    f"<MaxEffort Duration='300''/>\n"
    f"<SteadyState Duration='600' Power='{power.bikeZone1}'/>\n"
    f"<FreeRide FTPTest='1' Duration='1200''/>\n"
    f"<Cooldown Duration='600' PowerLow='{power.bikeZone2}' PowerHigh='{power.bikeZone0}'/>",
    0, complete_workout=True)

bikeMSDictionary["2 X (2' @ ZONE 5, THEN 1' @ ZONE 2, THEN 5' @ 95-100%/ZONE 4, THEN 10' @ ZONE 2)"] = Workout(
    f"<SteadyState Duration='120' Power='{power.bikeZone5}'/>\n"
        f"<SteadyState Duration='60' Power='{power.bikeZone2}'/>\n"
        f"<SteadyState Duration='300' Power='{power.bikeZone4}'/>\n"
        f"<SteadyState Duration='600' Power='{power.bikeZone2}'/>\n"
    f"<SteadyState Duration='120' Power='{power.bikeZone5}'/>\n"
        f"<SteadyState Duration='60' Power='{power.bikeZone2}'/>\n"
        f"<SteadyState Duration='300' Power='{power.bikeZone4}'/>\n"
        f"<SteadyState Duration='600' Power='{power.bikeZone2}'/>",
    36 * 60)
bikeMSDictionary["3 X (2' @ ZONE 5, THEN 1' @ ZONE 2, THEN 5' @ 95-100%/ZONE 4, THEN 10' @ ZONE 2)"] = Workout(
    f"<SteadyState Duration='120' Power='{power.bikeZone5}'/>\n"
        f"<SteadyState Duration='60' Power='{power.bikeZone2}'/>\n"
        f"<SteadyState Duration='300' Power='{power.bikeZone4}'/>\n"
        f"<SteadyState Duration='600' Power='{power.bikeZone2}'/>\n"
    f"<SteadyState Duration='120' Power='{power.bikeZone5}'/>\n"
        f"<SteadyState Duration='60' Power='{power.bikeZone2}'/>\n"
        f"<SteadyState Duration='300' Power='{power.bikeZone4}'/>\n"
        f"<SteadyState Duration='600' Power='{power.bikeZone2}'/>\n"
    f"<SteadyState Duration='120' Power='{power.bikeZone5}'/>\n"
        f"<SteadyState Duration='60' Power='{power.bikeZone2}'/>\n"
        f"<SteadyState Duration='300' Power='{power.bikeZone4}'/>\n"
        f"<SteadyState Duration='600' Power='{power.bikeZone2}'/>",
    54 * 60)
bikeMSDictionary["3 X (2' @ ZONE 5, THEN 1' @ ZONE 2, THEN 5' @ ZONE 4, THEN 10' @ ZONE 2)"] = bikeMSDictionary["3 X (2' @ ZONE 5, THEN 1' @ ZONE 2, THEN 5' @ 95-100%/ZONE 4, THEN 10' @ ZONE 2)"]
bikeMSDictionary["4 X (2' @ ZONE 5, THEN 1' @ ZONE 2, THEN 5' @ 95-100%/ZONE 4, THEN 10' @ ZONE 2)"] = Workout(
    f"<SteadyState Duration='120' Power='{power.bikeZone5}'/>\n"
        f"<SteadyState Duration='60' Power='{power.bikeZone2}'/>\n"
        f"<SteadyState Duration='300' Power='{power.bikeZone4}'/>\n"
        f"<SteadyState Duration='600' Power='{power.bikeZone2}'/>\n"
    f"<SteadyState Duration='120' Power='{power.bikeZone5}'/>\n"
        f"<SteadyState Duration='60' Power='{power.bikeZone2}'/>\n"
        f"<SteadyState Duration='300' Power='{power.bikeZone4}'/>\n"
        f"<SteadyState Duration='600' Power='{power.bikeZone2}'/>\n"
    f"<SteadyState Duration='120' Power='{power.bikeZone5}'/>\n"
        f"<SteadyState Duration='60' Power='{power.bikeZone2}'/>\n"
        f"<SteadyState Duration='300' Power='{power.bikeZone4}'/>\n"
        f"<SteadyState Duration='600' Power='{power.bikeZone2}'/>\n"
    f"<SteadyState Duration='120' Power='{power.bikeZone5}'/>\n"
        f"<SteadyState Duration='60' Power='{power.bikeZone2}'/>\n"
        f"<SteadyState Duration='300' Power='{power.bikeZone4}'/>\n"
        f"<SteadyState Duration='600' Power='{power.bikeZone2}'/>",
    72 * 60)
bikeMSDictionary["4 X (2' @ ZONE 5, THEN 1' @ ZONE 2, THEN 5' @ ZONE 4, THEN 10' @ ZONE 2)"] = bikeMSDictionary["4 X (2' @ ZONE 5, THEN 1' @ ZONE 2, THEN 5' @ 95-100%/ZONE 4, THEN 10' @ ZONE 2)"]
bikeMSDictionary["4 X (2' @ ZONE 5, THEN 1' @ ZONE 2, THEN 5' @ 95-100%/ZONE 4, THEN 5' @ ZONE 2)"] = Workout(
    f"<SteadyState Duration='120' Power='{power.bikeZone5}'/>\n"
        f"<SteadyState Duration='60' Power='{power.bikeZone2}'/>\n"
        f"<SteadyState Duration='300' Power='{power.bikeZone4}'/>\n"
        f"<SteadyState Duration='300' Power='{power.bikeZone2}'/>\n"
    f"<SteadyState Duration='120' Power='{power.bikeZone5}'/>\n"
        f"<SteadyState Duration='60' Power='{power.bikeZone2}'/>\n"
        f"<SteadyState Duration='300' Power='{power.bikeZone4}'/>\n"
        f"<SteadyState Duration='300' Power='{power.bikeZone2}'/>\n"
    f"<SteadyState Duration='120' Power='{power.bikeZone5}'/>\n"
        f"<SteadyState Duration='60' Power='{power.bikeZone2}'/>\n"
        f"<SteadyState Duration='300' Power='{power.bikeZone4}'/>\n"
        f"<SteadyState Duration='300' Power='{power.bikeZone2}'/>\n"
    f"<SteadyState Duration='120' Power='{power.bikeZone5}'/>\n"
        f"<SteadyState Duration='60' Power='{power.bikeZone2}'/>\n"
        f"<SteadyState Duration='300' Power='{power.bikeZone4}'/>\n"
        f"<SteadyState Duration='300' Power='{power.bikeZone2}'/>",
    52 * 60)
bikeMSDictionary["5 X (2' @ ZONE 5, THEN 1' @ ZONE 2, THEN 5' @ ZONE 4, THEN 5' @ ZONE 2)"] = Workout(
    f"<SteadyState Duration='120' Power='{power.bikeZone5}'/>\n"
        f"<SteadyState Duration='60' Power='{power.bikeZone2}'/>\n"
        f"<SteadyState Duration='300' Power='{power.bikeZone4}'/>\n"
        f"<SteadyState Duration='300' Power='{power.bikeZone2}'/>\n"
    f"<SteadyState Duration='120' Power='{power.bikeZone5}'/>\n"
        f"<SteadyState Duration='60' Power='{power.bikeZone2}'/>\n"
        f"<SteadyState Duration='300' Power='{power.bikeZone4}'/>\n"
        f"<SteadyState Duration='300' Power='{power.bikeZone2}'/>\n"
    f"<SteadyState Duration='120' Power='{power.bikeZone5}'/>\n"
        f"<SteadyState Duration='60' Power='{power.bikeZone2}'/>\n"
        f"<SteadyState Duration='300' Power='{power.bikeZone4}'/>\n"
        f"<SteadyState Duration='300' Power='{power.bikeZone2}'/>\n"
    f"<SteadyState Duration='120' Power='{power.bikeZone5}'/>\n"
        f"<SteadyState Duration='60' Power='{power.bikeZone2}'/>\n"
        f"<SteadyState Duration='300' Power='{power.bikeZone4}'/>\n"
        f"<SteadyState Duration='300' Power='{power.bikeZone2}'/>\n"
    f"<SteadyState Duration='120' Power='{power.bikeZone5}'/>\n"
        f"<SteadyState Duration='60' Power='{power.bikeZone2}'/>\n"
        f"<SteadyState Duration='300' Power='{power.bikeZone4}'/>\n"
        f"<SteadyState Duration='300' Power='{power.bikeZone2}'/>",
    65 * 60)
bikeMSDictionary["5 X (2' @ ZONE 5, THEN 1' @ ZONE 2, THEN 5' @ 95-100%/ZONE 4, THEN 10' @ ZONE 2)"] = Workout(
    f"<SteadyState Duration='120' Power='{power.bikeZone5}'/>\n"
        f"<SteadyState Duration='60' Power='{power.bikeZone2}'/>\n"
        f"<SteadyState Duration='300' Power='{power.bikeZone4}'/>\n"
        f"<SteadyState Duration='600' Power='{power.bikeZone2}'/>\n"
    f"<SteadyState Duration='120' Power='{power.bikeZone5}'/>\n"
        f"<SteadyState Duration='60' Power='{power.bikeZone2}'/>\n"
        f"<SteadyState Duration='300' Power='{power.bikeZone4}'/>\n"
        f"<SteadyState Duration='600' Power='{power.bikeZone2}'/>\n"
    f"<SteadyState Duration='120' Power='{power.bikeZone5}'/>\n"
        f"<SteadyState Duration='60' Power='{power.bikeZone2}'/>\n"
        f"<SteadyState Duration='300' Power='{power.bikeZone4}'/>\n"
        f"<SteadyState Duration='600' Power='{power.bikeZone2}'/>\n"
    f"<SteadyState Duration='120' Power='{power.bikeZone5}'/>\n"
        f"<SteadyState Duration='60' Power='{power.bikeZone2}'/>\n"
        f"<SteadyState Duration='300' Power='{power.bikeZone4}'/>\n"
        f"<SteadyState Duration='600' Power='{power.bikeZone2}'/>\n"
    f"<SteadyState Duration='120' Power='{power.bikeZone5}'/>\n"
        f"<SteadyState Duration='60' Power='{power.bikeZone2}'/>\n"
        f"<SteadyState Duration='300' Power='{power.bikeZone4}'/>\n"
        f"<SteadyState Duration='600' Power='{power.bikeZone2}'/>",
    90 * 60)
bikeMSDictionary["6 X (2' @ ZONE 5, THEN 1' @ ZONE 2, THEN 5' @ 95-100%/ZONE 4, THEN 5' @ ZONE 2)"] = Workout(
    f"<SteadyState Duration='120' Power='{power.bikeZone5}'/>\n"
        f"<SteadyState Duration='60' Power='{power.bikeZone2}'/>\n"
        f"<SteadyState Duration='300' Power='{power.bikeZone4}'/>\n"
        f"<SteadyState Duration='300' Power='{power.bikeZone2}'/>\n"
    f"<SteadyState Duration='120' Power='{power.bikeZone5}'/>\n"
        f"<SteadyState Duration='60' Power='{power.bikeZone2}'/>\n"
        f"<SteadyState Duration='300' Power='{power.bikeZone4}'/>\n"
        f"<SteadyState Duration='300' Power='{power.bikeZone2}'/>\n"
    f"<SteadyState Duration='120' Power='{power.bikeZone5}'/>\n"
        f"<SteadyState Duration='60' Power='{power.bikeZone2}'/>\n"
        f"<SteadyState Duration='300' Power='{power.bikeZone4}'/>\n"
        f"<SteadyState Duration='300' Power='{power.bikeZone2}'/>\n"
    f"<SteadyState Duration='120' Power='{power.bikeZone5}'/>\n"
        f"<SteadyState Duration='60' Power='{power.bikeZone2}'/>\n"
        f"<SteadyState Duration='300' Power='{power.bikeZone4}'/>\n"
        f"<SteadyState Duration='300' Power='{power.bikeZone2}'/>\n"
    f"<SteadyState Duration='120' Power='{power.bikeZone5}'/>\n"
        f"<SteadyState Duration='60' Power='{power.bikeZone2}'/>\n"
        f"<SteadyState Duration='300' Power='{power.bikeZone4}'/>\n"
        f"<SteadyState Duration='300' Power='{power.bikeZone2}'/>\n"
    f"<SteadyState Duration='120' Power='{power.bikeZone5}'/>\n"
        f"<SteadyState Duration='60' Power='{power.bikeZone2}'/>\n"
        f"<SteadyState Duration='300' Power='{power.bikeZone4}'/>\n"
        f"<SteadyState Duration='300' Power='{power.bikeZone2}'/>",
    78 * 60)

bikeMSDictionary["THEN 1 X 5' (5') @ 95-100%/ZONE4/HARD"] = Workout(
    f"<IntervalsT Repeat='1' OnDuration='300' OffDuration='300' OnPower='{power.bikeZone4}' OffPower='{power.bikeZone0}'/>",
    20 * 60)
bikeMSDictionary["THEN 1 X 6' (5') @ 95-100%/ZONE4/HARD"] = Workout(
    f"<IntervalsT Repeat='1' OnDuration='360' OffDuration='300' OnPower='{power.bikeZone4}' OffPower='{power.bikeZone0}'/>",
    20 * 60)


bikeMSDictionary["2 X 6' (2') @ 95-100%/ZONE4/HARD"] = Workout(
    f"<IntervalsT Repeat='2' OnDuration='360' OffDuration='120' OnPower='{power.bikeZone4}' OffPower='{power.bikeZone0}'/>",
    16 * 60)
bikeMSDictionary["2 X 8' (2') @ 95-100%/ZONE4/HARD"] = Workout(
    f"<IntervalsT Repeat='2' OnDuration='480' OffDuration='120' OnPower='{power.bikeZone4}' OffPower='{power.bikeZone0}'/>",
    20 * 60)
bikeMSDictionary["2 X 8' (3') @ 95-100%/ZONE4/HARD REMAINDER OF AVAILABLE TIME AT 80-85%/ZONE4/HARD"] = Workout(
    f"<IntervalsT Repeat='2' OnDuration='480' OffDuration='180' OnPower='{power.bikeZone4}' OffPower='{power.bikeZone0}'/>",
    22 * 60, power.bikeZone4)
bikeMSDictionary["2 X 8' (3') @ 95-100%/ZONE4/HARD"] = Workout(
    f"<IntervalsT Repeat='2' OnDuration='480' OffDuration='180' OnPower='{power.bikeZone4}' OffPower='{power.bikeZone0}'/>",
    22 * 60)
bikeMSDictionary["2 X 8' (4') @ ZONE 4"] = Workout(
    f"<IntervalsT Repeat='2' OnDuration='480' OffDuration='240' OnPower='{power.bikeZone4}' OffPower='{power.bikeZone0}'/>",
    24 * 60)
bikeMSDictionary["2 X 8' (4') @ 95-100%/ZONE4/HARD"] = bikeMSDictionary["2 X 8' (4') @ ZONE 4"]
bikeMSDictionary["2 X 10' (4') @ 95-100%/ZONE4/HARD"] = Workout(
    f"<IntervalsT Repeat='2' OnDuration='600' OffDuration='240' OnPower='{power.bikeZone4}' OffPower='{power.bikeZone0}'/>",
    28 * 60)
bikeMSDictionary["2 X 10' (4') @ ZONE 4"] = bikeMSDictionary["2 X 10' (4') @ 95-100%/ZONE4/HARD"]
bikeMSDictionary["2 X 10' (4') @ 95-100%/ZONE4/HARD REMAINDER @ 75-80%/ZONE2/STEADY"] = Workout(
    f"<IntervalsT Repeat='2' OnDuration='600' OffDuration='240' OnPower='{power.bikeZone4}' OffPower='{power.bikeZone0}'/>",
    32 * 60, power.bikeZone2)
bikeMSDictionary["2 X 10' (3') @ 95-100%/ZONE4/HARD"] = Workout(
    f"<IntervalsT Repeat='2' OnDuration='600' OffDuration='180' OnPower='{power.bikeZone4}' OffPower='{power.bikeZone0}'/>",
    26 * 60)
bikeMSDictionary["2 X 10' (3') @ 95-100%/ZONE4/HARD REMAINDER OF TIME AT 80-85%/ZONE3/MOD-HARD"] = Workout(
    f"<IntervalsT Repeat='2' OnDuration='600' OffDuration='180' OnPower='{power.bikeZone4}' OffPower='{power.bikeZone0}'/>",
    26 * 60, power.bikeZone3)
bikeMSDictionary["2 X 12 (4') @ 95-100%/ZONE4/HARD"] = Workout(
    f"<IntervalsT Repeat='2' OnDuration='720' OffDuration='240' OnPower='{power.bikeZone4}' OffPower='{power.bikeZone0}'/>",
    32 * 60)
bikeMSDictionary["2 X 12' (4') @ 95-100%/ZONE4/HARD"] = bikeMSDictionary["2 X 12 (4') @ 95-100%/ZONE4/HARD"]
bikeMSDictionary["2 X 12' (4') @ ZONE 4"] = bikeMSDictionary["2 X 12 (4') @ 95-100%/ZONE4/HARD"]
bikeMSDictionary["2 X 12' (4') @ 95-100%/ZONE4/HARD REMAINDER OF TIME AT 80-85%/ZONE3/MOD-HARD"] = Workout(
    f"<IntervalsT Repeat='2' OnDuration='720' OffDuration='240' OnPower='{power.bikeZone4}' OffPower='{power.bikeZone0}'/>",
    32 * 60, power.bikeZone3)
bikeMSDictionary["THEN 2 X 15' (2') @ 80-85%/ZONE3/MOD-HARD"] = Workout(
    f"<IntervalsT Repeat='2' OnDuration='900' OffDuration='120' OnPower='{power.bikeZone4}' OffPower='{power.bikeZone0}'/>",
    20 * 60)
bikeMSDictionary["2 X 15' (4') @ 95-100%/ZONE4/HARD"] = Workout(
    f"<IntervalsT Repeat='2' OnDuration='900' OffDuration='240' OnPower='{power.bikeZone4}' OffPower='{power.bikeZone0}'/>",
    38 * 60)
bikeMSDictionary["2 X 15' (4') @ ZONE 4"] = bikeMSDictionary["2 X 15' (4') @ 95-100%/ZONE4/HARD"]
bikeMSDictionary["2 X 18' (4') @ 95-100%/ZONE4/HARD"] = Workout(
    f"<IntervalsT Repeat='2' OnDuration='1080' OffDuration='240' OnPower='{power.bikeZone4}' OffPower='{power.bikeZone0}'/>",
    44 * 60)
bikeMSDictionary["2 X 20' (4') @ 95-100%/ZONE4/HARD"] = Workout(
    f"<IntervalsT Repeat='2' OnDuration='1200' OffDuration='240' OnPower='{power.bikeZone4}' OffPower='{power.bikeZone0}'/>",
    48 * 60)
bikeMSDictionary["2 X 20 (4') @ 95-100%/ZONE4/HARD"] = bikeMSDictionary["2 X 20' (4') @ 95-100%/ZONE4/HARD"]
bikeMSDictionary["2 X 20 (4') @ ZONE 4"] = bikeMSDictionary["2 X 20' (4') @ 95-100%/ZONE4/HARD"]
bikeMSDictionary["2 X 20' (4') @ 95-100%/ZONE4/HARD.REMAINDER OF TIME AT 80-85%/ZONE3/MOD-HARD"] = Workout(
    f"<IntervalsT Repeat='2' OnDuration='1200' OffDuration='240' OnPower='{power.bikeZone4}' OffPower='{power.bikeZone0}'/>\n"
    f"<SteadyState Duration='3120' Power='{power.bikeZone3}'/>",
    100 * 60)

bikeMSDictionary["3 X 4' (4') @ 95-100%/ZONE4/HARD REMAINDER @ 75-80%/ZONE2/STEADY"] = Workout(
    f"<IntervalsT Repeat='3' OnDuration='240' OffDuration='240' OnPower='{power.bikeZone4}' OffPower='{power.bikeZone0}'/>",
    24 * 60)
bikeMSDictionary["3 X 4' (4') @ 95-100%/ZONE4/HARD REMAINDER @ 75-80%/ZONE2/STEADY WD: 5' EASY"] = Workout(
    f"<IntervalsT Repeat='3' OnDuration='240' OffDuration='240' OnPower='{power.bikeZone4}' OffPower='{power.bikeZone0}'/>"
    f"<Cooldown Duration='300' PowerLow='{power.bikeZone2}' PowerHigh='{power.bikeZone0}'/>",
    29 * 60)
bikeMSDictionary["3 X 5' (2') @ 95-100%/ZONE4/HARD"] = Workout(
    f"<IntervalsT Repeat='3' OnDuration='300' OffDuration='120' OnPower='{power.bikeZone4}' OffPower='{power.bikeZone0}'/>",
    21 * 60)
bikeMSDictionary["3 X 6' (4') @ 95-100%/ZONE4/HARD REMAINDER @ 75-80%/ZONE2/STEADY WD: 5' EASY"] = Workout(
    f"<IntervalsT Repeat='3' OnDuration='360' OffDuration='240' OnPower='{power.bikeZone4}' OffPower='{power.bikeZone0}'/>"
    f"<Cooldown Duration='300' PowerLow='{power.bikeZone2}' PowerHigh='{power.bikeZone0}'/>",
    35 * 60)
bikeMSDictionary["3 X 6' (4') @ 95-100%/ZONE4/HARD REMAINDER @ 75-80%/ZONE2/STEADY"] = Workout(
    f"<IntervalsT Repeat='3' OnDuration='360' OffDuration='240' OnPower='{power.bikeZone4}' OffPower='{power.bikeZone0}'/>"
    f"<Cooldown Duration='300' PowerLow='{power.bikeZone2}' PowerHigh='{power.bikeZone0}'/>",
    35 * 60, power.bikeZone2)
bikeMSDictionary["3 X 8' (2') @ 95-100%/ZONE4/HARD"] = Workout(
    f"<IntervalsT Repeat='3' OnDuration='480' OffDuration='120' OnPower='{power.bikeZone4}' OffPower='{power.bikeZone0}'/>",
    30 * 60)
bikeMSDictionary["3 X 8' (4') @ 95-100%/ZONE4/HARD REMAINDER @ 75-80%/ZONE2/STEADY WD: 5' EASY"] = Workout(
    f"<IntervalsT Repeat='3' OnDuration='480' OffDuration='240' OnPower='{power.bikeZone4}' OffPower='{power.bikeZone0}'/>"
    f"<Cooldown Duration='300' PowerLow='{power.bikeZone2}' PowerHigh='{power.bikeZone0}'/>",
    41 * 60)
bikeMSDictionary["3 X 8' (4') ALL @ ZONE 4, REMAINDER IN ZONE 2"] = Workout(
    f"<IntervalsT Repeat='3' OnDuration='600' OffDuration='300' OnPower='{power.bikeZone4}' OffPower='{power.bikeZone0}'/>",
    36 * 60, power.bikeZone2)
bikeMSDictionary["3 X 8' (4') @ 95-100%/ZONE4/HARD REMAINDER @ 75-80%/ZONE2/STEADY"] = bikeMSDictionary["3 X 8' (4') ALL @ ZONE 4, REMAINDER IN ZONE 2"]
bikeMSDictionary["3 X 8' (4') @ ZONE 4"] = Workout(
    f"<IntervalsT Repeat='3' OnDuration='480' OffDuration='240' OnPower='{power.bikeZone4}' OffPower='{power.bikeZone0}'/>",
    36 * 60)
bikeMSDictionary["3 X 10' (4') @ ZONE 4"] = Workout(
    f"<IntervalsT Repeat='3' OnDuration='600' OffDuration='240' OnPower='{power.bikeZone4}' OffPower='{power.bikeZone0}'/>",
    42 * 60)
bikeMSDictionary["3 X 10' (4') @ 95-100%/ZONE4/HARD"] = bikeMSDictionary["3 X 10' (4') @ ZONE 4"]
bikeMSDictionary["3 X 10' (5') ALL @ ZONE 4, REMAINDER IN ZONE 2"] = Workout(
    f"<IntervalsT Repeat='3' OnDuration='600' OffDuration='300' OnPower='{power.bikeZone4}' OffPower='{power.bikeZone0}'/>",
    45 * 60, power.bikeZone2)
bikeMSDictionary["3 X 12' (4') @ 95-100%/ZONE4/HARD"] = Workout(
    f"<IntervalsT Repeat='3' OnDuration='720' OffDuration='240' OnPower='{power.bikeZone4}' OffPower='{power.bikeZone0}'/>",
    48 * 60)
bikeMSDictionary["3 X 12' (5') ALL @ ZONE 4, REMAINDER IN ZONE 2"] = Workout(
    f"<IntervalsT Repeat='3' OnDuration='600' OffDuration='300' OnPower='{power.bikeZone4}' OffPower='{power.bikeZone0}'/>",
    51 * 60, power.bikeZone2)
bikeMSDictionary["3 X 14' (6') ALL @ ZONE 4, REMAINDER IN ZONE 2"] = Workout(
    f"<IntervalsT Repeat='3' OnDuration='600' OffDuration='300' OnPower='{power.bikeZone4}' OffPower='{power.bikeZone0}'/>",
    60 * 60, power.bikeZone2)
bikeMSDictionary["3 X 20' (5') @ ZONE 2 TO ZONE 3 AS YOU FEEL"] = Workout(
    f"<IntervalsT Repeat='3' OnDuration='1200' OffDuration='300' OnPower='{power.bikeZone3}' OffPower='{power.bikeZone0}'/>",
    75 * 60, power.bikeZone3)


bikeMSDictionary["4 X 8' (4') ALL @ ZONE 4, REMAINDER IN ZONE 2"] = Workout(
    f"<IntervalsT Repeat='3' OnDuration='600' OffDuration='300' OnPower='{power.bikeZone4}' OffPower='{power.bikeZone0}'/>",
    48 * 60, power.bikeZone2)
bikeMSDictionary["4 X 25' (5') @ ZONE 2 TO ZONE 3 AS YOU FEEL"] = Workout(
    f"<IntervalsT Repeat='4' OnDuration='1500' OffDuration='300' OnPower='{power.bikeZone3}' OffPower='{power.bikeZone0}'/>",
    20 * 60)

bikeMSDictionary["5 X 1.5' (1.5') @ ZONE 5"] = Workout(
    f"<IntervalsT Repeat='5' OnDuration='90' OffDuration='90' OnPower='{power.bikeZone5}' OffPower='{power.bikeZone0}'/>",
    15 * 60)
bikeMSDictionary["5 X 2' (2') @ ZONE 5"] = Workout(
    f"<IntervalsT Repeat='5' OnDuration='120' OffDuration='120' OnPower='{power.bikeZone5}' OffPower='{power.bikeZone0}'/>",
    20 * 60)
bikeMSDictionary["5 X 9' (3') ALL @ ZONE 4, REMAINDER IN ZONE 2"] = Workout(
    f"<IntervalsT Repeat='3' OnDuration='600' OffDuration='300' OnPower='{power.bikeZone4}' OffPower='{power.bikeZone0}'/>",
    60 * 60, power.bikeZone2)

bikeMSDictionary["6 X 1.5' (1.5') @ ZONE 5"] = Workout(
    f"<IntervalsT Repeat='6' OnDuration='90' OffDuration='90' OnPower='{power.bikeZone5}' OffPower='{power.bikeZone0}'/>",
    18 * 60)
bikeMSDictionary["6 X 2'(2') @ ZONE 5"] = Workout(
    f"<IntervalsT Repeat='6' OnDuration='120' OffDuration='120' OnPower='{power.bikeZone5}' OffPower='{power.bikeZone0}'/>",
    24 * 60)
bikeMSDictionary["6 X 7' (3') ALL @ ZONE 4, REMAINDER IN ZONE 2"] = Workout(
    f"<IntervalsT Repeat='3' OnDuration='600' OffDuration='300' OnPower='{power.bikeZone4}' OffPower='{power.bikeZone0}'/>",
    60 * 60, power.bikeZone2)

bikeMSDictionary["7 X 1' (1') @ ZONE 5"] = Workout(
    f"<IntervalsT Repeat='7' OnDuration='60' OffDuration='60' OnPower='{power.bikeZone5}' OffPower='{power.bikeZone0}'/>",
    14 * 60)
bikeMSDictionary["7 X 1'(2') @ ZONE 5"] = Workout(
    f"<IntervalsT Repeat='7' OnDuration='60' OffDuration='120' OnPower='{power.bikeZone5}' OffPower='{power.bikeZone0}'/>",
    21 * 60)
bikeMSDictionary["7 X 1.5' (1.5') @ ZONE 5"] = Workout(
    f"<IntervalsT Repeat='7' OnDuration='90' OffDuration='90' OnPower='{power.bikeZone5}' OffPower='{power.bikeZone0}'/>",
    21 * 60)
bikeMSDictionary["7 X 2'(2') @ ZONE 5"] = Workout(
    f"<IntervalsT Repeat='7' OnDuration='120' OffDuration='120' OnPower='{power.bikeZone5}' OffPower='{power.bikeZone0}'/>",
    28 * 60)

bikeMSDictionary["8' (4') @ ZONE 4"] = Workout(
    f"<IntervalsT Repeat='1' OnDuration='480' OffDuration='240' OnPower='{power.bikeZone4}' OffPower='{power.bikeZone0}'/>",
    12 * 60)

bikeMSDictionary["10' (4') @ ZONE 4"] = Workout(
    f"<IntervalsT Repeat='1' OnDuration='600' OffDuration='240' OnPower='{power.bikeZone4}' OffPower='{power.bikeZone0}'/>",
    14 * 60)
bikeMSDictionary["10' (4'), 14' (5'), 18' (6') ALL @ ZONE 4, REMAINDER IN ZONE 2"] = Workout(
    f"<IntervalsT Repeat='1' OnDuration='600' OffDuration='240' OnPower='{power.bikeZone4}' OffPower='{power.bikeZone0}'/>\n"
    f"<IntervalsT Repeat='1' OnDuration='840' OffDuration='300' OnPower='{power.bikeZone4}' OffPower='{power.bikeZone0}'/>\n"
    f"<IntervalsT Repeat='1' OnDuration='1080' OffDuration='360' OnPower='{power.bikeZone4}' OffPower='{power.bikeZone0}'/>",
    57 * 60, power.bikeZone2)

bikeMSDictionary["12' (4'), 15' (5'), 18' (6') ALL @ ZONE 4, REMAINDER IN ZONE 2"] = Workout(
    f"<IntervalsT Repeat='1' OnDuration='720' OffDuration='240' OnPower='{power.bikeZone4}' OffPower='{power.bikeZone0}'/>\n"
    f"<IntervalsT Repeat='1' OnDuration='900' OffDuration='300' OnPower='{power.bikeZone4}' OffPower='{power.bikeZone0}'/>\n"
    f"<IntervalsT Repeat='1' OnDuration='1080' OffDuration='360' OnPower='{power.bikeZone4}' OffPower='{power.bikeZone0}'/>",
    60 * 60, power.bikeZone2)

bikeMSDictionary["15' @ 80-85%/ZONE3/MOD-HARD 45' @ 95-100%/ZONE4/HARD FAST TRANSITION STRAIGHT TO RUN"] = Workout(
        f"<SteadyState Duration='900' Power='{power.bikeZone3}'/>\n"
        f"<SteadyState Duration='2700' Power='{power.bikeZone4}'/>",
    20 * 60)

bikeMSDictionary["THEN RIDE STEADY IN ZONE 1 TO ZONE 2 FOR 140'"] = Workout(
    f"<Warmup Duration='8400' PowerLow='{power.bikeZone1}' PowerHigh='{power.bikeZone2}'/>",
    140 * 60)

bikeMSDictionary["MS: 1' ''ON'' @ 120%/ZONE5/VERY HARD, 1' ''OFF'' @ 60-65%/ZONE1/EASY. REPEAT FOR A TOTAL OF 6' OF ''ON'' TIME"] = Workout(
    f"<IntervalsT Repeat='6' OnDuration='60' OffDuration='60' OnPower='{power.bikeZone4}' OffPower='{power.bikeZone0}'/>",
    12 * 60)
bikeMSDictionary["MS: 1' ''ON'' @ 120%/ZONE5/VERY HARD, 1' ''OFF'' @ 60-65%/ZONE1/EASY. REPEAT FOR A TOTAL OF 8' OF ''ON'' TIME"] = Workout(
    f"<IntervalsT Repeat='8' OnDuration='60' OffDuration='60' OnPower='{power.bikeZone4}' OffPower='{power.bikeZone0}'/>",
    16 * 60)
bikeMSDictionary["MS: 1' ''ON'' @ 120%/ZONE5/VERY HARD, 1' ''OFF'' @ 60-65%/ZONE1/EASY. REPEAT FOR A TOTAL OF 10' OF ''ON'' TIME"] = Workout(
    f"<IntervalsT Repeat='10' OnDuration='60' OffDuration='60' OnPower='{power.bikeZone4}' OffPower='{power.bikeZone0}'/>",
    20 * 60)
bikeMSDictionary["MS: 1' ''ON'' @ 120%/ZONE5/VERY HARD, 1' ''OFF'' @ 60-65%/ZONE1/EASY. REPEAT FOR A TOTAL OF 12' OF ''ON'' TIME"] = Workout(
    f"<IntervalsT Repeat='12' OnDuration='60' OffDuration='60' OnPower='{power.bikeZone4}' OffPower='{power.bikeZone0}'/>",
    24 * 60)
bikeMSDictionary["MS: 1' ''ON'' @ 120%/ZONE5/VERY HARD, 1' ''OFF'' @ 60-65%/ZONE1/EASY. REPEAT FOR A TOTAL OF 14' OF ''ON'' TIME"] = Workout(
    f"<IntervalsT Repeat='14' OnDuration='60' OffDuration='60' OnPower='{power.bikeZone4}' OffPower='{power.bikeZone0}'/>",
    28 * 60)

bikeMSDictionary["10' OF ''ON'' TIME"] = bikeMSDictionary["MS: 1' ''ON'' @ 120%/ZONE5/VERY HARD, 1' ''OFF'' @ 60-65%/ZONE1/EASY. REPEAT FOR A TOTAL OF 10' OF ''ON'' TIME"]
bikeMSDictionary["MS: 8' OF ''ON'' TIME, AS WHATEVER COMBINATION OF ON/OFF INTERVALS FEELS RIGHT FOR YOU TODAY"] = bikeMSDictionary["MS: 1' ''ON'' @ 120%/ZONE5/VERY HARD, 1' ''OFF'' @ 60-65%/ZONE1/EASY. REPEAT FOR A TOTAL OF 8' OF ''ON'' TIME"]
bikeMSDictionary["MS: 10' OF ''ON'' TIME, AS WHATEVER COMBINATION OF ON/OFF INTERVALS FEELS RIGHT FOR YOU TODAY"] = bikeMSDictionary["MS: 1' ''ON'' @ 120%/ZONE5/VERY HARD, 1' ''OFF'' @ 60-65%/ZONE1/EASY. REPEAT FOR A TOTAL OF 10' OF ''ON'' TIME"]
bikeMSDictionary["MS: 12' OF ''ON'' TIME, AS WHATEVER COMBINATION OF ON/OFF INTERVALS FEELS RIGHT FOR YOU TODAY"] = bikeMSDictionary["MS: 1' ''ON'' @ 120%/ZONE5/VERY HARD, 1' ''OFF'' @ 60-65%/ZONE1/EASY. REPEAT FOR A TOTAL OF 12' OF ''ON'' TIME"]
bikeMSDictionary["MS: 14' OF ''ON'' TIME, AS WHATEVER COMBINATION OF ON/OFF INTERVALS FEELS RIGHT FOR YOU TODAY"] = bikeMSDictionary["MS: 1' ''ON'' @ 120%/ZONE5/VERY HARD, 1' ''OFF'' @ 60-65%/ZONE1/EASY. REPEAT FOR A TOTAL OF 14' OF ''ON'' TIME"]

# bikeMSDictionary["MS: 1' ''ON'' @ 120%/ZONE5/VERY HARD, 1' ''OFF'' @ 60-65%/ZONE1/EASY. REPEAT FOR A TOTAL OF 8' OF ''ON'' TIME, AS WHATEVER COMBINATION OF ON/OFF INTERVALS FEELS RIGHT FOR YOU TODAY"] = bikeMSDictionary["MS: 1' ''ON'' @ 120%/ZONE5/VERY HARD, 1' ''OFF'' @ 60-65%/ZONE1/EASY. REPEAT FOR A TOTAL OF 8' OF ''ON'' TIME"]
# bikeMSDictionary["MS: 1' ''ON'' @ 120%/ZONE5/VERY HARD, 1' ''OFF'' @ 60-65%/ZONE1/EASY. REPEAT FOR A TOTAL OF 10' OF ''ON'' TIME, AS WHATEVER COMBINATION OF ON/OFF INTERVALS FEELS RIGHT FOR YOU TODAY"] = bikeMSDictionary["MS: 1' ''ON'' @ 120%/ZONE5/VERY HARD, 1' ''OFF'' @ 60-65%/ZONE1/EASY. REPEAT FOR A TOTAL OF 10' OF ''ON'' TIME"]
# bikeMSDictionary["MS: 1' ''ON'' @ 120%/ZONE5/VERY HARD, 1' ''OFF'' @ 60-65%/ZONE1/EASY. REPEAT FOR A TOTAL OF 14' OF ''ON'' TIME, AS WHATEVER COMBINATION OF ON/OFF INTERVALS FEELS RIGHT FOR YOU TODAY"] = bikeMSDictionary["MS: 1' ''ON'' @ 120%/ZONE5/VERY HARD, 1' ''OFF'' @ 60-65%/ZONE1/EASY. REPEAT FOR A TOTAL OF 14' OF ''ON'' TIME"]


bikeMSDictionary["RIDE NO MORE THAN 112 MILES OR 6 HOURS, WHICHEVER COMES FIRST"] = Workout(
    f"<SteadyState Duration='21600' Power='{power.bikeZone2}'/>",
    360 * 60)



# bikeMSDictionary["1' ''ON'' @ 120%/ZONE5/VERY HARD, 1' ''OFF'' @ 60-65%/ZONE1/EASY"] = Workout(
# bikeMSDictionary["12' OF ''ON'' TIME, AS WHATEVER COMBINATION OF ON/OFF INTERVALS FEELS RIGHT FOR YOU TODAY"] = Workout(
# bikeMSDictionary["14 REPEATS OF 1' ON, 1' RECOVERY"] = Workout(
# bikeMSDictionary["12 REPEATS OF 1' ON, 1' RECOVERY"] = Workout(
# bikeMSDictionary["11 REPEATS OF 1' ON, 1' RECOVERY"] = Workout(
# bikeMSDictionary["10 REPEATS OF 1' ON, 1' RECOVERY"] = Workout(
# bikeMSDictionary["6 REPEATS OF 1' ON, 4' RECOVERY"] = Workout(
# bikeMSDictionary["MAJORITY OF RIDE TIME @ ZONE 3"] = Workout(
# bikeMSDictionary["REPEAT FOR A TOTAL OF 12' OF ''ON'' TIME"] = Workout(
# bikeMSDictionary["REPEAT FOR A TOTAL OF 3 EFFORTS"] = Workout(
# bikeMSDictionary["REPEAT FOR A TOTAL OF 6 EFFORTS"] = Workout(


# bikeMSDictionary["*2 X 15' (5') @ 80-85%/Z3"] = Workout(
# bikeMSDictionary["10 X 1' (1') @ ZONE 5"] = Workout(
# bikeMSDictionary["10 X 30'' WITH 7' OF RECOVERY IN ZONE 1"] = Workout(
# bikeMSDictionary["12' (4') @ ZONE 4"] = Workout(
# bikeMSDictionary["12 X 1' (1') @ ZONE 5"] = Workout(
# bikeMSDictionary["13' (4') @ ZONE 4"] = Workout(
# bikeMSDictionary["2 X 10' (2') @ ZONE 3"] = Workout(
# bikeMSDictionary["2 X 12' (5') @ ZONE 4"] = Workout(
# bikeMSDictionary["2 X 15' (5') @ ZONE 3"] = Workout(
# bikeMSDictionary["2 X 15' (5') @ ZONE 4"] = Workout(
# bikeMSDictionary["2 X 20' (4') @ ZONE 4"] = Workout(
# bikeMSDictionary["2 X 20' (5') @ ZONE 4"] = Workout(
# bikeMSDictionary["2 X 30' (5') AT 90% TO 95% OF FTP; HR ATHLETES SHOULD BE SUB-THRESHOLD HEART RATE"] = Workout(
# bikeMSDictionary["2 X 8' (2') @ ZONE 4"] = Workout(
# bikeMSDictionary["2.5 HOURS AT GOAL IRONMAN RACE EFFORT, APPROXIMATELY ZONE 2"] = Workout(
# bikeMSDictionary["20' OF SUSTAINED EFFORT IN ZONE 3"] = Workout(
# bikeMSDictionary["25' OF SUSTAINED EFFORT IN ZONE 3"] = Workout(
# bikeMSDictionary["3 X 12' (5') @ ZONE 4"] = Workout(
# bikeMSDictionary["3 X 15' (5') @ ZONE 4"] = Workout(
# bikeMSDictionary["3 X 2' @ 125% FTP, FOLLOWED BY 4' OF REST"] = Workout(
# bikeMSDictionary["3 X 20' (5') @ ZONE 4"] = Workout(
# bikeMSDictionary["3 X 20' (5') AT 90% TO 95% OF FTP; HR ATHLETES SHOULD BE SUB-THRESHOLD HEART RATE"] = Workout(
# bikeMSDictionary["3 X 4' (4') @ 110% FTP"] = Workout(
# bikeMSDictionary["3 X 4' (4')...RECOVERY IN ZONE 1"] = Workout(
# bikeMSDictionary["3 X 5' (5') @ 110% FTP"] = Workout(
# bikeMSDictionary["3 X 5' WITH 5' OF RECOVERY IN ZONE 1"] = Workout(
# bikeMSDictionary["3 X 6' (4') @ FT/Z4-5, 10' EASY; 2 X 12' (4') @ ZONE 3"] = Workout(
# bikeMSDictionary["3 X 6' (4') @ ZONE 4"] = Workout(
# bikeMSDictionary["3 X 60' AS 40' @ ZONE 2, 15' @ ZONE 3, 5' @ ZONE 4"] = Workout(
# bikeMSDictionary["3 X 60' AS 40' @ ZONE 2, 20' @ ZONE 3"] = Workout(
# bikeMSDictionary["3 X 60' AS 50' @ ZONE 2, 20' @ ZONE 3"] = Workout(
# bikeMSDictionary["3 X 8' (2') @ ZONE 4"] = Workout(
# bikeMSDictionary["3 X 8' (4') @ 95-100%/ZONE4/HARD"] = Workout(
# bikeMSDictionary["3 X 80' AS 50' @ ZONE 2, 20' @ ZONE 3, 10' @ ZONE 4"] = Workout(
# bikeMSDictionary["3 X 80' AS 50' @ ZONE 2, 30' @ ZONE 3"] = Workout(
# bikeMSDictionary["30' @ ZONE 1 TO ZONE 2"] = Workout(
# bikeMSDictionary["30' @ ZONE 3"] = Workout(
# bikeMSDictionary["30' OF SUSTAINED EFFORT IN ZONE 3"] = Workout(
# bikeMSDictionary["30' OF SUSTAINED EFFORT, BUILDING FROM ZONE 2 INTO ZONE 3"] = Workout(
# bikeMSDictionary["30' OF SUSTAINED EFFORT, MOSTLY ZONE 2"] = Workout(
# bikeMSDictionary["30' RACE PACE TT EFFORT"] = Workout(
# bikeMSDictionary["30' TO 60' @ ZONE 3 DEPENDING ON HOW YOU FEEL"] = Workout(
# bikeMSDictionary["4 X 10' (2') @ ZONE 4"] = Workout(
# bikeMSDictionary["4 X 10' (3') @ ZONE 4"] = Workout(
# bikeMSDictionary["4 X 10' @ SWEET SPOT + 2' PUSH"] = Workout(
# bikeMSDictionary["4 X 12' @ SWEET SPOT + 1' PUSH"] = Workout(
# bikeMSDictionary["4 X 15' (5') @ ZONE 4"] = Workout(
# bikeMSDictionary["4 X 25' (5') @ ZONE 2 TO ZONE 3"] = Workout(
# bikeMSDictionary["4 X 3' (3') @ 110%/ZONE5/VERYHARD"] = Workout(
# bikeMSDictionary["4 X 3' (3') RECOVERY @ ZONE 1"] = Workout(
# bikeMSDictionary["4 X 4' (4') @ 110% FTP"] = Workout(
# bikeMSDictionary["4 X 4' (4') @ 110%/ZONE5/VERYHARD"] = Workout(
# bikeMSDictionary["4 X 5' (4') @ 110%/ZONE5/VERYHARD"] = Workout(
# bikeMSDictionary["4 X 5' (5') @ 110% FTP"] = Workout(
# bikeMSDictionary["4 X 7' @ SWEET SPOT + 2' PUSH"] = Workout(
# bikeMSDictionary["4 X 8' (2') @ 75-80%/ZONE2 TO 3/STEADY TO MOD-HARD"] = Workout(
# bikeMSDictionary["4 X 8' @ SWEET SPOT + 2' PUSH"] = Workout(
# bikeMSDictionary["4 X 9' (3') @ ZONE 4"] = Workout(
# bikeMSDictionary["40' OF SUSTAINED EFFORT, BUILDING FROM ZONE 2 INTO ZONE 3"] = Workout(
# bikeMSDictionary["40' TO 60' @ ZONE 3"] = Workout(
# bikeMSDictionary["45' TO 65' @ ZONE 3"] = Workout(
# bikeMSDictionary["5 X 1' WITH 7' OF RECOVERY IN ZONE 1"] = Workout(
# bikeMSDictionary["5 X 3' (3') @ 110%/ZONE5/VERYHARD"] = Workout(
# bikeMSDictionary["5 X 4' (4') @ 110%/ZONE5/VERYHARD"] = Workout(
# bikeMSDictionary["5 X 5' (5') @ 110% FTP"] = Workout(
# bikeMSDictionary["5 X 5' HILL CLIMBS @ ZONE 2 TO ZONE 3, RECOVER BY COASTING BACK TO THE BOTTOM"] = Workout(
# bikeMSDictionary["6 X 2' (2') RECOVERY @ ZONE 1"] = Workout(
# bikeMSDictionary["6 X 45 WITH 7' OF RECOVERY IN ZONE 1"] = Workout(
# bikeMSDictionary["6 X 5' HILL CLIMBS @ ZONE 2 TO ZONE 3, RECOVER BY COASTING BACK TO THE BOTTOM"] = Workout(
# bikeMSDictionary["7 X 45'' WITH 7' OF RECOVERY IN ZONE 1"] = Workout(
# bikeMSDictionary["7 X 5' HILL CLIMBS @ ZONE 2 TO ZONE 3, RECOVER BY COASTING BACK TO THE BOTTOM"] = Workout(
# bikeMSDictionary["8' OF ''ON'' TIME"] = Workout(
# bikeMSDictionary["8 X 1.5' (1.5') RECOVERY @ ZONE 1"] = Workout(
# bikeMSDictionary["8 X 30'''' WITH 7' OF RECOVERY IN ZONE 1"] = Workout(
# bikeMSDictionary["AFTER A SHORT BREAK, 2 X 20' (10') AT ZONE 3 (OR SURGE UP A FEW SHORT HILLS)"] = Workout(
# bikeMSDictionary["AFTER A SHORT BREAK, DO 3 X (10' @ ZONE 3 + 5' @ ZONE 4) WITH 5' OF EASY SPINNING AFTER EACH"] = Workout(
# bikeMSDictionary["AFTER A SHORT BREAK, DO 4 X (8' @ ZONE 3 + 4' @ ZONE 4) WITH 8' OF EASY SPINNING AFTER EACH"] = Workout(
# bikeMSDictionary["AFTER A SHORT BREAK, DO TWO SETS OF 20' EACH AT ZONE 3, WITH 10' OF EASY SPINNING AFTER EACH"] = Workout(
# bikeMSDictionary["AFTER A SHORT BREAK, PUSH FOR 20' AT ZONE 3 (OR SURGE UP A FEW SHORT HILLS)"] = Workout(
# bikeMSDictionary["AFTER A SHORT BREAK, PUSH FOR 25' AT ZONE 3 (OR SURGE UP A FEW SHORT HILLS)"] = Workout(
# bikeMSDictionary["AFTER A SHORT BREAK, PUSH FOR 30' AT ZONE 3 (OR SURGE UP A FEW SHORT HILLS)"] = Workout(
# bikeMSDictionary["AFTER A SHORT BREAK, PUSH FOR 40' AT ZONE 3 (SURGE UP HILLS, ETC)"] = Workout(
# bikeMSDictionary["ALL 15' @ ZONE 2 TO GET LOOSE"] = Workout(
# bikeMSDictionary["ALL 15∩┐╜ @ ZONE 1 TO ZONE 2 TO GET LOOSE"] = Workout(
# bikeMSDictionary["ALL 30' @ ZONE 1 TO ZONE 2 TO GET LOOSE"] = Workout(
# bikeMSDictionary["ALL 30' @ ZONE 2 TO GET LOOSE"] = Workout(
# bikeMSDictionary["ALL 30' @ ZONE 2, INCLUDE SOME STANDING IN A LOW GEAR TO GET LOOSE"] = Workout(
# bikeMSDictionary["ANOTHER HOUR OF STEADY RIDING IN ZONE 2"] = Workout(
# bikeMSDictionary["CHOOSE YOUR LEVEL"] = Workout(
# bikeMSDictionary["DO 1 HOUR OF STEADY RIDING IN ZONE 2"] = Workout(
# bikeMSDictionary["DO 1.5 HOURS OF MODERATE EFFORT RIDING IN ZONE 3"] = Workout(
# bikeMSDictionary["DO 1.5 HOURS OF STEADY RIDING IN ZONE 2"] = Workout(
# bikeMSDictionary["DO 2 HOURS OF STEADY RIDING IN ZONE 2"] = Workout(
# bikeMSDictionary["DO 2.5 HOURS OF STEADY RIDING IN ZONE 2"] = Workout(
# bikeMSDictionary["DO 3 HOURS OF STEADY RIDING IN ZONE 2, BUT CHALLENGE YOURSELF TO RIDE ZONE 3 ON THE HILLS"] = Workout(
# bikeMSDictionary["DO 3 HOURS OF STEADY RIDING IN ZONE 2"] = Workout(
# bikeMSDictionary["DO 3.5 HOURS OF STEADY RIDING IN ZONE 2, BUT CHALLENGE YOURSELF TO RIDE ZONE 3 ON THE HILLS"] = Workout(
# bikeMSDictionary["DO ANOTHER 30' OF STEADY RIDING IN ZONE 2"] = Workout(
# bikeMSDictionary["DO ANOTHER HOUR OF STEADY RIDING IN ZONE 2"] = Workout(
# bikeMSDictionary["DO THREE HOURS OF STEADY RIDING IN ZONE 2"] = Workout(
# bikeMSDictionary["DO TWO HOURS OF STEADY RIDING IN ZONE 2"] = Workout(
# bikeMSDictionary["DO"] = Workout(
# bikeMSDictionary["ENDURANCE RIDE INCLUDING 30' - 60' @ ZONE 3 DEPENDING ON HOW YOU FEEL"] = Workout(
# bikeMSDictionary["FINISH WITH STEADY RIDING IN ZONE 2"] = Workout(
# bikeMSDictionary["RIDE 30' @ ZONE 1 TO ZONE 2, THEN 150' @ ZONE 2 AS MUCH AS POSSIBLE"] = Workout(
# bikeMSDictionary["RIDE 30' @ ZONE 2, THEN 120' @ ZONE 3 AS MUCH AS POSSIBLE"] = Workout(
# bikeMSDictionary["RIDE 30' @ ZONE 2, THEN 60' @ ZONE 3 AS MUCH AS POSSIBLE"] = Workout(
# bikeMSDictionary["RIDE A TOTAL OF 20 MINUTES TODAY AT LOWER THAN 65RPMS BETWEEN ZONE 2 AND ZONE 3"] = Workout(
# bikeMSDictionary["RIDE A TOTAL OF 25 MINUTES TODAY AT LOWER THAN 65RPMS BETWEEN ZONE 2 AND ZONE 3"] = Workout(
# bikeMSDictionary["RIDE A TOTAL OF 30 MINUTES TODAY AT LOWER THAN 65RPMS BETWEEN ZONE 2 AND ZONE 3"] = Workout(
# bikeMSDictionary["RIDE ANYWHERE FROM 2 TO 2.5 HOURS AT PREDOMINANTLY ZONE 1 TO ZONE 2 EFFORT"] = Workout(
# bikeMSDictionary["RIDE ANYWHERE FROM 60 TO 90 MINUTES AT PREDOMINANTLY ZONE 1 TO ZONE 2 EFFORT"] = Workout(
# bikeMSDictionary["RIDE IN ZONE 1 TO 2 FOR 20' TO RECOVER"] = Workout(
# bikeMSDictionary["RIDE NO MORE THAN 80 MILES OR 4 HOURS, WHICHEVER COMES FIRST"] = Workout(
# bikeMSDictionary["RIDE WITH OTHERS, RELAX, HAVE FUN"] = Workout(
# bikeMSDictionary["SPEND AS MUCH TIME @ 80% /Z3 AS POSSIBLE"] = Workout(
# bikeMSDictionary["THEN 2 X 15' (10') @ ZONE 3"] = Workout(
# bikeMSDictionary["THEN 2 X 20' (10') @ ZONE 3"] = Workout(
# bikeMSDictionary["THEN 2 X 30' (10') @ ZONE 3"] = Workout(
# bikeMSDictionary["THEN 3 X 15' (10') @ ZONE 3"] = Workout(
# bikeMSDictionary["THEN 3 X 20' (10') @ ZONE 3"] = Workout(
# bikeMSDictionary["THEN 3 X 25' (10') @ ZONE 3"] = Workout(
# bikeMSDictionary["THEN 3 X 30' (10') @ ZONE 3"] = Workout(
# bikeMSDictionary["THEN 5 X 25' (5') @ ZONE 2 TO ZONE 3"] = Workout(
# bikeMSDictionary["THEN TIME TRIAL 40' HARD-VERY HARD, AS IF RACING"] = Workout(
# bikeMSDictionary["TWICE THROUGH 10 X 30/30 @ MAX SUSTAINABLE EFFORT WITH 5' @ ZONE 2 TO RECOVER BETWEEN THE INTERVAL SETS"] = Workout(
# bikeMSDictionary["TWICE THROUGH 12 X 30/30 @ MAX SUSTAINABLE EFFORT WITH 5' @ ZONE 2 TO RECOVER BETWEEN THE INTERVAL SETS"] = Workout(
# bikeMSDictionary["TWICE THROUGH 8 X 30/30 @ MAX SUSTAINABLE EFFORT WITH 5' @ ZONE 2 TO RECOVER BETWEEN THE INTERVAL SETS"] = Workout(
# bikeMSDictionary["TWICE THROUGH 9 X 30/30 @ MAX SUSTAINABLE EFFORT WITH 5' @ ZONE 2 TO RECOVER BETWEEN THE INTERVAL SETS"] = Workout(
