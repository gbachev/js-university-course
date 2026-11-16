export function getActiveNames(users) {
    return users.filter(user => user.active).map(user => user.name);
}
