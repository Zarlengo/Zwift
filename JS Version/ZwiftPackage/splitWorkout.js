module.exports = (workoutTXT) => {
    const trimString = require('./trimString');
    
    WUArr = ["WU:", "WARM UP"];
    WOArr = ["MS", "MAIN SET"]
    CDArr = ["CD:", "WD:", "WARM DOWN:", "REMAINDER OF", "REMAINDER AS"];
    splitStr = [String.fromCharCode(13), '\n', '.']
    
    WUString = "";
    CDString = "";
    
    WUArr.forEach(warmStr => {
        if (Math.floor((workoutTXT.length - workoutTXT.replace(warmStr, "").length) / warmStr.length) === 1) {
            WUString = workoutTXT.slice(workoutTXT.indexOf(warmStr));
            splitStr.forEach(element => {
                WUString = WUString.split(element)[0];
            })
            workoutTXT = trimString(workoutTXT.slice(workoutTXT.indexOf(WUString) + WUString.length + 1));
            WUString = trimString(WUString);
        }
    });

    CDArr.forEach(cdStr => {
        if (Math.floor((workoutTXT.length - workoutTXT.replace(cdStr, "").length) / cdStr.length) == 1) {
            CDString = workoutTXT.slice(workoutTXT.indexOf(cdStr));
            splitStr.forEach(element => {
                CDString = CDString.split(element)[0];
            })
            workoutTXT = trimString(workoutTXT.slice(0, workoutTXT.indexOf(CDString) - 1))
            CDString = trimString(CDString);
        }
    });
    
    WOArr.forEach(element => {
        if (workoutTXT.indexOf(element) !== -1) {
            workoutTXT = workoutTXT.slice(workoutTXT.indexOf(element) + element.length);
        }
    })

    workoutTXT = trimString(workoutTXT);
    
    return [WUString, workoutTXT, CDString];
}