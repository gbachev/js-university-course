export function openOrdersView(win, render) {
    const controller = new AbortController();
    const timerId = setInterval(() => render('refresh'), 1000);
    win.addEventListener('resize', () => render('layout'), { signal: controller.signal });

    return function close() {
        clearInterval(timerId);
        controller.abort();
    };
}
