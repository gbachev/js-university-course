function withShipping(price: number): number {
    return price + 5;
}

console.log(withShipping(10)); // 15
console.log(withShipping('10'));
// Error: Argument of type 'string' is not assignable
// to parameter of type 'number'.
