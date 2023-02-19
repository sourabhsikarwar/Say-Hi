import React from "react";
import Cam from "../assets/Images/Cam.png";
import Add from "../assets/Images/add.png";
import More from "../assets/Images/more.png";
import Messages from "./Messages";
import Input from './Input'

const Chat = () => {
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>Sourabh</span>
        <div className="chatIcons">
          <img src={Cam} alt="icon" />
          <img src={Add} alt="icon" />
          <img src={More} alt="icon" />
        </div>
      </div>
      <Messages />
      <Input/>
    </div>
  );
};

export default Chat;
