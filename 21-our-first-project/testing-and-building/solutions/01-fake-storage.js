// A stand-in for localStorage, backed by a plain object.
export function fakeStorage(saved = {}) {
    let data = { ...saved };
    return {
        getItem: (key) => (key in data ? data[key] : null),
        setItem: (key, value) => {
            data[key] = String(value);
        },
        removeItem: (key) => {
            delete data[key];
        },
        clear: () => {
            data = {};
        },
        // A getter, so length is counted every time we read it.
        get length() {
            return Object.keys(data).length;
        },
    };
}
