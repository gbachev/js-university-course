// Node and every current browser have Array.from(), so the if below does nothing here.
// In an old environment without it, the function inside would take its place.
if (!Array.from) {
    Array.from = function (arrayLike, mapFn, thisArg) {
        const arr = [];
        for (let i = 0; i < arrayLike.length; i++) {
            arr.push(mapFn ? mapFn.call(thisArg, arrayLike[i], i) : arrayLike[i]);
        }
        return arr;
    };
}

console.log(Array.from({ 0: 'x', 1: 'y', length: 2 })); // [ 'x', 'y' ]
