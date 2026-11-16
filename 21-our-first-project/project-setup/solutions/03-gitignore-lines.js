export function addIgnoreLines(text, lines) {
    const existing = text.split('\n');
    const added = lines.filter(
        (line, index) => !existing.includes(line) && lines.indexOf(line) === index,
    );
    // The old text keeps its lines as they are, and ends with a newline.
    const start = text === '' || text.endsWith('\n') ? text : `${text}\n`;
    return start + added.map((line) => `${line}\n`).join('');
}
