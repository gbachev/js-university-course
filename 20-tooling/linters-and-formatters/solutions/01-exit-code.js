export function lintExitCode(problems, maxWarnings) {
    const errors = problems.filter((problem) => problem.severity === 'error').length;
    const warnings = problems.length - errors;
    if (errors > 0) {
        return 1;
    }
    if (maxWarnings !== undefined && warnings > maxWarnings) {
        return 1;
    }
    return 0;
}
