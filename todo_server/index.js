
// Importing required modules
const express = require('express')
const app = express()
const connectToMongodb=  require('./db')
const port = 5000

//importing routers
const todoRouter=require('./routes/todo.js')

// DATABASE CONNECTION
connectToMongodb()

// Middleware to parse incoming JSON requests
app.use(express.json())

// Mounting the to-do router at /api/todo
app.use('/api/todo', todoRouter )

// Starting the server and listening on the specified port
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
