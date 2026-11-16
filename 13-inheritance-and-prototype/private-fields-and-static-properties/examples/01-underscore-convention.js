// A leading underscore is only a convention: anyone can still write the field.
class BankAccount {
    constructor(owner, balance) {
        this.owner = owner;
        this._balance = balance;
    }

    withdraw(amount) {
        if (amount > this._balance) {
            throw new RangeError('Insufficient funds');
        }
        this._balance -= amount;
    }
}

const account = new BankAccount('John Doe', 100);
account._balance = 1000000;

console.log(account._balance); // 1000000
