
// property = body == req.body

const validator = (schema, property) => {
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
  }
}
 

module.exports = validator;
