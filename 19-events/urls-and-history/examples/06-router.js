// The tiny router of the lecture: links push a new address, popstate renders on Back and Forward.
//
// The lecture's router matches paths from the root, so this example first moves the
// address to "/" without a reload. Reloading /books then asks npm run serve for /books,
// which it does not know: a real app needs a server that answers every client route
// with this page.
history.replaceState(null, '', '/');

const view = document.querySelector('#view');

const routes = {
    '/': ['Home', 'Welcome to our reading list.'],
    '/books': ['Books', 'Dune, Emma and Neuromancer.'],
    '/about': ['About', 'Made by John Doe and Jane Doe.']
};

function render() {
    const [title, text] = routes[location.pathname] ?? ['Not Found', 'No such page.'];
    const heading = document.createElement('h2');
    heading.textContent = title;
    const paragraph = document.createElement('p');
    paragraph.textContent = text;
    view.replaceChildren(heading, paragraph);
    document.title = title;
}

document.addEventListener('click', (event) => {
    const link = event.target.closest('a');
    if (!link || link.origin !== location.origin) {
        return;
    }
    if (event.ctrlKey || event.metaKey || event.shiftKey) {
        return;
    }
    event.preventDefault();
    if (link.pathname !== location.pathname) {
        history.pushState(null, '', link.pathname);
        render();
    }
});

window.addEventListener('popstate', render);
render();
