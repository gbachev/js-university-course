export const STATUSES = ['wishlist', 'applied', 'interview', 'offer', 'rejected'];

// Every status starts at 0, so the filter can show 'Offer (0)' too, and a status
// with no applications is not left out or counted as NaN.
export function countByStatus(applications) {
    const counts = { all: applications.length };
    for (const status of STATUSES) {
        counts[status] = 0;
    }
    for (const application of applications) {
        counts[application.status] += 1;
    }
    return counts;
}

export const filterByStatus = (applications, status) =>
    status === 'all' ? applications : applications.filter((application) => application.status === status);
