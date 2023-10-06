import React, { useContext, useEffect, useRef, useState } from "react";
import Messageother from './Messageother'
import Messageself from './Messageself'
import { useParams } from "react-router-dom";
import axios from "axios";


const Tempwork = () => {
  const [messageContent, setMessageContent] = useState("");
  const [allMessages, setAllMessages] = useState([]);
  const [loaded, setloaded] = useState(false);

  const dyParams = useParams();
  const userData = JSON.parse(localStorage.getItem("userData"));
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  const [chat_id,chat_user] = dyParams._id.split("&");
    console.log("Chat id in Tempwork is " + chat_id);
    console.log("Chat id in Tempwork is " + chat_user);
  const sendMessage = ()=>{
    const config = {
      headers: {
        Authorization: `Bearer ${userData.data.token}`,
      },
    };
    axios
      .post(
        "http://localhost:5000/message/",
        {

          content: messageContent,
          chatId: chat_id,
        },
        config
      )
      .then(({data}) => {
        console.log("Below is what we recieved after sending message");
        console.log(data);
        // data = response;
        console.log("Message Fired");
      });
  }




  
  useEffect(() => {
    console.log("Users refreshed");
    const config = {
      headers: {
        Authorization: `Bearer ${userData.data.token}`,
      },
    };
    axios
      .get("http://localhost:5000/message/" + chat_id, config)
      .then(({ data }) => {
        console.log("Below is information about who sent message")
        console.log(data);
        setAllMessages(data);
        setloaded(true);
        // console.log("Data from Acess Chat API ", data);
      });
    // scrollToBottom();
  }, [ chat_id, userData.data.token]);
  return (
    <div className='warea tempdaba'>
        <div className='title'>
            {chat_user.toUpperCase()}
        </div>
        <div className='chats'>
            {/* <Messageother/>
            <Messageself/>
            <Messageother/>
            <Messageself/>
            <Messageother/>
            <Messageself/>
            <Messageother/>
            <Messageself/>
            <Messageother/>
            <Messageself/> */}
            {allMessages.slice(0).reverse().map((message,index)=>{
              const sender = message.sender;
              console.log( " is who sent the message in temp work")
              console.log(message );
              const self_id = userInfo.email;
              console.log(self_id + " is id of me sending message");
              if (sender.email === self_id) {
                console.log("I sent it ");
                return <Messageself props={message} key={index} />;
              } else {
                console.log("Someone Sent it");
                return <Messageother props={message} key={index} />;
              }
            })}
        </div>
        <div className='likh'>
        <input type="text" placeholder="Type a Message" value={messageContent}
         onChange={(e) => {
          setMessageContent(e.target.value);
        }}
        onKeyDown={(event) => {
          if (event.code == "Enter") {
            console.log(event);
            sendMessage();
            setMessageContent("");
            
          }
        }}/>
        </div>
    </div>
  )
}

export default Tempwork