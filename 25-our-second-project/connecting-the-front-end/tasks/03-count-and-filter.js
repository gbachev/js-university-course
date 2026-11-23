// Task 3: Counts and the filter on the page
// Lecture: Connecting the Front End
//
// The page loads every application once and never asks the server for one status.
// The filter and its counts come from two pure functions. An application looks
// like { id: 1, company: 'Acme', role: 'Developer', status: 'applied' }, and the
// status is one of STATUSES.
// - countByStatus(applications) returns { all, wishlist, applied, interview,
//   offer, rejected }: `all` is the number of applications, and every status has
//   a count, 0 when no application has it.
// - filterByStatus(applications, status) returns the applications with that
//   status, in the same order, or all of them for the status 'all'.
// Neither function may change the array it receives.
//
// Examples:
//   countByStatus([{ status: 'applied' }, { status: 'offer' }, { status: 'applied' }])
//       { all: 3, wishlist: 0, applied: 2, interview: 0, offer: 1, rejected: 0 }
//   filterByStatus(applications, 'offer')    only the offers
//   filterByStatus(applications, 'all')      every application
//
// Run the tests: npm test -- 25-our-second-project/connecting-the-front-end

export const STATUSES = ['wishlist', 'applied', 'interview', 'offer', 'rejected'];

export function countByStatus(applications) {
    // Your code here
}

export function filterByStatus(applications, status) {
    // Your code here
}
