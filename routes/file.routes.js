const fileUtils = require("../utils/file");
const path = require('path')
const fileRoutes = {
  readFile: (req, res) => {
    const filePath = path.join("data", "users.csv");
    const users = fileUtils.read(filePath);

    if(!users) {
        return res.status(404).json({
            success:false,
            message:'users is null'
        })
    }
    return res.json({
        success:true,
        users
    })
  },
};

module.exports = fileRoutes