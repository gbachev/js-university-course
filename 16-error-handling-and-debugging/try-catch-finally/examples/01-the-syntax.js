// The saved settings have a trailing comma, so they are not valid JSON.
const saved = '{"theme":"dark",}';

try {
    console.log('Reading settings'); // Reading settings
    const settings = JSON.parse(saved);
    console.log(settings.theme); // never runs
} catch (error) {
    console.log('Could not read settings'); // Could not read settings
}

console.log('The app keeps going'); // The app keeps going
