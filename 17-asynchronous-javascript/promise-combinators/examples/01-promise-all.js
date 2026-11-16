// Promise.all(): the three requests run at once, the results keep the input order.
function later(value, ms) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(value), ms);
    });
}

function loadProduct(id) {
    return later({ id, title: 'Clean Code', price: 35 }, 300);
}

function loadReviews(id) {
    return later([5, 4, 5], 200);
}

function loadStock(id) {
    return later(12, 100);
}

Promise.all([loadProduct(7), loadReviews(7), loadStock(7)])
    .then(([product, reviews, stock]) => {
        console.log(product.title); // Clean Code
        console.log(reviews.length); // 3
        console.log(stock); // 12
    });
