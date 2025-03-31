const express = require('express');
const  getUserProfile  = require('../controllers/protectedController')
const authMiddleware = require('../middleware/authMiddleware') // JWt verify Middleware

const router = express.Router()

// Protected Routes (Require JWT)
router.get('/profile', authMiddleware, getUserProfile)

module.exports = router
