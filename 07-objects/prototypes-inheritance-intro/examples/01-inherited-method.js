// toString is not on user: JavaScript finds it on the prototype, Object.prototype.
const user = {
    name: 'John'
};

console.log(user.toString()); // [object Object] - inherited from Object.prototype
console.log(user.hasOwnProperty('toString')); // false
