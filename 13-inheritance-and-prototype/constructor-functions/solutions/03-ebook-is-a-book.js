export function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

Book.prototype.describe = function () {
    return `${this.title} by ${this.author}, ${this.pages} pages`;
};

export function Ebook(title, author, pages, sizeInMb) {
    Book.call(this, title, author, pages);
    this.sizeInMb = sizeInMb;
}

Ebook.prototype = Object.create(Book.prototype);
Ebook.prototype.constructor = Ebook;

Ebook.prototype.download = function () {
    return `Downloading ${this.title} (${this.sizeInMb} MB)`;
};
