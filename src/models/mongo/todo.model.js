const mongoose = require('mongoose')
const { Schema } = mongoose
const todoSchema = new Schema({
   content: String,

   isCompleted: {
      type: Boolean,
      default: false
   },

   userId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "user"
   },

   email: String,

},
   {
      timestamps: true,
      toJSON: { virtuals: true },
      toObject: { virtuals: true }
   });

// virtual field
todoSchema.virtual('userEmail', {
   localField: 'email',
   foreignField: 'email',
   ref: 'user'
})

// collection name: todos
module.exports = mongoose.model('Todo', todoSchema)


