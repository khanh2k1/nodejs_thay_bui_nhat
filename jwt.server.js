const express = require('express')
const app = express()
const morgan = require("morgan");
const bodyParser = require("body-parser");
const connect = require('./src/database/connect')
const env = require('./src/config/env')
const authRoutes = require('./src/routes/auth.routes')
require('dotenv').config()
//middlewares
app.use(morgan("dev"));

// Sử dụng body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// routes
app.use('/', authRoutes)



const port = env.PORT
const server = app.listen(port, ()=>{
    console.log('listening port', port)
})

// connect database
connect() 
// start serer
server