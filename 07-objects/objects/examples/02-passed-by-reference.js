// Objects are passed by reference, primitives by value.
let obj = {
    name: 'John Doe'
};

let primitive = 'Hello, World!';

function fn(obj, primitive) {
    obj.name = 'Jane Doe';
    primitive = 'Goodbye, World!';
}

console.log('Before calling the function fn:', obj.name, primitive);
// Before calling the function fn: John Doe Hello, World!

fn(obj, primitive);

console.log('After calling the function fn:', obj.name, primitive);
// After calling the function fn: Jane Doe Hello, World!
// we can see that the object was modified, but the primitive was not
