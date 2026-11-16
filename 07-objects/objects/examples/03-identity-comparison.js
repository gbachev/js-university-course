// Two objects are equal only when they are the same instance.
function fn(obj) {
    obj.name = 'Jane Doe';
    return obj;
}

let obj1 = {
    name: 'John Doe'
};

let obj2 = {
    name: 'John Doe'
};

const obj3 = obj1;
const obj4 = fn(obj1);

console.log(obj1 === obj2); // false - same structure, different references
console.log(obj1 === obj3); // true - obj3 is a reference to obj1
console.log(obj2 === obj3); // false - obj2 is a different object
console.log(obj1 === obj4); // true - obj4 is a reference to the modified obj1
