function loadUser(id) {
    return Promise.resolve({ id, name: "Jane Doe" });
}

function showWithThen(id) {
    return loadUser(id)
        .then(user => console.log(user.name))
        .catch(error => console.log(error.message));
}

async function showWithAwait(id) {
    try {
        const user = await loadUser(id);
        console.log(user.name);
    } catch (error) {
        console.log(error.message);
    }
}

showWithThen(1); // Jane Doe
showWithAwait(1); // Jane Doe
