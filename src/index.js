const express = require('express');
const { errorHandler } = require('./middlewares/error-handler');
const { NotFoundError } = require('./errors/not-found-error');
const itemsRouter = require('./routes/items')

const app = express();

app.use(express.json())
app.use(itemsRouter)

app.all('*', (req, res, next) => { // app.all is a shortcut for app.get, app.post, app.put, app.delete
    // it will watch for any kind of method and route that doesn't exist
    throw new NotFoundError()
})

app.use(errorHandler)

app.listen(3000, () => console.log('Server started on port 3000'))