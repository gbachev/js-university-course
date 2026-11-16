export class AppError extends Error {
    statusCode = 500;

    constructor(message, options) {
        super(message, options);
        this.name = new.target.name;
    }
}

export class ImportError extends AppError {
    statusCode = 422;
}

export function importOrders(text) {
    try {
        return JSON.parse(text);
    } catch (error) {
        throw new ImportError('Could not import the orders', { cause: error });
    }
}
