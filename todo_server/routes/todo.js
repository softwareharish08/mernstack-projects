const express = require('express')
const router = express.Router()

router.post('/addtodo', (req, res) => {
    try {
        const { title, description } = req.body
        res.status(200).send("todo added successfuly")
    }catch(err){
        res.status(500).send("internal server error: "  + err.message)

    }
    
})

module.exports = router;
