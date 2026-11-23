// Pure functions: each one takes data and returns new data or text. None of them
// touch the page or change what they receive, so they are easy to test.

export const STATUS_LABELS = {
    wishlist: 'Wishlist',
    applied: 'Applied',
    interview: 'Interview',
    offer: 'Offer',
    rejected: 'Rejected',
};

// { all: 5, wishlist: 1, applied: 2, interview: 1, offer: 0, rejected: 1 }
export function countByStatus(applications) {
    const counts = { all: applications.length };
    for (const status of Object.keys(STATUS_LABELS)) {
        counts[status] = 0;
    }
    for (const application of applications) {
        counts[application.status] += 1;
    }
    return counts;
}

export const filterByStatus = (applications, status) =>
    status === 'all'
        ? applications
        : applications.filter((application) => application.status === status);

// The server lists the newest first, so a new application goes to the top.
export const addToList = (applications, added) => [added, ...applications];

export const replaceInList = (applications, changed) =>
    applications.map((application) =>
        application.id === changed.id ? changed : application,
    );

export const removeFromList = (applications, id) =>
    applications.filter((application) => application.id !== id);

// Only http and https links become <a> elements. The server checks this too, but
// the page does not rely on that: a javascript: link would run code on click.
export function isWebLink(text) {
    try {
        const { protocol } = new URL(text);
        return protocol === 'http:' || protocol === 'https:';
    } catch {
        // new URL() throws for null and for text that is not a full URL.
        return false;
    }
}

// '2026-11-20' -> '20 Nov 2026' (or 'Nov 20, 2026', in the reader's language).
// The date has no time of day, so we read it and print it in UTC. In local time,
// midnight UTC is still the day before in the Americas.
export function formatDay(day, locale) {
    const date = new Date(`${day}T00:00:00Z`);
    return new Intl.DateTimeFormat(locale, {
        dateStyle: 'medium',
        timeZone: 'UTC',
    }).format(date);
}

export function emptyListText(status) {
    if (status === 'all') {
        return 'No applications yet. Add the first one with the form.';
    }
    return `No applications with the status ${STATUS_LABELS[status]}.`;
}

// The text of one option of the filter: 'All (5)', 'Applied (2)'.
export function filterLabel(status, counts) {
    const label = status === 'all' ? 'All' : STATUS_LABELS[status];
    return `${label} (${counts[status]})`;
}
