
// property = body == req.body

const validator = (schema, property) => {
  return (req, res, next) => {
  
    const { error } = schema.validate(req[property]);
    if (!error) {
      next();
    } else {
      // has error
      //console.log(error)
      const { message, path } = error["details"][0]
      
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
