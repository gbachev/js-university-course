function canEnterTheClub(age, hasId, hasGuardian) {
    const minorsClubbingAge = 14;
    const clubbingAge = 18;

    if (age >= minorsClubbingAge) {
        if (age < clubbingAge) {
            if (hasGuardian) {
                console.log('You are a minor, but you can enter with a guardian.');
            } else {
                console.log('You are a minor, you need a guardian to enter.');
            }
        } else {
            if (hasId) {
                console.log('You can enter.');
            } else {
                console.log('You need an ID to enter.');
            }
        }
    } else {
        console.log('You are not old enough to enter.');
    }
}

canEnterTheClub(14, false, true); // You are a minor, but you can enter with a guardian.
canEnterTheClub(14, true, false); // You are a minor, you need a guardian to enter.
canEnterTheClub(18, false); // You need an ID to enter.
canEnterTheClub(18, true); // You can enter.
canEnterTheClub(20, false); // You need an ID to enter.
