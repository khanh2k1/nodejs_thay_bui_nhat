const express = require('express')
const todoController = require('../controller/todo.controller')
const todoSchema = require('../validations/todo.schema')
const validator = require('../middlewares/validator')
const jwtAuth = require('../middlewares/jwtAuth')
const router = express.Router()

router.post('/',
    validator(todoSchema.create),
    jwtAuth.isAuth,
    todoController.create)
    
router.get('/', jwtAuth.isAuth, todoController.getTodos)

router.get('/email/', jwtAuth.isAuth, todoController.getTodosByEmail)

router.get('/:id', validator(todoSchema.isObjectId, 'params'), todoController.getTodoById)

router.patch('/:id',
    validator(todoSchema.isObjectId, "params"),
    validator(todoSchema.update, "body"),
    todoController.update)

router.delete('/:id', validator(todoSchema.isObjectId, "params"), jwtAuth.isAuth, todoController.delete)

module.exports = router
