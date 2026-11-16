export function withdraw(balance, amount) {
    if (amount > balance) {
        throw new RangeError(
            `Insufficient funds: balance ${balance}, amount ${amount}`
        );
    }
    return balance - amount;
}
