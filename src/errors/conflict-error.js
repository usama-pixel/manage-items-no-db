class ConflictError extends Error {
    constructor(message = 'Conflict') {
        super(message);
        this.statusCode = 409;

        // Ensure the name of this error is the same as the class name
        this.name = this.constructor.name;

        // Capture the stack trace
        Error.captureStackTrace(this, this.constructor);
    }

    serializeErrors() {
        return [{ msg: this.message }];
    }
}

module.exports = { ConflictError };
