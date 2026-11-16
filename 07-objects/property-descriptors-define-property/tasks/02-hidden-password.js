// Task 2: Hide the password hash
// Lecture: Property Descriptors and Object.defineProperty
//
// Our login code needs the password hash on the user object, but the hash must never
// end up in the JSON we send to the browser or in the fields an admin page lists.
// attachPasswordHash(user, hash) adds the hash with a plain assignment, so it shows up
// everywhere. Fix it: we can still read user.passwordHash, but Object.keys(), for...in
// and JSON.stringify() do not see it. The function returns the user.
//
// Examples:
//   const user = attachPasswordHash({ name: 'Anna' }, 'a1b2c3');
//   user.passwordHash        // 'a1b2c3'
//   JSON.stringify(user)     // '{"name":"Anna"}'
//
// Run the tests: npm test -- 07-objects/property-descriptors-define-property

export function attachPasswordHash(user, hash) {
    user.passwordHash = hash;
    return user;
}
