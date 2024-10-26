const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const userModel = require('../models/userSchema')
const jwt = require('jsonwebtoken')
// require('dotenv').config();
// const jwt_key= process.env.JWT_SECRET
const jwt_key = 'mySecretKey'
const { body, validationResult } = require('express-validator')
const fetchUser= require('../middleware/fetchUser')


// api link: 'http://localhost:5000/api/todo/auth/signup'
router.post('/signup', [
    body('fullname', 'Fullname cannot be empty')
        .notEmpty() // Ensures fullname is not empty
        .isAlpha('en-US', { ignore: ' ' }) // Allows alphabetic characters and ignores spaces
        .withMessage('Name must contain only letters and spaces'),
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'password should be alteast 6 charachters').isLength({ min: 6 })
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        const { fullname, email, password } = req.body

        const existindUser = await userModel.findOne({ email })
        if (existindUser) {
            return res.status(400).json({ message: 'user with this email already exists' })
        }

        const saltRound = 10
        const hashedPassword = await bcrypt.hash(password, saltRound)

        const user = new userModel({
            fullname: fullname,
            email: email,
            password: hashedPassword
        })
        await user.save()

        res.status(200).json({ message: 'signup successfuly' })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }

})

// api link: 'http://localhost:5000/api/todo/auth/login'
router.post('/login', async (req, res) => {
    const { email, password } = req.body
    const foundUser = await userModel.findOne({ email })
    if (!foundUser) {
        return res.json({ message: 'user not found' })
    }

    const comparePassword= await bcrypt.compare(password, foundUser.password )
    if(!comparePassword){
        return res.status(400).json({error: 'please enter correct credentials'})
    }
    const payload={
        user:{id: foundUser._id}
    }
    const token = jwt.sign(payload, jwt_key, { expiresIn: '1h' })

    res.json({token})

})

// api link: 'http://localhost:5000/api/todo/auth/getuser'
router.get('/getuser',fetchUser, async(req, res)=>{
    const user_id= req.user.id
    const current_user= await userModel.findById(user_id).select('-password')
    res.send(current_user)
})

module.exports = router