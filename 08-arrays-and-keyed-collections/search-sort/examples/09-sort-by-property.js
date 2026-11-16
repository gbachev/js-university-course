const users = [
    { name: 'John Doe', age: 30 },
    { name: 'Jane Doe', age: 25 }
];

users.sort((a, b) => a.age - b.age);

console.log(users); // [ { name: 'Jane Doe', age: 25 }, { name: 'John Doe', age: 30 } ]
