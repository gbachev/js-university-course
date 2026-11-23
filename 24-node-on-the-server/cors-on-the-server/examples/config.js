// Reads the settings of the books API. CORS_ORIGINS lists the origins of the pages that may
// read our answers, separated by commas. The default is the address of npm run serve.
export function readConfig(env) {
    const port = Number(env.PORT || '3000');
    if (!Number.isInteger(port) || port < 0 || port > 65535) {
        throw new Error(`PORT must be a whole number from 0 to 65535, not "${env.PORT}"`);
    }

    const origins = (env.CORS_ORIGINS || 'http://localhost:8080,http://127.0.0.1:8080')
        .split(',')
        .map((origin) => origin.trim());

    return { port, origins };
}
