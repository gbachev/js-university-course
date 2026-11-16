let a = 1; // number primitive
let b = '2'; // string primitive
console.log(a + b); // 12, as b is a string
console.log(a + Number(b)); // 3, as Number is used to "cast" b to a number
