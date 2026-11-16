// A private helper method validates every amount.
class BankAccount {
    #balance = 0;
    #history = [];

    constructor(owner) {
        this.owner = owner;
    }

    deposit(amount) {
        this.#validate(amount);
        this.#balance += amount;
        this.#history.push(`+${amount}`);
    }

    withdraw(amount) {
        this.#validate(amount);
        if (amount > this.#balance) {
            throw new RangeError('Insufficient funds');
        }
        this.#balance -= amount;
        this.#history.push(`-${amount}`);
    }

    get statement() {
        return `${this.owner}: ${this.#history.join(', ')} = ${this.#balance}`;
    }

    #validate(amount) {
        if (typeof amount !== 'number' || amount <= 0) {
            throw new RangeError(`Invalid amount: ${amount}`);
        }
    }
}

const account = new BankAccount('Jane Doe');
account.deposit(200);
account.withdraw(30);

console.log(account.statement); // Jane Doe: +200, -30 = 170
console.log(Object.getOwnPropertyNames(BankAccount.prototype));
// [ 'constructor', 'deposit', 'withdraw', 'statement' ]

try {
    account.deposit(-5);
} catch (error) {
    console.log(error.name + ': ' + error.message);
    // RangeError: Invalid amount: -5
}
