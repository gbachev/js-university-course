export function needsPolyfill(supportedSince, targets) {
    return targets.some((target) => {
        const [browser, version] = target.split(' ');
        const since = supportedSince[browser];
        return since === undefined || Number(version) < since;
    });
}
