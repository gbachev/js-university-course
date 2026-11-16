const isNumberOrNull = (value) => value === null || typeof value === 'number';

export const isBook = (value) =>
    typeof value === 'object' &&
    value !== null &&
    typeof value.key === 'string' &&
    typeof value.title === 'string' &&
    typeof value.author === 'string' &&
    isNumberOrNull(value.year) &&
    isNumberOrNull(value.coverId) &&
    typeof value.read === 'boolean';
