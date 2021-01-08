const fs = require('fs');
const path = require('path');
const PowerLevels = require('./ZwiftPackage/PowerLevels');
const Workout = require('./ZwiftPackage/Workout');
const getDaysWorkout = require('./ZwiftPackage/getWorkouts');
const trimString = require('./ZwiftPackage/trimString');

const searchForTXTFiles = (fFolder) => {
    fileDictionary = {};
    console.log(`folder: ${fFolder}`);
    fs.readdirSync(fFolder).forEach(file => {
        fileName = file.split('.')[0];
        if (file.includes('.txt')) {
            fileString = fs.readFileSync(`${fFolder}${file}`, 'ucs2');

            if (fileString.includes('Level 1') && fileString.includes('Level 2') && fileString.includes('Level 3')) {
                isLevel = true;
            } else if (fileString.includes('SC Athletes') || fileString.includes('Half Athletes') || fileString.includes('Full Athletes')) {
                isLevel = true;
            } else {
                isLevel = false;
            }
            fileDictionary[fileName] = {fileString, isLevel};
        }
    });
    
    return fileDictionary
};

const createZWOFiles = (folderName, fileContents) => {
    fileTXT = fileContents.fileString;
    isLevel = fileContents.isLevel;

    if (!fs.existsSync(`${ TXTLocation }${ folderName }`)){
        try {
            fs.mkdirSync(`${ TXTLocation }${ folderName }`);
            console.log(`${ TXTLocation }${ folderName }`);
        } catch (error) {
            throw new Error(`Creation of the directory ${ TXTLocation }${ folderName } failed`);
        }
    } else {   
        console.log(folderName);
    }

    let dayDICT = {};
    let dayString = "";
    let daySave = "";
    fileTXT.split('\n').forEach(line => {
        trimmedLine = trimString(line);
        if (line.slice(0, 6) === "Week #") {
        } else if (line.slice(0, 10) === "Plan Day #") {
            if (daySave == "") {
                daySave = trimmedLine;
            } else {
                dayDICT[daySave] = dayString;
                daySave = trimmedLine;
                dayString = "";
            }
        } else if (trimmedLine !== '') {
            dayString = dayString + trimmedLine + '\n'
        }
    });

    const titleString = fileTXT.slice(0, fileTXT.indexOf('\n') - 1);
    console.log(titleString);
    fileName = titleString
        .replace("[", "(")
        .replace("]", ")")
        .replace("/", " ")
        .replace(":", "")
        .replace(",", "")
        .replace(".", "");
    
    dayDICT[daySave] = dayString;
    for( const [dayKey] of Object.entries(dayDICT)) {
        getDaysWorkout(dayKey, dayDICT[dayKey], `${ TXTLocation }${ folderName }\\`, fileName, isLevel);
        console.log(`------------`);
        if (dayKey === 'Plan Day #7') {
            return;
        }
    }
    
    if (!fs.existsSync(`${ ZWOLocation }${ folderName }`) && testMode === false){
        try {
            fs.mkdirSync(`${ ZWOLocation }${ folderName }`);
            console.log(`${ ZWOLocation }${ fileName }`);
            fs.readdir(`${ TXTLocation }${ folderName }`, (error, files) => {
                if (error) {
                    throw new Error('Failure reading files');
                }
                files.forEach(file => {
                    fs.copyFile(`${ TXTLocation }${ folderName }${ file }`, `${ ZWOLocation }${ folderName }${ file }`, (err) => {
                        if (err) throw new Error(`Error copying files to ZWO folder: ${ ZWOLocation }${ folderName }`);
                    });
                });
            });
        } catch (error) {
            throw new Error(`Creation of the directory ${ ZWOLocation }${ folderName } failed`);
        }
    } else {   
        console.log(`Folder already exists: ${ZWOLocation}${fileName}`);
    }
};

if (require.main === module) {
    testDistance = 21097.5;
    testTime = '2:35:00';
    TXTLocation = path.join(__dirname, '../TXT Files/');
    ZWOLocation = path.join(__dirname, '../ZWO Files/');
    testMode = false;

    power = new PowerLevels(testDistance, testTime);
    EN = {
        warmUp: require('./ZwiftPackage/warmUp')(Workout, power),
        coolDown: require('./ZwiftPackage/coolDown')(Workout, power),
        mainSet: {
            bike: require('./ZwiftPackage/mainSetBike')(Workout, power),
            run: require('./ZwiftPackage/mainSetRun')(Workout, power)
        },
    };
    allFileContents = searchForTXTFiles(TXTLocation);
    OS2021 = 'efe11960-41bc-48c8-bb7b-14f6476cb144';
    createZWOFiles(OS2021, allFileContents[OS2021]);
    // # for key in all_file_contents:
    // #     # print([key, all_file_contents[key].split('\n')[0]])
    // #     if test_mode == True:
    // #         createZWOFiles(key, all_file_contents[key])
    // #         break
    // #     else:
    // #         createZWOFiles(key, all_file_contents[key])
    // #         break
    console.log('Complete');
}
