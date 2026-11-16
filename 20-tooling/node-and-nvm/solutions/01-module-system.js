export function moduleSystem(fileName, packageType) {
    if (fileName.endsWith('.mjs')) {
        return 'module';
    }
    if (fileName.endsWith('.cjs')) {
        return 'commonjs';
    }
    return packageType === 'module' ? 'module' : 'commonjs';
}
