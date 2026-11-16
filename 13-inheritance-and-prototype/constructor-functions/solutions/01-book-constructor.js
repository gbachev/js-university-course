export function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

Book.prototype.describe = function () {
    return `${this.title} by ${this.author}, ${this.pages} pages`;
};
