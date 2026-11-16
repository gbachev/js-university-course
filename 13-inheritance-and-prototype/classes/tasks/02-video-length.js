// Task 2: Video length in minutes
// Lecture: Classes
//
// Our course platform stores the length of every video in seconds, but the editors
// think in minutes. Finish the Video class: the constructor takes title and minutes.
// Add a getter and a setter called minutes: the setter stores the length as whole
// seconds in this.seconds (Math.round), and the getter returns seconds / 60. A video
// owns only title and seconds, never a minutes property of its own.
//
// Examples:
//   const intro = new Video('Intro', 2.5);
//   intro.seconds          // 150
//   intro.minutes = 4;
//   intro.seconds          // 240
//   Object.keys(intro)     // ['title', 'seconds']
//
// Run the tests: npm test -- 13-inheritance-and-prototype/classes

export class Video {
    constructor(title, minutes) {
        this.title = title;
        this.minutes = minutes;
    }

    // Your code here
}
