import React from 'react'
import axios from "axios";
import { useState } from 'react'
import { useNavigate } from "react-router-dom";
// import { useHistory } from 'react-router-dom';
const Signup = (e) => {
    const navigate = useNavigate();
    const [user,setUser] = useState({
        name:"",email:"",password:""
    })
    let name,val;
    const setData = (e)=>{
        name = e.target.name;
        val = e.target.value;
        setUser({...user,
            [name]:val
            
            })
    };
    // const navigate = useNavigate();

    const postData = async(e)=>{
        e.preventDefault();


        /////////////////////////////////---------------------------------/////////////////////////////////////////


    //     try{
    //     const{name,email,password}=user;
    //     const res = await fetch('/register',{
    //       method:"POST",
    //       headers:{
    //         "Content-Type":"application/json"
    //       },
    //       body:JSON.stringify({
    //         name,email,password                    //Converting JSON data into String
    //       })
    //     })
       
    //     const data = await res.json();
    //         console.log(data);
    //         if(data.message==="Successfull registration"){
    //            window.alert("Successfully Registered");
    //            navigate("/");
    //        }
    //         else{
    //             window.alert("Invalid Registration");
    //         }
           
        
    // }
    // catch(error){
    //     console.log("Some bad "+error);
    // }


  /////////////////////////////////---------------------------------/////////////////////////////////////////

        /////////////////////////////////////----------------NEW------------------------------------//////////////////////////////////////
        try{
            const config={
                headers:{
                    "Content-type":"application/json",
                },
            };
        const response = await axios.post(
            "http://localhost:5000/user/register/",
            user,
            config
        );
        console.log(response);
        if(response.status===201){
            window.alert("Succesfull Registration");
            navigate("/");
        }
       

        }
        catch(err){
             if(err.response.status===422){
                window.alert("Invalid fillup or email already exist")
                console.log("Already taken")
            }
            // console.log(err.name);
        }

        /////////////////////////////////////----------------NEW------------------------------------//////////////////////////////////////


      }
  return (
    <div className="signupcontainer">
        <div className='signupcontent'>
            <div className="signupleft">
                <div className="welcome">
                    <h1>Welcome Back!</h1>
                    </div>
                    <div className="write">
                        <p>To keep connected with us please register with your personal info.</p>
                </div>
                {/* <input type="button" value="SIGNIN" /> */}
            </div>
            <div className="signupright">
                <div className="crtacc">
                    <h2>Create Account</h2>
                </div>
                <form /*action="/register"*/ method="post">

                <div className="form1">
                    <input type="text" name="name" value={user.name}  placeholder='Enter Your Name' onChange={setData}/>
                </div>
                <div className="form1">
                    <input type="text" name="email" value={user.email}  placeholder='Email' onChange={setData}/>
                </div>
                <div className="form1">
                    <input type="password" name="password" value={user.password}  placeholder='Password' onChange={setData}/>
                </div>
                <div className="signupbtn">
                <input type="button" value="SIGNUP" onClick={postData} className="sgnbtn"/>
                </div>

                </form>
            </div>
        </div>
    </div>
  )
}

export default Signup