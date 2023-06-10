const  joi = require('joi')

const todoSchema = new joi.object({
    content:joi.string().required().min(3)
})

module.exports = todoSchema