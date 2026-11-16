// Task 2: One message only
// Lecture: Global Error Handling
//
// createErrorHandler(sendReport, showMessage) builds the function our global
// listeners call with each uncaught error. That function calls sendReport(error) for
// every error, so we hear about all of them, but calls
// showMessage('Something went wrong. Please reload.') only for the first one: ten
// errors show one message, not ten. Each handler we create keeps its own count.
//
// Examples:
//   const handleError = createErrorHandler(sendReport, showMessage);
//   handleError(new Error('First'));    // sends a report, shows the message
//   handleError(new Error('Second'));   // sends a report only
//
// Run the tests: npm test -- 16-error-handling-and-debugging/global-error-handling

export function createErrorHandler(sendReport, showMessage) {
    // Your code here
}
