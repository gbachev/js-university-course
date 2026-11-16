export function getRouteSummary(route) {
    const {
        driver,
        stops: [[startCity, startTime], [endCity]],
    } = route;

    return `${driver} starts in ${startCity} at ${startTime} and ends in ${endCity}`;
}
