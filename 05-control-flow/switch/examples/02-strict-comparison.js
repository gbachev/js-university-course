let number = 2;

switch (number) {
    case '2':
        console.log("Won't be executed as '2' !== 2");
        break;
    case 2:
        console.log('We found the number 2.'); // Will be executed and printed
        break;
    default:
        console.log('Number not found.'); // Won't be executed as the switch exits after the second case
}
// We found the number 2.
