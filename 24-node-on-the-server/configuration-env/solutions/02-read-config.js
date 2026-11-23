const NODE_ENVS = ['development', 'production', 'test'];

export function readConfig(env) {
    const problems = [];

    // || and not ??, so that PORT= in a .env file (an empty string) also gets the default.
    const port = Number(env.PORT || '3000');
    if (!Number.isInteger(port) || port < 0 || port > 65535) {
        problems.push(`PORT must be a whole number from 0 to 65535, not "${env.PORT}"`);
    }

    const nodeEnv = env.NODE_ENV || 'development';
    if (!NODE_ENVS.includes(nodeEnv)) {
        problems.push(`NODE_ENV must be one of ${NODE_ENVS.join(', ')}, not "${nodeEnv}"`);
    }

    const apiKey = env.BOOKS_API_KEY;
    if (!apiKey) {
        problems.push('BOOKS_API_KEY is missing');
    }

    if (problems.length > 0) {
        throw new Error(`Cannot start the server:\n- ${problems.join('\n- ')}`);
    }
    return { port, nodeEnv, apiKey };
}
