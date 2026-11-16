export function createConfig(apiUrl, retries) {
    return Object.freeze({ apiUrl, retries });
}
