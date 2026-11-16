export function buildReport(error, { href, version, browser, breadcrumbs }) {
    // origin + pathname leaves out the query string and the hash.
    const { origin, pathname } = new URL(href);

    return {
        message: String(error),
        stack: error?.stack,
        url: origin + pathname,
        version,
        browser,
        breadcrumbs: breadcrumbs.slice(-5),
    };
}
