export function buildReport(error, page) {
    return {
        message: String(error),
        // error can be null or a string, so we read the stack with optional chaining.
        stack: error?.stack,
        page,
    };
}
