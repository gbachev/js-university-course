console.log(null == undefined); // true
console.log(null === undefined); // false

// value == null is true only for null and undefined.
let value;

if (value == null) {
    console.log('value is null or undefined'); // value is null or undefined
}

console.log(0 == null); // false
console.log('' == null); // false
