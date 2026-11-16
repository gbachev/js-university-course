// A named parameter first, then the rest of the arguments.
function greet(greeting, ...names) {
    console.log(greeting + ' ' + names.join(', '));
}

greet('Hello', 'John', 'Jane');
// Hello John, Jane
