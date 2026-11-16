export function createGreeter(name) {
    return {
        name,
        // A method, not an arrow function, so this is the object we call greet on.
        greet() {
            return 'Welcome back, ' + this.name;
        },
    };
}
