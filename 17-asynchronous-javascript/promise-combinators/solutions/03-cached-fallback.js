export function withFallback(promise, ms, fallback) {
    const timer = new Promise((resolve) => {
        setTimeout(() => resolve(fallback), ms);
    });
    return Promise.race([promise, timer]);
}
