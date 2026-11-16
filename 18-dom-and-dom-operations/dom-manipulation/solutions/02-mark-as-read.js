export function toggleRead(item) {
    const isRead = item.classList.toggle('read');
    item.querySelector('.status').textContent = isRead ? 'Read' : 'To read';
    return isRead;
}
