const dotenv = require('dotenv')
// dotenv.config();
const express = require('express')
const app = express()
const cors = require("cors");
const bcrypt = require("bcryptjs")
const mongoose = require("mongoose")
const Router = express.Router();
app.use(
    cors({
      origin: "*",
    })
  );
mongoose.connect("mongodb://127.0.0.1:27017/chatz").then(()=>{
    console.log("Connected with database");
}).catch((e)=>{
    console.log(e);
})
const User = require("./modals/userSchema");
const chatRoutes = require("./Routes/chatRoutes")
const userRoutes = require("./Routes/userRoutes")
const messageRoutes = require("./Routes/messageRoutes")
const PORT = process.env.PORT || 5000;
app.use(express.json());
// const middleware=(req,res,next)=>{
// console.log("Hello");
// next();


// }
// app.get("/",middleware,async(req,res)=>{
    
//     res.send("Home page");

// })


//---------------------------------------------------------------------------//
//////////////------------------------//////////////////////////////////////////////////////////////



// app.post("/register",async(req,res)=>{
//     try{
//         const {name,email,password} = req.body;
//         if(!email || !password || !name){
//             return res.status(422).json({error:"Invalid form fillup"});
            
//            }
        
       
//            const preExist = await User.findOne({email});
//            const preExistname = await User.findOne({name});
//            if(preExist || preExistname){
//            return res.status(422).json({error:"already in use"});
//             // return;

//            }
//         //    else if(preExistname){
//         //     return res.status(422);
//         //    }
//            else{
//            const newUser = new User({name,email,password});
//            await newUser.save();
//           return res.status(201).json({message:"Successfull registration"});
//            }

//     }
//     catch(e){
//         console.log(e);
//         // return;

//     }

// })
// app.post("/login",async(req,res)=>{
//     try{
//     const {email,password} = req.body;

//    if(!email || !password){
//     return res.status(400).json({error:"Fill both field properly"});
//     // return;

//    }
//    const findUser = await User.findOne({email});
//    if(findUser){
//     const isMatch = await bcrypt.compare(password,findUser.password);

//     if(!isMatch){
//         return res.status(400).json({message:"Invalid username or password"});
//     }
//     else{
//         return res.status(201).json({message:"Successfull login"});
//     }
//    }
//    else{
//     return res.status(400).json({error:"Invalid credintials"});
//    }
   
   
// }
// catch(e){
//     console.log(e);
// }

// })


/////////////////------------------------//////////////////////////////////////////////////////////////






app.use("/user", userRoutes);
app.use("/chat", chatRoutes);
app.use("/message",messageRoutes);
const server = app.listen(5000,()=>{
    console.log("Server started");
})

