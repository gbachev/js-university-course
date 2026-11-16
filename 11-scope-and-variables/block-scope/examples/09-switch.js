const value = 2;

// All cases of a switch share one block, so the same let in two cases is a SyntaxError,
// and then the file does not run at all. Remove the // in front of the lines to see it.
// switch (value) {
//     case 1:
//         let a = 10;
//         break;
//     case 2:
//         let a = 20; // SyntaxError - same block scope
//         break;
// }

// With a block for each case, every case has its own scope.
switch (value) {
    case 1: {
        let a = 10;
        console.log(a);
        break;
    }
    case 2: {
        let a = 20;
        console.log(a); // 20
        break;
    }
}
