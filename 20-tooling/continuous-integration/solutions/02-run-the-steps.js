export function runJob(commands, exitCodes) {
    const ran = [];
    for (const [index, command] of commands.entries()) {
        ran.push(command);
        if ((exitCodes[command] ?? 0) !== 0) {
            return { passed: false, ran, failed: command, skipped: commands.slice(index + 1) };
        }
    }
    return { passed: true, ran, failed: null, skipped: [] };
}
