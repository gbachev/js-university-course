export function moduleFormat(source) {
    // UMD first: a UMD file also contains module.exports and define(.
    if (source.includes('define.amd')) {
        return 'UMD';
    }
    const start = source.trimStart();
    if (start.startsWith('define(') || start.startsWith('require([')) {
        return 'AMD';
    }
    if (
        source.includes('module.exports') ||
        source.includes('exports.') ||
        source.includes('require(')
    ) {
        return 'CommonJS';
    }
    if (source.includes('import ') || source.includes('export ')) {
        return 'ES module';
    }
    return 'unknown';
}
