// An object inside an object, read with dot and bracket notation.
let user = {
    name: 'John Doe',
    address: {
        street: '123 Main St',
        city: 'Springfield'
    }
};

console.log(user.address.city); // Springfield

let key = 'city';
console.log(user['address'][key]); // Springfield
