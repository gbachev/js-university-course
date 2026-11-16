export function getGreeter(user) {
    return user.greet.bind(user);
}
