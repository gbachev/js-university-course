let number = 2;

switch (number) {
    case '2':
        console.log('Won`t be executed as "2" !== 2');
        break;
    case 23:
        console.log('Won`t be executed as 23 !== 2');
        break;
    default:
        console.log('Number not found.'); // Will be executed and printed
}
// Number not found.
