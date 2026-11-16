const text = 'The quick brown fox jumps over the lazy dog.';

// match(): all four-letter words
const words = text.match(/\b\w{4}\b/g);
console.log(words); // [ 'over', 'lazy' ]

// replace(): a new string with the matches replaced
const result = text.replace(/brown/g, 'red');
console.log(result); // The quick red fox jumps over the lazy dog.

// search(): the index of the first match, or -1
let index = text.search(/\blazy\b/);
console.log(index); // 35

// There is no word "test" in the text.
index = text.search(/\btest\b/);
console.log(index); // -1

// split(): split on one or more spaces (Node prints the 9 words in columns)
console.log(text.split(/\s+/));
// [ 'The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog.' ]
