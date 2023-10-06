const User = require('../modals/userSchema');
const express = require("express");
const app = express();
const bcrypt = require("bcryptjs");
const generateToken = require("../config/generateToken");
// const mongoose = require("mongoose")

const loginController = async(req,res)=>{
  try{
    const {email,password} = req.body;

   if(!email || !password){
    return res.status(400).json({error:"Fill both field properly"});
    // return;

   }
   const findUser = await User.findOne({email});
   if(findUser){
    const isMatch = await bcrypt.compare(password,findUser.password);
    // const token = await findUser.generateToken();
    
    if(!isMatch){
      return res.status(400).json({message:"Invalid username or password"});
    }
    else{
      const response = {
      token:generateToken(findUser._id),
    }
    res.status(201).json(response);
        // return res.status(201).json({message:"Successfully logedin"});
    }
   }
   else{
    return res.status(400).json({error:"Invalid credintials"});
   }
   
   
}
catch(e){
    console.log(e)
}
}



const registerController = async(req,res)=>{
  try{
    const {name,email,password} = req.body;
    if(!email || !password || !name){
        return res.status(422).json({error:"Invalid form fillup"});
        
       }
    
   
       const preExist = await User.findOne({email});
       const preExistname = await User.findOne({name});
       if(preExist || preExistname){
       return res.status(422).json({error:"already in use"});
       }
   
       else{
       const newUser = new User({name,email,password});
       await newUser.save();

      return res.status(201).json({message:"Successfull registration"});
       }

}
catch(e){
    console.log(e);
    // return;

}

}
const fetchAllUsersController = async (req, res) => {
  try{
    // const userId = req.body;
    // console.log("hi " + userId);
    const keyword = req.query.search

      ? {
          $or: [
            { name: { $regex: req.query.search, $options: "i" } },
            { email: { $regex: req.query.search, $options: "i" } },
          ],
        }
      : {};
  
    const users = await User.find(keyword).find({
      _id: { $ne: req.user._id},
      // name,
    });
    res.status(201).send(users);
  }
  catch(err){
    console.log(err);
  }
  };

  
  module.exports =  {
    loginController,
    registerController,
    fetchAllUsersController,
  };