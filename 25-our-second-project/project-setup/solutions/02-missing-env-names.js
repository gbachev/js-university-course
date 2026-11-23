// The names of a NAME=value text, in order, skipping blank lines and comments.
function namesIn(text) {
    return text
        .split(/\r?\n/)
        .map((line) => line.trim())
        .filter((line) => line !== '' && !line.startsWith('#') && line.includes('='))
        .map((line) => line.slice(0, line.indexOf('=')).trim());
}

export function missingEnvNames(exampleText, envText) {
    const present = new Set(namesIn(envText));
    return namesIn(exampleText).filter((name) => !present.has(name));
}
