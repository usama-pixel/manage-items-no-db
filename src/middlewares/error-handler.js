const { CustomError } = require("../utils/err")

const errorHandler = (err, req, res, next) => {
    console.log('Brooo')
    if (err instanceof CustomError) {
        return res.status(err.statusCode).send({ errors: err.serializeErrors() });
    }
    console.log(err)
    res.status(400).send({
        errors: [{message: 'Something went wrong'}]
    })
}

module.exports = { errorHandler }