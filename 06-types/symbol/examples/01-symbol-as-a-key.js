// A Symbol as the key of an object property.
const MY_KEY = Symbol();
let obj = {
    [MY_KEY]: 'secret value'
};
console.log(obj[MY_KEY]); // secret value
