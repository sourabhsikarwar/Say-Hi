import { onSnapshot, doc } from "firebase/firestore";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { db } from "../firebase";

const Chats = () => {
  const [chats, setChats] = useState([]);
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        setChats(doc.data());
      });

      return () => {
        unsub();
      };
    };

    currentUser.uid && getChats();
  }, [currentUser.uid]);

  console.log(Object.entries(chats))

  return (
    <div className="chats">
      {Object.entries(chats)?.map((chat) => (
        <div className="userChat" key={chat[1].userInfo.uid}>
          <img
            src={chat[1].userInfo.photoURL}
            alt="photo"
          />
          <div className="userChatInfo">
            <span>{chat[1].userInfo.displayName}</span>
            <p>Hello</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Chats;
