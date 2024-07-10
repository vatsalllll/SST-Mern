const express = require("express");
const User = require("../models/userModel");
const { hash } = require("bcrypt");

const router = express.Router();

router.post("/register", async (req, res) => {

    try {
        
        const userExists = await User.findOne({email:req.body.email})

        if(userExists) {
            res.send ({
                success : false,
                message : "User aldready exists!"
            })
        }

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(req.body.password, salt)
        req.body.password = hashedPassword
        

        const newUser = new User(req.body)
        await newUser.save()

        res.status(201).json('User Created')
    } 
    catch (error) {
        res.json(error)
    }

});

router.post("/login", async (req, res) => {
    const user = await User.findOne({email : req.body.email})

    if(!User) {
        res.send ({
            success : false, 
            message : "User does not exist, please register"
        })
    }

    const validPassword = await bcrypt.compare(req.body.password)

});

module.exports = router;