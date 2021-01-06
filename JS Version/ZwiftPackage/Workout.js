export default class Workout {
    // Inputs:
    //     [0] Workout String
    //     [1] Workout Duration in seconds
    //     [2] Optional: Remainder zone(s) at an item or in list form []
    //     [3] Optional: A complete workout as 'True'

    constructor(text, duration, remainderZones = [], completeWorkout = False) {
        this.completeWorkout = completeWorkout;
        if (Array.isArray(text)) {
            this.text = text;
            this.duration = duration;
            this.remainderZones = remainderZones;
        } else {
            this.text = [text, text, text];
            this.duration = [duration, duration, duration];
            this.remainderZones = remainderZones;
        }
    };
};
