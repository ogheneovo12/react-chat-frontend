import React from 'react';
import ReactEmoji from "react-emoji";
import './Message.css';

const Message = ({message:{user,text},name}) =>{
let  isSentByCurrentUser = false;
const trimmedName = name.trim().toLowerCase();
if(user === trimmedName){
    isSentByCurrentUser = true;
}
    return(


        isSentByCurrentUser
        ? (
          <li className="chatbox chatbox-outgoing">
            <p className="sentText pr-10">{trimmedName}</p>
              <p className="messageText colorWhite">{ReactEmoji.emojify(text)}</p>
          </li>
          )
          : (
            <li className="chatbox chatbox-incoming">
            <p className="sentText pr-10">{user}</p>
              <p className="messageText colorWhite">{ReactEmoji.emojify(text)}</p>
          </li>
          )
    );
}

export default Message;