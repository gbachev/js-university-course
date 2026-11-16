// The browser tells us when half of a notification shows. Reload scrolled to the top.
const unread = document.querySelector('#unread');

const observer = new IntersectionObserver(
    (entries) => {
        for (const entry of entries) {
            const item = entry.target;
            console.log(item.textContent, entry.isIntersecting);
            if (entry.isIntersecting) {
                item.dataset.status = 'seen';
                unread.textContent = Number(unread.textContent) - 1;
                observer.unobserve(item);
            }
        }
    },
    { threshold: 0.5 },
);

for (const item of document.querySelectorAll('#inbox li')) {
    observer.observe(item);
}
// Your order has shipped true
// Jane Doe replied to you false
// A book you like is on sale false

// then, as we scroll down
// Jane Doe replied to you true
// A book you like is on sale true
