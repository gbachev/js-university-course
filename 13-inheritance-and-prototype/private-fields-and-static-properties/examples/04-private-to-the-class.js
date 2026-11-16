// The class can read #balance on any of its objects; #balance in object checks for it.
class BankAccount {
    #balance;

    constructor(owner, balance) {
        this.owner = owner;
        this.#balance = balance;
    }

    get balance() {
        return this.#balance;
    }

    transferTo(other, amount) {
        other.#balance += amount;
        this.#balance -= amount;
    }

    static isAccount(object) {
        return #balance in object;
    }
}

const johnsAccount = new BankAccount('John Doe', 100);
const janesAccount = new BankAccount('Jane Doe', 50);

johnsAccount.transferTo(janesAccount, 30);

console.log(johnsAccount.balance); // 70
console.log(janesAccount.balance); // 80

const fake = { owner: 'Jane Doe', balance: 1000000 };

console.log(BankAccount.isAccount(janesAccount)); // true
console.log(BankAccount.isAccount(fake)); // false

try {
    johnsAccount.transferTo(fake, 10);
} catch (error) {
    console.log(error.name + ': ' + error.message);
    // TypeError: Cannot read private member #balance from an object whose class did not declare it
}

console.log(johnsAccount.balance); // 70
