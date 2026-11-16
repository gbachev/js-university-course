export function createPlaylist(name, songs) {
    return {
        name,
        songs,
        summary() {
            let text = '';

            // An arrow function has no this of its own, so it uses the this of summary().
            this.songs.forEach((song) => {
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
