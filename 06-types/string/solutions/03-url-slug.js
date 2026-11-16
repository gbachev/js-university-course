export function toSlug(title) {
    return title.trim().toLowerCase().replaceAll(' ', '-');
}
