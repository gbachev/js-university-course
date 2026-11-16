export class Video {
    constructor(title, minutes) {
        this.title = title;
        // Calls the setter below, so the video stores only seconds.
        this.minutes = minutes;
    }

    get minutes() {
        return this.seconds / 60;
    }

    set minutes(value) {
        this.seconds = Math.round(value * 60);
    }
}
