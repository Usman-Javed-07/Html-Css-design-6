require('dotenv').config()
const express = require('express')
const path = require('path')
const app = express()

const connectDB = require('./db/databse')
app.use(express.static('./public'))


const port = process.env.PORT || 5000
const start = async ()=> {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port , console.log(`CARA server is listing on port ${port}`)
        )
    } catch (error) {
        console.log(error);
        
    }
}
start()