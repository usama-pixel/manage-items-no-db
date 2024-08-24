class RequestValidationError extends Error {
    statusCode = 400
    constructor(errors) {
        super('Invalid request parameters')
        this.errors = errors
        // Ensure the name of this error is the same as the class name
        this.name = this.constructor.name;
        Error.captureStackTrace(this, this.constructor);
    }
    serializeErrors() {
        return this.errors.filter(err => err.type === 'field').map(err => {
            return {message: err.msg, field: err.path}
        })
    }
}

module.exports = { RequestValidationError }