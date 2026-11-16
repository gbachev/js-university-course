// Task 3: Accounts with defaults
// Lecture: Creating Objects
//
// Every new account in our app starts on the free plan and pays in euros. Instead of
// copying those values into every account, we keep them once in accountDefaults and
// create each account with Object.create(accountDefaults). Write createAccount(email):
// it returns a new object whose prototype is accountDefaults and that has only one own
// property, email. The plan and the currency come from the prototype.
//
// Examples:
//   const account = createAccount('anna@example.com');
//   account.email   // 'anna@example.com', its own property
//   account.plan    // 'free', found on accountDefaults
//
// Run the tests: npm test -- 07-objects/creation

export const accountDefaults = {
    plan: 'free',
    currency: 'EUR',
};

export function createAccount(email) {
    // Your code here
}
