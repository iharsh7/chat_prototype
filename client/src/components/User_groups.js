import { IconButton } from '@mui/material'
// import React from 'react'
import axios from "axios";
import React, {  useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


// import { useNavigate } from "react-router-dom";
// import  useEffect from "react";
// import { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import logo from './Chatz-logos.png'
// import { myContext } from "./Maincontainer";

const User_groups = () => {
    const [users, setUsers] = useState([]);
    const userData = JSON.parse(localStorage.getItem("userData"));
    const nav = useNavigate();

    if (!userData) {
        console.log("User not Authenticated");
        nav(-1);
      }
    // const { refresh, setRefresh } = useContext(myContext);

    // useEffect(() => {
    //     console.log("Users refreshed");
       
    //     axios.get("http://localhost:5000/user/fetchUsers").then((req) => {
    //       console.log("UData refreshed in Users panel ");
    //       setUsers(req);
    //       // setRefresh(!refresh);
    //     });
    //   },[]);
      //////////////////////////////////////////////////////////////////////////////////////////////////////////
    //     const gather = async(req,res)=>{
    //   const res = await fetch('/fetchUsers',{
    //     method:"GET",
    //     headers:{
    //       "Content-Type":"application/json"
    //     },
    //     body:JSON.stringify({
    //       name                 //Converting JSON data into String
    //     })
    //   })
     
    //   const data = await res.json();
    //   // console.log(data);
    //   console.log(data);
        
    //     }

        //-->
        useEffect(()=>{
            // console.log(userData.data.token);
            const config = {
                headers: {
                  Authorization: `Bearer ${userData.data.token}`,
                },
            };
           axios.get(
            "http://localhost:5000/user/fetchUsers/",config).then((data)=>{
                setUsers(data.data);
                // console.log(data.data);
            });
        },[]);
        //<--
       //////////////////////////////////////////////////////////////////////////////////////////////////////////
  return (
    <div className='warea'>
        <div className="list_container onlinecontainer">
            <div className="user_icon onlineicon">
            <img src={logo} alt="" />
            </div>
            <div className="user_name onlinename">
                Online Users
            </div>
            {/* <div>
                <button onClick={gather}></button>
            </div> */}
        </div>
        <div className='search onlinesearch'>
        <IconButton>
            <SearchIcon/>
        </IconButton>
            <input type="text" name="profile" placeholder='Search' className='searchbox'/>
            
        </div>

        <div className='mssg'>
        {users.map((user,index)=>{
            // console.log(user);
            return(
                <div className='list_container'  key={index}
                onClick={()=>{
                    console.log(user._id + " -> " + user.name + " is clicked")
                    const config={
                        headers: {
                            Authorization: `Bearer ${userData.data.token}`,
                          },
        };
                    axios.post(
                        "http://localhost:5000/chat/",
                        {
                            userId: user._id,
                        },
                        config
                    );
    }}>
        <div className="user_icon">
           {user.name[0].toUpperCase()}
        </div>
        <div className="user_name">
      {user.name.toUpperCase()}
       </div>
        </div>
)})}
    {/* <div className='list_container'>
        <div className="user_icon">
            T
        </div>
        <div className="user_name">
       Test User#1
       </div>
        </div> */}
    {/* <div className='list_container'>
        <div className="user_icon">
            T
        </div>
        <div className="user_name">
       Test User#1
       </div>
        </div> */}
    {/* <div className='list_container'>
        <div className="user_icon">
            T
        </div>
        <div className="user_name">
       Test User#1
       </div>
        </div> */}
    {/* <div className='list_container'>
        <div className="user_icon">
            T
        </div>
        <div className="user_name">
       Test User#1
       </div>
        </div> */}
    {/* <div className='list_container'>
        <div className="user_icon">
            T
        </div>
        <div className="user_name">
       Test User#1
       </div>
        </div> */}
    {/* <div className='list_container'>
        <div className="user_icon">
            T
        </div>
        <div className="user_name">
       Test User#1
       </div>
        </div> */}
    {/* <div className='list_container'>
        <div className="user_icon">
            T
        </div>
        <div className="user_name">
       Test User#1
       </div>
        </div> */}
    {/* <div className='list_container'>
        <div className="user_icon">
            T
        </div>
        <div className="user_name">
       Test User#1
       </div>
        </div> */}
    {/* <div className='list_container'>
        <div className="user_icon">
            T
        </div>
        <div className="user_name">
       Test User#1
       </div>
        </div> */}
    {/* <div className='list_container'>
        <div className="user_icon">
            T
        </div>
        <div className="user_name">
       Test User#1
       </div>
        </div> */}
    {/* <div className='list_container'>
        <div className="user_icon">
            T
        </div>
        <div className="user_name">
       Test User#1
       </div>
        </div> */}
    {/* <div className='list_container'>
        <div className="user_icon">
            T
        </div>
        <div className="user_name">
       Test User#1
       </div>
        </div> */}
    {/* <div className='list_container'>
        <div className="user_icon">
            T
        </div>
        <div className="user_name">
       Test User#1
       </div>
       </div> */}
        </div>
        </div>
  )
}

export default User_groups