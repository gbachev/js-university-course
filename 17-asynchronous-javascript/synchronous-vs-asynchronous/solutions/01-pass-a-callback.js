export function loadOrder(id, onLoaded) {
    setTimeout(() => {
        onLoaded({ id, status: 'shipped' });
    }, 300);
}
