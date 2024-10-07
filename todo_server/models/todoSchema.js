const mongoose = require('mongoose')

const todoSchema =new mongoose.Schema({
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