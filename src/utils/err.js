class CustomError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
    }

    serializeErrors() {
        return [{ message: this.message }]
    }
}

module.exports = { CustomError }