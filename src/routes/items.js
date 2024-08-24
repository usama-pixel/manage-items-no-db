const express = require('express');
const { body, query, param } = require('express-validator')
const { getItems, createItem, getItem, deleteItem, updateItem } = require('../controllers/items');
const router = express.Router();

router.get(
    '/items',
    getItems
)
router.get(
    '/items/:id',
    [
        param('id').isInt({ gt: 0 }).withMessage('Id must be greater than 0'),
    ],
    getItem
)
router.post(
    '/items',
    [
        body('name').not().isEmpty().withMessage('Name must not be empty'),
        body('description').not().isEmpty().withMessage('Description must not be empty'),
        body('price').isFloat({ gt: 0 }).withMessage('Price must be greater than 0')
    ],
    createItem
)
router.delete(
    '/items/:id',
    [
        param('id').isInt({ gt: 0 }).withMessage('Id must be greater than 0')
    ],
    deleteItem
)
router.put(
    '/items',
    [
        body('id').isInt({ gt: 0 }).withMessage('Id must be greater than 0'),
        body('name').optional().not().isEmpty().withMessage('Name must not be empty'),
        body('description').optional().not().isEmpty().withMessage('Description must not be empty'),
        body('price').optional().isFloat({ gt: 0 }).withMessage('Price must be greater than 0')
    ],
    updateItem
)
module.exports = router