const userModel = require("../models/user.model");
const bcryptjs = require("bcryptjs");
const jwt = require('jsonwebtoken')
const env = require('../config/env')

const salt = bcryptjs.genSaltSync(10);


const authController = {
  register: async (req, res) => {
    // check username duplicated

    const {email, username, password} = req.body;

    let isExistedUser = await userModel.findOne({username});

    if (isExistedUser) {
      // conflict : 409
      return res.status(401).json({
        success: false,
        message: "Unauthorized"
      });
    }

    let hashedPassword = bcryptjs.hashSync(password, salt);
    
    // khong co "new" thi se khong co method save
    const newUser = new userModel({
        password: hashedPassword,
        email,
        username
    })
    console.log(newUser)

    await newUser.save().then((data)=>{
        res.status(201).json({
            success:true,
            message: "register successuly" ,
            email: newUser.email
        })
    }).catch(err=>{
        res.status(500).json({
            success:false,
            message:"error login", err
        })
    })
  },

  login: async (req, res) => {
    let {username, password} = req.body
    
    const isExistedUser = await userModel.findOne({username})

    if(!isExistedUser) {
        console.log('invalid user')
        return res.status(401).json({
            success:false,
            message:"Unauthorized"
        })
    }

    const isMatch = bcryptjs.compareSync(password, isExistedUser.password)


    console.log('isValidPassword=',isMatch)

    if(!isMatch) {
        console.log('wrong password')
        return res.status(401).json({
            success:false,
            message: "Unauthorized"
        })
    }

    // create jwt
    const token = jwt.sign({
        id : isExistedUser._id,
        email : isExistedUser.email
    }, env.SECRECT_KEY, {expiresIn : env.EXPIRES_IN})

    console.log(token)

    res.json({
        success:true,
        message:"authorized successfully",
        token
    })
  },

  changePassword: async (req, res) => {
    const { oldPass, newPass } = req.body
    const isValid = bcryptjs.compareSync(oldPass)
  },
};

module.exports = authController;
