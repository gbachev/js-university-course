// Task 1: A playlist we can loop over
// Lecture: Iterators
//
// Our Playlist class keeps its songs in an array. Make it iterable: give it a
// [Symbol.iterator]() method that returns an iterator object with a next() method, so
// for...of, spread and destructuring work on the playlist itself. Write next() by hand:
// it returns { value: song, done: false } for every song in order, then
// { value: undefined, done: true }. Every call to [Symbol.iterator]() starts from the
// first song again, and an empty playlist gives no songs.
//
// Examples:
//   const playlist = new Playlist('Intro', 'Blue', 'Outro');
//   [...playlist]                 // ['Intro', 'Blue', 'Outro']
//   const [opener] = playlist;    // 'Intro'
//
// Run the tests: npm test -- 23-functional-and-advanced-techniques/iterators

export class Playlist {
    constructor(...songs) {
        this.songs = songs;
    }

    // Your code here
}
