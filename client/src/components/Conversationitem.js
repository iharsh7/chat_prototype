import React from 'react'
import { useNavigate } from 'react-router-dom';

const Conversationitem = ({props}) => {
  const navigate = useNavigate();
  const {chatName,isGroupChat,users,_id} = props;
  console.log(chatName + " calling from sidebar")
  const naam = users[1].name;
  const {id,name,email} = users[0];
  console.log( _id + " calling from conersations");
  console.log(naam + " is name of user");
  return (
    <div className='othermessagecont' 
    onClick={()=>{
      navigate("chat/"+_id+"&"+naam);
      console.log("navigating to chat");
    }}
    
    >
       <div className='convercont sdbaar'> 
       <p className='icon'>{naam[0].toUpperCase()}</p> 
       <p className='messtitle'>{naam.toUpperCase()}</p> 
       <p className='lastmess'>{props.latestMessage}</p> 
       <p className='timestamp'>{props.timeStamp}</p> 
       </div>
     
    //  </div>
  )
}

export default Conversationitem