// target[prop] runs a getter with the raw object as this; Reflect.get with the
// receiver runs it with the proxy, so its own reads go through the trap too.
const user = {
    firstName: 'John',
    lastName: 'Doe',
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
};

const naive = new Proxy(user, {
    get(target, prop) {
        console.log(`read ${String(prop)}`);
        return target[prop];
    },
});

const proper = new Proxy(user, {
    get(target, prop, receiver) {
        console.log(`read ${String(prop)}`);
        return Reflect.get(target, prop, receiver);
    },
});

naive.fullName;
// read fullName
proper.fullName;
// read fullName
// read firstName
// read lastName
