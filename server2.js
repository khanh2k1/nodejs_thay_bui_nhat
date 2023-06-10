const connect = require("./src/database/connect");
const morgan = require("morgan");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
// models
const Todo = require("./src/models/Todo");


// import routes
const todoRoutes = require('./src/routes/todo.routes')


//middlewares
app.use(morgan("dev"));

// Sử dụng body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// connect database
connect()

// routes
app.use('/', todoRoutes)

const port = 3000
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
