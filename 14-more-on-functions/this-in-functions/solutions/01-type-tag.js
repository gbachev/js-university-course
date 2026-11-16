export function typeTag(value) {
    // '[object Array]' without '[object ' in front and ']' at the end.
    return Object.prototype.toString.call(value).slice(8, -1);
}
