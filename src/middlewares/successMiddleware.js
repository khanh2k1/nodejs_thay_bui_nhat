const successMiddleware = (req, res, next) => { 
    console.log('==> success middleware', next)
    res.status(200).json({
        success: true,
        message: 'success',
        data: []
    })
}

module.exports = successMiddleware