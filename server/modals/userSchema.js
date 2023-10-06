const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }

},{
    timeStamp:true
})
userSchema.methods.matchPass = async function(enteredpassword){
    return await bcrypt.compare(enteredpassword,this.password);
};
userSchema.pre("save",async function(next){
    
    this.password =  await bcrypt.hash(this.password,10);
    
    next();


});
    // userSchema.method.generateToken = async function(){
    //     try{
    //         let token = jwt.sign
    //     }
    //     catch(err){
    //         console.log(err);
    //     }
    // }

const User = mongoose.model("User",userSchema);
module.exports = User;