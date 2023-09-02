import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

const ChatPage = () => {
  const [chats, setChats] = useState([]);

  const fetchChats = async () => {
    const data = await axios
      .get("http://127.0.0.1:8000/api/chats")
      .then((res) => {
        console.log(res.data);
        setChats(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchChats();
  }, []);
  return (
    <div>
      {chats.map((c, idx) => (
        <div key={c._id}>{c.chatName}</div>
      ))}
    </div>
  );
};

export default ChatPage;
