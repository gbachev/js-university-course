function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}

export function fullName(user) {
    return formatName(user);
}
