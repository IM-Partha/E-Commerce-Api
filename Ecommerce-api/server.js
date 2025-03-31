require('dotenv').config() // Load environment variables 
const express = require('express')
const bodyparse = require('body-parser')
const Routes = require('./routes/authRoutes')
const protectedRoutes = require('./routes/protectedRoutes'); 
require('./module/db')

const server = express()

//Middleware
server.use(bodyparse.json())

// API Routes
server.use("/auth",Routes)


// Protected Routes (Require JWT)
server.use("/protected", protectedRoutes);



//Start Server
server.listen(process.env.PORT, ()=>{
    console.log(` Server Running on ${process.env.PORT}`)
})