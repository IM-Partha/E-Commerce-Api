const mongoose = require('mongoose')
/**
 * User Schema
 * It includes fields for name, email, and password with necessary validations.
 */
const UserSchema = mongoose.Schema({
    name:{
        type:String,
        required: [true, 'Name is required'],
    },
    email:{
        type:String,
        required: [true, 'Name is required'],
        unique: true,
        lowercase: true,
        match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email'] /// for Validate Email
    },
    password:{
        type:String,
        required: [true, 'Password is required'],
    }
})

const User = mongoose.model("Users", UserSchema)
module.exports = User
