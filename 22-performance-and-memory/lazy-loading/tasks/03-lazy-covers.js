// Task 3: Lazy covers
// Lecture: Lazy Loading
//
// Our covers have their address in data-src and no src, so nothing downloads yet. Write
// lazyLoad(images, rootMargin): it watches every image in images with one
// IntersectionObserver (with the rootMargin it gets, like '0px 0px 200px 0px'). When an
// image comes into the zone, copy its data-src into src, so the browser downloads it, and
// stop watching that image: it loads once. Return the observer, so the page can
// disconnect() it later.
//
// Examples:
//   lazyLoad(document.querySelectorAll('img.cover'), '0px 0px 200px 0px');
//   // the first cover gets its src right away, the others when we scroll near them
//
// Open the page: npm run serve, then
// 22-performance-and-memory/lazy-loading/tasks/03-lazy-covers.html

export function lazyLoad(images, rootMargin) {
    // Your code here
}
