const phrases = ['hello world', 'hi there'];
const words = phrases.flatMap(str => str.split(' '));

console.log(words); // [ 'hello', 'world', 'hi', 'there' ]
