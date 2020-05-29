import React from 'react';

import './Device.css';

const Device = ({ children}) => (
<div className="wrapper-chat">
    <div className="marvel-device nexus5">
      <div className="screen">
        <div className="screen-container">
              {children}
                </div>
          </div>
    </div>
</div>
)

export default Device;