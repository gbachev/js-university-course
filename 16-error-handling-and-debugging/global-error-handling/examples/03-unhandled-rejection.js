window.addEventListener('unhandledrejection', (event) => {
    console.log(event.reason.message); // Payment service is down
});

Promise.reject(new Error('Payment service is down'));
