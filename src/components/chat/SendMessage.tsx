/**
 * Title: 'message sending with emoji picker define done'
 * Description: ''
 * Author: 'Masum Rana'
 * Date: 06-03-2024
 *
 */

"use client";
import React, { useState } from "react";
import { AiOutlineSend } from "react-icons/ai";
import { FaRegSmile, FaPlus } from "react-icons/fa";
import Picker from "@emoji-mart/react";
import data from "@emoji-mart/data";

const SendMessage: React.FC = () => {
  const [isPickerVisible, setPickerVisible] = useState(false);
  const [textAreaValue, setTextAreaValue] = useState("");
  console.log(textAreaValue);

  const onEmojiClick = (e: any) => {
    // make string to array for copy text
    const textArray = textAreaValue.split(" ");
    // add  new emoji
    const message = [...textArray, e.native];
    // set message value as sting with emoji
    setTextAreaValue(message.join(""));
  };

  const sendMessage = () => {
    console.log("hello world");
    console.log(textAreaValue);
  };

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
      <form className="flex w-full">
        <textarea
          className="w-full h-12 border-none rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-sky-500"
          placeholder="Type your message..."
          value={textAreaValue}
          onChange={(e) => setTextAreaValue(e.target.value)}
        />
        <button
          className="ml-4 px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-500 disabled:opacity-50"
          disabled={textAreaValue == ""}
          onClick={sendMessage}
        >
          <AiOutlineSend className="h-6 w-6" />
        </button>
      </form>
    </div>
  );
};

export default SendMessage;