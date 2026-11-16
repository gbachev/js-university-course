const names = { 1: 'Jane Doe', 2: 'John Doe' };

export function loadUser(id, onLoaded) {
    setTimeout(() => {
        onLoaded({ id, name: names[id] ?? 'guest' });
    }, 500);
}

export function greetUser(id, onGreeting) {
    loadUser(id, (user) => {
        onGreeting(`Hello, ${user.name}!`);
    });
}
