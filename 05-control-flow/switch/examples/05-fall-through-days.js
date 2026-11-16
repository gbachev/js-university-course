function printDayMessage(day) {
    switch (day) {
        case 1:
            console.log('Monday: Start of the work week.');
        case 2:
            console.log('Tuesday: Keep going!');
        case 3:
            console.log('Wednesday: Midweek!');
        case 4:
            console.log('Thursday: Almost there!');
        case 5:
            console.log('Friday: Weekend is near!');
        case 6:
            console.log("Saturday: Relax, it's the weekend.");
        case 7:
            console.log('Sunday: Rest well for the week ahead.');
            break;
        default:
            console.log('Invalid day.');
    }

    console.log('\n'); // used to add empty line and separate the output
}

printDayMessage(3);
// Wednesday: Midweek!
// Thursday: Almost there!
// Friday: Weekend is near!
// Saturday: Relax, it's the weekend.
// Sunday: Rest well for the week ahead.

printDayMessage(12);
// Invalid day.
