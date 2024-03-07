/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { useGetMesagesQuery } from "@/Redux/api/chatApi";
import { useAppSelector } from "@/Redux/hooks";
import { getUserInfo } from "@/service/auth.service";
import MyMessageCard from "./MyMessageCard";
import FriendMessageCard from "./FriendMessageCard";
import { IMessage } from "@/types/chat";
import io from "socket.io-client";
import { useEffect, useState } from "react";
import { useSocketContext } from "@/Socket/socketContext";

const ChatInbox = () => {
  const [message, setMessages] = useState();
  const { socket } = useSocketContext();

  const userInfo = getUserInfo();
  const conversation = useAppSelector((state) => state.chatSlice);

  let messages;
  if (conversation) {
    const { data } = useGetMesagesQuery(conversation._id);
    messages = data;
  }

  useEffect(() => {
    socket?.on("new_message", (new_message) => {
      setMessages(new_message);
      console.log(new_message);
    });

    return () => socket?.off("new_message");
  }, [socket, setMessages, message]);

  return (
    <div className="flex flex-col">
      {messages?.map((message: IMessage) => {
        // Determine if the message is from the friend or you
        const isMyMessage = message.sender === userInfo?.userId;

        return isMyMessage ? (
          <div key={message._id}>
            <MyMessageCard message={message} />
          </div>
        ) : (
          <div key={message._id}>
            <FriendMessageCard message={message} />
          </div>
        );
      })}

      {message && (
        <div>
          <FriendMessageCard message={message} />
        </div>
      )}
    </div>
  );
};

export default ChatInbox;
