// Run with: node 12-modules/best-practices/examples/07-catch-a-failed-load/main.js
// There is no size-guide.js next to this file.
function openSizeGuide() {
    import('./size-guide.js')
        .then((guide) => {
            guide.showSizeGuide();
        })
        .catch(() => {
            console.log('The size guide is not available');
        });
}

openSizeGuide();
// The size guide is not available
