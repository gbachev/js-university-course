export function isSameList(listA, listB) {
    if (listA.length !== listB.length) {
        return false;
    }

    for (let i = 0; i < listA.length; i++) {
        if (listA[i] !== listB[i]) {
            return false;
        }
    }

    return true;
}
