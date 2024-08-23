class NotFoundError extends Error {
    constructor() {
        super('Route not found');
        this.statusCode = 404;
    }

    serializeErrors() {
        return [{ message: 'Not Found' }];
    }
}

module.exports = { NotFoundError };