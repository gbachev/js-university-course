const button = document.querySelector('#size-guide');

button.addEventListener('click', () => {
    import('./size-guide.js').then((guide) => {
        guide.showSizeGuide();
    });
});

// after the first click
// size-guide.js runs
// S: 36-38, M: 40-42, L: 44-46
// after the second click
// S: 36-38, M: 40-42, L: 44-46
