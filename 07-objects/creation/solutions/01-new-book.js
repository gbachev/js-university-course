export function createBook(title, author, pages) {
    return {
        title: title,
        author: author,
        pages: pages,
        isRead: false,
    };
}
