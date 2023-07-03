const Todo = require("../models/todo.model");
const asyncMiddleware = require('../middlewares/asyncMiddleware')
const { ErrorResponse } = require('../response/errorResponse')
const { ReturnSuccessResponse } = require('../response/successResponse')
const todoController = {

  create: asyncMiddleware(async (req, res, next) => {

    const { content } = await req.body;
    const { id: userId, email } = req.user
    console.log('user=>', req.user)
    const newTodo = new Todo({ content, userId, email })
    const isSuccess = await newTodo.save()

    if (!isSuccess) throw new ErrorResponse(500, 'Internal error')

    ReturnSuccessResponse(res, 201, newTodo, 'Create todo successfully')

  }),


  getTodos: asyncMiddleware(async (req, res, next) => {

    const { id: userId } = req.user
    const todos = await Todo.find({ userId }).populate('userId', '-password')
    ReturnSuccessResponse(res, 200, todos, 'Get todos successfully')

  }),

  getTodosByEmail: asyncMiddleware(async (req, res, next) => {
    try {
      const { email } = req.user
      console.log(req.user)
      const todos = await Todo.find().populate('userEmail', '-password')

      res.json({
        success: true,
        todos
      });
    } catch (error) {
      next(error)
    }
  }),

  getTodoById: asyncMiddleware(async (req, res, next) => {
    const { id } = req.params
    const todo = await Todo.findById(id)

    if (!todo) throw new ErrorResponse('404', 'Not found')

    res.json({
      success: true,
      message: todo
    })
  }),

  // findById : if success, it will console.log version before it update success
  update: asyncMiddleware(async (req, res, next) => {

    const { content } = req.body;
    const { id } = req.params
    const isUpdatedTodo = await Todo.findByIdAndUpdate(
      id,
      { content: content },
      { new: true }
    )

    if (!isUpdatedTodo) throw new ErrorResponse(500, 'Internal error')

    ReturnSuccessResponse(res, 200, isUpdatedTodo, 'Update todo successfully')
  }),

  delete: asyncMiddleware(async (req, res) => {

    const { id: _id } = req.params
    const { id: userId } = req.user

    const isDeleted = await Todo.findOneAndDelete({_id, userId})

    // if(!isDeleted) throw new ErrorResponse(500, 'Internal error')
    ReturnSuccessResponse(res, 200, isDeleted, 'Delete todo successfully')

  }),
};

module.exports = todoController;


