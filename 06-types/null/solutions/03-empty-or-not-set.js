export function fieldState(value) {
    if (value === undefined) {
        return 'not set';
    } else if (value === null) {
        return 'cleared';
    }
    return 'filled';
}
