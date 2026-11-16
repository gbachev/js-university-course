export function withChangeLog(order, log) {
    return new Proxy(order, {
        set(target, prop, value, receiver) {
            const from = target[prop];
            if (Object.is(from, value)) {
                return true;
            }
            const ok = Reflect.set(target, prop, value, receiver);
            if (ok) {
                log.push({ key: prop, from, to: value });
            }
            return ok;
        },
    });
}
