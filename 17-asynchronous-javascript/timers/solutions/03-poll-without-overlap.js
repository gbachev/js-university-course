export function pollUntilShipped(checkStatus, onShipped) {
    let checks = 0;

    function poll() {
        checks++;
        checkStatus((status) => {
            if (status === 'shipped') {
                onShipped(checks);
                return;
            }
            setTimeout(poll, 1000);
        });
    }

    setTimeout(poll, 1000);
}
