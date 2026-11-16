let visits = 0;

export function recordVisit() {
    visits = visits + 1;
    return visits;
}

export function resetVisits() {
    visits = 0;
}
