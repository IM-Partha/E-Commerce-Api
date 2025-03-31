const express = require('express')
const { registerUser, loginUser } = require('../controllers/authController')
const authMiddleware = require('../middleware/authMiddleware')
const getUserProfile = require('../controllers/protectedController')

const Routes = express.Router()

///User Authentication Routes
Routes.post('/register',registerUser)
Routes.post('/login',loginUser)

module.exports=Routes