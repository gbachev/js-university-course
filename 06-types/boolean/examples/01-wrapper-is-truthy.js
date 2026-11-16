// Every object is truthy, so a Boolean wrapper object holding false is truthy too.
let a = false;
let b = new Boolean(false);

if (a) {
    console.log('This code is NOT executed, as expected.'); // does not print
}

if (b) {
    // This one prints its message.
    console.log('This code is executed, despite the value of the wrapper object is false.');
}
