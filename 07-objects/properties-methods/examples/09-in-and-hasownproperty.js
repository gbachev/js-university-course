// in finds inherited properties too, hasOwnProperty() only the object's own ones.
let obj = {
    name: 'Jane',
    age: 35
};

console.log('name' in obj); // true
console.log(obj.hasOwnProperty('name')); // true

let base = {
    shared: 'shared property'
};

let derived = Object.create(base);
derived.own = 'own property';

console.log('own' in derived); // true - own property
console.log('shared' in derived); // true - inherited property
console.log(derived.hasOwnProperty('own')); // true - own property
console.log(derived.hasOwnProperty('shared')); // false - it is inherited

// An object without a prototype has no hasOwnProperty() method.
let bare = Object.create(null);
bare.name = 'Jane';
console.log('name' in bare); // true
try {
    bare.hasOwnProperty('name');
} catch (error) {
    console.log(error.name + ': ' + error.message);
    // TypeError: bare.hasOwnProperty is not a function
}

// Object.hasOwn() (ES2022) works on every object, so we prefer it.
console.log(Object.hasOwn(bare, 'name')); // true
