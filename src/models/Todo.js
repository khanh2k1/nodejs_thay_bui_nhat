const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
 content: String,
 isCompleted: {
    type: Boolean,
    default: false
 }
    
})


// collection name: todos
module.exports = mongoose.model('Todo', todoSchema)


