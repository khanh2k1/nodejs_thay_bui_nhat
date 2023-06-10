
const router = require('express').Router()
const authController = require('../controller/auth.controller')
const validator = require('../middlewares/validator')
const authSchema = require('../validations/auth.schema')


router.post('/register',
 validator.bodyValidator(authSchema.register), 
 authController.register)

router.post('/login', validator.bodyValidator(authSchema.login), authController.login)

router.patch('/change-password', authController.changePassword)

module.exports = router