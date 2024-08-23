const { validationResult } = require('express-validator')
const itemsService = require('../services/items')
function getItems(req, res) {
    const data = itemsService.getItems()
    res.json(data)
}

function getItem(req, res) {
    const result = validationResult(req)
    if(!result.isEmpty()) {
        return res.status(400).json({ errors: result.array() })
    }
    console.log('id', req.params.id)
    const item = itemsService.getItem(+req.params.id)
    console.log({item})
    res.json(item)
}

function createItem(req, res) {
    const result = validationResult(req)
    if(!result.isEmpty()) {
        return res.status(400).json({ errors: result.array() })
    }
    const item = itemsService.createItem(req.body)
    res.status(201).json(item)
}

function deleteItem(req, res) {
    const result = validationResult(req)
    if(!result.isEmpty()) {
        return res.status(400).json({ errors: result.array() })
    }
    const item = itemsService.deleteItem(+req.params.id)
    res.json(item)
}

function updateItem(req, res) {
    const result = validationResult(req)
    if(!result.isEmpty()) {
        return res.status(400).json({ errors: result.array() })
    }
    const item = itemsService.updateItem(req.body)
    res.json(item)
}

module.exports = { getItems, createItem, getItem, deleteItem, updateItem }