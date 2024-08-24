const { BadRequestError } = require("../errors/bad-request-error");
const { ConflictError } = require("../errors/conflict-error");
const { NotFoundError } = require("../errors/not-found-error");
const { RequestValidationError } = require("../errors/request-validation-error");

const errorHandler = (err, req, res, next) => {
    console.log(err instanceof RequestValidationError)
    console.log(err.stackTrace)
    if (
        err instanceof NotFoundError ||
        err instanceof BadRequestError ||
        err instanceof ConflictError ||
        err instanceof RequestValidationError
    ) {
        res.status(err.statusCode).json({ errors: err.serializeErrors() });
    } else {
        res.status(500).json({ errors: [{ msg: 'Something went wrong' }] });
    }
}

module.exports = { errorHandler }