export const product = {
    describe() {
        return `${this.title} - ${this.price} EUR`;
    }
};

export const book = {
    __proto__: product,
    byline() {
        return `${this.title} by ${this.author}`;
    }
};

export const ebook = {
    __proto__: book,
    title: 'Dune',
    author: 'Frank Herbert',
    price: 9.99
};
