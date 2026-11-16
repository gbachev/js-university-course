// This file is a module, so it is strict. Each line below is a SyntaxError in strict
// mode, and then the file does not run at all. Remove the // in front of one to see it.

let x = 5;
// delete x; // SyntaxError: Delete of an unqualified identifier in strict mode.

// let n = 010; // SyntaxError: Octal literals are not allowed in strict mode.

// let interface = 10; // SyntaxError: Unexpected strict mode reserved word
// let private = 20; // SyntaxError: Unexpected strict mode reserved word

console.log(x); // 5
