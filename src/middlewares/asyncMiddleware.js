const asyncMiddleware = (fn) => (req, res, next) => {
    // cach 1
    return Promise.resolve(fn(req, res, next)).catch(err=>next(err))
    
    //cach 2
    return Promise.resolve(fn(req, res, next)).catch(next)
}

module.exports = asyncMiddleware