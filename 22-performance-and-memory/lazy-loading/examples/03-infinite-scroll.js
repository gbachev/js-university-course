// Load the next page when an empty #sentinel after the list comes within 300 px of the screen.
const list = document.querySelector('#results');
const sentinel = document.querySelector('#sentinel');
let page = 0;
let loading = false;

// Stands in for fetch(`/api/books?page=${page}`)
async function fetchPage(page) {
    const first = (page - 1) * 20 + 1;
    return Array.from({ length: 20 }, (_, i) => `Book ${first + i}`);
}

async function loadMore() {
    loading = true;
    page += 1;
    console.log('Loading page ' + page);
    for (const title of await fetchPage(page)) {
        const item = document.createElement('li');
        item.textContent = title;
        list.append(item);
    }
    loading = false;
    observer.unobserve(sentinel);
    if (page < 5) {
        observer.observe(sentinel); // reports again if still near
    }
}

const observer = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting && !loading) {
        loadMore();
    }
}, { rootMargin: '0px 0px 300px 0px' });

observer.observe(sentinel);
// Loading page 1
// more pages at once while the sentinel
// stays within 300 px of the screen
// then one page each time we scroll near the end
