const mongoose = require('mongoose')

const connectDB = async ()=>{
    try {
       await mongoose.connect('mongodb://localhost:27017/unamas')
        console.log('Mongo DB connected')
    } catch (error) {
        console.log('Error conntecting to MongoD:B ', error)
        process.exit(1)
    }
}

module.exports = {connectDB}