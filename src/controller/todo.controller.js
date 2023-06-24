const Todo = require("../models/todo.model");
const jwt = require('jsonwebtoken')
const env = require('../config/env')
const todoController = {

  create: async (req, res) => {
    const { content } = await req.body;
    const { id: userId, email } = req.user
    console.log('user=>',req.user)
    const newTodo = new Todo({content, userId, email})
    await newTodo.save().then(()=>{
      console.log('create a new todo successfully')
      return res.json({
        success:true,
        message:"create successfully"
      })
    })
  },


  getTodos: async (req, res) => {
    const { id: userId } = req.user

    const todos = await Todo.find({userId}).populate('userId','-password')
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

  getTodosByEmail: async (req, res) => {
    const { email } = req.user
    console.log(req.user)
    const todos = await Todo.find().populate('userEmail','-password')
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

  getTodoById: async (req, res) => {
    const { id } = req.params
    const todo = await Todo.findById(id)
    if(!todo) {
      return res.status(404).json({
        success:false,
        message:"not found"
      })
    }
    res.json({
      success:true,
      message:todo
    })

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

  delete: async (req, res) => {
    const { id } = req.params
    await Todo.findByIdAndDelete(id)
    res.json({
      success:false,
      message:"deleletd successfully"
    }) 
  }
};

module.exports = todoController;


