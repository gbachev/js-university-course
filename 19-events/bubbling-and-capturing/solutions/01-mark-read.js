export function trackClicks(output) {
    let clicks = 0;
    document.addEventListener('click', () => {
        clicks++;
        output.textContent = String(clicks);
    });
}

export function setUpList(list) {
    for (const book of list.querySelectorAll('li')) {
        book.addEventListener('click', (event) => {
            // The click came from the button: that is not a click on the book.
            if (event.target.closest('button')) {
                return;
            }
            list.querySelector('.selected')?.classList.remove('selected');
            book.classList.add('selected');
        });
    }

    for (const button of list.querySelectorAll('button')) {
        button.addEventListener('click', () => {
            button.closest('li').classList.toggle('is-read');
        });
    }
}
