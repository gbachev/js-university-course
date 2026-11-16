export function markWhenSeen(items) {
    const observer = new IntersectionObserver(
        (entries) => {
            for (const entry of entries) {
                if (entry.isIntersecting) {
                    entry.target.dataset.status = 'seen';
                    observer.unobserve(entry.target);
                }
            }
        },
        { threshold: 0.5 },
    );

    for (const item of items) {
        observer.observe(item);
    }
    return observer;
}
