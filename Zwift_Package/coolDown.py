from collections import defaultdict
from . import zwift_class
from __main__ import test_distance
from __main__ import test_time
Workout = zwift_class.Workout
PowerLevels = zwift_class.PowerLevels
power = PowerLevels(test_distance, test_time)

bikeCDDictionary = defaultdict(lambda: "")
runCDDictionary = defaultdict(lambda: "")


bikeCDDictionary["WD: 5' EASY"] = Workout(
        f"<Cooldown Duration='300' PowerLow='{power.bikeZone2}' PowerHigh='{power.bikeZone0}'/>",
        5 * 60)
bikeCDDictionary["CD:5' @ ZONE 1"] = bikeCDDictionary["WD: 5' EASY"] 
bikeCDDictionary["CD: 5' TO 10' @ ZONE 1"] = Workout(
        f"<Cooldown Duration='600' PowerLow='{power.bikeZone2}' PowerHigh='{power.bikeZone0}'/>",
        10 * 60)
bikeCDDictionary["WD: 10' EASY SPIN"] = bikeCDDictionary["CD: 5' TO 10' @ ZONE 1"]
bikeCDDictionary["WD: 10' EASY"] = bikeCDDictionary["CD: 5' TO 10' @ ZONE 1"]
bikeCDDictionary["CD: 10' EASY SPIN"] = bikeCDDictionary["CD: 5' TO 10' @ ZONE 1"]
bikeCDDictionary["WD: REMAINDER OF TIME @ ZONE 2"] = Workout("", 0, power.bikeZone2)
bikeCDDictionary["WARM DOWN: EASY LAST 30' TO COOL DOWN"] = Workout(
        f"<Cooldown Duration='1800' PowerLow='{power.bikeZone2}' PowerHigh='{power.bikeZone0}'/>",
        30 * 60)

bikeCDDictionary["CD:EASY SPIN"] = Workout("", 0, power.bikeZone1)
bikeCDDictionary["CD: EASY SPIN"] = Workout("", 0, power.bikeZone1)
bikeCDDictionary["REMAINDER OF RIDE AT ZONE 2 OR AT YOUR TARGET RACE EFFORT AS YOU ARE ABLE"] = Workout("", 0, power.bikeZone2)
bikeCDDictionary["REMAINDER OF TIME @ ZONE 2"] = Workout("", 0, power.bikeZone2)
bikeCDDictionary["REMAINDER OF TIME AT 80-85%/ZONE3/MOD-HARD"] = Workout("", 0, power.bikeZone3)
bikeCDDictionary["REMAINDER OF AVAILABLE RIDE TIME AT ZONE 3"] = Workout("", 0, power.bikeZone3)
bikeCDDictionary["REMAINDER OF TIME AT 80-85%/ZONE3/MOD-HARD FOR HR ATHLETES, NO TESTING"] = bikeCDDictionary["REMAINDER OF TIME AT 80-85%/ZONE3/MOD-HARD"]
bikeCDDictionary["REMAINDER OF TIME AT ZONE 2 AS ABLE"] = Workout("", 0, power.bikeZone2)
bikeCDDictionary["REMAINDER OF AVAILABLE RIDE TIME AT 80-85%/ZONE3/MOD-HARD"] = Workout("", 0, power.bikeZone3)
bikeCDDictionary["REMAINDER OF AVAILABLE TIME AT 80-85%/ZONE4/HARD"] = Workout("", 0, power.bikeZone4)

bikeCDDictionary["REMAINDER OF RIDE TIME IS @ ZONE 2 TO ZONE 3"] = Workout("", 0, [power.bikeZone3, power.bikeZone2])
bikeCDDictionary["REMAINDER AS STEADY RIDING IN ZONE 2"] = Workout("", 0, power.bikeZone2)
bikeCDDictionary["REMAINDER OF ANY TIME YOU HAVE AVAILABLE (IF ANY, NOT REQUIRED) @ ZONE 2"] = Workout("", 0, power.bikeZone2)
bikeCDDictionary["REMAINDER OF ANY TIME YOU HAVE AVAILABLE (IF ANY, NOT REQUIRED) @ ZONE 2, YOU CAN PUSH A BIT HARDER TO ZONE 3 IF ABLE"] = Workout("", 0, power.bikeZone3)
bikeCDDictionary["REMAINDER OF ANY TIME YOU HAVE AVAILABLE (IF ANY, NOT REQUIRED) @ ZONE 3"] = Workout("", 0, power.bikeZone3)
bikeCDDictionary["REMAINDER OF AVAILABLE RIDE TIME @ ZONE 3"] = Workout("", 0, power.bikeZone3)
bikeCDDictionary["REMAINDER OF AVAILABLE RIDE TIME AT ZONE 3 OR AS CLOSE AS YOU CAN COME"] = Workout("", 0, power.bikeZone3)
bikeCDDictionary["REMAINDER OF AVAILABLE TIME @ ZONE 2"] = Workout("", 0, power.bikeZone2)
bikeCDDictionary["REMAINDER OF AVAILABLE TIME IS 65-75%"] = Workout("", 0, power.bikeZone2)
bikeCDDictionary["REMAINDER OF AVAILABLE TIME IS 75-80%"] = Workout("", 0, 0.77)
bikeCDDictionary["REMAINDER OF RIDE TIME IS @ ZONE 1"] = Workout("", 0, power.bikeZone2)
bikeCDDictionary["REMAINDER OF RIDE TIME IS @ ZONE 2"] = Workout("", 0, power.bikeZone2)
bikeCDDictionary["REMAINDER OF RIDE TIME IS @ZONE 2"] = Workout("", 0, power.bikeZone2)
bikeCDDictionary["REMAINDER OF SESSION @ 70-75%/ZONE2/STEADY"] = Workout("", 0, power.bikeZone2)
bikeCDDictionary["REMAINDER OF SESSION @ ZONE 2"] = Workout("", 0, power.bikeZone2)
bikeCDDictionary["REMAINDER OF SESSION AT ZONE 2 TO ZONE 3"] = Workout("", 0, power.bikeZone3)
bikeCDDictionary["REMAINDER OF SESSION AT ZONE 3"] = Workout("", 0, power.bikeZone3)
bikeCDDictionary["REMAINDER OF TIME AT ZONE 2"] = Workout("", 0, power.bikeZone2)
bikeCDDictionary["REMAINDER OF TIME AT ZONE 3"] = Workout("", 0, power.bikeZone3)
bikeCDDictionary["REMAINDER OF TIME IN ZONE 2"] = Workout("", 0, power.bikeZone2)
bikeCDDictionary["REMAINDER OF TIME IN ZONE 2 OR ZONE 3 AS YOU ARE ABLE"] = Workout("", 0, power.bikeZone2)
bikeCDDictionary["REMAINDER OF TIME IS 70-75%/ZONE2+/STEADY, SLIGHTLY HARDER AS YOU AIM FOR A NEGATIVE SPLIT"] = Workout("", 0, power.bikeZone2)
bikeCDDictionary["WD: SPIN ZONE 1, EASY FOR THE REMAINDER OF YOUR TIME UP TO 1:10 AS NEEDED"] = Workout("", 0, power.bikeZone1)
bikeCDDictionary["WD: SPIN ZONE 1, EASY FOR THE REMAINDER OF YOUR TIME UP TO 1:15 AS NEEDED"] = Workout("", 0, power.bikeZone1)
bikeCDDictionary["WD: SPIN ZONE 1, EASY FOR THE REMAINDER OF YOUR TIME UP TO ONE HOUR AS NEEDED"] = Workout("", 0, power.bikeZone1)


runCDDictionary["REMAINDER AS YOU FEEL, INCLUDE 5 X 20'' STRIDES"] = Workout(
    f"<IntervalsT Repeat='5' OnDuration='{power.gdt(20, power.runZone4)}' OffDuration='{power.gdt(40, power.runZoneTRP)}' OnPower='{power.runZone4}' OffPower='{power.runZoneTRP}' pace='3' />",  
    5 * 60, power.runZone2)
runCDDictionary["CD: 5-10' EASY JOG/WALK"] = Workout(
        f"<SteadyState Duration='{power.gdt(600, power.runZone0)}' Power='{power.runZone0}' pace='3' />",
        10 * 60)

runCDDictionary["REMAINDER OF RUN IS HOW YOU FEEL, BUT TRY TO ACCUMULATE MORE HMP/Z3/MOD-HARD TIME"] = Workout("", 0, power.runZone3)
runCDDictionary["REMAINDER OF RUN IS TO BUILD FROM RECOVERY EFFORT TO HMP/Z3/MOD-HARD PACE TO SIMULATE THE END OF YOUR RUN"] = Workout("", 0, power.runZone3)
runCDDictionary["CD:WALKING, JOGGING AS NEEDED, ETC"] = Workout("", 0, power.runZone0)
runCDDictionary["CD: WALKING, JOGGING AS NEEDED, ETC"] = runCDDictionary["CD:WALKING, JOGGING AS NEEDED, ETC"]
runCDDictionary["REMAINDER OF TIME @ EP/Z1/EASY"] = Workout("", 0, power.runZone1)
runCDDictionary["REMAINDER OF RUN IS HOW YOU FEEL, BUT TRY TO ACCUMULATE MORE MP/Z2/STEADY TIME"] = Workout("", 0, power.runZone2)
runCDDictionary["REMAINDER OF RUN IS HOW YOU FEEL, BUT TRY TO ACCUMULATE TIME TRP"] = Workout("", 0, power.runZoneTRP)
runCDDictionary["REMAINDER AS YOU FEEL IN ZONE 1 TO ZONE 2"] = Workout("", 0, power.runZoneTRP)

runCDDictionary["CD: REMAINDER IS TRP / EASY-STEADY"] = Workout("", 0, power.runZoneTRP)
runCDDictionary["REMAINDER OF ALL RUNS @ TRP"] = Workout("", 0, power.runZoneTRP)
runCDDictionary["REMAINDER OF ANY TIME YOU HAVE AVAILABLE (IF ANY, NOT REQUIRED) @ TRP"] = Workout("", 0, power.runZoneTRP)
runCDDictionary["REMAINDER OF RUN @ TRP"] = Workout("", 0, power.runZoneTRP)
runCDDictionary["REMAINDER OF TIME @ TRP"] = Workout("", 0, power.runZoneTRP)
runCDDictionary["REMAINDER OF TIME @ TRP / STEADY"] = Workout("", 0, power.runZoneTRP)
runCDDictionary["REMAINDER OF TIME @ ZONE 1"] = Workout("", 0, power.runZone1)
runCDDictionary["REMAINDER OF TIME @ ZONE 2"] = Workout("", 0, power.runZone1)
runCDDictionary["REMAINDER OF TIME ARE JOGGING @ TRP PACE"] = Workout("", 0, power.runZoneTRP)
runCDDictionary["REMAINDER OF TIME AT STEADY @ ZONE 2 EFFORT"] = Workout("", 0, power.runZone2)
runCDDictionary["REMAINDER OF TIME AT STEADY [ZONE 2]"] = Workout("", 0, power.runZone2)
runCDDictionary["REMAINDER OF TIME AT TRP"] = Workout("", 0, power.runZoneTRP)
runCDDictionary["REMAINDER OF TIME AT TRP / STEADY"] = Workout("", 0, power.runZoneTRP)
runCDDictionary["REMAINDER OF TIME IN ZONE 2"] = Workout("", 0, power.runZone2)
runCDDictionary["WARM DOWN: 1 TO 2 MILES @ ZONE 1 TO ZONE 2"] = Workout("", 0, [power.runZone2, power.runZone1])
runCDDictionary["WARM DOWN: 5 MINUTES EASY (ZONE 1) RUNNING OR WALKING"] = Workout("", 0, power.runZone1)
runCDDictionary["WARM DOWN: 5 MINUTES OF EASY (ZONE 1) RUNNING"] = Workout("", 0, power.runZone1)
runCDDictionary["WARM DOWN: RUN REMAINDER OF THE SESSION AT YOUR UR PACE / ZONE 1"] = Workout("", 0, power.runZone1)
runCDDictionary["WD: 5' EASY"] = Workout("", 0, power.runZone0)
runCDDictionary["WD: 5' EASY RUN / WALK"] = Workout("", 0, power.runZone0)



