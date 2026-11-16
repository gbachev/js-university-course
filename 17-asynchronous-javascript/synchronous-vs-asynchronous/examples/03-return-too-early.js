// The return runs long before the timer callback sets user.
function loadUser(id) {
    let user;

    setTimeout(() => {
        user = { id, name: 'Jane Doe' };
    }, 500);

    return user;
}

const user = loadUser(1);
console.log(user); // undefined
