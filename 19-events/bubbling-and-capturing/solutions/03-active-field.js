export function highlightFields(form) {
    // focus and blur do not bubble; focusin and focusout do.
    form.addEventListener('focusin', (event) => {
        event.target.closest('.field')?.classList.add('active');
    });

    form.addEventListener('focusout', (event) => {
        event.target.closest('.field')?.classList.remove('active');
    });
}
