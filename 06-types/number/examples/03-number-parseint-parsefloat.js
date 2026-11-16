// Number(), Number.parseInt() and Number.parseFloat() on the same values.
let a = 2;
let b = '3';
let c = '4.0';
let d = '5.065';
let e = 'abcd';
let f = true;
let g = false;

console.log(a, Number(a), Number.parseInt(a), Number.parseFloat(a)); // 2 2 2 2
console.log(b, Number(b), Number.parseInt(b), Number.parseFloat(b)); // 3 3 3 3
console.log(c, Number(c), Number.parseInt(c), Number.parseFloat(c)); // 4.0 4 4 4
console.log(d, Number(d), Number.parseInt(d), Number.parseFloat(d)); // 5.065 5.065 5 5.065
console.log(e, Number(e), Number.parseInt(e), Number.parseFloat(e)); // abcd NaN NaN NaN
console.log(f, Number(f), Number.parseInt(f), Number.parseFloat(f)); // true 1 NaN NaN
console.log(g, Number(g), Number.parseInt(g), Number.parseFloat(g)); // false 0 NaN NaN
