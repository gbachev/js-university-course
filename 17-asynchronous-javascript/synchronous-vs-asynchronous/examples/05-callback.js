// loadUser() takes a function and calls it when the user is ready.
function loadUser(id, onLoaded) {
    setTimeout(() => {
        onLoaded({ id, name: 'Jane Doe' });
    }, 500);
}

loadUser(1, (user) => {
    console.log(user.name);
});

console.log('Loading user');

// Loading user
// Jane Doe (half a second later)
