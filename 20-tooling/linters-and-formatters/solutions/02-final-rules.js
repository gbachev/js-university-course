export function finalRules(configs) {
    const result = {};
    for (const config of configs) {
        for (const [rule, setting] of Object.entries(config.rules ?? {})) {
            result[rule] = Array.isArray(setting) ? setting[0] : setting;
        }
    }
    return result;
}
