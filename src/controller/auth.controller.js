const userModel = require("../models/user.model");
const bcryptjs = require("bcryptjs");
const jwt = require('jsonwebtoken')
const env = require('../config/env')
const asyncMiddleware = require('../middlewares/asyncMiddleware')
const { ErrorResponse } = require('../response/errorResponse')
const { ReturnSuccessResponse } = require('../response/successResponse')
const salt = bcryptjs.genSaltSync(10);


const authController = {
  register: asyncMiddleware(async (req, res) => {
    // check username duplicated
    const { email, username, password } = req.body;
    let isExistedUser = await userModel.findOne({ username });

    // duplicate or conflict : 409, 400
    if (isExistedUser) return new ErrorMiddleware('Unauthorized', 409)

    // hash password
    let hashedPassword = bcryptjs.hashSync(password, salt);

    // khong co "new" thi se khong co method save
    const newUser = new userModel({
      password: hashedPassword,
      email,
      username
    })

    // save to db
    await newUser.save().then((data) => {
      res.status(201).json({
        success: true,
        message: "register successuly",
        email: newUser.email
      })
    }).catch(err => {
      throw new ErrorResponse(500, 'Internal error')
    })
  }),

  login: asyncMiddleware(async (req, res, next) => {
    const { email, password } = await req.body

    const isExistedUser = await userModel.findOne({ email })

    if (!isExistedUser) throw new ErrorResponse(401, 'Unauthorized')

    const isMatch = bcryptjs.compareSync(password, isExistedUser.password)

    if (!isMatch) {
      console.log('pw is match:', isMatch)
      throw new ErrorResponse(401, 'Unauthorized')
    }

    // create jwt
    const token = jwt.sign({
      id: isExistedUser._id,
      email: isExistedUser.email
    }, env.SECRECT_KEY, { expiresIn: env.EXPIRES_IN })

    //console.log(token)

    console.log('type of res:', typeof res.status)

    // res.json({
    //   success: true,
    //   message: "authorized successfully",
    //   token
    // })
    ReturnSuccessResponse(res, null, { token }, 'authorized successfully')

  }),

  changePassword: asyncMiddleware(async (req, res) => {
    const { oldPass, newPass } = req.body
    console.log('oldPass:', oldPass, 'newPass:', newPass)
    console.log(req.user)
    const isValid = bcryptjs.compareSync(oldPass, req.user.password)
    console.log('isValid:', isValid)

    if (!isValid) throw new ErrorResponse(401, 'Unauthorized')

    const hashedPassword = bcryptjs.hashSync(newPass, salt)

    await userModel.findByIdAndUpdate(req.user.id, { password: hashedPassword })

    ReturnSuccessResponse(res, null, null, 'change password successfully')
  }),
};

module.exports = authController;
