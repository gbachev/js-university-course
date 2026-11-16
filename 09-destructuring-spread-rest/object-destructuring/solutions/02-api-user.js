export function toUser(apiUser) {
    const {
        user_name: name,
        user_email: email,
        user_role: role = 'customer',
    } = apiUser;

    return { name, email, role };
}
