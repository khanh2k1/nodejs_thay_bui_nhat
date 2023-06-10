// req.body
// req.params
// req.query

const joi = require('joi')

const loginSchema = joi.object().keys
(
    {
        email: joi.string().email(),
        password: joi.string().required().min(6).max(20)
    }
)

module.exports = loginSchema