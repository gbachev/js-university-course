{
    var x = 1;
}

console.log(x); // 1 (var is not block scoped)

// This includes conditional blocks.
if (true) {
    var test = 'yes';
}

console.log(test); // yes
