const { json } = require("express");
const express = require("express");

const host = "localhost";
const port = 8000;
const app = express();
app.use(express.json());

app.listen(port, () => {
  console.log(`Listening on ${host}:${port}`);
});



//   {
//     id: 1,
//     work: "Wake up",
//   },
//   {
//     id: 2,
//     work: " take a breakfast",
//   },
//   {
//     id: 3,
//     work: "Hustle",
//   },
//   {
//     id: 4,
//     work: "Dream",
//   },
// ];

// method: get
// app.get("/v1/todos", (req, res) => {
//   return res.json(todos);
// });

// // :id is always a String

// app.get("/v1/todos/:id", (req, res) => {
//   const id = req.params;
//   // req.params is a object
//   // if id is a null, it return falsy, else return truthy because it a String different '' or ""
//   if (id) {
//     console.log("id has truthy value");
//     const todo = todos.find((todo) => {
//       if (todo.id == id.id) {
//         return todo;
//       }
//     });
//     // set condition if todo == undefined
//     // undefined is always falsy value
//     // if todo not undefined => it is object => it is truthy
//     if (todo) {
//       console.log("todo has truthy value");
//     }
//     // if todo is undefined => it is undefined => it is falsy
//     else {
//       console.log("todo has falsy value");
//     }
//     return res.json({
//       message: "successfully",
//       todo,
//     });
//   } else {
//     console.log("id has falsy value");
//     res.status(400).json({
//       message: "Invalid request",
//     });
//   }
// });

// app.post("/v1/todo", (req, res) => {
//   const { content } = req.body;
//   // req.body is a object
//   // content is a String, if content == null => it is falsy
//   if (content) {
//     // explain: if content has truthy value
//     const id = Math.random();
//     const todo = {
//       id,
//       content,
//     };
//     todos.push(todo);
//     res.json("Success !");
//   } else res.status(400).json({ message: "Invalid content" });
// });

// app.delete("/v1/todo/:id", (req, res) => {
//   const id = req.params.id;
//   // req.params is a object
//   // if id is a null, it return falsy, else return truthy because it a String different '' or ""
//   if (id) {
//     console.log("id has truthy value");
//     const todo = todos.find((todo) => {
//       if (todo.id == id) {
//         todos.pop(todo);
//         res.json("deleted successfully !");
//       }
//     });
//   } else {
//     console.log("id has falsy value");
//     res.status(400).json({
//       message: "Invalid request",
//     });
//   }
// });

// // patch : can update one or many field of object
// // put : update object
// app.put("/v1/todo/:id", (req, res) => {
//   const { id } = req.params;
//   // req.body is a object
//   // content is a String, if content == null => it is falsy

//   const { work } = req.body.work;

//   if (!work) {
//     return res.status(400).json({
//       success: false,
//       message: "invalid",
//     });
//   }

//   if (!id)
//     return res.status(400).json({
//       success: false,
//       message: "invalid",
//     });

//   // explain: if content has truthy value

//   const idx = todos.findIndex((value) => value.id == id);

//   if (idx === -1) {
//     return res.status(404).json({
//       success: false,
//       message: "Todo is not found",
//     });
//   }

//   todos[idx].work = work;

//   res.json("Success !");
// });

// // api sign in, sign up
// // app.post();


// const path = require("path");
// const fs = require("fs");
// const csv = require("csv-parser");
// const filePath = path.join("data", "data.txt");

// app.post("/", (req, res) => {
//   const { content } = req.body;

//   console.log(content);

//   fs.appendFileSync(filePath, `${content}\n`, "utf8", (error) => {
//     if (error) {
//       console.error("Lỗi khi ghi file:", error);
//     } else {
//       console.log("File đã được ghi thành công.");
//     }
//   });

//   res.json({
//     success: true,
//     message: "OK",
//   });
// });

// const bcrypt = require("bcrypt");

// function generateHashedPassword(pw) {
//   // Số lần lặp để tạo salt
//   const saltRounds = 10;

//   bcrypt.hash(pw, saltRounds, (err, hashedPassword) => {
//     if (err) {
//       console.error(err);
//       return;
//     }
//     // hashedPassword là password đã được hash
//     console.log(hashedPassword);
//     return hashPassword;
//   });
// }

// const fileRoutes = require("./routes/file.routes");
const crypto = require('crypto')
const path = require('path')
const fs = require('fs')
app.get("/users", (req, res) => {
  console.log(`listening from endpoint : users`);

  const users_filePath = path.join("data", "users.csv");
  const users_csv_file = fs.readFileSync(users_filePath, "utf8");
 
  // fake_users_csv_file
  const fake_users_filePath = path.join("data", "fake_users.csv");
  const fake_users_csv_file = fs.readFileSync(fake_users_filePath, "utf8");

  if (!users_csv_file || !fake_users_csv_file) {
    
    return res.status(400).json({
      success: false,
      message:'NOT FOUND'
    });
  }

  const users = users_csv_file.split("\n");
  const fake_users = fake_users_csv_file.split("\n")


  let users2 = [];
  for (let i = 1; i < users.length; i++) {
    users2.push(users[i].split(","));
  }

  let fake_users2 = [];
  for (let i = 1; i < fake_users.length; i++) {
    fake_users2.push(fake_users[i].split(","));
  }

  // hash password file users
  for (let i = 0; i < users2.length; i++) {
    users2[i][3] = crypto.createHash("sha256").update(users2[i][3]).digest("hex");
  }

  // compare password file fake_users and users 
  let results = []
  
  for(let i = 0; i< users2.length; i++) {
    for(let j = 0; j < fake_users2.length;j++){
      if(users2[i][0]==fake_users2[j][0]) {
        console.log(users2[i])
        if(users2[i][3]!=fake_users2[j][3]) {
          results.push(users2[i])
        }
      }
    }
  }

  //console.log(results)

  res.status(200).json({
    success: true,
    results,
  });


});





