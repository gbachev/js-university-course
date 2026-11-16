const temperature = 15;

const weather = temperature < 0 ? 'freezing'
    : temperature < 15 ? 'cold'
    : temperature < 25 ? 'mild'
    : 'hot';

console.log(weather); // mild

// The same as an if ... else chain.
let ifWeather;

if (temperature < 0) {
    ifWeather = 'freezing';
} else if (temperature < 15) {
    ifWeather = 'cold';
} else if (temperature < 25) {
    ifWeather = 'mild';
} else {
    ifWeather = 'hot';
}

console.log(ifWeather); // mild
