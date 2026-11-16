// The callback runs after the try...catch has finished, so the outer catch never sees
// its error. Without the inner try...catch, the error is uncaught and Node stops.
try {
    setTimeout(() => {
        try {
            JSON.parse('{broken'); // throws later, outside the outer try
        } catch (error) {
            console.log(`Caught inside the callback: ${error.name}`);
            // Caught inside the callback: SyntaxError
        }
    }, 100);
    console.log('Timer set'); // Timer set
} catch (error) {
    console.log('Caught it'); // never runs
}
