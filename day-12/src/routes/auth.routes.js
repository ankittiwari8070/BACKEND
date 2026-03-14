const express = require('express')
const userModel = require('../models/user.model')
const jwt = require('jsonwebtoken')

const authRouter = express.Router()

authRouter.post("/register",async(req,res)=>{
    const{name,email,password} = req.body

    const isUserAlreadyExsits= await userModel.findOne({email})

    if(isUserAlreadyExsits){
        return res.status(400).json({
            message:"User with this email already exists"
        })
    }

 const user =  await userModel.create({
        name,email,password
    })

   const token = jwt.sign(
    {
        id:user._id,
        email:user.email
    },
    process.env.JWT_SECRET
)

    res.status(201).json({
        message:"User registered successfully",
        user,
        token
    })
})

module.exports=authRouter