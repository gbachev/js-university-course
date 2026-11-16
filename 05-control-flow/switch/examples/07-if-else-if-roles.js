function getUserRole(role) {
    if (role === 'admin') {
        console.log('Admin: You have full access.');
    } else if (role === 'editor') {
        console.log('Editor: You can edit content.');
    } else if (role === 'author') {
        console.log('Author: You can write new content.');
    } else if (role === 'subscriber') {
        console.log('Subscriber: You can view content.');
    } else {
        console.log('Unknown role: No access.');
    }
}

getUserRole('author'); // Author: You can write new content.
