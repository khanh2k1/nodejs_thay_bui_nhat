const mongoose = require('mongoose')
const joi = require('joi')

const objectId = (value, helpers) => {
    if(!mongoose.Types.ObjectId.isValid(value)) {
        return helpers.error('any.invalid')
    }
    return value
}

joi.objectId = () => joi.custom(objectId, 'validate objectId')
module.exports = joi