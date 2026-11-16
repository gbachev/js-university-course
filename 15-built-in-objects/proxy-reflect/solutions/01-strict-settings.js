export function strictSettings(settings) {
    return new Proxy(settings, {
        set(target, prop, value, receiver) {
            if (!Object.hasOwn(target, prop)) {
                throw new TypeError(`Unknown setting: ${String(prop)}`);
            }
            const type = typeof target[prop];
            if (typeof value !== type) {
                const article = type === 'object' ? 'an' : 'a';
                throw new TypeError(`${String(prop)} must be ${article} ${type}`);
            }
            return Reflect.set(target, prop, value, receiver);
        },
    });
}
