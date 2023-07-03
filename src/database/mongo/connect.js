const mongoose = require('mongoose')
const env = require('../../config/env')


const MONGO_URI = env.MONGO_URI

console.log('uri=',MONGO_URI)

const connectDB = async () => {
    await mongoose.connect(MONGO_URI)
}


connectDB().then(() => {
    console.log("Connect successfully!!!")
}).catch((err) => {console.log(err)})



module.exports = connectDB