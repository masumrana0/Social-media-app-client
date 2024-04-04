/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { useGetMesagesQuery } from "@/Redux/api/chatApi";
import { useAppSelector } from "@/Redux/hooks";
import { useSocketContext } from "@/Socket/socketContext";
import { getUserInfo } from "@/service/auth.service";
import { IConversation, IMessage } from "@/types/chat";
import { getParticipantData } from "@/utils/chat.utils";
import { useEffect, useRef, useState } from "react";
import LoadingSpinner from "../shared/LoadingSpinner";
import FriendMessageCard from "./FriendMessageCard";
import MyMessageCard from "./MyMessageCard";
import notification_sound from "/public/sounds/notification_sound.mp3";

const ChatInbox = () => {
  const [socketMessages, setSocketMessages] = useState([]);
  const { socket, typingUsers } = useSocketContext();
  const [isTyping, setTyping] = useState(false);

  const lastMessageRef = useRef();

  const userInfo = getUserInfo();
  const conversation = useAppSelector((state) => state.chatSlice);
  let messages;
  if (conversation) {
    const { data } = useGetMesagesQuery(conversation._id);
    messages = data;
  }

  // useEffect(() => {
  //   socket?.on("new_message", (new_message) => {
  //     // setSocketMessages([...socketMessages, new_message]);
  //     const sound = new Audio(notification_sound);
  //     sound.play();
  //   });

  //   return () => socket?.off("new_message");
  // }, [socket, socketMessages, setSocketMessages]);

  const participantid = getParticipantData(conversation as IConversation);

  useEffect(() => {
    const isTyping = typingUsers.includes(participantid as unknown as string);
    setTyping(isTyping);
  }, [participantid, typingUsers, socket]);
  // console.log(isTyping);
  console.log(typingUsers);

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
      {socketMessages.length > 0 && (
        <>
          {socketMessages?.map((message: IMessage) => (
            <div key={message?._id}>
              <FriendMessageCard message={message} />
            </div>
          ))}
        </>
      )}
      ;
      {isTyping && (
        <div className="float-right">{isTyping && <LoadingSpinner />}</div>
      )}
    </div>
  );
};

export default ChatInbox;
