export function getGreeter(user) {
    // user comes from the scope; calling greet() on it sets this to user.
    return () => user.greet();
}
