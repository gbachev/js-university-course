export class Playlist {
    constructor(...songs) {
        this.songs = songs;
    }

    [Symbol.iterator]() {
        const songs = this.songs;
        let index = 0;

        return {
            next() {
                if (index < songs.length) {
                    return { value: songs[index++], done: false };
                }
                return { value: undefined, done: true };
            },
        };
    }
}
