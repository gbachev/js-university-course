// Optional chaining only reads, we cannot assign through it.
let user = { name: 'John Doe' };

// user?.profile = {}; // syntax error - with this line the file would not run at all

user.profile = {}; // a plain assignment works
console.log(user.profile); // {}
