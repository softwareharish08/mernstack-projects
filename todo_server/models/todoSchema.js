const mongoose = require('mongoose')

const todoSchema =new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,  // This stores the user's unique ID
        ref: 'User_collection',                // Refers to the 'User' model
        required: true                         // The user field must be provided
    },
    title: {
        type: String,
        required: true
    },
    priority: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        required: true,
        default: false

    }
})

const todo_model = mongoose.model('todo_collection', todoSchema)

module.exports = todo_model