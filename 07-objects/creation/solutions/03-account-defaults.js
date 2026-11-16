export const accountDefaults = {
    plan: 'free',
    currency: 'EUR',
};

export function createAccount(email) {
    const account = Object.create(accountDefaults);
    account.email = email;
    return account;
}
