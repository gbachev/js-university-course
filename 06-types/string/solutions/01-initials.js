export function getInitials(fullName) {
    const names = fullName.trim().split(' ');
    return (names[0][0] + names[1][0]).toUpperCase();
}
