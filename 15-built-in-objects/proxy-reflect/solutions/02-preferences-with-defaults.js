export function withDefaults(saved, defaults) {
    return new Proxy(saved, {
        get(target, prop, receiver) {
            if (Object.hasOwn(target, prop)) {
                return Reflect.get(target, prop, receiver);
            }
            return defaults[prop];
        },
        has(target, prop) {
            return Object.hasOwn(target, prop) || Object.hasOwn(defaults, prop);
        },
    });
}
