import React from 'react';
import ScrollToBottom from "react-scroll-to-bottom";
import Message from "./Message/Message.js"
import './Messages.css';

const Messages = ({messages, name}) =>{

  const chatArea = document.querySelector(".message-body");
  if(chatArea){
  chatArea.scroll(0,chatArea.scrollHeight);
  }
return (
  
  <div className="container fixed rev">
  <ul className="message-body">
      {messages.map((message,index)=><div key={index}><Message   message={message} name={name}/></div>)}
 
    </ul>
   
</div>

    )
}
export default Messages;