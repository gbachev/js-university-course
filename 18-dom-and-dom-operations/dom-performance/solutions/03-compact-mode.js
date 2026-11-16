export function setCompact(list, compact) {
    if (compact) {
        list.classList.add('compact');
    } else {
        list.classList.remove('compact');
    }
}
