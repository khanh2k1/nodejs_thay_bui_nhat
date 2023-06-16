

const mongoose = require('mongoose')

const user = new mongoose.Schema({
    email:String,
    username: {
        type:String,
        required: true,
        unique: true
    },
    password: String
})

module.exports = mongoose.model('user', user)