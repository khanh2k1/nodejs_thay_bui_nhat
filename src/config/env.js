const env = {
    PORT: process.env.PORT || 3000,
    SECRECT_KEY: process.env.SECRECT_KEY || 123456,
    MONGO_URI: process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/nodejs-course',
    EXPIRED_IN: process.env.EXPIRED_IN || '1d'
}

module.exports = env