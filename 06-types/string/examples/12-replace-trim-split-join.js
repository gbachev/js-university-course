// The quotes in the comments only show where the spaces are: console.log() prints
// the strings without them.
const str = '    My favourite fruits are: apples, bananas, oranges (whitespaces before and after)    ';

const replaced = str.replace(' (whitespaces before and after)', 'kiwis');
console.log(replaced); // '    My favourite fruits are: apples, bananas, orangeskiwis    '

// Prints: 'My favourite fruits are: apples, bananas, orangeskiwis    '
console.log(replaced.trimStart());
// Prints: '    My favourite fruits are: apples, bananas, orangeskiwis'
console.log(replaced.trimEnd());

const trimmed = replaced.trim();
console.log(trimmed); // 'My favourite fruits are: apples, bananas, orangeskiwis'

const split = trimmed.split(': ');
console.log(split); // [ 'My favourite fruits are', 'apples, bananas, orangeskiwis' ]

const fruits = split[1].split(', ');
console.log(fruits); // [ 'apples', 'bananas', 'orangeskiwis' ]

// Prints: I will buy some apples, bananas, orangeskiwis
console.log(`I will buy some ${fruits.join(', ')}`);
