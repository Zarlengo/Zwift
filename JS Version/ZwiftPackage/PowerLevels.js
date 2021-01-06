export default class PowerLevels {
    // Creates zone object

    // Input:
    //     [0] Testing Distance
    //     [1] Testing Time (in format of "hh:mm:ss" or "mm"ss")
    //     [2 Optional] Is test done in miles (default is True)

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


};
