const express = require('express')
const todoController = require('../controller/todo/todo.controller')
const todoSchema = require('../validations/todoSchema')
const validator = require('../middlewares/validator')
const router = express.Router()

router.post('/todo', validator.todoValidator(todoSchema), todoController.create)
router.get('/todos', todoController.getTodos)
router.put('/todo', todoController.update)

module.exports = router
