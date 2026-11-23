// Reads and checks every setting in one place. The server calls it once, at start-up.
// It takes an object like process.env, so a test can pass a plain object instead.
export function readConfig(env) {
    const problems = [];

    const port = Number(env.PORT || '3000');
    if (!Number.isInteger(port) || port < 0 || port > 65535) {
        problems.push(`PORT must be a whole number from 0 to 65535, not "${env.PORT}"`);
    }

    const nodeEnv = env.NODE_ENV || 'development';

    const apiKey = env.BOOKS_API_KEY;
    if (!apiKey) {
        problems.push('BOOKS_API_KEY is missing');
    }

    if (problems.length > 0) {
        throw new Error(`Cannot start the server:\n- ${problems.join('\n- ')}`);
    }
    return { port, nodeEnv, apiKey };
}
