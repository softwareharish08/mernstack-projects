const mongoose = require('mongoose')

const userSchema= new mongoose.Schema({
    fullname: {
        type: String, 
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        match: [/\S+@\S+\.\S+/, 'please enter a valid email']
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    }
})

const userModel =  mongoose.model('User_collection', userSchema)
module.exports = userModel;
