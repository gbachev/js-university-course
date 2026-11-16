let a;
let b;
let c;
let d = 7;

/*
this is equivalent to: a = (b = (c = d))
or: c = d; b = c; a = b;
*/
a = b = c = d;

console.log(a, b, c, d); // 7 7 7 7
