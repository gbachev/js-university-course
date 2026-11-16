export function deliveryMessage(method) {
    switch (method) {
        case 'pickup': {
            const days = 0;
            return `Ready for pickup in ${days} days`;
        }
        case 'express': {
            const days = 2;
            return `Arrives in ${days} days`;
        }
        case 'standard': {
            const days = 5;
            return `Arrives in ${days} days`;
        }
        default:
            return 'Unknown delivery method';
    }
}
