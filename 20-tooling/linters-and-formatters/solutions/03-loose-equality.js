export function findLooseEquality(source) {
    const found = [];
    const lines = source.split('\n');
    lines.forEach((text, index) => {
        for (let i = 0; i < text.length - 1; i++) {
            const isOperator = (text[i] === '=' || text[i] === '!') && text[i + 1] === '=';
            // The character before must not be part of the operator (as in ===),
            // and the one after must not make it strict.
            const before = text[i - 1];
            const after = text[i + 2];
            if (isOperator && before !== '=' && before !== '!' && after !== '=') {
                found.push({ line: index + 1, column: i + 1 });
                i++;
            }
        }
    });
    return found;
}
