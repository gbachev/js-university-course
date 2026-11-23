// Finds one cookie in a Cookie header, which looks like "sid=Kq3x...; theme=dark".
// Gives back its value, or null when the header or the cookie is missing.
// Our session token uses only letters, digits, - and _, so its value needs no
// decoding.
export function readCookie(header, name) {
    for (const pair of (header ?? '').split(';')) {
        const index = pair.indexOf('=');
        if (index !== -1 && pair.slice(0, index).trim() === name) {
            return pair.slice(index + 1).trim();
        }
    }
    return null;
}
