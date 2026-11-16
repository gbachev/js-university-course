// Task 3: The playlist summary
// Lecture: The "this" Keyword
//
// createPlaylist(name, songs) returns a playlist object for our music app. Its
// summary() method should return the playlist name, a colon and the songs separated
// by commas, like 'Road trip: Hey Jude, Africa'. It throws an error instead: inside
// the callback we pass to forEach, this is not the playlist. Fix it, keeping forEach.
// A playlist without songs gives just the name and the colon, like 'Empty: '.
//
// Examples:
//   createPlaylist('Road trip', ['Hey Jude', 'Africa']).summary()
//   // 'Road trip: Hey Jude, Africa'
//   createPlaylist('Empty', []).summary()   // 'Empty: '
//
// Run the tests: npm test -- 07-objects/this

export function createPlaylist(name, songs) {
    return {
        name,
        songs,
        summary() {
            let text = '';

            this.songs.forEach(function (song) {
                if (text === '') {
                    text = this.name + ': ' + song;
                } else {
                    text += ', ' + song;
                }
            });

            return text === '' ? this.name + ': ' : text;
        },
    };
}
