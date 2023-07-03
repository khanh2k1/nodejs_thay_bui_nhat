
const errorMiddleware = (err, req, res, next) => {

    const { code = 500, message } = err
    console.log('==> error middleware :', message || 'Internal error')

    res.status(code).json({
        sucess: false,
        message: err.message || 'Internal error.'
    })
}

module.exports = errorMiddleware