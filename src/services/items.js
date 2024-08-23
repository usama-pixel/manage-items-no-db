const { data } = require('../db/data')

function getItems() {
    console.log({data})
    return data
}
function getItem(id) {
    return data.find(item => item.id === id)
}

function createItem(item) {
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
    if(index !== -1) {
        data[index] = { ...data[index], ...item }
    }
    return item
}
module.exports = { getItems, createItem, getItem, deleteItem, updateItem }