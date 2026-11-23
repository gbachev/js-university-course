// Task 2: A list query with bound parameters
// Lecture: A Database with SQLite
//
// Imagine GET /api/applications takes two optional query values, ?status= and ?sort=.
// Write listQuery(userId, { status, sort }) that returns the SQL and its values as
// { sql, params }, ready for db.prepare(sql).all(...params). Both status and sort
// come from the request, so treat them as untrusted.
//
// The rule of the app: values are always bound, column names never come from the
// request.
// - The SQL starts with 'SELECT * FROM applications WHERE user_id = ?', and userId
//   is the first value in params.
// - When status is not undefined, add ' AND status = ?' and put status in params.
//   Any string counts, even '': it is a value, and a value is bound, never checked
//   or glued into the SQL here.
// - Then a space and the ORDER BY for sort. Only these three are allowed:
//     undefined or 'newest'   ORDER BY created_at DESC, id DESC
//     'oldest'                ORDER BY created_at ASC, id ASC
//     'company'               ORDER BY company ASC, id ASC
//   Throw an Error for any other sort.
//
// Examples:
//   listQuery(7, {})
//   { sql: 'SELECT * FROM applications WHERE user_id = ? ORDER BY created_at DESC, id DESC',
//     params: [7] }
//   listQuery(7, { status: 'offer', sort: 'company' })
//   { sql: 'SELECT * FROM applications WHERE user_id = ? AND status = ? ORDER BY company ASC, id ASC',
//     params: [7, 'offer'] }
//   listQuery(7, { sort: 'salary' })   throws an Error
//
// Run the tests: npm test -- 25-our-second-project/database

export function listQuery(userId, { status, sort }) {
    // Your code here
}
