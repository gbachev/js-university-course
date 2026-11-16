// O(log n): every step throws away half of what is left.
function binarySearch(sortedIds, id) {
    let low = 0;
    let high = sortedIds.length - 1;
    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        if (sortedIds[mid] === id) {
            return mid;
        }
        if (sortedIds[mid] < id) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return -1;
}

const orderIds = [3, 8, 15, 23, 42, 57, 64, 91];
console.log(binarySearch(orderIds, 57)); // 5
console.log(binarySearch(orderIds, 10)); // -1
