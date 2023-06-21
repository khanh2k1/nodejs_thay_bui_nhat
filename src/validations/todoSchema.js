const joi = require('./joi')

const todoSchema = {
    create: joi.object({
        content: joi.string().required().min(3)
    }),

    isObjectId: joi.object({
        id: joi.objectId()
    })
}

module.exports = todoSchema