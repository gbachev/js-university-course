// Digits only, so '1e3', '0x10', '-1' and ' 7 ' never get to Number(), and a safe
// integer, so a long id does not turn into a different number.
export function parseId(text) {
    const id = Number(text);
    return /^\d+$/.test(text) && Number.isSafeInteger(id) ? id : null;
}
