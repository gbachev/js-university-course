function handleStatus(status) {
    console.log('Handling status:', status);
}

function processStatus(status) {
    switch (status) {
        case 'pending':
        case 'active':
        case 'closed':
            handleStatus(status);
            break;
        default:
            console.warn('Unknown status:', status);
    }
}

processStatus('active'); // Handling status: active
processStatus('archived'); // Unknown status: archived (console.warn, on the error output)
