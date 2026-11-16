// src/main.js: export.js downloads on pointerenter or on the first click, not on page load.
const books = [
    { title: 'Dune', author: 'Frank Herbert' },
    { title: 'Eat, Pray, Love', author: 'Elizabeth Gilbert' },
];
const button = document.querySelector('#export');
const loadExport = () => import('./export.js');

// Start the download when the pointer arrives, before the click.
// If it fails, we ignore it here: the click tries again.
button.addEventListener('pointerenter', () => {
    loadExport().catch(() => {});
}, { once: true });

button.addEventListener('click', async () => {
    try {
        const { toCsv } = await loadExport();
        console.log(toCsv(books));
    } catch (error) {
        console.log('Export is not available: ' + error.message);
    }
});
// after a click
// title,author
// "Dune","Frank Herbert"
// "Eat, Pray, Love","Elizabeth Gilbert"
