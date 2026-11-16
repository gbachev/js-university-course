// new Proxy(target, handler): the get trap runs on every read, and a write without a
// set trap goes straight to the target.
const target = { theme: 'light', fontSize: 16 };

const handler = {
    get(target, prop, receiver) {
        console.log(`read ${String(prop)}`);
        return Reflect.get(target, prop, receiver);
    },
};

const settings = new Proxy(target, handler);

console.log(settings.theme);
// read theme
// light

settings.theme = 'dark';
console.log(target.theme); // dark
