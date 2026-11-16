function authorText(names = []) {
    if (names.length === 0) {
        return 'Unknown author';
    }
    if (names.length === 1) {
        return names[0];
    }
    if (names.length === 2) {
        return `${names[0]} and ${names[1]}`;
    }
    return `${names[0]} and ${names.length - 1} others`;
}

export const toBook = (doc) => ({
    key: doc.key,
    title: doc.title ?? 'Untitled',
    author: authorText(doc.author_name),
    year: doc.first_publish_year ?? null,
    coverId: doc.cover_i ?? null,
});
