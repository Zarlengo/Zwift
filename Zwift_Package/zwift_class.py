from __main__ import test_distance
from __main__ import test_time

class Zwift:
    """
    Input:
        [0] Workout duration in "hh:mm:ss" or "mm:ss"
        [1] Optional: 'True' if is run
        [2] Optional: 'True' if this is a level 1, level 2, level 3 plan
    """
    def __init__(self, duration, is_run = False, is_level = False):
        def convert_string_2_seconds(duration_string):
            try:
                int(duration_string)
                return duration_string
            except ValueError:
                time_arr = duration_string.split(":")
                assert 2 <= len(time_arr) <= 3, "Invalid Time String"
                # Converts time string to seconds
                if " " in time_arr[0]:
                    time_arr[0] = time_arr[0].split(" ")[-1]
                if len(time_arr) == 2:
                    time_int = int(time_arr[0]) * 60 + int(time_arr[1])
                else: 
                    time_int = int(time_arr[0]) * 60 * 60 + int(time_arr[1]) * 60 + int(time_arr[2])
                return time_int


        if is_level:
            self.duration = [convert_string_2_seconds(x) for x in duration]
        else:
            self.duration = [convert_string_2_seconds(x) for x in duration]
        if len(self.duration) == 1:
            self.duration = self.duration * 3

        self.is_level = is_level    # If it is a level 1, level 2, & level 3 plan type
        self.is_run = is_run

        self.file_cnt = 0
        self.remainder_zones = []
        self.workout_string = [""] * 3
        self.warmup_string = [""] * 3
        self.cooldown_string = [""] * 3
        self.header = ""
        self.footer = ""
        self.save_name = ""
        self.description = ""
        self.category = ""
        self.folder_location = ""
        self.zwo_extension = ""
        self.filename = ""

    def add_warmup(self, id, dictionary):
        """
        Add warmup string to workout

        Input:
            [0] id, text string from workout file
            [1] dictionary to get workout from
        Returns:
            Prints error string if not found
        """
        warmup_object = dictionary[id]
        if warmup_object == "":
            return print(f"Missing from {'Run' if self.is_run else 'Bike'} warmup: {id}")
        for cnt, value in enumerate(warmup_object.workout_string):
            self.warmup_string[cnt] += value
            self.duration[cnt] -= warmup_object.workout_duration[cnt]
            if warmup_object.remainder_zones != []:
                self.remainder_zones = warmup_object.remainder_zones

    def add_workout(self, id, dictionary):
        """
        Add workout string to workout

        Input:
            [0] id, text string from workout file
            [1] dictionary to get workout from
        Returns:
            Prints error string if not found
        """
        workout_object = dictionary[id]
        if workout_object == "":
            return print(f"Missing from {'Run' if self.is_run else 'Bike'} workout: {id}")
        for cnt, value in enumerate(workout_object.workout_string):
            self.workout_string[cnt] += value
            self.duration[cnt] -= workout_object.workout_duration[cnt]
            if workout_object.remainder_zones != []:
                self.remainder_zones = workout_object.remainder_zones

    def add_cooldown(self, id, dictionary):
        """
        Add cool down string to workout

        Input:
            [0] id, text string from workout file
            [1] dictionary to get workout from
        Returns:
            Prints error string if not found
        """
        cooldown_object = dictionary[id]
        if cooldown_object == "":
            return print(f"Missing from {'Run' if self.is_run else 'Bike'} cool down: {id}")
        for cnt, value in enumerate(cooldown_object.workout_string):
            self.cooldown_string[cnt] += value
            self.duration[cnt] -= cooldown_object.workout_duration[cnt]
            if cooldown_object.remainder_zones != []:
                self.remainder_zones = cooldown_object.remainder_zones

    def add_header_footer(self, header, footer):
        self.header = header
        self.footer = footer

    def add_save(self, save_name):
        self.save_name = save_name

    def add_description(self, description):
        self.description = description

    def add_filename(self, filename):
        self.filename = filename

    def add_category(self, category):
        self.category = category

    def savefile_location(self, folder_location, zwo_extension):
        self.folder_location = folder_location
        self.zwo_extension = zwo_extension

    def __str__(self):
        def get_workout(cnt):
            return_string  = f"<workout>\n{self.warmup_string[cnt]}\n"
            return_string += f"{self.workout_string[cnt]}\n"
            power = PowerLevels(test_distance, test_time)
            if self.remainder_zones != []:
                if self.is_run:
                    return_string += power.get_run_remainder(self.duration[cnt], self.remainder_zones)
                else:
                    return_string += power.get_bike_remainder(self.duration[cnt], self.remainder_zones)

            return_string += f"{self.cooldown_string[cnt]}\n"
            return return_string

        beginString = self.header
        beginString += self.save_name
        beginString += self.description
        category_string = []
        if self.is_level:
            maxLevel = 3
        else:
            maxLevel = 1
        level = ""
        for cnt in range(maxLevel):
            if self.is_level:
                level = f" Level {cnt + 1} "
            category_string.append( f"<WorkoutPlan>{self.filename}{level}</WorkoutPlan>\n"
                                    f"<category>{self.filename}{level}</category>\n"
                                    f"{self.category}")
        return [f"{beginString}{x}{get_workout(cnt)}{self.footer}" for x in category_string]

    def make_file(self):
        for cnt, text_string in enumerate(self.__str__()):
            # workoutString = workoutString.replace(chr(39), chr(34))
            # print(f"{text_string}")
            level = ""
            if self.is_level:
                level = f" Level {cnt + 1} "
            file_name = f"{self.filename}{level}{self.zwo_extension}"

            with open(f"{self.folder_location}{file_name}", "w", encoding='utf16') as zwo_file:
                zwo_file.write(text_string)


class PowerLevels:
    """
    Creates zone object

    Input:
        [0] Testing Distance
        [1] Testing Time (in format of "hh:mm:ss" or "mm"ss")
        [2 Optional] Is test done in miles (default is True)
    """
    def __init__(self, test_distance, test_time, is_in_mi = False):
        self.meters_from_miles = 1609       # Mi to m
        if is_in_mi:
            test_distance = test_distance * self.meters_from_miles
        time_arr = test_time.split(":")
        assert 2 <= len(time_arr) <= 3, "Invalid Time String"
        if len(time_arr) == 2:
            runTimeSeconds = int(time_arr[1]) * 60 + int(time_arr[2])
        else: 
            runTimeSeconds = int(time_arr[0]) * 60 * 60 + int(time_arr[1]) * 60 + int(time_arr[2])
        self.runMPS = test_distance / runTimeSeconds

        self.runZone0 =   0.60	    # Zone 0 / Walk: 60%
        self.runZoneSPD = 0.78      # SPD / Interval Pace
        self.runZone1 =   0.84	    # Zone 1 / LRP / Easy: 84%
        self.runZoneTRP = 0.90	    # TRP / Run Durability: 90% (same as STR)
        self.runZoneSTR = 0.90      # STR / Threshold Pace (same as TRP)
        self.runZone2 =   0.96	    # Zone 2 / MP / Steady: 96%
        self.runZone3 =   0.98	    # Zone 3 / HMP / ModHard: 98%
        self.runZone4 =   1.03	    # Zone 4 / TP / Hard: 103%
        self.runZone5 =   1.11	    # Zone 5 / IP / Very Hard 111%

        self.bikeZone0 =  0.25
        self.bikeZone1 =  0.65
        self.bikeZone2 =  0.72
        self.bikeZone3 =  0.82
        self.bikeZone4 =  1.00
        self.bikeZone5 =  1.15
    
        self.mileTime = runTimeSeconds / (test_distance / self.meters_from_miles)

        def getRunZoneString():
            def timeString(mile_time):
                return f"{int(mile_time / 60)}:{('00' + str(int(mile_time % 60)))[-2:]}"

            runZoneString = "\n"
            runZoneString += f"Zone 1 / LRP / Easy: {timeString(self.mileTime / self.runZone1)}\n"
            runZoneString += f"TRP / Run Durability: {timeString(self.mileTime / self.runZoneTRP)}\n"
            runZoneString += f"Zone 2 / MP / Steady: {timeString(self.mileTime / self.runZone2)}\n"
            runZoneString += f"Zone 3 / HMP / ModHard: {timeString(self.mileTime / self.runZone3)}\n"
            runZoneString += f"Zone 4 / TP / Hard: {timeString(self.mileTime / self.runZone4)}\n"
            runZoneString += f"Zone 5 / IP / Very Hard: {timeString(self.mileTime / self.runZone5)}\n"
            self.runZoneString = runZoneString

        getRunZoneString()

    def gdt(self, duration, zones):
        """
        Get run distance from time

        Input:
            [0] Time in seconds
            [1] Zones in float or [list of floats]
        """
        if isinstance(zones, list):
            return int(duration * self.runMPS * sum(zones) / len(zones))
        return int(duration * self.runMPS * zones)

    def gtd(self, distance, zones, is_in_mi = True):
        """
        Get run time in seconds from distance

        Input:
            [0] distance in mi
            [1] Zones in float or [list of floats]
            [2] Optional: Is the distance in miles, default 'True'
        """
        if is_in_mi:
            distance *= self.meters_from_miles
        if isinstance(zones, list):
            return int(distance / (self.runMPS * sum(zones) / len(zones)))
        return int(distance / (self.runMPS * zones))


    def get_run_remainder(self, duration, zones):
        """
        Get run remainder string

        Input:
            [0] Time in seconds
            [1] Zones in float or [list of floats]
        """
        if duration <= 0:
            return ""
        return_string = ""
        if isinstance(zones, list):
            distance = self.gdt(duration, sum(zones) / len(zones))
            for zone in zones:
                return_string += f"<SteadyState Duration='{distance // len(zones)}' Power='{zone}' pace='3' />\n"
        else:    
            return_string = f"<SteadyState Duration='{self.gdt(duration, zones)}' Power='{zones}' pace='3' />\n"
        return return_string

    def get_bike_remainder(self, duration, zones):
        """
        Get bike remainder string

        Input:
            [0] Time in seconds
            [1] Zones in float or [list of floats]
        """
        if duration <= 0:
            return ""
        return_string = ""
        if isinstance(zones, list):
            for zone in zones:
                return_string += f"<SteadyState Duration='{duration // len(zones)}' Power='{zone}'/>\n"
        else:    
            return_string = f"<SteadyState Duration='{duration}' Power='{zones}'/>\n"
        return return_string




class Workout:
    """
    Inputs:
        [0] Workout String
        [1] Workout Duration in seconds
        [2] Optional: Remainder zone(s) at an item or in list form []
        [3] Optional: A complete workout as 'True'
    """
    def __init__(self, workout_string, workout_duration, remainder_zones = [], complete_workout = False):
        if isinstance(workout_string, list):
            self.workout_string = workout_string
            self.workout_duration = workout_duration
            self.remainder_zones = remainder_zones
        else:
            self.workout_string = [workout_string] * 3
            self.workout_duration = [workout_duration] * 3
            self.remainder_zones = remainder_zones