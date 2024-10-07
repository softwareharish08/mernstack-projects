const express = require('express')
const router = express.Router()
const bcrypt=require('bcrypt')
const userModel = require('../models/userSchema')

// api link: 'http://localhost:5000/api/todo/auth/signup'
router.post('/signup', async (req, res) => {
    try {
        const { fullname, email, password } = req.body

        const existindUser = await userModel.findOne({email})
        if (existindUser) {
            return res.status(400).json({ message: 'user already exists' })
        }

        const saltRound=10
        const hashedPassword= await bcrypt.hash(password, saltRound)

        const user = new userModel({
            fullname: fullname,
            email: email,
            password: hashedPassword
        })
        await user.save()
        res.status(200).json('signup successfuly')
    } catch (error) {
        res.status(500).json({ message: error.message })
    }

})

module.exports = router