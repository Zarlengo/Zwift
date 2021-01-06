import Workout from './Zwift';
import PowerLevels from './Zwift';

export default (test_distance, test_time) => {

        power = PowerLevels(test_distance, test_time)

        coolDown = {};

        coolDown.bike["WD: 5' EASY"] = Workout(
                `<Cooldown Duration='300' PowerLow='${power.bikeZone2}' PowerHigh='${power.bikeZone0}'/>`,
                5 * 60)
        coolDown.bike["CD:5' @ ZONE 1"] = coolDown.bike["WD: 5' EASY"] 
        coolDown.bike["CD: 5' TO 10' @ ZONE 1"] = Workout(
                `<Cooldown Duration='600' PowerLow='${power.bikeZone2}' PowerHigh='${power.bikeZone0}'/>`,
                10 * 60)
        coolDown.bike["WD: 10' EASY SPIN"] = coolDown.bike["CD: 5' TO 10' @ ZONE 1"]
        coolDown.bike["WD: 10' EASY"] = coolDown.bike["CD: 5' TO 10' @ ZONE 1"]
        coolDown.bike["CD: 10' EASY SPIN"] = coolDown.bike["CD: 5' TO 10' @ ZONE 1"]
        coolDown.bike["WD: REMAINDER OF TIME @ ZONE 2"] = Workout("", 0, power.bikeZone2)
        coolDown.bike["WARM DOWN: EASY LAST 30' TO COOL DOWN"] = Workout(
                `<Cooldown Duration='1800' PowerLow='${power.bikeZone2}' PowerHigh='${power.bikeZone0}'/>`,
                30 * 60)

        coolDown.bike["CD:EASY SPIN"] = Workout("", 0, power.bikeZone1)
        coolDown.bike["CD: EASY SPIN"] = Workout("", 0, power.bikeZone1)
        coolDown.bike["REMAINDER OF RIDE AT ZONE 2 OR AT YOUR TARGET RACE EFFORT AS YOU ARE ABLE"] = Workout("", 0, power.bikeZone2)
        coolDown.bike["REMAINDER OF TIME @ ZONE 2"] = Workout("", 0, power.bikeZone2)
        coolDown.bike["REMAINDER OF TIME AT 80-85%/ZONE3/MOD-HARD"] = Workout("", 0, power.bikeZone3)
        coolDown.bike["REMAINDER OF AVAILABLE RIDE TIME AT ZONE 3"] = Workout("", 0, power.bikeZone3)
        coolDown.bike["REMAINDER OF TIME AT 80-85%/ZONE3/MOD-HARD FOR HR ATHLETES, NO TESTING"] = coolDown.bike["REMAINDER OF TIME AT 80-85%/ZONE3/MOD-HARD"]
        coolDown.bike["REMAINDER OF TIME AT ZONE 2 AS ABLE"] = Workout("", 0, power.bikeZone2)
        coolDown.bike["REMAINDER OF AVAILABLE RIDE TIME AT 80-85%/ZONE3/MOD-HARD"] = Workout("", 0, power.bikeZone3)
        coolDown.bike["REMAINDER OF AVAILABLE TIME AT 80-85%/ZONE4/HARD"] = Workout("", 0, power.bikeZone4)

        coolDown.bike["REMAINDER OF RIDE TIME IS @ ZONE 2 TO ZONE 3"] = Workout("", 0, [power.bikeZone3, power.bikeZone2])
        coolDown.bike["REMAINDER AS STEADY RIDING IN ZONE 2"] = Workout("", 0, power.bikeZone2)
        coolDown.bike["REMAINDER OF ANY TIME YOU HAVE AVAILABLE (IF ANY, NOT REQUIRED) @ ZONE 2"] = Workout("", 0, power.bikeZone2)
        coolDown.bike["REMAINDER OF ANY TIME YOU HAVE AVAILABLE (IF ANY, NOT REQUIRED) @ ZONE 2, YOU CAN PUSH A BIT HARDER TO ZONE 3 IF ABLE"] = Workout("", 0, power.bikeZone3)
        coolDown.bike["REMAINDER OF ANY TIME YOU HAVE AVAILABLE (IF ANY, NOT REQUIRED) @ ZONE 3"] = Workout("", 0, power.bikeZone3)
        coolDown.bike["REMAINDER OF AVAILABLE RIDE TIME @ ZONE 3"] = Workout("", 0, power.bikeZone3)
        coolDown.bike["REMAINDER OF AVAILABLE RIDE TIME AT ZONE 3 OR AS CLOSE AS YOU CAN COME"] = Workout("", 0, power.bikeZone3)
        coolDown.bike["REMAINDER OF AVAILABLE TIME @ ZONE 2"] = Workout("", 0, power.bikeZone2)
        coolDown.bike["REMAINDER OF AVAILABLE TIME IS 65-75%"] = Workout("", 0, power.bikeZone2)
        coolDown.bike["REMAINDER OF AVAILABLE TIME IS 75-80%"] = Workout("", 0, 0.77)
        coolDown.bike["REMAINDER OF RIDE TIME IS @ ZONE 1"] = Workout("", 0, power.bikeZone2)
        coolDown.bike["REMAINDER OF RIDE TIME IS @ ZONE 2"] = Workout("", 0, power.bikeZone2)
        coolDown.bike["REMAINDER OF RIDE TIME IS @ZONE 2"] = Workout("", 0, power.bikeZone2)
        coolDown.bike["REMAINDER OF SESSION @ 70-75%/ZONE2/STEADY"] = Workout("", 0, power.bikeZone2)
        coolDown.bike["REMAINDER OF SESSION @ ZONE 2"] = Workout("", 0, power.bikeZone2)
        coolDown.bike["REMAINDER OF SESSION AT ZONE 2 TO ZONE 3"] = Workout("", 0, power.bikeZone3)
        coolDown.bike["REMAINDER OF SESSION AT ZONE 3"] = Workout("", 0, power.bikeZone3)
        coolDown.bike["REMAINDER OF TIME AT ZONE 2"] = Workout("", 0, power.bikeZone2)
        coolDown.bike["REMAINDER OF TIME AT ZONE 3"] = Workout("", 0, power.bikeZone3)
        coolDown.bike["REMAINDER OF TIME IN ZONE 2"] = Workout("", 0, power.bikeZone2)
        coolDown.bike["REMAINDER OF TIME IN ZONE 2 OR ZONE 3 AS YOU ARE ABLE"] = Workout("", 0, power.bikeZone2)
        coolDown.bike["REMAINDER OF TIME IS 70-75%/ZONE2+/STEADY, SLIGHTLY HARDER AS YOU AIM FOR A NEGATIVE SPLIT"] = Workout("", 0, power.bikeZone2)
        coolDown.bike["WD: SPIN ZONE 1, EASY FOR THE REMAINDER OF YOUR TIME UP TO 1:10 AS NEEDED"] = Workout("", 0, power.bikeZone1)
        coolDown.bike["WD: SPIN ZONE 1, EASY FOR THE REMAINDER OF YOUR TIME UP TO 1:15 AS NEEDED"] = Workout("", 0, power.bikeZone1)
        coolDown.bike["WD: SPIN ZONE 1, EASY FOR THE REMAINDER OF YOUR TIME UP TO ONE HOUR AS NEEDED"] = Workout("", 0, power.bikeZone1)


        coolDown.run["REMAINDER AS YOU FEEL, INCLUDE 5 X 20'' STRIDES"] = Workout(
                `<IntervalsT Repeat='5' OnDuration='${power.gdt(20, power.runZone4)}' OffDuration='${power.gdt(40, power.runZoneTRP)}' OnPower='${power.runZone4}' OffPower='${power.runZoneTRP}' pace='3' />`,  
                5 * 60, power.runZone2)
        coolDown.run["CD: 5-10' EASY JOG/WALK"] = Workout(
                `<SteadyState Duration='${power.gdt(600, power.runZone0)}' Power='${power.runZone0}' pace='3' />`,
                10 * 60)

        coolDown.run["REMAINDER OF RUN IS HOW YOU FEEL, BUT TRY TO ACCUMULATE MORE HMP/Z3/MOD-HARD TIME"] = Workout("", 0, power.runZone3)
        coolDown.run["REMAINDER OF RUN IS TO BUILD FROM RECOVERY EFFORT TO HMP/Z3/MOD-HARD PACE TO SIMULATE THE END OF YOUR RUN"] = Workout("", 0, power.runZone3)
        coolDown.run["CD:WALKING, JOGGING AS NEEDED, ETC"] = Workout("", 0, power.runZone0)
        coolDown.run["CD: WALKING, JOGGING AS NEEDED, ETC"] = coolDown.run["CD:WALKING, JOGGING AS NEEDED, ETC"]
        coolDown.run["REMAINDER OF TIME @ EP/Z1/EASY"] = Workout("", 0, power.runZone1)
        coolDown.run["REMAINDER OF RUN IS HOW YOU FEEL, BUT TRY TO ACCUMULATE MORE MP/Z2/STEADY TIME"] = Workout("", 0, power.runZone2)
        coolDown.run["REMAINDER OF RUN IS HOW YOU FEEL, BUT TRY TO ACCUMULATE TIME TRP"] = Workout("", 0, power.runZoneTRP)
        coolDown.run["REMAINDER AS YOU FEEL IN ZONE 1 TO ZONE 2"] = Workout("", 0, power.runZoneTRP)

        coolDown.run["CD: REMAINDER IS TRP / EASY-STEADY"] = Workout("", 0, power.runZoneTRP)
        coolDown.run["REMAINDER OF ALL RUNS @ TRP"] = Workout("", 0, power.runZoneTRP)
        coolDown.run["REMAINDER OF ANY TIME YOU HAVE AVAILABLE (IF ANY, NOT REQUIRED) @ TRP"] = Workout("", 0, power.runZoneTRP)
        coolDown.run["REMAINDER OF RUN @ TRP"] = Workout("", 0, power.runZoneTRP)
        coolDown.run["REMAINDER OF TIME @ TRP"] = Workout("", 0, power.runZoneTRP)
        coolDown.run["REMAINDER OF TIME @ TRP / STEADY"] = Workout("", 0, power.runZoneTRP)
        coolDown.run["REMAINDER OF TIME @ ZONE 1"] = Workout("", 0, power.runZone1)
        coolDown.run["REMAINDER OF TIME @ ZONE 2"] = Workout("", 0, power.runZone1)
        coolDown.run["REMAINDER OF TIME ARE JOGGING @ TRP PACE"] = Workout("", 0, power.runZoneTRP)
        coolDown.run["REMAINDER OF TIME AT STEADY @ ZONE 2 EFFORT"] = Workout("", 0, power.runZone2)
        coolDown.run["REMAINDER OF TIME AT STEADY [ZONE 2]"] = Workout("", 0, power.runZone2)
        coolDown.run["REMAINDER OF TIME AT TRP"] = Workout("", 0, power.runZoneTRP)
        coolDown.run["REMAINDER OF TIME AT TRP / STEADY"] = Workout("", 0, power.runZoneTRP)
        coolDown.run["REMAINDER OF TIME IN ZONE 2"] = Workout("", 0, power.runZone2)
        coolDown.run["WARM DOWN: 1 TO 2 MILES @ ZONE 1 TO ZONE 2"] = Workout("", 0, [power.runZone2, power.runZone1])
        coolDown.run["WARM DOWN: 5 MINUTES EASY (ZONE 1) RUNNING OR WALKING"] = Workout("", 0, power.runZone1)
        coolDown.run["WARM DOWN: 5 MINUTES OF EASY (ZONE 1) RUNNING"] = Workout("", 0, power.runZone1)
        coolDown.run["WARM DOWN: RUN REMAINDER OF THE SESSION AT YOUR UR PACE / ZONE 1"] = Workout("", 0, power.runZone1)
        coolDown.run["WD: 5' EASY"] = Workout("", 0, power.runZone0)
        coolDown.run["WD: 5' EASY RUN / WALK"] = Workout("", 0, power.runZone0)

        return coolDown;
};

