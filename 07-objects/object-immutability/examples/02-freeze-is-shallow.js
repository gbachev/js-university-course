// Object.freeze() works only on the top level: nested objects can still change.
const profile = {
    info: {
        age: 30
    }
};

Object.freeze(profile);
profile.info.age = 31; // succeeds

console.log(profile.info.age); // 31
