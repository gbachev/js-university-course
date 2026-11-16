// A set trap as a single gate for every write: unknown keys and invalid values throw.
const rules = {
    theme: (value) => ['light', 'dark'].includes(value),
    fontSize: (value) => Number.isInteger(value) && value >= 10,
};

function withValidation(target) {
    return new Proxy(target, {
        set(target, prop, value, receiver) {
            if (!Object.hasOwn(rules, prop)) {
                throw new TypeError(`Unknown setting: ${String(prop)}`);
            }
            if (!rules[prop](value)) {
                throw new RangeError(`Invalid ${prop}: ${value}`);
            }
            return Reflect.set(target, prop, value, receiver);
        },
    });
}

const settings = withValidation({ theme: 'light', fontSize: 16 });

settings.theme = 'dark';
console.log(settings.theme); // dark

try {
    settings.fontSize = 'huge';
} catch (error) {
    console.log(error.message); // Invalid fontSize: huge
}

try {
    settings.fontSzie = 20;
} catch (error) {
    console.log(error.message); // Unknown setting: fontSzie
}
