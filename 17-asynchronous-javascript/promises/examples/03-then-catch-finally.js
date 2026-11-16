// finally() runs in both cases: the place to hide a spinner.
function findUser(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (id === 1) {
                resolve({ name: 'Jane Doe' });
            } else {
                reject(new Error(`User ${id} not found`));
            }
        }, 300);
    });
}

console.log('Spinner shown'); // Spinner shown

findUser(2)
    .then((user) => console.log(user.name))
    .catch((error) => console.log(error.message)) // User 2 not found
    .finally(() => console.log('Spinner hidden')); // Spinner hidden
