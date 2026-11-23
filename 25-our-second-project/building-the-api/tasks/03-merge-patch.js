// Task 3: Lay the changes over
// Lecture: Building the API
//
// A PATCH sends only the fields that change, like { status: 'interview' }. The route
// does not build its SQL from those names. It reads the application, lays the changes
// over it, and writes every field back with one fixed UPDATE.
//
// Write mergePatch(current, changes). current is an application in the shape the API
// sends: { id, company, role, status, appliedOn, url, notes, createdAt, updatedAt }.
// changes is the parsed body of the PATCH. Return a new object: current with the
// values of changes laid over it.
// - A user can edit only company, role, status, appliedOn, url and notes. When
//   changes has any other field of its own (id, userId, createdAt, a typo, and also
//   names every object inherits, such as 'constructor' or 'toString'), throw an Error
//   whose message names those fields. Check every field before changing anything.
// - A value in changes is taken as it is, null included: { url: null } clears the
//   link. Checking the values is the work of the next lecture.
// - Fields that are not in changes keep their values from current.
// - Do not change current or changes.
//
// Examples:
//   mergePatch({ id: 1, company: 'Acme', status: 'applied', ... }, { status: 'offer' })
//   { id: 1, company: 'Acme', status: 'offer', ... }
//   mergePatch(current, { status: 'offer', userId: 2 })    throws an Error naming userId
//   mergePatch(current, {})                                a copy of current
//
// Run the tests: npm test -- 25-our-second-project/building-the-api

export function mergePatch(current, changes) {
    // Your code here
}
