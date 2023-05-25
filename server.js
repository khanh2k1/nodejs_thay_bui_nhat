const { json } = require("express");
const express = require("express");

const host = "localhost";
const port = 8000;
const app = express();
app.use(express.json());

let todos = [
  {
    id: 1,
    work: "Wake up",
  },
  {
    id: 2,
    work: " take a breakfast",
  },
  {
    id: 3,
    work: "Hustle",
  },
  {
    id: 4,
    work: "Dream",
  },
];

// method: get
app.get("/v1/todos", (req, res) => {
  return res.json(todos);
});

// :id is always a String
app.get("/v1/todos/:id", (req, res) => {
  const id = req.params;
  // req.params is a object
  // if id is a null, it return falsy, else return truthy because it a String different '' or ""
  if (id) {
    console.log("id has truthy value");
    const todo = todos.find((todo) => {
      if (todo.id == id.id) {
        return todo;
      }
    });
    // set condition if todo == undefined
    // undefined is always falsy value
    // if todo not undefined => it is object => it is truthy
    if (todo) {
      console.log("todo has truthy value");
    }
    // if todo is undefined => it is undefined => it is falsy
    else {
      console.log("todo has falsy value");
    }
    return res.json({
      message: "successfully",
      todo,
    });
  } else {
    console.log("id has falsy value");
    res.status(400).json({
      message: "Invalid request",
    });
  }
});

app.post("/v1/todo", (req, res) => {
  const { content } = req.body;
  // req.body is a object
  // content is a String, if content == null => it is falsy
  if (content) {
    // explain: if content has truthy value
    const id = Math.random();
    const todo = {
      id,
      content,
    };
    todos.push(todo);
    res.json("Success !");
  } else res.status(400).json({ message: "Invalid content" });
});

app.delete("/v1/todo/:id", (req, res) => {
  const id = req.params.id;
  // req.params is a object
  // if id is a null, it return falsy, else return truthy because it a String different '' or ""
  if (id) {
    console.log("id has truthy value");
    const todo = todos.find((todo) => {
      if (todo.id == id) {
        todos.pop(todo);
        res.json("deleted successfully !");
      }
    });
  } else {
    console.log("id has falsy value");
    res.status(400).json({
      message: "Invalid request",
    });
  }
});

// patch : can update one or many field of object
// put : update object
app.put("/v1/todo/:id", (req, res) => {
  const { id } = req.params;
  // req.body is a object
  // content is a String, if content == null => it is falsy

  const { work } = req.body.work;

  if (!work) {
    return res.status(400).json({
      success: false,
      message: "invalid",
    });
  }

  if (!id)
    return res.status(400).json({
      success: false,
      message: "invalid",
    });

  // explain: if content has truthy value

  const idx = todos.findIndex((value) => value.id == id);

  if (idx === -1) {
    return res.status(404).json({
      success: false,
      message: "Todo is not found",
    });
  }

  todos[idx].work = work;

  res.json("Success !");
});

// api sign in, sign up
// app.post();
app.listen(port, () => {
  console.log(`Listening on ${host}:${port}`);
});

const path = require("path");
const fs = require("fs");
const csv = require("csv-parser");
const filePath = path.join("data", "data.txt");

app.post("/", (req, res) => {
  const { content } = req.body;

  console.log(content);

  fs.appendFileSync(filePath, `${content}\n`, "utf8", (error) => {
    if (error) {
      console.error("Lỗi khi ghi file:", error);
    } else {
      console.log("File đã được ghi thành công.");
    }
  });

  res.json({
    success: true,
    message: "OK",
  });
});

app.get("/users", (req, res) => {
  const results = [];
  const filePath = path.join("data", "users.csv");

  fs.createReadStream(filePath, "utf8", (error) => {
    if (error) {
      console.error("Lỗi khi doc file:", error);
    } else {
      console.log("File đã được doc thành công.");
    }
  })
    .pipe(csv(["username", "firstname", "lastname", "password"]))
    .on("data", (data) => {
      const { password, ...user } = data;
      results.push(user);
    })
    .on("end", () => {
      console.log("Dữ liệu đã được đọc từ file CSV:");
      console.log(results);
      res.json({
        success: true,
        message: "OK 1",
        results,
      });
    });
});

const bcrypt = require("bcrypt");

function hashedPassword(pw) {
  // Số lần lặp để tạo salt
  const saltRounds = 10;

  bcrypt.hash(pw, saltRounds, (err, hashedPassword) => {
    if (err) {
      console.error(err);
      return;
    }

    // hashedPassword là password đã được hash
    console.log(hashedPassword);
    return hashPassword

  });
}

function hashPassword() {
  const filePath = path.join("data", "new_users.csv");
  console.log(filePath);
  let results = [];
  result = fs
    .readFileSync(filePath, "utf8")
    .split("\n")
    .slice(1) // Bỏ qua dòng tiêu đề
    .forEach((row) => {
      const [username, firstname, lastname, password] = row.split(",");
      results.push({ username, firstname, lastname, hashedPassword(password) });
    });

  console.log(results);
}

hashPassword();
