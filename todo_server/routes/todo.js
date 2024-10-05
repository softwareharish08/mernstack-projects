const express = require('express')
const router = express.Router()
const todo_model = require('../models/todoSchema')

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
