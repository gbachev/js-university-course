export function createStore(initialState) {
    const listeners = new Set();

    const state = new Proxy(initialState, {
        set(target, prop, value, receiver) {
            if (Object.is(target[prop], value)) {
                return true;
            }
            const ok = Reflect.set(target, prop, value, receiver);
            for (const listener of listeners) {
                listener(receiver, prop);
            }
            return ok;
        },
    });

    function subscribe(listener) {
        listeners.add(listener);
        return () => listeners.delete(listener);
    }

    return { state, subscribe };
}
