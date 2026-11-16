// A listener on window keeps its closure alive. One abort() removes it.

// considered bad practice: window holds this listener forever
function mountChartForever(container, points) {
    window.addEventListener('resize', () => {
        container.textContent = `${points.length} points`;
    });
}

// fixed: one abort() removes the listener when the chart goes
function mountChart(container, points) {
    const controller = new AbortController();
    window.addEventListener('resize', () => {
        container.textContent = `${points.length} points`;
    }, { signal: controller.signal });

    return () => {
        controller.abort();
        container.remove();
    };
}

const chart = document.createElement('div');
document.body.append(chart);
const unmount = mountChart(chart, new Array(100_000).fill(0));

window.dispatchEvent(new Event('resize'));
console.log(chart.textContent); // 100000 points
unmount();
