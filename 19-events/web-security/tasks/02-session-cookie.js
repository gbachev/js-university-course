// Task 2: Is the session cookie safe?
// Lecture: Web Security Basics
//
// Before a release we check the Set-Cookie header of our login session.
// missingProtections(header) gets the header's value and returns the protections it
// lacks, in this order: 'HttpOnly', 'Secure', 'SameSite'. SameSite counts only as Lax
// or Strict, because None sends the cookie with requests from other sites. Our first
// try below searches the whole header with includes(), and the tests show where that
// goes wrong: attribute names may come in any case, and the first part, name=value,
// is the cookie itself, not an attribute.
//
// Examples:
//   missingProtections('session=4f9a1c; Path=/; HttpOnly; Secure; SameSite=Lax') // []
//   missingProtections('session=4f9a1c; secure; samesite=none')
//   // ['HttpOnly', 'SameSite']
//
// Run the tests: npm test -- 19-events/web-security

export function missingProtections(header) {
    const missing = [];
    if (!header.includes('HttpOnly')) {
        missing.push('HttpOnly');
    }
    if (!header.includes('Secure')) {
        missing.push('Secure');
    }
    if (!header.includes('SameSite')) {
        missing.push('SameSite');
    }
    return missing;
}
