// By reference (objects)
let obj = { name: 'John' };

function changeName(obj) {
    obj.name = 'Jane'; // Modifying obj affects the original object
    return obj;
}

console.log(changeName(obj)); // { name: 'Jane' }
console.log(obj); // { name: 'Jane' }
