// Reads and checks every setting of the books API once, at start-up, and throws one error
// that lists every problem. It takes an object like process.env, so a check can pass a
// plain object instead. CORS_ORIGINS lists the origins of the pages that may read our
// answers, separated by commas. Outside production it defaults to the address of
// npm run serve; in production a missing list stops the start, so the development
// default never reaches the host.
export function readConfig(env) {
    const problems = [];

    const port = Number(env.PORT || '3000');
    if (!Number.isInteger(port) || port < 0 || port > 65535) {
        problems.push(`PORT must be a whole number from 0 to 65535, not "${env.PORT}"`);
    }

    const nodeEnv = env.NODE_ENV || 'development';

    if (nodeEnv === 'production' && !env.CORS_ORIGINS) {
        problems.push('CORS_ORIGINS is missing');
    }
    const origins = (env.CORS_ORIGINS || 'http://localhost:8080,http://127.0.0.1:8080')
        .split(',')
        .map((origin) => origin.trim());

    if (problems.length > 0) {
        throw new Error(`Cannot start the server:\n- ${problems.join('\n- ')}`);
    }
    return { port, nodeEnv, origins };
}
