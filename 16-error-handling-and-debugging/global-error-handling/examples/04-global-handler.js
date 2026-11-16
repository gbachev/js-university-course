let bannerShown = false;

function handleError(error) {
    const report = JSON.stringify({
        message: String(error),
        stack: error?.stack,
        page: location.href,
    });
    navigator.sendBeacon('/api/errors', report);

    if (!bannerShown) {
        const banner = document.createElement('p');
        banner.textContent = 'Something went wrong. Please reload.';
        document.body.prepend(banner);
        bannerShown = true;
    }
}

window.addEventListener('error', (event) => {
    handleError(event.error);
});

window.addEventListener('unhandledrejection', (event) => {
    handleError(event.reason);
});

// Two buttons to break the page on purpose, so we can watch the handler work.
const order = { id: 42 };

document.querySelector('#pay').addEventListener('click', () => {
    order.pay(); // TypeError: order.pay is not a function
});

document.querySelector('#reject').addEventListener('click', () => {
    Promise.reject(new Error('Payment service is down'));
});
