const env = require('../config/env')
const jwt = require('jsonwebtoken')
const userModel = require('../models/user.model')
const jwtAuth = {
    isAuth : async (req, res, next) => {
        const headerToken = req.headers.authorization

        if(!headerToken || !headerToken.startsWith('Bearer')) {
          return res.status(401).json({
            success:false,
            message:'Invalid token'
          })
        }
    
        const token = headerToken.split(' ')[1]
    
        if(!token) {
            return res.status(422).json({
                success:false,
                message:"invalid token"
            })
        }
        
        // decode jwt
        const user = jwt.verify(token, env.SECRECT_KEY)

        const isExistedUser = await userModel.findById(user.id)

        if(!isExistedUser) {
          return res.status(401).json({
            success:false,
            message:"unauthorized"
          })
        }

        req.user = isExistedUser
        next()
    },
}

module.exports = jwtAuth