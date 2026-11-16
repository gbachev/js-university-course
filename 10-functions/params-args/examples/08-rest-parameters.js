// Rest parameters collect the remaining arguments into a real array.
function listItems(...items) {
    items.forEach(item => console.log(item));
}

listItems('pen', 'book', 'lamp');
// pen
// book
// lamp

// Fixed parameters come first, the rest gathers "the rest".
function greetAll(greeting, ...names) {
    names.forEach(name => {
        console.log(`${greeting}, ${name}`);
    });
}

greetAll('Hello', 'John', 'Jane');
// Hello, John
// Hello, Jane
