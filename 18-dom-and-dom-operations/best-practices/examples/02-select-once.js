// Find the container once, search inside it by a hook, and expect null.
const products = document.querySelector('#products');

// search inside the list we found, by a hook
const buttons = products.querySelectorAll('[data-action]');
console.log(buttons.length); // 3

// this page has no banner, so we check first
const banner = document.querySelector('.banner');
if (banner) {
    banner.textContent = 'Sale ends today';
}
console.log(banner); // null
