const joi = require('./joi')

const content = joi.string().required().min(3)
const todoSchema = {
    create: joi.object({
        content: content,
        userId: joi.objectId()
    }),

    update: joi.object({
        content: content
    }),

    isObjectId: joi.object({
        id: joi.objectId()
    })
}

module.exports = todoSchema