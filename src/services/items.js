const { data } = require('../db/data')
const { ConflictError } = require('../errors/conflict-error')
const { NotFoundError } = require('../errors/not-found-error')

function getItems() {
    return data
}
function getItem(id) {
    const item = data.find(item => item.id === id)
    if (!item) {
        throw new NotFoundError('Item not found')
    }
    return item
}

function createItem(item) {
    const itemExists = data.find(i => i.id === item.id)
    if (itemExists) throw new ConflictError('Item with provided id already exists')
    data.push(item)
    return item
}

function deleteItem(id) {
    const index = data.findIndex(item => item.id === id)
    if(index !== -1) {
        data.splice(index, 1)
    }
}

function updateItem(item) {
    const index = data.findIndex(i => i.id === item.id)
    if (index === -1) {
        throw new NotFoundError('Item not found')
    }
    data[index] = { ...data[index], ...item }
    return data[index]
}
module.exports = { getItems, createItem, getItem, deleteItem, updateItem }