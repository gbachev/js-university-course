export function countVisit() {
    // getItem() gives a string, or null on a first visit: Number(null) is 0.
    const next = Number(localStorage.getItem('visits')) + 1;
    localStorage.setItem('visits', next);
    return next;
}
