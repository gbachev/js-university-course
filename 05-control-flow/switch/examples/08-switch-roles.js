function getUserRole(role) {
    switch (role) {
        case 'admin':
            console.log('Admin: You have full access.');
            break;
        case 'editor':
            console.log('Editor: You can edit content.');
            break;
        case 'author':
            console.log('Author: You can write new content.');
            break;
        case 'subscriber':
            console.log('Subscriber: You can view content.');
            break;
        default:
            console.log('Unknown role: No access.');
    }
}

getUserRole('author'); // Author: You can write new content.
