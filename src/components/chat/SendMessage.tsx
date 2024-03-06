"use client";
import React, { useState, useRef, useEffect } from "react";
import { AiOutlineSend } from "react-icons/ai";
import { FaRegSmile, FaPlus, FaPaperPlane } from "react-icons/fa";
import Picker from "@emoji-mart/react";
import data from "@emoji-mart/data";

interface Emoji {
  native: string;
}

const SendMessage: React.FC = () => {
  const [isPickerVisible, setPickerVisible] = useState(false);
  const [message, setMessage] = useState("");
  const [emojis, setEmojis] = useState<string[]>([]);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const handleEmojiSelect = (e: any) => {
    setEmojis([...emojis, e.native]);
  };

  const eraseEmoji = () => {
    if (emojis.length > 0) {
      setEmojis(emojis.slice(0, emojis.length - 1));
    }
  };

  const sendMessage = () => {
    const fullMessage = message + emojis.join("");
    console.log("Sending message:", fullMessage);
    setMessage("");
    setEmojis([]);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Backspace") {
      if (event.ctrlKey || event.metaKey) {
        return;
      }

      event.preventDefault();
      if (emojis.length > 0) {
        eraseEmoji();
      } else if (message.length > 0) {
        setMessage(message.slice(0, message.length - 1));
      }
    } else if (event.ctrlKey || event.metaKey) {
      // Do nothing when control/command key is pressed
      return;
    } else {
      event.preventDefault(); // Prevent duplicate characters
      setEmojis([...emojis, event.key]);
    }
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [message, emojis]);

  return (
    <div className="flex items-center p-4 border rounded-lg bg-gray-100 lg:px-32">
      <div className="flex justify-center items-center gap-2 mx-4 relative">
        <div
          onMouseLeave={() => setPickerVisible(!isPickerVisible)}
          className={`absolute top-[-27rem] ${!isPickerVisible && "hidden"}`}
        >
          <Picker
            previewPosition="none"
            onEmojiSelect={handleEmojiSelect}
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
          ref={inputRef}
          className="w-full h-12 border-none rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
          placeholder="Type your message..."
          value={emojis.join("")} // Combine emojis for display
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button
          className="ml-4 px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-500 disabled:opacity-50"
          disabled={emojis.join("").trim() === ""}
          onClick={sendMessage}
        >
          <AiOutlineSend className="h-6 w-6" />
        </button>
      </form>
    </div>
  );
};

export default SendMessage;
