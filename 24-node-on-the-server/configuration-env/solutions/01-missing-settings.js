export function missingSettings(env, names) {
    // !env[name] is true for undefined and for '', and false for '0' and 'false'.
    return names.filter((name) => !env[name]);
}
