import { check, deepEqual, equal, source } from '/lib/browser-check.js';

const { loadBooks, saveBooks } = await import(source('03-load-the-list-safely.js'));
const KEY = 'reading-list';

check('a first visit gets an empty list', () => {
    localStorage.removeItem(KEY);
    deepEqual(loadBooks(), []);
});

check('a saved list comes back', () => {
    equal(saveBooks([{ title: 'Dune', read: false }]), true);
    deepEqual(loadBooks(), [{ title: 'Dune', read: false }]);
});

check('broken JSON gives an empty list', () => {
    localStorage.setItem(KEY, '{broken');
    deepEqual(loadBooks(), []);
});

check('valid JSON that is not a list gives an empty list', () => {
    localStorage.setItem(KEY, '{"title":"Dune"}');
    deepEqual(loadBooks(), []);
    localStorage.setItem(KEY, '42');
    deepEqual(loadBooks(), []);
});

check('a full store makes saveBooks return false instead of throwing', () => {
    // We make setItem() throw for a moment, like a full store does.
    const setItem = Storage.prototype.setItem;
    Storage.prototype.setItem = () => {
        throw new DOMException('The quota has been exceeded.', 'QuotaExceededError');
    };
    try {
        equal(saveBooks([{ title: 'Emma', read: true }]), false);
    } finally {
        Storage.prototype.setItem = setItem;
        localStorage.removeItem(KEY);
    }
});
