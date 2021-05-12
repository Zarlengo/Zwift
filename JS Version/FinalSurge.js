// Dependency: npm install --save request request-promise cheerio puppeteer
// TXT FILE IN UCS-2 LE BOM

// SETTINGS ******************

testDistance = 21097.5;
testTime = '2:35:00';
finalSurgeFileLocation = '../TXT Files/';
outputFileLocation = '../ZWO Files/';
testMode = false;

// Only run this single file only, comment to do all
overrideFile = 'd2d76305-e16e-46da-8855-deb67ac07193';

// ****************
const fs = require('fs');
const path = require('path');
const PowerLevels = require('./ZwiftPackage/PowerLevels');
const Workout = require('./ZwiftPackage/Workout');
const getDays = require('./ZwiftPackage/getDays');
const trimString = require('./ZwiftPackage/trimString');

const searchForTXTFiles = (fFolder) => {
    fileDictionary = {};
    fs.readdirSync(fFolder).forEach(file => {
        fileName = file.split('.')[0];
        if (file.includes('.txt')) {
            fileString = fs.readFileSync(`${fFolder}${file}`, 'ucs2');

            if (fileString.includes('Level 1') && fileString.includes('Level 2') && fileString.includes('Level 3')) {
                isLevel = true;
            } else if (fileString.includes('L1') && fileString.includes('L2') && fileString.includes('L3')) {
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

const deleteDirectoryContents = (folder) => {
    fs.readdirSync(folder, (err, files) => {
        if (err) throw err;

        for (const file of files) {
            fs.unlink(`${ folder }/${ file }`, err => {
                if (err) throw err;
            });
        }
    });
}

const makeDirectory = (folder) => {
    try {
        fs.mkdirSync(folder);
    } catch (error) {
        throw new Error(`Creation of the directory ${ folder } failed`);
    }
}

const createZWOFiles = (folderName, fileContents) => {
    fileTXT = fileContents.fileString;
    isLevel = fileContents.isLevel;


    if (!fs.existsSync(`${ TXTLocation }${ folderName }`)){
        makeDirectory(`${ TXTLocation }${ folderName }`);
    } else {
        deleteDirectoryContents(`${ TXTLocation }${ folderName }`);
    }
    console.log({folderName});
    
    if (!fs.existsSync(`${ ZWOLocation }${ folderName }`)){
        makeDirectory(`${ ZWOLocation }${ folderName }`);
    }

    if (!testMode) {
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
    dayDICT[daySave] = dayString;

    const titleString = fileTXT.slice(0, fileTXT.indexOf('\n') - 1);
    console.log({titleString});
    fileName = titleString
        .replace("[", "(")
        .replace("]", ")")
        .replace("/", " ")
        .replace(":", "")
        .replace(",", "")
        .replace(".", "");
    
    for( const [dayKey] of Object.entries(dayDICT)) {
        getDays(dayKey, dayDICT[dayKey], `${ TXTLocation }${ folderName }\\`, fileName, folderName, isLevel, EN);
        // ********** TESTING CODE ONLY
        console.log(`------------`);
        // if (dayKey === 'Plan Day #7') {
        //     return;
        // }
        // ********** END TESTING CODE
    }
    
    if (!fs.existsSync(`${ ZWOLocation }${ folderName }`) && testMode === false){
        try {
            fs.mkdirSync(`${ ZWOLocation }${ folderName }`);
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
    TXTLocation = path.join(__dirname, finalSurgeFileLocation);
    ZWOLocation = path.join(__dirname, outputFileLocation);

    power = new PowerLevels(testDistance, testTime);
    EN = {
        warmUp: require('./ZwiftPackage/warmUp')(Workout, power),
        coolDown: require('./ZwiftPackage/coolDown')(Workout, power),
        mainSet: {
            bike: require('./ZwiftPackage/mainSetBike')(Workout, power),
            run: require('./ZwiftPackage/mainSetRun')(Workout, power)
        },
        levels: require('./ZwiftPackage/level')(Workout, power)
    };
    allFileContents = searchForTXTFiles(TXTLocation);
    if (typeof overrideFile !== 'undefined') {
        createZWOFiles(overrideFile, allFileContents[overrideFile]);

    } else {
        all_file_contents.forEach((contents, key) => {
            createZWOFiles(key, contents);
        });
    }
    console.log('Complete');
}
