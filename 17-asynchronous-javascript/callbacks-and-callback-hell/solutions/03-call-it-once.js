// a third-party payment library we do not control
export const payments = {
    charge(amount, callback) {
        setTimeout(() => callback(null, 'PAY-1042'), 100);
        // a retry bug calls our callback a second time
        setTimeout(() => callback(null, 'PAY-1042'), 200);
    },
};

export function once(callback) {
    let called = false;

    return (...args) => {
        if (called) {
            return;
        }
        called = true;
        callback(...args);
    };
}
