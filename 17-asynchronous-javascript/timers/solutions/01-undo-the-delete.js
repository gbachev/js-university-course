export function scheduleDelete(orderId, onDelete) {
    const timerId = setTimeout(onDelete, 5000, orderId);
    return () => clearTimeout(timerId);
}
