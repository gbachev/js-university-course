const JS = 'JavaScript';
console.log('The 4th character is:', JS[3]); // The 4th character is: a

// Each character twice, once with [i] and once with charAt(i): J J, a a, v v, ...
console.log('Standard for:');
for (let i = 0; i < JS.length; i++) console.log(JS[i], JS.charAt(i));

// Each character on its own line: J, a, v, ...
console.log('for ... of:');
for (let char of JS) console.log(char);

console.log('Spread:');
console.log(...JS); // J a v a S c r i p t
