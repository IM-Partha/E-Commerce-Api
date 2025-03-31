const jwt = require('jsonwebtoken')
require('dotenv').config()


// Middleware to verify JWT Token

const authMiddleware = (req, res, next) => {
    const token = req.header('Authorization')

    //Check if token is provided
    if (!token) {
        return res.status(401).json(
            { message: 'Access denied. No token provided.' }
        )
    }
    try {
        // Extract Token from "Bearer <token>"
        const decoded = jwt.verify(token.replace('Bearer ', ''), process.env.JWT_SECRET)
        req.user = decoded 
        next(); 
    } catch (error) {
        return res.status(403).json({ message: 'Invalid or expired token' })
    }
};

module.exports = authMiddleware
