export function findUser(users, email) {
    return users.find(user => user.email === email);
}
