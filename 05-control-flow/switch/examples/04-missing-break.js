let number = 2;

switch (number) {
    case '2':
        console.log("Won't be executed as '2' !== 2");
    case 2:
        console.log('We found the number 2.'); // Will be executed and printed
    case 23:
        console.log('Wait what?'); // Will be executed and printed
    default:
        console.log('Number not found.'); // Will be executed and printed
}
// We found the number 2.
// Wait what?
// Number not found.
