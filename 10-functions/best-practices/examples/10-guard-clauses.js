// Cleaner and more readable with guard clause
function process(data) {
    if (!data || !data.valid) return;

    // main logic here
    console.log(`Processing ${data.name}`);
}

process({ name: 'order 1', valid: true }); // Processing order 1
process({ name: 'order 2', valid: false }); // (nothing, the guard clause returns early)
process(); // (nothing)
