// Task 2: A book from the form
// Lecture: Handling User Actions
//
// The submit listener builds a book from the two fields. Here that part is a pure
// function, bookFromForm(title, author, key), so we can test it: it returns null when
// there is no title, or the new book { key, title, author, year: null, coverId: null }
// with both values trimmed and 'Unknown author' for an empty author. The code below
// has two bugs: a title of only spaces makes a book, and an author of only spaces
// stays as spaces. Fix them.
//
// Examples:
//   bookFromForm('  Emma ', 'Jane Austen', 'k1')
//   // { key: 'k1', title: 'Emma', author: 'Jane Austen', year: null, coverId: null }
//   bookFromForm('   ', 'Jane Austen', 'k2')   // null
//
// Run the tests: npm test -- 21-our-first-project/handling-user-actions

// Based on the submit listener in reading-list/src/main.js.
export function bookFromForm(title, author, key) {
    if (!title) {
        return null;
    }
    return {
        key,
        title: title.trim(),
        author: author || 'Unknown author',
        year: null,
        coverId: null,
    };
}
