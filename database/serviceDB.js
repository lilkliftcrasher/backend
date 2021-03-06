const mongoose = require('mongoose')

const connectDB = async()=>{
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`MongoDB Connected: ${process.env.MONGO_URI}`)
    }
    catch(err){
        console.log(" Can't connect to database "+err.message);
        process.exit(1);
    }
}

module.exports = connectDB