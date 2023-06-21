const Todo = require("../models/Todo");
const jwt = require('jsonwebtoken')
const env = require('../config/env')
const todoController = {

  create: async (req, res) => {
    const { content } = await req.body;
    const userId = req.user.id
    console.log('user=>',req.user)
    const newTodo = new Todo({content, userId})
    await newTodo.save().then(()=>{
      console.log('create a new todo successfully')
      return res.json({
        success:true,
        message:"create successfully"
      })
    })
  },


  getTodos: async (req, res) => {
    const todos = await Todo.find()
    if(!todos) {
      return res.status(500).json({
        success:false,
        message:'err get todos' 
      })
    }

    res.json({
      success: true,
      todos
      
    });
  },

  // findById : if success, it will console.log version before it update success
  update: async (req, res) => {
    const { content } = req.body;
    const { id } = req.params
    await Todo.findByIdAndUpdate(
      id,
      { content: content },
      { new: true }
    ).then(()=>{
      console.log("updated successfully")
      res.json({
        success:true,
        message:"updated successfully"
      })
    }).catch(err=>{
      console.log(err)
      res.json({
        success:true,
        message:"updated failure"
      })
    })
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