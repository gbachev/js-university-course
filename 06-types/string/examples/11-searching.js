const str = 'I love JavaScript!';
console.log(str.indexOf('a')); // 8
console.log(str.lastIndexOf('a')); // 10
console.log(str.startsWith('I love')); // true
console.log(str.startsWith('I dislike')); // false
console.log(str.endsWith('JavaScript')); // false, the string ends with '!'
console.log(str.endsWith('JS')); // false
console.log(str.includes('Java')); // true
console.log(str.includes('java')); // false
