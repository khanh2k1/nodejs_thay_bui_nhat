

const mongoose = require('mongoose')

const user = new mongoose.Schema({
    email:String,
    username: String,
    password: String
})

module.exports = mongoose.model('user', user)