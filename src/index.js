const express = require('express');
const { errorHandler } = require('./middlewares/error-handler');
const { NotFoundError } = require('./errors/not-found-error');
const itemsRouter = require('./routes/items')

const app = express();

app.use(express.json())
app.use(itemsRouter)

app.all('*', async (req, res, next) => {
    throw new NotFoundError()
})

app.use((err, req, res, next) => {
    console.log('broo')
    if (err instanceof NotFoundError) {
        return res.status(err.statusCode).send({ errors: err.serializeErrors() });
    }
    console.log({err})
    res.status(400).send({
        errors: [{message: 'Something went wrong'}]
    })
})
// app.use(errorHandler)

app.listen(3000, () => console.log('Server started on port 3000'))