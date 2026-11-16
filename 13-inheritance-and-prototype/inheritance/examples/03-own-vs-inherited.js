// in and for...in see the whole chain; Object.hasOwn(), keys, JSON and spread do not.
const person = {
    greet() {
        return `Hi, I'm ${this.name}`;
    }
};

const employee = {
    __proto__: person,
    company: 'Acme',
    work() {
        return `${this.name} works at ${this.company} as a ${this.role}`;
    }
};

const johnDoe = {
    __proto__: employee,
    name: 'John Doe',
    role: 'developer'
};

console.log('company' in johnDoe); // true
console.log(Object.hasOwn(johnDoe, 'name')); // true
console.log(Object.hasOwn(johnDoe, 'company')); // false

const keys = [];

for (const key in johnDoe) {
    keys.push(key);
}

console.log(keys); // [ 'name', 'role', 'company', 'work', 'greet' ]
console.log(Object.keys(johnDoe)); // [ 'name', 'role' ]
console.log(JSON.stringify(johnDoe)); // {"name":"John Doe","role":"developer"}
console.log({ ...johnDoe }.company); // undefined
