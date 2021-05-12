module.exports = (Workout, power) => {
        coolDown = {
                bike: {},
                run: {},
        };

        coolDown.bike["WD: 5' EASY"] = new Workout(
                `<Cooldown Duration='300' PowerLow='${power.bikeZone2}' PowerHigh='${power.bikeZone0}'/>`,
                5 * 60)
        coolDown.bike["CD:5' @ ZONE 1"] = coolDown.bike["WD: 5' EASY"] 
        coolDown.bike["CD: 5' TO 10' @ ZONE 1"] = new Workout(
                `<Cooldown Duration='600' PowerLow='${power.bikeZone2}' PowerHigh='${power.bikeZone0}'/>`,
                10 * 60)
        coolDown.bike["WD: 10' EASY SPIN"] = coolDown.bike["CD: 5' TO 10' @ ZONE 1"]
        coolDown.bike["WD: 10' EASY"] = coolDown.bike["CD: 5' TO 10' @ ZONE 1"]
        coolDown.bike["CD: 10' EASY SPIN"] = coolDown.bike["CD: 5' TO 10' @ ZONE 1"]
        coolDown.bike["WD: REMAINDER OF TIME @ ZONE 2"] = new Workout("", 0, power.bikeZone2)
        coolDown.bike["WARM DOWN: EASY LAST 30' TO COOL DOWN"] = new Workout(
                `<Cooldown Duration='1800' PowerLow='${power.bikeZone2}' PowerHigh='${power.bikeZone0}'/>`,
                30 * 60)

        coolDown.bike["CD:EASY SPIN"] = new Workout("", 0, power.bikeZone1)
        coolDown.bike["CD: EASY SPIN"] = new Workout("", 0, power.bikeZone1)
        coolDown.bike["REMAINDER OF RIDE AT ZONE 2 OR AT YOUR TARGET RACE EFFORT AS YOU ARE ABLE"] = new Workout("", 0, power.bikeZone2)
        coolDown.bike["REMAINDER OF TIME @ ZONE 2"] = new Workout("", 0, power.bikeZone2)
        coolDown.bike["REMAINDER OF TIME AT 80-85%/ZONE3/MOD-HARD"] = new Workout("", 0, power.bikeZone3)
        coolDown.bike["REMAINDER OF AVAILABLE RIDE TIME AT ZONE 3"] = new Workout("", 0, power.bikeZone3)
        coolDown.bike["REMAINDER OF TIME AT 80-85%/ZONE3/MOD-HARD FOR HR ATHLETES, NO TESTING"] = coolDown.bike["REMAINDER OF TIME AT 80-85%/ZONE3/MOD-HARD"]
        coolDown.bike["REMAINDER OF TIME AT ZONE 2 AS ABLE"] = new Workout("", 0, power.bikeZone2)
        coolDown.bike["REMAINDER OF AVAILABLE RIDE TIME AT 80-85%/ZONE3/MOD-HARD"] = new Workout("", 0, power.bikeZone3)
        coolDown.bike["REMAINDER OF AVAILABLE TIME AT 80-85%/ZONE4/HARD"] = new Workout("", 0, power.bikeZone4)

        coolDown.bike["REMAINDER OF RIDE TIME IS @ ZONE 2 TO ZONE 3"] = new Workout("", 0, [power.bikeZone3, power.bikeZone2])
        coolDown.bike["REMAINDER AS STEADY RIDING IN ZONE 2"] = new Workout("", 0, power.bikeZone2)
        coolDown.bike["REMAINDER OF ANY TIME YOU HAVE AVAILABLE (IF ANY, NOT REQUIRED) @ ZONE 2"] = new Workout("", 0, power.bikeZone2)
        coolDown.bike["REMAINDER OF ANY TIME YOU HAVE AVAILABLE (IF ANY, NOT REQUIRED) @ ZONE 2, YOU CAN PUSH A BIT HARDER TO ZONE 3 IF ABLE"] = new Workout("", 0, power.bikeZone3)
        coolDown.bike["REMAINDER OF ANY TIME YOU HAVE AVAILABLE (IF ANY, NOT REQUIRED) @ ZONE 3"] = new Workout("", 0, power.bikeZone3)
        coolDown.bike["REMAINDER OF AVAILABLE RIDE TIME @ ZONE 3"] = new Workout("", 0, power.bikeZone3)
        coolDown.bike["REMAINDER OF AVAILABLE RIDE TIME AT ZONE 3 OR AS CLOSE AS YOU CAN COME"] = new Workout("", 0, power.bikeZone3)
        coolDown.bike["REMAINDER OF AVAILABLE TIME @ ZONE 2"] = new Workout("", 0, power.bikeZone2)
        coolDown.bike["REMAINDER OF AVAILABLE TIME IS 65-75%"] = new Workout("", 0, power.bikeZone2)
        coolDown.bike["REMAINDER OF AVAILABLE TIME IS 75-80%"] = new Workout("", 0, 0.77)
        coolDown.bike["REMAINDER OF RIDE TIME IS @ ZONE 1"] = new Workout("", 0, power.bikeZone2)
        coolDown.bike["REMAINDER OF RIDE TIME IS @ ZONE 2"] = new Workout("", 0, power.bikeZone2)
        coolDown.bike["REMAINDER OF RIDE TIME IS @ZONE 2"] = new Workout("", 0, power.bikeZone2)
        coolDown.bike["REMAINDER OF SESSION @ 70-75%/ZONE2/STEADY"] = new Workout("", 0, power.bikeZone2)
        coolDown.bike["REMAINDER OF SESSION @ ZONE 2"] = new Workout("", 0, power.bikeZone2)
        coolDown.bike["REMAINDER OF SESSION AT ZONE 2 TO ZONE 3"] = new Workout("", 0, power.bikeZone3)
        coolDown.bike["REMAINDER OF SESSION AT ZONE 3"] = new Workout("", 0, power.bikeZone3)
        coolDown.bike["REMAINDER OF TIME AT ZONE 2"] = new Workout("", 0, power.bikeZone2)
        coolDown.bike["REMAINDER OF TIME AT ZONE 3"] = new Workout("", 0, power.bikeZone3)
        coolDown.bike["REMAINDER OF TIME IN ZONE 2"] = new Workout("", 0, power.bikeZone2)
        coolDown.bike["REMAINDER OF TIME IN ZONE 2 OR ZONE 3 AS YOU ARE ABLE"] = new Workout("", 0, power.bikeZone2)
        coolDown.bike["REMAINDER OF TIME IS 70-75%/ZONE2+/STEADY, SLIGHTLY HARDER AS YOU AIM FOR A NEGATIVE SPLIT"] = new Workout("", 0, power.bikeZone2)
        coolDown.bike["WD: SPIN ZONE 1, EASY FOR THE REMAINDER OF YOUR TIME UP TO 1:10 AS NEEDED"] = new Workout("", 0, power.bikeZone1)
        coolDown.bike["WD: SPIN ZONE 1, EASY FOR THE REMAINDER OF YOUR TIME UP TO 1:15 AS NEEDED"] = new Workout("", 0, power.bikeZone1)
        coolDown.bike["WD: SPIN ZONE 1, EASY FOR THE REMAINDER OF YOUR TIME UP TO ONE HOUR AS NEEDED"] = new Workout("", 0, power.bikeZone1)


        coolDown.run["REMAINDER AS YOU FEEL, INCLUDE 5 X 20'' STRIDES"] = new Workout(
                `<IntervalsT Repeat='5' OnDuration='${power.gdt(20, power.runZone4)}' OffDuration='${power.gdt(40, power.runZoneTRP)}' OnPower='${power.runZone4}' OffPower='${power.runZoneTRP}' pace='3' />`,  
                5 * 60, power.runZone2)
        coolDown.run["CD: 5-10' EASY JOG/WALK"] = new Workout(
                `<SteadyState Duration='${power.gdt(600, power.runZone0)}' Power='${power.runZone0}' pace='3' />`,
                10 * 60)

        coolDown.run["REMAINDER OF RUN IS HOW YOU FEEL, BUT TRY TO ACCUMULATE MORE HMP/Z3/MOD-HARD TIME"] = new Workout("", 0, power.runZone3)
        coolDown.run["REMAINDER OF RUN IS TO BUILD FROM RECOVERY EFFORT TO HMP/Z3/MOD-HARD PACE TO SIMULATE THE END OF YOUR RUN"] = new Workout("", 0, power.runZone3)
        coolDown.run["CD:WALKING, JOGGING AS NEEDED, ETC"] = new Workout("", 0, power.runZone0)
        coolDown.run["CD: WALKING, JOGGING AS NEEDED, ETC"] = coolDown.run["CD:WALKING, JOGGING AS NEEDED, ETC"]
        coolDown.run["REMAINDER OF TIME @ EP/Z1/EASY"] = new Workout("", 0, power.runZone1)
        coolDown.run["REMAINDER OF RUN IS HOW YOU FEEL, BUT TRY TO ACCUMULATE MORE MP/Z2/STEADY TIME"] = new Workout("", 0, power.runZone2)
        coolDown.run["REMAINDER OF RUN IS HOW YOU FEEL, BUT TRY TO ACCUMULATE TIME TRP"] = new Workout("", 0, power.runZoneTRP)
        coolDown.run["REMAINDER AS YOU FEEL IN ZONE 1 TO ZONE 2"] = new Workout("", 0, power.runZoneTRP)

        coolDown.run["CD: REMAINDER IS TRP / EASY-STEADY"] = new Workout("", 0, power.runZoneTRP)
        coolDown.run["REMAINDER OF ALL RUNS @ TRP"] = new Workout("", 0, power.runZoneTRP)
        coolDown.run["REMAINDER OF ANY TIME YOU HAVE AVAILABLE (IF ANY, NOT REQUIRED) @ TRP"] = new Workout("", 0, power.runZoneTRP)
        coolDown.run["REMAINDER OF RUN @ TRP"] = new Workout("", 0, power.runZoneTRP)
        coolDown.run["REMAINDER OF TIME @ TRP"] = new Workout("", 0, power.runZoneTRP)
        coolDown.run["REMAINDER OF TIME @ TRP / STEADY"] = new Workout("", 0, power.runZoneTRP)
        coolDown.run["REMAINDER OF TIME @ ZONE 1"] = new Workout("", 0, power.runZone1)
        coolDown.run["REMAINDER OF TIME @ ZONE 2"] = new Workout("", 0, power.runZone1)
        coolDown.run["REMAINDER OF TIME ARE JOGGING @ TRP PACE"] = new Workout("", 0, power.runZoneTRP)
        coolDown.run["REMAINDER OF TIME AT STEADY @ ZONE 2 EFFORT"] = new Workout("", 0, power.runZone2)
        coolDown.run["REMAINDER OF TIME AT STEADY [ZONE 2]"] = new Workout("", 0, power.runZone2)
        coolDown.run["REMAINDER OF TIME AT TRP"] = new Workout("", 0, power.runZoneTRP)
        coolDown.run["REMAINDER OF TIME AT TRP / STEADY"] = new Workout("", 0, power.runZoneTRP)
        coolDown.run["REMAINDER OF TIME IN ZONE 2"] = new Workout("", 0, power.runZone2)
        coolDown.run["WARM DOWN: 1 TO 2 MILES @ ZONE 1 TO ZONE 2"] = new Workout("", 0, [power.runZone2, power.runZone1])
        coolDown.run["WARM DOWN: 5 MINUTES EASY (ZONE 1) RUNNING OR WALKING"] = new Workout("", 0, power.runZone1)
        coolDown.run["WARM DOWN: 5 MINUTES OF EASY (ZONE 1) RUNNING"] = new Workout("", 0, power.runZone1)
        coolDown.run["WARM DOWN: RUN REMAINDER OF THE SESSION AT YOUR UR PACE / ZONE 1"] = new Workout("", 0, power.runZone1)
        coolDown.run["WD: 5' EASY"] = new Workout("", 0, power.runZone0)
        coolDown.run["WD: 5' EASY RUN / WALK"] = new Workout("", 0, power.runZone0)

        return coolDown;
};

