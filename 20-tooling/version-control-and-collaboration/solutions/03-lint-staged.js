// '*.js' gives ['.js'], '*.{json,md}' gives ['.json', '.md'].
function endings(pattern) {
    const rest = pattern.slice(1);
    if (rest.startsWith('.{')) {
        return rest
            .slice(2, -1)
            .split(',')
            .map((extension) => '.' + extension);
    }
    return [rest];
}

export function commandsFor(stagedFiles, config) {
    const result = [];
    for (const [pattern, commands] of Object.entries(config)) {
        const files = stagedFiles.filter((file) =>
            endings(pattern).some((ending) => file.endsWith(ending)),
        );
        if (files.length === 0) {
            continue;
        }
        for (const command of Array.isArray(commands) ? commands : [commands]) {
            result.push({ command, files });
        }
    }
    return result;
}
