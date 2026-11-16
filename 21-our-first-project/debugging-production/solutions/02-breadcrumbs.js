export function createBreadcrumbs(limit = 5) {
    const actions = [];

    return {
        add(action) {
            actions.push(action);
            if (actions.length > limit) {
                actions.shift();
            }
        },
        list() {
            return [...actions];
        },
    };
}
