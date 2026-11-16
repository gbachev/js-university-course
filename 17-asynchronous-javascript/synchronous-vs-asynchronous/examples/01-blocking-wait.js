// Synchronous code blocks: wait() keeps the thread busy for three seconds.
function wait(ms) {
    const end = Date.now() + ms;
    while (Date.now() < end) {
        // do nothing, just keep the thread busy
    }
}

console.log('Generating report'); // Generating report
wait(3000);
console.log('Report ready'); // Report ready (3 seconds later)
