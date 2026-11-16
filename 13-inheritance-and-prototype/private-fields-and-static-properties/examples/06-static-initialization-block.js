// A static block runs once, while the class is being defined, so it prints first.
const settings = { basic: 2, premium: 0, student: 0 };

class BankAccount {
    static #fees = new Map();

    static {
        for (const [plan, fee] of Object.entries(settings)) {
            if (fee < 0) {
                throw new RangeError(`Negative fee for ${plan}`);
            }
            BankAccount.#fees.set(plan, fee);
        }
        console.log(`Loaded ${BankAccount.#fees.size} plans`); // Loaded 3 plans
    }

    static monthlyFee(plan) {
        return BankAccount.#fees.get(plan) ?? BankAccount.#fees.get('basic');
    }
}

console.log('Class is ready'); // Class is ready
console.log(BankAccount.monthlyFee('student')); // 0
console.log(BankAccount.monthlyFee('gold')); // 2
