const express = require("express")
const router = express.Router()

router.post( "/register" , (req , res ) =>{
    console.log(res.status(200).json({message:"Register the User"}))
} )

router.post( "/login" , (req , res ) =>{
    console.log(res.status(200).json({message:"Login the User"}))
} )

router.get( "/current" , (req , res ) =>{
    console.log(res.status(200).json({message:"Current User Information"}))
} )
 
module.exports = router 