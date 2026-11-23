// getSetCookie() gives one string per Set-Cookie header, so the first cookie is
// the first item. Everything before its first ';' is name=value; the attributes
// after it (Path, Max-Age, HttpOnly...) are for the browser and never go back.
export function cookieFrom(response) {
    const [setCookie] = response.headers.getSetCookie();
    if (setCookie === undefined) {
        return null;
    }
    return setCookie.split(';')[0].trim();
}
