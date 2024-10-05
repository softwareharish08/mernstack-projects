const express = require('express')
const router = express.Router()
const todo_model = require('../models/todoSchema')

// api link: 'http://localhost:5000/api/todo/gettodo'
router.get('/gettodo', async (req, res) => {
    try {
        const todos= await todo_model.find()
        res.json(todos)
    }catch(err){
        res.status(500).json("internal server error: "  + err.message)

    }
    
})

// api link: 'http://localhost:5000/api/todo/addtodo'
router.post('/addtodo', async (req, res) => {
    try {
        const { title, priority} = req.body
        const newTodo= await new todo_model({
            title:title,
            priority: priority,
        })
        await newTodo.save()
        res.status(200).json("todo added successfuly")
    }catch(err){
        res.status(500).json("internal server error: "  + err.message)

    }
    
})

module.exports = router;
