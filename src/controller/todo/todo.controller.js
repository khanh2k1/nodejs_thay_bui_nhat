const Todo = require("../../models/Todo");
const jwt = require('jsonwebtoken')
const env = require('../../config/env')
const todoController = {
  create: async (req, res) => {
    const { content } = await req.body;
    const headerToken = req.headers.authorization

    if(!headerToken || !headerToken.startWiths('Bearer')) {
      return res.status(401).json({
        success:false,
        message:'Invalid token'
      })
    }

    const token = headerToken.split(' ')[1]

    const user = jwt.verify(token, env.SECRECT_KEY)
    console.log(token)
    console.log(user)
    if(!token) {

    }

    // if(isSaved) {
    //   return res.json({
    //     success:true,
    //     message:'create a new todo succesfully'
    //   })
    // }
    // res.status(422).json({
    //   success:false,
    //   message:'error create a new todo'
    // })
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
};

module.exports = todoController;