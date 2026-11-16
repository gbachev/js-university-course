// Task 1: The product page at once
// Lecture: Promise Combinators
//
// loadProductPage(id) builds what the product page needs: { title, rating, stock },
// where rating is the average of the review scores. It works, but it loads the
// product, then the reviews, then the stock, one after another: 300 + 200 + 100 ms.
// The three requests do not depend on each other. Rewrite it with Promise.all() so
// they run at the same time and the page is ready after about 300 ms. The result
// stays the same.
//
// Examples:
//   loadProductPage(7).then((page) => console.log(page));
//   // { title: 'Clean Code', rating: 4, stock: 12 } (after about 300 ms)
//
// Run the tests: npm test -- 17-asynchronous-javascript/promise-combinators

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
    let product;
    let reviews;

    return loadProduct(id)
        .then((result) => {
            product = result;
            return loadReviews(id);
        })
        .then((result) => {
            reviews = result;
            return loadStock(id);
        })
        .then((stock) => {
            const sum = reviews.reduce((total, score) => total + score, 0);
            return { title: product.title, rating: sum / reviews.length, stock };
        });
}
