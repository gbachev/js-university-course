// Property shorthand, a computed key and a method shorthand in one object.
const x = 10;
const y = 20;
const label = 'coords';

const point = {
    x,
    y,
    [label]: `${x},${y}`,
    print() {
        console.log(this.coords);
    }
};

point.print(); // 10,20
console.log(point); // { x: 10, y: 20, coords: '10,20', print: [Function: print] }
