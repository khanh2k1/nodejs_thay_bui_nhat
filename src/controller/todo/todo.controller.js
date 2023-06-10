const Todo = require("../../models/Todo");

const todoController = {
  create: async (req, res) => {
    const content = await req.body;
    console.log(content);
    const newTodo = new Todo(content);
    const isSaved = await newTodo.save()

    console.log(isSaved)
    if(isSaved) {
      return res.json({
        success:true,
        message:'create a new todo succesfully'
      })
    
    }

    res.status(422).json({
      success:false,
      message:'error create a new todo'
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
};

module.exports = todoController;