export function countCharacter(message, character) {
    let count = 0;

    for (const letter of message) {
        if (letter === character) {
            count++;
        }
    }

    return count;
}
