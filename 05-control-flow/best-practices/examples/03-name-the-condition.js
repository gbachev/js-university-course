const user = { age: 30, isActive: true, isBanned: false };

// Better
const canAccess = user && user.age > 18 && user.isActive && !user.isBanned;
if (canAccess) {
    console.log('Welcome back!');
}
// Welcome back!
