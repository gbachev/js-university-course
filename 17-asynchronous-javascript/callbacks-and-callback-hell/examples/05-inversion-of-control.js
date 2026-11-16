// Inversion of control: code we do not own decides how often our callback runs.
// a third-party payment library we do not control
const payments = {
    charge(amount, callback) {
        setTimeout(() => callback(null, 'PAY-1042'), 100);
        // a retry bug calls our callback a second time
        setTimeout(() => callback(null, 'PAY-1042'), 200);
    },
};

let emails = 0;

payments.charge(60, (error, paymentId) => {
    if (error) {
        console.log(`Payment failed: ${error.message}`);
        return;
    }
    emails++;
    console.log(`Receipt email ${emails} for ${paymentId}`);
});

// Receipt email 1 for PAY-1042
// Receipt email 2 for PAY-1042
