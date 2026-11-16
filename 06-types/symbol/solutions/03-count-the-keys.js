export function countKeys(obj) {
    return {
        visible: Object.keys(obj).length,
        hidden: Object.getOwnPropertySymbols(obj).length,
    };
}
