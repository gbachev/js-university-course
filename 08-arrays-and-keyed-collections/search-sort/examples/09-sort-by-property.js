const users = [
    { name: 'Charlie', age: 30 },
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 28 }
];

users.sort((a, b) => a.age - b.age);

console.log(users);
// Sorted by age: Alice, Bob, Charlie
// [
//   { name: 'Alice', age: 25 },
//   { name: 'Bob', age: 28 },
//   { name: 'Charlie', age: 30 }
// ]
