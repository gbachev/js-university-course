export function makeKeyboardButton(element) {
    element.setAttribute('role', 'button');
    element.tabIndex = 0;
    element.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            // Space would scroll the page.
            event.preventDefault();
            element.click();
        }
    });
}
