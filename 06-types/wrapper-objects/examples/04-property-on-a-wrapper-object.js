// A wrapper object we create with new stays, and so does its property.
let a = new String('some string');
a.someProperty = 'some value';
console.log(a); // [String: 'some string'] { someProperty: 'some value' }
