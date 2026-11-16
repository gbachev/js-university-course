// Static members belong to the class: a bank name, a counter and a factory.
class BankAccount {
    static bankName = 'JS Bank';
    static #nextNumber = 1;

    #balance = 0;

    constructor(owner) {
        this.owner = owner;
        this.number = BankAccount.#nextNumber++;
    }

    get balance() {
        return this.#balance;
    }

    static withDeposit(owner, amount) {
        const account = new BankAccount(owner);
        account.#balance = amount;
        return account;
    }
}

const johnsAccount = new BankAccount('John Doe');
const janesAccount = BankAccount.withDeposit('Jane Doe', 500);

console.log(johnsAccount.number); // 1
console.log(janesAccount.number); // 2
console.log(janesAccount.balance); // 500
console.log(BankAccount.bankName); // JS Bank
console.log(janesAccount.bankName); // undefined
console.log(typeof janesAccount.withDeposit); // undefined
