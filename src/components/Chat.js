
import React from 'react';
import Navo from "./nav.js";
import Cheto from './Chat.module.css';

const projectID = '1b7801d6-8a66-4be4-a442-89219d833dfc';

const Chat = () => {
 

  return (
    <div className="chat">
    <Navo/>
    <h1 className={Cheto.h1}>hello</h1>
    </div>
  );
};

// infinite scroll, logout, more customizations...

export default Chat;