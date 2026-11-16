export function lazyLoad(images, rootMargin) {
    const observer = new IntersectionObserver((entries) => {
        for (const entry of entries) {
            if (entry.isIntersecting) {
                const image = entry.target;
                image.src = image.dataset.src;
                observer.unobserve(image);
            }
        }
    }, { rootMargin });

    for (const image of images) {
        observer.observe(image);
    }
    return observer;
}
