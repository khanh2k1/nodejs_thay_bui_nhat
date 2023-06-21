const express = require('express')
const todoController = require('../controller/todo.controller')
const todoSchema = require('../validations/todoSchema')
const validator = require('../middlewares/validator')
const jwtAuth = require('../middlewares/jwtAuth')
const router = express.Router()

router.post('/', jwtAuth.isAuth, validator(todoSchema.create), todoController.create)

router.get('/', todoController.getTodos)

router.patch('/:id',
    validator(todoSchema.isObjectId, "params"),
    validator(todoSchema.update, "body"),
    todoController.update)

router.delete('/:id', validator(todoSchema.isObjectId, "params"), todoController.delete)

module.exports = router
