export function updateTotal(list, total) {
    let sum = 0;
    for (const row of list.children) {
        const quantity = Number(row.querySelector('.quantity').textContent);
        sum += Number(row.dataset.price) * quantity;
    }
    total.textContent = sum.toFixed(2);
}

export function setUpCart(list, total) {
    list.addEventListener('click', (event) => {
        const button = event.target.closest('[data-action]');
        if (!button) {
            return;
        }
        const row = button.closest('li');
        const quantity = row.querySelector('.quantity');
        const { action } = button.dataset;

        if (action === 'increase') {
            quantity.textContent = Number(quantity.textContent) + 1;
        } else if (action === 'decrease') {
            quantity.textContent = Math.max(1, Number(quantity.textContent) - 1);
        } else if (action === 'remove') {
            row.remove();
        }
        updateTotal(list, total);
    });
}
