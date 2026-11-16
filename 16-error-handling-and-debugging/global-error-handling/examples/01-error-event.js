window.addEventListener('error', (event) => {
    console.log(event.message);
    // Uncaught TypeError: order.pay is not a function
    console.log(event.filename);
    // http://localhost:8080/.../examples/01-error-event.js
    console.log(event.lineno, event.colno); // 13 11
    console.log(event.error instanceof TypeError); // true
});

const order = { id: 42 };

setTimeout(() => {
    order.pay();
}, 0);
