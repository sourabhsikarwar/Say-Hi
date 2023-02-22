import React, { useContext } from "react";
import Cam from "../assets/Images/Cam.png";
import Add from "../assets/Images/add.png";
import More from "../assets/Images/more.png";
import Messages from "./Messages";
import Input from './Input'
import { ChatContext } from "../context/ChatContext";

const Chat = () => {

  const { data } = useContext(ChatContext)

  return (
    <div className="chat">
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>
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
