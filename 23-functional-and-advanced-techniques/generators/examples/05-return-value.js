// A return value arrives with done: true, and spread ignores it.
function* importUsers() {
    yield 'John Doe';
    yield 'Jane Doe';
    return '2 users imported';
}

const users = importUsers();
console.log(users.next()); // { value: 'John Doe', done: false }
console.log(users.next()); // { value: 'Jane Doe', done: false }
console.log(users.next());
// { value: '2 users imported', done: true }

console.log([...importUsers()]); // [ 'John Doe', 'Jane Doe' ]
