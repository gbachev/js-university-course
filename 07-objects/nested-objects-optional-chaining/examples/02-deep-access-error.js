// Reading a property of undefined throws a TypeError.
let user = {
    name: 'John Doe',
    address: {
        street: '123 Main St',
        city: 'Springfield'
    }
};

try {
    console.log(user.profile.bio);
} catch (error) {
    console.log(error.name + ': ' + error.message);
    // TypeError: Cannot read properties of undefined (reading 'bio')
}

// The traditional way: check each level first.
if (user.profile && user.profile.bio) {
    console.log(user.profile.bio);
}
// Nothing is printed: user has no profile, so the if does not run.
