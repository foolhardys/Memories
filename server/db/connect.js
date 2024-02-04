// import mongoose from 'mongoose'
const mongoose =  require('mongoose')


const connectDB = (url) => {
    return mongoose
        .connect(url)
}


// export default connectDB
module.exports = connectDB