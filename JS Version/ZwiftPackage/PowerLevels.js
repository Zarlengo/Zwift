module.exports = class PowerLevels {
    // Creates zone object

    // Input:
    //     [0] Testing Distance
    //     [1] Testing Time (in format of "hh:mm:ss" or "mm"ss")
    //     [2 Optional] Is test done in miles (default is True)

    constructor (testDistance, testTime, isInMi = false) {
        this.metersFromMiles = 1609;       // Mi to m
        if (isInMi) {
            testDistance = testDistance * this.metersFromMiles;
        }
        const timeArr = testTime.split(":");
        if (timeArr.length < 2 || timeArr.length > 3) {
            throw new Error('Invalid Time String');
        }

        let runTimeSeconds;
        if (timeArr.length === 2) {
            runTimeSeconds = parseInt(timeArr[1]) * 60 + parseInt(timeArr[2]);
        } else {
            runTimeSeconds = parseInt(timeArr[0]) * 60 * 60 + parseInt(timeArr[1]) * 60 + parseInt(timeArr[2]);
        }

        this.runMPS = testDistance / runTimeSeconds;

        this.runZone0 =   0.60;	    // Zone 0 / Walk: 60%
        this.runZoneSPD = 0.78;     // SPD / Interval Pace
        this.runZone1 =   0.84;	    // Zone 1 / LRP / Easy: 84%
        this.runZoneTRP = 0.90;	    // TRP / Run Durability: 90% (same as STR)
        this.runZoneSTR = 0.90;     // STR / Threshold Pace (same as TRP)
        this.runZone2 =   0.96;	    // Zone 2 / MP / Steady: 96%
        this.runZone3 =   0.98;	    // Zone 3 / HMP / ModHard: 98%
        this.runZone4 =   1.03;	    // Zone 4 / TP / Hard: 103%
        this.runZone5 =   1.11;	    // Zone 5 / IP / Very Hard 111%

        this.bikeZone0 =  0.25;
        this.bikeZone1 =  0.65;
        this.bikeZone2 =  0.72;
        this.bikeZone2_5 =  0.77;
        this.bikeZone3 =  0.82;
        this.bikeZone4 =  1.00;
        this.bikeZone5 =  1.15;
    
        this.mileTime = runTimeSeconds / (testDistance / this.metersFromMiles)

        const getRunZoneString = () => {
            const timeString = (mileTime) => {
                return `${parseInt(mileTime / 60)}:${('00' + parseInt(mileTime % 60).toString().slice(-2))}`;
            }

            let runZoneString = '\n';
            runZoneString += `Zone 1 / LRP / Easy: ${timeString(this.mileTime / this.runZone1)}\n`;
            runZoneString += `TRP / Run Durability: ${timeString(this.mileTime / this.runZoneTRP)}\n`;
            runZoneString += `Zone 2 / MP / Steady: ${timeString(this.mileTime / this.runZone2)}\n`;
            runZoneString += `Zone 3 / HMP / ModHard: ${timeString(this.mileTime / this.runZone3)}\n`;
            runZoneString += `Zone 4 / TP / Hard: ${timeString(this.mileTime / this.runZone4)}\n`;
            runZoneString += `Zone 5 / IP / Very Hard: ${timeString(this.mileTime / this.runZone5)}\n`;
            return runZoneString;
        }

        this.runZoneString = getRunZoneString();
    }

    gdt(duration, zones) {
        // Get run distance from time

        // Input:
        //     [0] Time in seconds
        //     [1] Zones in float or [list of floats]
        
        if (Array.isArray(zones)) {
            return parseInt(duration * this.runMPS * zones.reduce((sum, value) => sum + value) / zones.length);
        }
        return parseInt(duration * this.runMPS * zones);
    };

    gtd(distance, zones, isInMi = true) {
        // Get run time in seconds from distance

        // Input:
        //     [0] distance in mi
        //     [1] Zones in float or [list of floats]
        //     [2] Optional: Is the distance in miles, default 'True'
        if (isInMi) {
            distance *= this.metersFromMiles
        }
        if (Array.isArray(zones)) {
            return parseInt(distance / (this.runMPS * zones.reduce((sum, value) => sum + value) / zones.length));
        }
        return parseInt(distance / (this.runMPS * zones));
    };

    getRunRemainder(duration, zones) {
        // Get run remainder string

        // Input:
        //     [0] Time in seconds
        //     [1] Zones in float or [list of floats]
        
        if (duration <= 0) {
            return '';
        }
        let returnString = '';
        if (Array.isArray(zones)) {
            const distance = this.gdt(duration, zones.reduce((sum, value) => sum + value) / zones.length);
            zones.forEach(zone => {
                returnString += `<SteadyState Duration='${Math.floor(distance / zones.length)}' Power='${zone}' pace='3' />\n`;
            });
        } else {
            returnString = `<SteadyState Duration='${this.gdt(duration, zones)}' Power='${zones}' pace='3' />\n`;
        }
        return returnString;
    };

    getBikeRemainder(duration, zones) {
        // Get bike remainder string

        // Input:
        //     [0] Time in seconds
        //     [1] Zones in float or [list of floats]
        
        if (duration <= 0) {
            return '';
        }
        let returnString = '';
        if (Array.isArray(zones)) {
            zones.forEach(zone => {
                returnString += `<SteadyState Duration='${Math.floor(duration / zones.length)}' Power='${zone}'/>\n`;
            });
        } else {
            returnString = `<SteadyState Duration='${duration}' Power='${zones}'/>\n`;
        }
        return returnString;
    };
};
