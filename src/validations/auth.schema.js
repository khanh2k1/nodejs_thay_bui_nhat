const joi = require('joi')

const password = joi.string().required().min(6)
const username = joi.string().min(3)
const authSchema = {
    register: joi.object({
        password: password,
        email: joi.string().email(),
        username: username
    }),

    login: joi.object({
        username: username,
        password: password
    }),

    changePassword: joi.object({
        password: password
    })
}

module.exports = authSchema
