const totalPoints = function sumPoints(days) {
    return days <= 0 ? 0 : days + sumPoints(days - 1);
};

export function loyaltyPoints(days) {
    // sumPoints exists only inside the function, so outside we use the variable.
    return totalPoints(days);
}
