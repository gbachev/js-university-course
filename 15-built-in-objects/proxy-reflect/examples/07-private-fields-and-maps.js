// A proxy is a different object, and private fields and Map methods break through it.
// The fix calls getters and methods on the target.
class Account {
    #balance = 100;
    get balance() {
        return this.#balance;
    }
}

const account = new Account();
const plain = new Proxy(account, {});
console.log(plain === account); // false

try {
    console.log(plain.balance);
} catch (error) {
    console.log(error.name); // TypeError
}

const toTarget = {
    get(target, prop) {
        const value = Reflect.get(target, prop, target);
        return typeof value === 'function' ? value.bind(target) : value;
    },
};

console.log(new Proxy(account, toTarget).balance); // 100

const prices = new Proxy(new Map([['book', 12]]), toTarget);
console.log(prices.get('book')); // 12
