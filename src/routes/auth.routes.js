
const router = require('express').Router()
const authController = require('../controller/auth.controller')
const validator = require('../middlewares/validator')
const authSchema = require('../validations/auth.schema')
const jwtAuth = require('../middlewares/jwtAuth')

router.post('/register',
 validator(authSchema.register), 
 authController.register)

router.post('/login', validator(authSchema.login, "body"), authController.login)

router.patch('/change-password', jwtAuth.isAuth ,validator(authSchema.changePassword, "body"), authController.changePassword)

module.exports = router