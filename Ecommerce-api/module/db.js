const mongoose = require('mongoose')
require('dotenv').config()

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("MongoDB Connected Successfully")
}).catch((e)=>{
    console.log("MongoDB Connection Failed",e)
})
