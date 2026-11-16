// Object destructuring
function showUser({ name, age }) {
    console.log(`${name} is ${age}`);
}

showUser({ name: 'Jane', age: 25 }); // Jane is 25

// Default values while destructuring, and {} when no object is passed at all.
function printUser({ name = 'Anonymous', active = false } = {}) {
    console.log(`${name} is ${active ? 'active' : 'inactive'}`);
}

printUser(); // Anonymous is inactive
printUser({ name: 'Jane' }); // Jane is inactive
printUser({ active: true }); // Anonymous is active
