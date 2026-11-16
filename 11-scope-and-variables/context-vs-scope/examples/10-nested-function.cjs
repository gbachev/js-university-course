// This file ends in .cjs, so Node runs it in sloppy mode, like the code in the lecture.
// inner() is called on its own, so its this is the global object, which has no value
// property. In strict mode its this is undefined, and this.value throws a TypeError.
const obj = {
    value: 42,
    show() {
        function inner() {
            console.log(this.value);
        }
        inner(); // undefined
    }
};

obj.show();
