import React, { useState } from "react";
import { AiOutlineSend } from "react-icons/ai";
import { FaRegSmile, FaPlus, FaPaperPlane } from "react-icons/fa";

interface Message {
  content: string;
  sender: string;
}

const SendMessage: React.FC = () => {
  const [message, setMessage] = useState("");

  const sendMessage = () => {
    // Handle message sending logic here (e.g., send to server)
    console.log("Sending message:", message);
    setMessage(""); // Clear the message after sending
  };

  return (
    <div className="flex items-center p-4 border rounded-lg bg-gray-100 lg:px-32">
      <div className="flex justify-center items-center gap-2 mx-4">
        <button className="w-10 h-10 text-sky-700 text-xl rounded-full bg-gray-200 flex justify-center items-center">
          <FaRegSmile />
        </button>
        <button className="w-10 h-10 text-sky-700 text-xl rounded-full bg-gray-200 flex justify-center items-center">
          <FaPlus />
        </button>
      </div>
      <textarea
        className="w-full h-12 border-none rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
        placeholder="Type your message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button
        className="ml-4 px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-500 disabled:opacity-50"
        disabled={message.trim() === ""} // Disable if message is empty
        onClick={sendMessage}
      >
        <AiOutlineSend className="h-6 w-6" />
      </button>
    </div>
  );
};

export default SendMessage;
