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

// api link: 'http://localhost:5000/api/todo/deletetodo/:id'
router.delete('/deletetodo/:id', async (req, res) => {
    try {
        const { id } = req.params; // Retrieve id from URL parameters
        const deleteTodo = await todo_model.findByIdAndDelete(id)
        if (!deleteTodo) {
            return res.status(404).json({ message: 'Todo not found' });
        }
        
        res.status(200).json({ message: 'Todo deleted successfully', deleteTodo });
    }catch(err){
        res.status(500).json({ message: "Internal server error: " + err.message });

    }
    
})

// api link: 'http://localhost:5000/api/todo/done/:id'
//changing status to done
router.put('/done/:id', async(req, res)=>{
    try{
        const {id}=req.params;
        const updatestatus = await todo_model.findByIdAndUpdate(id, {$set: {status: true}}, { new: true })

        if (!updatestatus) {
            return res.status(404).json({ message: "Todo not found" });
        }

        res.status(200).json({ message: `Todo done: ${updatestatus}` });

    }catch(error){
        res.status(500).json({ message: "Internal server error", error })
    }
})

//changing status to pending
router.put('/pending/:id', async(req, res)=>{
    try{
        const {id}=req.params;
        const updatestatus = await todo_model.findByIdAndUpdate(id, {$set: {status: false}}, { new: true })

        if (!updatestatus) {
            return res.status(404).json({ message: "Todo not found" });
        }

        res.status(200).json({ message: `Todo not done: ${updatestatus}` });

    }catch(error){
        res.status(500).json({ message: "Internal server error", error })
    }
})

module.exports = router;
