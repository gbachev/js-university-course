var funcs = [];

for (var i = 0; i < 3; i++) {
    funcs.push(() => i);
}

console.log(funcs[0](), funcs[1](), funcs[2]()); // 3 3 3

let funcsLet = [];

for (let i = 0; i < 3; i++) {
    funcsLet.push(() => i);
}

console.log(funcsLet[0](), funcsLet[1](), funcsLet[2]()); // 0 1 2
