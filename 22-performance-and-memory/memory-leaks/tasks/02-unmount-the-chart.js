// Task 2: Unmount the chart
// Lecture: Memory Leaks
//
// mountChart(target, container, points) shows how many points a chart has every time the
// target fires a resize event, and returns an unmount function. Right now unmount() only
// removes the container, so the listener stays on the target and keeps the container and
// all the points alive. Fix it: after unmount(), a resize does not touch the container.
// The target can be window in the browser, or any EventTarget, which is what the tests
// use. Other listeners on the target must keep working.
//
// Examples:
//   const unmount = mountChart(window, chart, [3, 5, 8]);
//   window.dispatchEvent(new Event('resize'));   // chart.textContent is '3 points'
//   unmount();   // the chart is removed, and resize events leave it alone
//
// Run the tests: npm test -- 22-performance-and-memory/memory-leaks

export function mountChart(target, container, points) {
    target.addEventListener('resize', () => {
        container.textContent = `${points.length} points`;
    });

    return () => {
        container.remove();
    };
}
