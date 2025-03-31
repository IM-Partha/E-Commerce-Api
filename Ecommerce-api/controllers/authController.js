const User = require('../module/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config() // for .env Value


/**
 * Register a New User
 * Validates input, checks if the user exists, and stores a hashed password.
 */
const registerUser=async (req,res)=>{
    try {
        const {name,email, password} = req.body

        //Validate input fields
        if(!name|| !email ||!password){
           return res.status(400).json({
                message: 'All fields are required'
            })
        }

        //Check if user already exists

        const existingUser =  await User.findOne({email})
        if(existingUser){
          return  res.status(400).json({
             message:'Email is already registered'
            })
        }

        /// For Password Validation
        if (password.length < 6) {
            return res.status(400).json(
                { message: 'Password must be at least 6 characters long' }
            )
        }

        /// befor Save Hash the password 
        const hashedPassword = await bcrypt.hash(password, 10)

        //insert in Database 
        const NewUser = new User({
            name,
            email,
            password:hashedPassword
        })
        await NewUser.save()
        
        res.status(201).json({
            message: 'User registered successfully',
            user: { name: NewUser.name, email: NewUser.email }
        })

    } catch (error) {
       return res.status(500).json({ message:'Server error',error});
    }
}


/**
 * User Login
 * Validates credentials, verifies password, and returns a JWT token.
 */
const loginUser =async (req,res)=>{
    try {
        const { email, password } = req.body

        //Validate input fields
        if (!email || !password) {
            return res.status(400).json(
                { message:'Email and password are required'}
            )
        }

        //Check if user exists
        const existingUser = await User.findOne({ email });
        if (!existingUser) {
            return res.status(400).json(
                {message: 'Invalid email or password'}
            )
        }

        // Compare passwords or Cheak Password
        const Ismatch = await bcrypt.compare(password, existingUser.password)
        if (!Ismatch) {
            return res.status(400).json(
                {message: 'Invalid email or password'}
            )
        }

        ///Generate JWT tokenID
        const jwttoken = jwt.sign(
            {email:existingUser.email},
            process.env.JWT_SECRET,
            {expiresIn:'24h'} )

        // Return response
        res.status(200).json({
            message: 'Login successful',
            user: {name: existingUser.name, email: existingUser.email},
            jwttoken,
        })

    } catch (error) {
        console.error('Error in loginUser:', error);
        return res.status(500).json(
            { message: 'Server error', error: error.message }
        )
    }
}

module.exports={
    registerUser,
    loginUser
}