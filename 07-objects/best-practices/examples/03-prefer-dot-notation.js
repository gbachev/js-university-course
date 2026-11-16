// Dot notation for known names, bracket notation when the name is dynamic.
const user = { name: 'John', email: 'john@example.com' };

console.log(user.name); // John - preferred

const field = 'email';
console.log(user[field]); // john@example.com - the name is in a variable
