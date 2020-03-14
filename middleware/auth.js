const express = require('express')
const Users = require("../users/userModel")
const bcrypt = require("bcryptjs")

const sessions = {}

function auth(){
    const authError =  {
            message: "You shall not pass!",
        }
    return async (req, res, next) =>{
        
        try{
        //     const { username, password } = req.headers
        //     // makes sure these values aren't empty
        //     if (!username || !password){
        //         return res.status(401).json(authError)
        //     }
        //     // console.log("checkpoint 1")
        
        //     const user = await Users.findBy({ username }).first()
        //     // makes sure the user exists
        //     if (!user){
        //         return res.status(401).json(authError)
            
        // } 
        // // console.log("checkpoint2")
        // const passwordValid = await bcrypt.compare(password, user.password)
        // // make sure the password is correct
        // if(!passwordValid){
        //     return res.status(401).json(authError)
        // } 

        if (!req.session || !req.session.user){
            return res.status(401).json(authError)
        }

        
        next() 
    } catch(err){
            next(err)
        }
    }
}

module.exports ={
    sessions,
    auth,
}