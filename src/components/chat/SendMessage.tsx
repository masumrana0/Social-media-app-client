/**
 * Title: 'message sending with emoji picker define done'
 * Description: ''
 * Author: 'Masum Rana'
 * Date: 06-03-2024
 *
 */

"use client";
import { useSendMessageMutation } from "@/Redux/api/chatApi";
import { useAppSelector } from "@/Redux/hooks";
import { useSocketContext } from "@/Socket/socketContext";
import { IMessage } from "@/types/chat";
import { getParticipantData } from "@/utils/chat.utils";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import React, { useEffect, useState } from "react";
import { AiOutlineSend } from "react-icons/ai";
import { FaPlus, FaRegSmile } from "react-icons/fa";
import LoadingSpinner from "../shared/LoadingSpinner";

const SendMessage: React.FC = () => {
  const { socket } = useSocketContext();
  // essential state
  const [isPickerVisible, setPickerVisible] = useState(false);
  const [textAreaValue, setTextAreaValue] = useState("");

  // redux
  const [sendMessage, { isLoading }] = useSendMessageMutation();
  const conversation = useAppSelector((state) => state.chatSlice);

  const participantId = getParticipantData(conversation)?.userId;

  //   handle clicking and adding emoji in input
  const onEmojiClick = (e: any) => {
    // make string to array for copy text
    const textArray = textAreaValue.split(" ");
    // add  new emoji
    const message = [...textArray, e.native];
    // set message value as sting with emoji
    setTextAreaValue(message.join(""));
  };

  const handleChange = (e: any) => {};

  const handleSendMessage = async () => {
    const data: IMessage = {
      text: textAreaValue,
      receiver: participantId as string,
    };
    const res = await sendMessage(data);
    if (res) {
      setTextAreaValue("");
    }
  };

  // Typing logic
  useEffect(() => {
    const handleTyping = () => {
      console.log(textAreaValue.length);

      if (textAreaValue.length > 0) {
        socket?.emit("typing", true); // Emit 'typing' event when user starts typing
      } else if (textAreaValue.length === 0) {
        socket?.emit("stopTyping"); // Emit 'stopTyping' event when user stops typing
      }
    };

    handleTyping();
    // socket?.on("connect", handleTyping); // Add typing event listener on socket connect
    socket?.on("disconnect", handleTyping); // Remove typing event listener on socket disconnect

    return () => {
      socket?.off("connect", handleTyping);
      socket?.off("disconnect", handleTyping);
    };
  }, [socket, textAreaValue]); // Dependencies for the effect

  return (
    <div className="flex items-center p-4 border rounded-lg bg-gray-100 lg:px-32">
      <div className="flex justify-center items-center gap-2 mx-4 relative">
        <div
          onMouseLeave={() => setPickerVisible(!isPickerVisible)}
          className={`absolute top-[-27rem] ${!isPickerVisible && "hidden"}`}
        >
          <Picker
            previewPosition="none"
            onEmojiSelect={onEmojiClick}
            data={data}
          />
        </div>
        <button
          onClick={() => setPickerVisible(!isPickerVisible)}
          className="w-10 h-10 text-sky-700 text-xl rounded-full bg-gray-200 flex justify-center items-center"
        >
          <FaRegSmile />
        </button>

        <button className="w-10 h-10 text-sky-700 text-xl rounded-full bg-gray-200 flex justify-center items-center">
          <FaPlus />
        </button>
      </div>

      <textarea
        className="w-full h-12 border-none rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-sky-500"
        placeholder="Type your message..."
        value={textAreaValue}
        onChange={(e) => setTextAreaValue(e.target.value)}
      />
      <button
        className="ml-4  px-4  py-2  rounded-md bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-500 disabled:opacity-50"
        disabled={textAreaValue == ""}
        onClick={handleSendMessage}
      >
        {isLoading ? (
          <LoadingSpinner type="small" />
        ) : (
          <AiOutlineSend className="h-6 w-6" />
        )}
      </button>
    </div>
  );
};

export default SendMessage;
