export function countVisits(log) {
    const visits = new Map();

    for (const page of log) {
        // get() gives undefined for a new page, so we start from 0.
        visits.set(page, (visits.get(page) || 0) + 1);
    }

    return visits;
}
