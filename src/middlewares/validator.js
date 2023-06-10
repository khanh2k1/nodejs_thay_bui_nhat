
// property = body == req.body

const validator = {
  bodyValidator: (schema, property = "body") => {
    return (req, res, next) => {
      console.log(req["body"] === req.body); //true

      const { error } = schema.validate(req[property]);
      if (!error) {
        next();
      } else {
        // has error
        //console.log(error)
        const message = error["details"][0]["message"];
        const path = error["details"][0]['path'];
        console.log(JSON.stringify({ message, path }, null, 2));
        res.status(422).json({
          success: false,
          message: {
            message,
            path,
          },
        });
      }
    };
  },

  paramsValidator: (schema, property = "params") => {
    return (req, res, next) => {
      const { error } = schema.validate(req[property]);
      if (!error) {
        next();
      } else {
        // has error
        console.log(error)
        res.status(422).json({
          success: false,
          message: {
            error
          },
        });
      }
    };
  },

  // property = "body" => default is "body"
  todoValidator: (schema, property = "body") => {
    return (req, res, next) => {
      const { error } = schema.validate(req[property]);
      if (!error) {
        next();
        return; // next() thì cho thông chốt thôi nhưng nếu không dừng lại thì nó vẫn chạy tiếp xuống dưới
      }
      const message = error.details[0].message;
      const path = error.details[0].path;
      console.log(JSON.stringify({ message, path }, null, 2));
      res.status(422).json({
        success: false,
        message: {
          message,
          path,
        },  
      });
    };
  },
};

module.exports = validator;
