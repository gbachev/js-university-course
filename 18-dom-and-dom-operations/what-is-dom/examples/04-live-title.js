// The DOM is live: the tab shows the new title at once. A reload brings back the old one.
console.log(document.title); // Reading List
document.title = 'Reading List (2)';
console.log(document.title); // Reading List (2)
