const Todo = require("../models/Todo");
const jwt = require('jsonwebtoken')
const env = require('../config/env')
const todoController = {
  create: async (req, res) => {
    const { content } = await req.body;
    const newTodo = new Todo({content})
    await newTodo.save().then(()=>{
      console.log('create a new todo successfully')
      return res.json({
        success:true,
        message:"create successfully"
      })
    })
  },


  getTodos: async (req, res) => {
    const todos = await Todo.find();
    return res.json({
      success: true,
      todos,
    });
  },

  // findById : if success, it will console.log version before it update success
  update: async (req, res) => {
    const { id, content } = req.body;
    const isUpdated = await Todo.findByIdAndUpdate(
      id,
      { content: content },
      { new: true }
    );

    console.log(isUpdated);
  },

  delete: async(req, res) => {
    const { id } = req.params
    await Todo.findByIdAndDelete(id)
    res.json({
      success:false,
      message:"deleletd successfully"
    })
  }

};

module.exports = todoController;