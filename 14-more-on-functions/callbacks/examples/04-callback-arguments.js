// The function that calls the callback decides which arguments it gets.
function importUsers(names, onProgress) {
    const users = [];
    names.forEach((name, index) => {
        users.push({ id: index + 1, name });
        onProgress(index + 1, names.length);
    });
    return users;
}

const names = ['John Doe', 'Jane Doe'];
const users = importUsers(names, (done, total) => {
    console.log(`Imported ${done} of ${total}`);
});
// Imported 1 of 2
// Imported 2 of 2

console.log(users[1]); // { id: 2, name: 'Jane Doe' }
