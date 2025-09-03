 

import express from 'express'
import User from '../models/User.js'
import bcrypt from 'bcrypt' // change password

const router = express.Router()

router.post('/register', async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const user = await User.findOne({ email });
        if (user) {
            return res.status(409).json({ success: false, message: "User already exists" });
        }

        const hashPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            name,
            email,
            password: hashPassword
        });
        await newUser.save();

        return res.status(200).json({ success: true, message: "Account Created Successfully" });
    } catch (err) {
        return res.status(500).json({ success: false, message: "Error in Adding user" });
    }
})

export default router
