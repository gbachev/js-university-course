// Each then() returns a new promise; a returned promise makes the chain wait.
function later(value) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(value), 100);
    });
}

later({ items: 2, total: 60 })
    .then((cart) => cart.total)
    .then((total) => later(total * 1.2))
    .then((withVat) => console.log(withVat)); // 72
