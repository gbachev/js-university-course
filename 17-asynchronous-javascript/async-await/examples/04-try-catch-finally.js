// A rejected await throws inside the try, and finally hides the spinner.
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

async function showProfile(id) {
    console.log('Spinner shown');
    try {
        const user = await findUser(id);
        console.log(user.name);
    } catch (error) {
        console.log(error.message);
    } finally {
        console.log('Spinner hidden');
    }
}

showProfile(2);
// Spinner shown
// User 2 not found
// Spinner hidden
