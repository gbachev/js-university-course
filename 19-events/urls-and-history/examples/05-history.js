// pushState() and replaceState() change the address without a reload; popstate fires on Back and Forward.
history.pushState({ page: 3 }, '', '/search?q=dune&page=3');
console.log(location.pathname + location.search); // /search?q=dune&page=3
console.log(history.state); // { page: 3 }

history.replaceState({ page: 3, sort: 'year' }, '', '/search?q=dune&page=3&sort=year');
console.log(history.state); // { page: 3, sort: 'year' }

try {
    history.pushState(null, '', 'https://example.com/');
} catch (error) {
    console.log(error.name); // SecurityError
}

window.addEventListener('popstate', (event) => {
    console.log('popstate', location.pathname, event.state);
});

history.pushState({ view: 'books' }, '', '/books');
history.pushState({ view: 'about' }, '', '/about');
// nothing logged yet

// Click the button: popstate /books { view: 'books' }
document.querySelector('#back').addEventListener('click', () => history.back());
