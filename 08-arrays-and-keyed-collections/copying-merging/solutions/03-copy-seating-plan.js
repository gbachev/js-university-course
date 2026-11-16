export function copyPlan(plan) {
    // A new outer array, and a new array for every table in it.
    return plan.map(table => [...table]);
}
