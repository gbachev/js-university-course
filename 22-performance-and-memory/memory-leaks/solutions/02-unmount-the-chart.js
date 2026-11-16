export function mountChart(target, container, points) {
    const controller = new AbortController();
    target.addEventListener('resize', () => {
        container.textContent = `${points.length} points`;
    }, { signal: controller.signal });

    return () => {
        controller.abort();
        container.remove();
    };
}
