const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const connectDB = require('./db/connect')
const postRoutes = require('./routes/posts')
const dotenv = require('dotenv')
dotenv.config()

const app = express()

app.use(bodyParser.json({ limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))
app.use(cors())
app.use('/posts', postRoutes)

const DB_URL = process.env.DB_URL
const PORT = process.env.PORT || 5000


const start = async () => {
    try {
        await connectDB(DB_URL)
        app.listen(PORT, () => {
            console.log(`Server is listening on port : ${PORT}`)
            console.log('Connection successful')
        })
    } catch (error) {
        console.log(error);
    }
}


start()
