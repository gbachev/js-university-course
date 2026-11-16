export function getUserCard(user) {
    const { name, email = 'no email' } = user;

    return `${name} (${email})`;
}
