// The quotes in the comments only show where the spaces are: console.log() prints
// the strings without them.
const str = '    My favorite fruits are: apples, bananas, oranges (whitespaces before and after)    ';

const replaced = str.replace(' (whitespaces before and after)', ', kiwis');
console.log(replaced); // '    My favorite fruits are: apples, bananas, oranges, kiwis    '

// Prints: 'My favorite fruits are: apples, bananas, oranges, kiwis    '
console.log(replaced.trimStart());
// Prints: '    My favorite fruits are: apples, bananas, oranges, kiwis'
console.log(replaced.trimEnd());

const trimmed = replaced.trim();
console.log(trimmed); // 'My favorite fruits are: apples, bananas, oranges, kiwis'

const split = trimmed.split(': ');
console.log(split); // [ 'My favorite fruits are', 'apples, bananas, oranges, kiwis' ]

const fruits = split[1].split(', ');
console.log(fruits); // [ 'apples', 'bananas', 'oranges', 'kiwis' ]

// Prints: I will buy some apples, bananas, oranges, kiwis
console.log(`I will buy some ${fruits.join(', ')}`);
