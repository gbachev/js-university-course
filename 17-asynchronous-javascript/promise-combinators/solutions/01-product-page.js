function later(value, ms) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(value), ms);
    });
}

export function loadProduct(id) {
    return later({ id, title: 'Clean Code', price: 35 }, 300);
}

export function loadReviews(id) {
    return later([5, 4, 5, 2], 200);
}

export function loadStock(id) {
    return later(12, 100);
}

export function loadProductPage(id) {
    return Promise.all([loadProduct(id), loadReviews(id), loadStock(id)]).then(
        ([product, reviews, stock]) => {
            const sum = reviews.reduce((total, score) => total + score, 0);
            return { title: product.title, rating: sum / reviews.length, stock };
        }
    );
}
