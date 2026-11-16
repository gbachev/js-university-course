// Task 1: Which module format?
// Lecture: AMD and UMD
//
// We are going through an old project and want to know the format of each file.
// moduleFormat(source) gets the code of a file as a string and returns 'UMD', 'AMD',
// 'CommonJS', 'ES module' or 'unknown'. The rules, checked in this order:
// the code contains define.amd: 'UMD'. The code, without the spaces and line breaks at
// the start, starts with define( or require([: 'AMD'. It contains module.exports, exports. or require(:
// 'CommonJS'. It contains import or export followed by a space: 'ES module'.
// The function is half written: a UMD file comes out as CommonJS, and AMD is missing.
//
// Examples:
//   moduleFormat("define(['prices'], function (prices) {})")    // 'AMD'
//   moduleFormat("module.exports = { addVat };")                // 'CommonJS'
//   moduleFormat("export const VAT_RATE = 0.2;")                // 'ES module'
//   moduleFormat("console.log('hi');")                          // 'unknown'
//
// Run the tests: npm test -- 12-modules/amd-umd

export function moduleFormat(source) {
    if (
        source.includes('module.exports') ||
        source.includes('exports.') ||
        source.includes('require(')
    ) {
        return 'CommonJS';
    }
    if (source.includes('define.amd')) {
        return 'UMD';
    }
    if (source.includes('import ') || source.includes('export ')) {
        return 'ES module';
    }
    return 'unknown';
}
