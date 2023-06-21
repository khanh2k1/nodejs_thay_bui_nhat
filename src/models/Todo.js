const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
   content: String,
   isCompleted: {
      type: Boolean,
      default: false
   },
   
   userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "user"
   }

})


// collection name: todos
module.exports = mongoose.model('Todo', todoSchema)


