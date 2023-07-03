const { Sequelize } = require('sequelize')

const sequelize = new Sequelize(
    "nodejs-course", "root", "25032001" , {
        host: 'localhost',
        dialect: 'mysql',

    }
)
module.exports = sequelize