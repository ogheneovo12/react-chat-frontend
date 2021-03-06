import React, { useState } from "react";
import { Link } from "react-router-dom";
import './join.css';
const Join = () =>{
 const [name,setName] = useState("")
 const [room,setRoom] = useState("")

    return (
        <div className="wrapper">
        <div>
            <div className="signInFormContainer">
            <form className="form-control">
            <div className="form-group">
                <input type="text" placeholder="username" onChange={(event)=>{setName(event.target.value)}} />
          </div>
          <div className="form-group">
             
              <input type="text" placeholder="room"  onChange={(event)=>{setRoom(event.target.value)}}/>
          </div>
          <div className="form-group submit"  >
              <Link onClick={event => !name || !room ? event.preventDefault():null} to={`/chat?name=${name}&room=${room}`}>
              <input type="submit" value="Join"  />
              </Link>
          </div>
         
             </form>
        </div>
      </div>
      </div>
    )
}



export default Join;
