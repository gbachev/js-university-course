// Task 1: From a row to JSON
// Lecture: Building the API
//
// A row of the applications table comes out of better-sqlite3 with the column names
// of the table, in snake_case:
//   { id, user_id, company, role, status, applied_on, url, notes, created_at, updated_at }
// The front end reads camelCase. Write toApplication(row) that returns a new object
// with exactly these nine fields, in this order:
//   id, company, role, status, appliedOn, url, notes, createdAt, updatedAt
// - user_id is left out: the client never needs it.
// - A column we do not know (one added to the table later) is left out too, until
//   we decide to send it.
// - A value is copied as it is, null included: appliedOn and url are null when the
//   user left them empty, and the page expects null, not a missing field.
// Do not change row.
//
// Example:
//   toApplication({ id: 1, user_id: 7, company: 'Acme', role: 'Developer',
//       status: 'applied', applied_on: '2026-11-20', url: null, notes: '',
//       created_at: '2026-11-23T10:00:00.000Z', updated_at: '2026-11-23T10:00:00.000Z' })
//   { id: 1, company: 'Acme', role: 'Developer', status: 'applied',
//     appliedOn: '2026-11-20', url: null, notes: '',
//     createdAt: '2026-11-23T10:00:00.000Z', updatedAt: '2026-11-23T10:00:00.000Z' }
//
// Run the tests: npm test -- 25-our-second-project/building-the-api

export function toApplication(row) {
    // Your code here
}
