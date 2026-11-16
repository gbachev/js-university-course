// An object that refers to itself cannot be turned into JSON.
let obj = { name: 'John Doe' };
obj.self = obj; // circular reference

try {
    let copy = JSON.parse(JSON.stringify(obj));
} catch (error) {
    console.log(error.name + ': ' + error.message);
    // TypeError: Converting circular structure to JSON
    //     --> starting at object with constructor 'Object'
    //     --- property 'self' closes the circle
}
