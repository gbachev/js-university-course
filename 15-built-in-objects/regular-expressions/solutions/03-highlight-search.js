function escapeRegExp(text) {
    return text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

export function highlight(text, search) {
    if (search === '') {
        return text;
    }
    const pattern = new RegExp(escapeRegExp(search), 'gi');
    // $& is the whole match, so the original spelling stays.
    return text.replace(pattern, '[$&]');
}
