function doSomething() {
    console.log('Doing something for an active user.');
}

// A guard clause needs a function to return from.
function openDashboard(user) {
    // Use guard clauses
    if (!user || !user.isActive || user.isBanned) return;
    doSomething();
}

openDashboard({ isActive: true, isBanned: false }); // Doing something for an active user.
openDashboard({ isActive: true, isBanned: true }); // (nothing, the guard returns early)
openDashboard(null); // (nothing, the guard returns early)
