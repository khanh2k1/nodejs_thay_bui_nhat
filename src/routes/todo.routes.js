const express = require('express')
const todoController = require('../controller/todo.controller')
const todoSchema = require('../validations/todoSchema')
const validator = require('../middlewares/validator')
const router = express.Router()

router.post('/', validator(todoSchema.create), todoController.create)
router.get('/todos', todoController.getTodos)
router.put('/', todoController.update)
router.delete('/:id', validator(todoSchema.isObjectId, "params"), todoController.delete)

module.exports = router
