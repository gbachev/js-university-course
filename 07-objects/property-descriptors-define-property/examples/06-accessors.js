// An accessor property: get runs when we read it, set when we assign to it.
const account = {
    firstName: 'John',
    lastName: 'Doe'
};

Object.defineProperty(account, 'fullName', {
    get() {
        return `${this.firstName} ${this.lastName}`;
    },
    set(name) {
        [this.firstName, this.lastName] = name.split(' ');
    },
    enumerable: true,
    configurable: true
});

console.log(account.fullName); // John Doe
account.fullName = 'Jane Smith';
console.log(account.firstName); // Jane
