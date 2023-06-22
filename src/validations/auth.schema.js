// req.body
// req.params
// req.query

const joi = require('joi')

const password = joi.string().required().min(6)
const username = joi.string().min(3)
const email = joi.string().email()
const authSchema = {
    register: joi.object({
        password: password,
        email: email,
        username: username
    }),

    login: joi.object({
        email: email,
        password: password
    }),

    changePassword: joi.object({
        oldPass: password,
        newPass: password
    })
}

module.exports = authSchema
