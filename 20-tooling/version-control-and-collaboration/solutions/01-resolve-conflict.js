export function resolveConflict(text, keep) {
    const kept = [];
    // 'none' outside a conflict, 'ours' above =======, 'theirs' below it.
    let part = 'none';
    for (const line of text.split('\n')) {
        if (line.startsWith('<<<<<<< ')) {
            part = 'ours';
        } else if (line === '=======' && part === 'ours') {
            part = 'theirs';
        } else if (line.startsWith('>>>>>>> ') && part === 'theirs') {
            part = 'none';
        } else if (part === 'none' || part === keep) {
            kept.push(line);
        }
    }
    return kept.join('\n');
}
