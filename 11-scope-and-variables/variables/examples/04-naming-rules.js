// Valid
var username = 'JohnDoe';
let userName = 'JaneDoe';
let $token;
let _config1;
const pi = 3.14;

console.log(username); // JohnDoe
console.log(userName); // JaneDoe
console.log($token); // undefined
console.log(_config1); // undefined
console.log(pi); // 3.14

// Invalid: each of these lines is a SyntaxError, and then the file does not run at all.
// Remove the // in front of one to see it.
// let 1stUser; // SyntaxError (the identifier can't start with a digit)
// let class; // SyntaxError (class is a reserved keyword)
