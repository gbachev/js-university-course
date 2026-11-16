export function timeStep(name, fn) {
    performance.mark(`${name}-start`);
    try {
        return fn();
    } finally {
        // finally runs after a return and after a throw, so the measure is always there
        performance.measure(name, `${name}-start`);
    }
}
