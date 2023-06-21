
require('dotenv').config()

const env = {
    PORT: process.env.PORT || 3000,
    SECRECT_KEY: process.env.SECRECT_KEY || 123456,
    MONGO_URI: process.env.MONGO_URI || 'mongodb+srv://sa:sa@cluster0.gkmmhep.mongodb.net/nodejs-course',
    EXPIRES_IN: process.env.EXPIRES_IN || '1d'
}

module.exports = env