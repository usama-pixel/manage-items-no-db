const { validationResult } = require('express-validator')
const itemsService = require('../services/items')
const { BadRequestError } = require('../errors/bad-request-error')
const { RequestValidationError } = require('../errors/request-validation-error')
function getItems(req, res) {
    const data = itemsService.getItems()
    res.json(data)
}

function getItem(req, res) {
    const result = validationResult(req)
    if(!result.isEmpty()) {
        throw new RequestValidationError(result.array())
    }
    const item = itemsService.getItem(+req.params.id)
    res.json(item)
}

function createItem(req, res) {
    const result = validationResult(req)
    if(!result.isEmpty()) {
        throw new RequestValidationError(result.array())
    }
    const item = itemsService.createItem(req.body)
    res.status(201).json(item)
}

function deleteItem(req, res) {
    const result = validationResult(req)
    if(!result.isEmpty()) {
        throw new RequestValidationError(result.array())
    }
    const item = itemsService.deleteItem(+req.params.id)
    res.json(item)
}

function updateItem(req, res) {
    const result = validationResult(req)
    if(!result.isEmpty()) {
        throw new RequestValidationError(result.array())
    }
    const item = itemsService.updateItem(req.body)
    res.json(item)
}

module.exports = { getItems, createItem, getItem, deleteItem, updateItem }