// The caught error has a name and a message.
const settings = JSON.parse('{"theme":"dark"}');

try {
    console.log(settings.user.preferences.fontSize);
} catch (error) {
    console.log(error.name); // TypeError
    console.log(error.message);
    // Cannot read properties of undefined (reading 'preferences')
}
