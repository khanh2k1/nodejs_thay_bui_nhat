const express = require('express')
const app = express()
const morgan = require("morgan");
const bodyParser = require("body-parser");
const connectMysql = require('./src/database/mysql/connect')
const connectMongo = require('./src/database/mongo/connect')
const env = require('./src/config/env')
const authRoutes = require('./src/routes/auth.routes')
const todoRoutes = require('./src/routes/todo.routes')
const errorMiddleware = require('./src/middlewares/errorMiddleware')
require('dotenv').config()

//middlewares
app.use(morgan("dev"));

// Sử dụng body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// routes
app.use('/', authRoutes)
app.use('/todo', todoRoutes)


app.use(errorMiddleware)

const port = env.PORT
const server = app.listen(port, () => {
    console.log('listening port', port)
})

// connect database mysql
// try{
//     connect.authenticate().then(()=>{
//         console.log('connected successfully')
//     })
//     }catch(err){
//         console.log('connected failure', err)
//     }
// start serer

// connect database mongoDB
connectMongo
server