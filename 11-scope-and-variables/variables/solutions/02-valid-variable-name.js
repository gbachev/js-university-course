const reservedWords = ['var', 'let', 'const', 'class', 'function', 'return', 'if', 'for'];
const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
const digits = '0123456789';

export function isValidVariableName(name) {
    if (name === '' || reservedWords.includes(name) || digits.includes(name[0])) {
        return false;
    }

    for (const char of name) {
        const allowed = letters.includes(char) || digits.includes(char)
            || char === '_' || char === '$';
        if (!allowed) {
            return false;
        }
    }

    return true;
}
