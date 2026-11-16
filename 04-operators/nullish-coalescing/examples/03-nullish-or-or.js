const user = { firstName: 'John', nickname: '' };

console.log(user.nickname ?? user.firstName); // (an empty line: the empty string '')
console.log(user.nickname || user.firstName); // John
