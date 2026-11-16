// Cleaner and more readable with guard clause
function handleData(data) {
    if (!data || !data.valid) return;

    // main logic here
    console.log(`Processing ${data.name}`);
}

handleData({ name: 'order 1', valid: true }); // Processing order 1
handleData({ name: 'order 2', valid: false }); // (nothing, the guard clause returns early)
handleData(); // (nothing)
