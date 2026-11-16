// toString is not on user: JavaScript finds it on the prototype, Object.prototype.
const user = {
    name: 'John Doe'
};

console.log(user.toString()); // [object Object] (toString is inherited from Object.prototype)
