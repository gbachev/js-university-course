const car = {
    make: 'Toyota',
    model: 'Camry',
    year: 2021
};

for (const key in car) {
    console.log(`${key}: ${car[key]}`);
    // Outputs make: Toyota, model: Camry, year: 2021 (one per line)
}
