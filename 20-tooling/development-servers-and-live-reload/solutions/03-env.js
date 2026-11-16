export function exposedEnv(text) {
    const env = {};
    for (const rawLine of text.split('\n')) {
        const line = rawLine.trim();
        if (!line.startsWith('VITE_')) {
            continue;
        }
        const equals = line.indexOf('=');
        env[line.slice(0, equals)] = line.slice(equals + 1);
    }
    return env;
}
