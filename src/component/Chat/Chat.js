import React, { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";
import Infobar from '../Infobar/Infobar.js'
import Input from '../Input/Input.js'
import messages from '../Messages/Messages.js'
import Device from "../Device/Device.js"
import './Chat.css'
import Messages from "../Messages/Messages.js";

let socket = null;
const Chat = ({ location }) => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const ENDPOINT = "localhost:5000";
  
  useEffect(() => {
    const { name, room } = queryString.parse(location.search);
    socket = io(ENDPOINT);

    setName(name);
    setRoom(room);

   if(name && room){
    socket.emit("join", { name, room },(err,users)=>{
      if(err){
        console.log(err)
      }
      
    });
  }
    return ()=>{
      socket.emit('disconnect');
      socket.off();
    }
  }, [ENDPOINT, location.search]);

  useEffect(()=>{
  socket.on("message",(message)=>{
    setMessages([...messages,message])
    console.log(message)
    //scroll to bottom
   
  })
  },[messages])
  const sendMessage = (event) => {
    event.preventDefault();  
if(message){
  
    socket.emit("sendMessage",message,()=>setMessage(''))
  }
}

console.log(message,messages)
  return (
     <Device>
    <div className="chat">
      <Infobar room={room} name={name} />
       <Messages messages={messages} name={name}/>
        <Input setMessage={setMessage} sendMessage={sendMessage} message ={message}/>
    </div>
    </Device>
  )
};
export default Chat;
