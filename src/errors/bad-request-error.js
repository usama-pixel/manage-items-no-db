class BadRequestError extends Error {
    constructor(message = 'Bad request') {
        super(message);
        this.statusCode = 400;
        
        // Ensure the name of this error is the same as the class name
        this.name = this.constructor.name;
        Error.captureStackTrace(this, this.constructor);
    }

    serializeErrors() {
        return [{ msg: this.message }];
    }
}

module.exports = { BadRequestError };
