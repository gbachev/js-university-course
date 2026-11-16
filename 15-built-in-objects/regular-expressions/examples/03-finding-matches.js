// match() with and without g, and greedy vs lazy quantifiers.
const text = 'Coffee $4.50, cake $3.20 and juice $5.';

console.log(text.match(/\$\d+(\.\d{2})?/));
// [
//   '$4.50',
//   '.50',
//   index: 7,
//   input: 'Coffee $4.50, cake $3.20 and juice $5.',
//   groups: undefined
// ]
console.log(text.match(/\$\d+(\.\d{2})?/g));
// [ '$4.50', '$3.20', '$5' ]
console.log(text.match(/€\d+/g)); // null

const quote = 'John Doe said "yes" and Jane Doe said "no".';

console.log(quote.match(/".+"/)[0]); // "yes" and Jane Doe said "no"
console.log(quote.match(/".+?"/)[0]); // "yes"
