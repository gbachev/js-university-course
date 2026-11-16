const nums = [10, 1, 5];
nums.sort();

console.log(nums); // [ 1, 10, 5 ] - unexpected result

nums.sort((a, b) => a - b);

console.log(nums); // [ 1, 5, 10 ] - OK
