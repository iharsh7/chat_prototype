import React, { useState } from 'react'
import logo from './Chatz-logos.png'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LockIcon from '@mui/icons-material/Lock';
import { TextField } from '@mui/material'
import axios from "axios";

// import { Alert } from '@mui/material';
import { useNavigate } from "react-router-dom";// import './login.css'
// import { useNavigate } from 'react-router-dom';
// const navigate = useNavigate();
// navigate('/home');
const Login = (e) => {
  const [lgname,setLgname]=useState({
    email:"",password:""
  })
  let name,val;
  const setData=(e)=>{
    // window.alert("Writing");
    name=e.target.name;
    val=e.target.value;
    
    setLgname({...lgname,
      [name]:val
      
    })
  }
  const navigate = useNavigate();
  const postData = async(e)=>{
    e.preventDefault();
    try{

      //////////////////////////////////////////////////////////////////////////////////////--------------------------------------------------

    // const{email,password}=lgname;
    // const res = await fetch('/login',{
    //   method:"POST",
    //   headers:{
    //     "Content-Type":"application/json"
    //   },
    //   body:JSON.stringify({
    //     email,password                     //Converting JSON data into String
    //   })
    // })
   
    // const data = await res.json();
    // // console.log(data);
    // console.log(data);
    //    if(data.message==="Successfull login"){
    //     window.alert("Successfull Login");
    //     navigate("/app/welcome");
    // }
    //     else{
    //         window.alert("Invalid Login");
    //     }

    //////////////////////////////////////////////////////////////////////////////////////--------------------------------------------------

    const config={
      headers:{
          "Content-type":"application/json",
      },
  };
const response = await axios.post(
  "http://localhost:5000/user/login/",
  lgname,
  config
);
const y = JSON.parse(response.config.data);
console.log(y.email);
localStorage.setItem("userData",JSON.stringify(response));
localStorage.setItem("userInfo",JSON.stringify(y));
if(response.status===201){
  window.alert("Succesfull Login");
  navigate("/app/welcome");
}

    
}
catch(error){
  if(error.response.status===400){
    // <Alert severity="error">This is an error alert — check it out!</Alert>
    window.alert("Invalid Credientials");
  }
    console.log(error);
}


  }
  return (
     
    <div className='login-container'>
       <div className='loginmain'>
        <div className='loginleft'>
          <div className="chatz">
            <h1>CHATZ</h1>
          </div>
        </div>
        <div className='loginright'>
        <form /*action="/login"*/ method='POST'>
     {/* <label htmlFor="">Email</label> */}
     <div className="emaillogin">
    <MailOutlineIcon/>
 <input type="text" name="email" value={lgname.email} onChange={setData} placeholder="Email" />
 </div>
    <div className="emaillogin">
      <LockIcon className='lock'/>
     {/* <label htmlFor="">Password</label> */}
 <input type="password" name="password" value={lgname.password} onChange={setData} placeholder="Password"/>
 </div>
 <div className="lgin">
    <input className='formbutton' type="submit" value="LOGIN" onClick={postData}/>
    <a href="/signup">REGISTER NOW</a>
    </div>
 </form>
        </div>
       </div>
    </div>
  )
}

export default Login