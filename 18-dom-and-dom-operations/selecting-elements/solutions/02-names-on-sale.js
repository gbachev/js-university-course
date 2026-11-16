export function saleNames() {
    const names = document.querySelectorAll('.product.sale .name');
    return Array.from(names, (el) => el.textContent);
}
