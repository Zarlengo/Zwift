export default class Workout {
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
};
