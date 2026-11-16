// Before ES6 we used || for a default value.
function greet(name) {
    name = name || 'Guest';
    console.log(`Hello, ${name}`);
}

greet(); // Hello, Guest

// The catch: 0, '' and false are falsy too, so they get replaced.
function show(value) {
    value = value || 'default';
    console.log(value);
}

show(0); // default, not 0
