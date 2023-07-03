// class SuccessResponse {
//     constructor(statusCode, data, message) {
//         this.statusCode = statusCode || 200
//         this.data = data || ''
//         this.message = message || 'success'
//     }
// }

function ReturnSuccessResponse(res, statusCode=200, data=[], message='success') {
    return res.status(statusCode).json({
        success: true,
        message: message,
        data: data
    })
}

module.exports = {
    
    ReturnSuccessResponse
    
} 