const express = require("express");
const app = express();
const morgan = require("morgan");
const bcrypt = require("bcrypt");
const crypto = require("crypto");
const fs = require("fs");
const path = require("path");


app.use(express.json());
app.use(morgan("dev"));

// const PORT = 4000;
// const HOST = "localhost";

// app.listen(PORT, () => {
//   console.log(`Listening on ${HOST}:${PORT}`);
// });

// function readFileUsers() {
//   const filePath = path.join("data", "users.csv");
//   const users = fs.readFile(filePath, "utf8", (err, data) => {
//     if (err) throw err;
//     console.log(typeof data); // String
//   });
// }

// // readFileUsers()

// // split :  tách ra   *** split only use for String , return a array
// // => tách 1 chuỗi thàng 1 mảng chứa các kí tự, biến truyền vào là 1 dilimiter(dấu phân cách)

// // slice : Phương thức splice() được sử dụng để thay đổi hoặc cắt một phần tử trong một mảng.
// // => slice return a new array from old array
// function readFileSyncUsers() {
//   const filePath = path.join("data", "users.csv");
//   const users = fs.readFileSync(filePath, "utf8", "r");
//   console.log(users);
//   console.log(users.split("\n").slice(1));
// }

// // function readFileSyncUsers()

// // check location of this file
// // console.log(`==> ${__dirname}`)

// function writeFileUsers() {
//   const filePath = path.join("data", "data.txt");
//   const data = "dsadjaskdas";
//   const users = fs.writeFile(filePath, data, (err) => {
//     if (err) throw err;
//     console.log("write file successfully !");
//   });
// }

// // writeFileUsers()

// app.post("/todo", (req, res) => {
//   const { content } = req.body;
//   if (!content) {
//     return res.status(400).json({
//       success: false,
//       message: "content is invalid",
//     });
//   }

//   const filePath = path.join("data", "data.txt");
//   try {
//     fs.appendFileSync(filePath, `${content}\n`);
//     console.log("append file is successfully !");
//   } catch (err) {
//     console.log(err);
//   }
//   res.json({
//     success: true,
//     message: "post todo is successfully",
//   });
// });

// app.get("/hash-password-users", (req, res) => {});

// function convertStringToArray(filePath) {
//   let data = fs.readFileSync(filePath, "utf8");
//   data = data.split("\n").slice(1); // convert String => array => get array[1=>end]
//   data = data.map((item) => {
//     return item.split(","); //
//   });
//   return data;
// }

// function hashedPassword(array) {
//   array = array.map((item) => {
//     item[item.length - 1] = crypto
//       .createHash("sha256")
//       .update(item[item.length - 1])
//       .digest("hex");
//     return item;
//   });
//   return array;
// }

// function appendFile(filePath, array) {
//   filePath = path.join("data", "users_hashedPassword.csv");
//   fs.writeFileSync(filePath, "");
//   array.forEach((item) => {
//     fs.appendFileSync(filePath, item + "\n");
//   });
// }

// // hashedPassword()
// const filePath1 = path.join("data", "fake_users.csv");
// const filePath2 = path.join("data", "users_hashedPassword.csv");

// function comparePasswordOf2Array() {
//   let array1 = convertStringToArray(filePath1);
//   let array2 = convertStringToArray(filePath2);

//   // array1 = hashedPassword(array1)

//   for (let i = 0; i < array1.length; i++) {
//     if (array1[i][0] == array2[i][0] && array1[i][3] != array2[i][3])
//       console.log(array1[i][0]);
//   }
// }

// comparePasswordOf2Array()

// create middleware

// const loginMiddleWare = async (req, res, next) => {
//   const { email, password } = req.body;

//   if (!email || !password) {
//     return res.status(400).json({
//       success: false,
//       message: "email or password is invalid",
//     });
//   }

//   const isValidEmail = /.+@gmail.com$/g.test(email);
//   const isValidPassword = typeof password === "string" && password.length > 6;
//   console.log(isValidEmail, isValidPassword);

//   if (isValidEmail && isValidPassword) next();
//   else
//     res.status(422).json({
//       success: false,
//       message: "invalid body",
//     });
// };

// const validator = require("./middlewares/validator");

// app.post("/login", validator.loginValidator(loginSchema), (req, res) => {

//   console.log(req["body"] === req.body);

//   res.send("OK");
// });


const filePathImage = path.join('src','images','linh.jpg')

const readFile = fs.readFileSync(filePathImage)

console.log(readFile)