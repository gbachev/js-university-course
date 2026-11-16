const role = 'editor';

// Better than a huge if-else block
switch (role) {
    case 'admin':
        console.log('handle admin');
        break;
    case 'editor':
        console.log('handle editor');
        break;
    case 'viewer':
        console.log('handle viewer');
        break;
    default:
        console.log('handle unknown');
}
// handle editor
