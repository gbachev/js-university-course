// Let the browser tell us, and disconnect the observer once its job is done.
const products = document.querySelectorAll('[data-product-id]');
const seen = new Set();

const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
        if (entry.isIntersecting) {
            seen.add(entry.target.dataset.productId);
        }
    }
    if (seen.size === products.length) {
        observer.disconnect();
        console.log(`all ${seen.size} seen, observer off`);
    }
});

products.forEach((product) => observer.observe(product));
// all 3 seen, observer off
