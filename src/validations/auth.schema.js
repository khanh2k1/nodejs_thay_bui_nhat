const joi = require('joi')

const password = joi.string().required().min(6)

const authSchema = {
    register: joi.object({
        password: password,
        email: joi.string().email()
    }),

    login: joi.object({
        email: joi.string().email(),
        password: password
    }),

    changePassword: joi.object({
        password: password
    })
}

module.exports = authSchema
