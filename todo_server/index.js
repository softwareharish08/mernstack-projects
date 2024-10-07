
// Importing required modules
const express = require('express')
const app = express()
const connectToMongodb=  require('./db')
const cors =  require('cors')

const port = 5000

//importing routers
const todoRouter=require('./routes/todo.js')
const authRouter=require('./routes/auth.js')

// DATABASE CONNECTION
connectToMongodb()

// Enable CORS for all routes
app.use(cors())

// Middleware to parse incoming JSON requests
app.use(express.json())

// Mounting the to-do router at /api/todo
app.use('/api/todo', todoRouter )
app.use('/api/todo/auth', authRouter )

// Starting the server and listening on the specified port
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
