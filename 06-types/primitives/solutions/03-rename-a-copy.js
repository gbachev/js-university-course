export function previewName(user, newName) {
    // A new object, so the user we got stays as it was.
    return { name: newName, email: user.email };
}
