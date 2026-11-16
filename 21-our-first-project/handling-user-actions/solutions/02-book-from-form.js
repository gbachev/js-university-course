export function bookFromForm(title, author, key) {
    const cleanTitle = title.trim();
    if (!cleanTitle) {
        return null;
    }
    return {
        key,
        title: cleanTitle,
        author: author.trim() || 'Unknown author',
        year: null,
        coverId: null,
    };
}
