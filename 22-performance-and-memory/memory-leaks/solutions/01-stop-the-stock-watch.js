export function watchStock(product, readStock) {
    const history = [];
    const id = setInterval(() => history.push(readStock(product)), 1000);
    return {
        history,
        stop: () => clearInterval(id),
    };
}
