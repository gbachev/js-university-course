export function createErrorHandler(sendReport, showMessage) {
    // The flag lives in the closure, so every handler has its own.
    let messageShown = false;

    return function handleError(error) {
        sendReport(error);

        if (!messageShown) {
            showMessage('Something went wrong. Please reload.');
            messageShown = true;
        }
    };
}
