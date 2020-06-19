from . import zwift_class
from . import coolDown
from . import mainSetBike
from . import mainSetRun
from . import warmUp
from . import level
Zwift = zwift_class.Zwift
PowerLevels = zwift_class.PowerLevels
Workout = zwift_class.Workout



bikeCD = coolDown.bikeCDDictionary 
runCD = coolDown.runCDDictionary

bikeWU = warmUp.bikeWUDictionary
runWU = warmUp.runWUDictionary

bikeMS = mainSetBike.bikeMSDictionary
runMS = mainSetRun.runMSDictionary

bikeLevel = level.bikeLevelDictionary
runLevel = level.runLevelDictionary

__all__ = [
    'Zwift',
    'PowerLevels',
    'bikeCD',
    'runCD',
    'bikeWU',
    'runWU',
    'bikeMS',
    'runMS',
    'bikeLevel',
    'runLevel'

]
