// Better: one object instead of a long list of parameters, so the order does not
// matter and the call says what each value is.
function createUser({ name, age, email, role }) {
    return { name, age, email, role };
}

console.log(createUser({ email: 'jo@example.com', name: 'Jo', role: 'admin', age: 31 }));
// { name: 'Jo', age: 31, email: 'jo@example.com', role: 'admin' }
