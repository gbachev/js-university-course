// By reference (objects)
let obj = { name: 'John' };

function changeName(obj) {
    obj.name = 'Jane'; // Modifying obj affects the original object
    return obj;
}

console.log(changeName(obj)); // { name: 'Jane' }
console.log(obj); // { name: 'Jane' }

// The function gets a copy of the reference: assigning a new object to the
// parameter does not change the object outside.
let user = { name: 'John' };

function replace(obj) {
    obj = { name: 'Jane' }; // obj now points to a new object, user does not change
}

replace(user);
console.log(user.name); // John
