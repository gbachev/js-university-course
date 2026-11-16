// A falsy check is true for null, but also for undefined and the other falsy values.
let a = null;
let b;

console.log(!a ? 'Executed' : 'NOT Executed'); // Executed

if (a) {
    console.log('never gets here');
} else {
    // Prints: a is null, but is it really -> yes in this case
    console.log('a is null, but is it really -> yes in this case');
}

if (b) {
    console.log('never gets here');
} else {
    // Prints: b is null, but is it really -> no
    console.log('b is null, but is it really -> no');
}

// A strict comparison checks for null only.
if (b === null) {
    console.log('Executed');
} else {
    console.log('NOT Executed'); // NOT Executed
}
