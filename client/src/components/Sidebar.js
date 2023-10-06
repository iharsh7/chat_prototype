import React, { useEffect } from 'react'
import Conversationitem from './Conversationitem';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from '@mui/material';
import axios from "axios";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Sidebar = () => {
    const navigate = useNavigate();
    const [update,setUpdate]=useState(false);
    const [conversations, setConversations] = useState([]);
    const userData = JSON.parse(localStorage.getItem("userData"));
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    // console.log(userData.data);
    if (!userData) {
        console.log("User not Authenticated");
        navigate("/");
      }
    const user = userData.data;
    
    console.log(user.token + "is me");
    // const navigate = useNavigate();
    useEffect(()=>{
        console.log("Hello from sidebar")
        const config={
            headers: {
                Authorization: `Bearer ${user.token}`,
              },
        };
        axios.get("http://localhost:5000/chat/", config).then((response) => {
            console.log("Data refresh in sidebar ", response);
            // console.log("Data refresh in sidebar ", response.data[0].users[1]);
            // console.log("Data refresh in sidebar ", typeof response.data);
            setConversations(response.data);

            // setRefresh(!refresh);
          });
        },[]);
   

       
        
  return (
    <div className='sbar'>
        <div className='header'>
            <div className='person'>
            <IconButton>
        <AccountCircleIcon/>
        </IconButton>
        </div>
        <div className='others'>
            <IconButton onClick={()=>{navigate("user-group")}}>
        <PersonAddIcon/>
        </IconButton>
            <IconButton onClick={()=>{navigate("create-group")}}>
        <GroupAddIcon/>
        </IconButton>
            <IconButton>
        <AddCircleIcon/>
        </IconButton>
        </div>
        </div>
        <div className='search'>
        <IconButton>
            <SearchIcon/>
        </IconButton>
            <input type="text" name="profile" placeholder='Search' className='searchbox'/>
            
        </div>
          <div className='contac'>
              {
                  conversations.map((conversation, index) => {
                    let cd = conversation.users[1].name;
                    if(userInfo.email == conversation.users[1].email){
                      cd = conversation.users[0].name
                    }
                        console.log(conversation)
                      return (
                        <div className='othermessagecont' key={index}
                        onClick={()=>{
                            console.log(conversation.users[1].name +"  "+ conversation._id+" navigating to caht");
                          navigate("chat/"+conversation._id+"&"+cd);
                        }}
                        
                        >
                          <div  className='convercont sdbaar'>
                           
                              
                              <p className='icon' >{cd[0]}</p>
                              <p className='messtitle' >{cd}</p>


                          </div>
                          </div>
                      )
                  })
              }

          </div>


    </div>
  )
}

export default Sidebar