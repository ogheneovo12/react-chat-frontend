import React from 'react';

import './Input.css';

const Input = ({ setMessage, sendMessage, message }) => (
     <footer>
              <div className="bottom">
                <form className="form">
                  <div className="sendMess">
                    <button  className="attachment"><i className="fas  fa-paperclip"></i></button>
                    <textarea
                      id="text"
                      name=""
                      cols="20"
                      rows="3"
                      placeholder="enter your message"
                      value={message}
                      onChange={({ target: { value } }) => setMessage(value)}
                      onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
                    >
                    </textarea>
                    <button className="send" onClick={event => sendMessage(event)}><i className="fa   fa-paper-plane"></i></button>
                  </div>
                </form>
              </div>
            </footer>
)

export default Input;