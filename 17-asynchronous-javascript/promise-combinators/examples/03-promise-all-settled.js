// Promise.allSettled() keeps every outcome and never rejects.
const recipients = [
    'john.doe@example.com',
    'sales.example.com',
    'jane.doe@example.com',
];

function sendNewsletter(email) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (email.includes('@')) {
                resolve(email);
            } else {
                reject(new Error('Invalid address'));
            }
        }, 100);
    });
}

Promise.allSettled(recipients.map(sendNewsletter))
    .then((results) => {
        console.log(results[0]);
        // { status: 'fulfilled', value: 'john.doe@example.com' }

        results.forEach((result, i) => {
            if (result.status === 'rejected') {
                const reason = result.reason.message;
                console.log(`${recipients[i]}: ${reason}`);
                // sales.example.com: Invalid address
            }
        });
    });
