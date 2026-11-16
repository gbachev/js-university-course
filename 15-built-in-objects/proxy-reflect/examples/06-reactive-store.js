// The idea behind reactivity in frameworks: the set trap calls render on every change.
function createStore(state, render) {
    return new Proxy(state, {
        set(target, prop, value, receiver) {
            if (Object.is(target[prop], value)) {
                return true;
            }
            const ok = Reflect.set(target, prop, value, receiver);
            render(target);
            return ok;
        },
    });
}

function render(state) {
    console.log(`render: ${state.owner}, ${state.count} in cart`);
}

const store = createStore({ owner: 'Jane Doe', count: 0 }, render);

store.count++; // render: Jane Doe, 1 in cart
store.count = 1; // nothing, the value did not change
store.owner = 'John Doe'; // render: John Doe, 1 in cart
