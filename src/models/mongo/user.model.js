

const mongoose = require('mongoose')

const user = new mongoose.Schema
(
    {
        email: String,
        username: {
            type: String,
            required: true,
            unique: true,
        },
        refreshToken: String,
        password: String
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('user', user)