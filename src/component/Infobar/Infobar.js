import React from "react";
import './Infobar.css'

const Infobar = ({ room, name })=>{

    return(
      <header>
      <div className="user-details">
        <img
          className="dp"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQano_sjdfQ7dXjPwjr9riVxMwsePJzn8NAaQlZ1gZoavLc_CL9&s"
        />
        <div className="detail-txt">
          <span className="username">
            {name}
          </span>
          <span className="status">online</span>
        </div>
      </div>
    </header>
    )
}

export default Infobar;
