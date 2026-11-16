// A private field with a getter: the balance can be read but not set from outside.
class BankAccount {
    #balance = 0;

    constructor(owner, balance) {
        this.owner = owner;
        this.#balance = balance;
    }

    get balance() {
        return this.#balance;
    }

    deposit(amount) {
        this.#balance += amount;
    }
}

const account = new BankAccount('John Doe', 100);
account.deposit(50);

console.log(account.balance); // 150
console.log(account['#balance']); // undefined
console.log(Object.keys(account)); // [ 'owner' ]
console.log(JSON.stringify(account)); // {"owner":"John Doe"}
console.log(structuredClone(account)); // { owner: 'John Doe' }

// Outside the class, account.#balance is a SyntaxError and the file would not run:
// console.log(account.#balance); // SyntaxError: Private field '#balance' must be declared in an enclosing class
