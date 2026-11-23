export function titleFor(pathname) {
    const link = [...document.querySelectorAll('nav a')].find(
        (a) => a.pathname === pathname
    );
    return link ? link.textContent : 'Not Found';
}

export function startRouter(view) {
    const render = () => {
        view.textContent = titleFor(location.pathname);
    };

    document.querySelector('nav').addEventListener('click', (event) => {
        const link = event.target.closest('a');
        if (!link) {
            return;
        }
        event.preventDefault();
        if (link.pathname !== location.pathname) {
            history.pushState(null, '', link.href);
        }
        render();
    });

    window.addEventListener('popstate', render);
    render();
}
