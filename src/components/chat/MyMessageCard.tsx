"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import img from "/public/assests/profile.jpg";
import { IMessage } from "@/types/chat";

const MyMessageCard = ({ message }: { message: IMessage }) => {
  const [showAvatar, setShowAvatar] = useState(true);
  const [lastSenderId, setLastSenderId] = useState<string | null>(null);

  useEffect(() => {
    // Check if the current message's sender ID is different from the last one
    if (lastSenderId !== message?.sender) {
      // setLastSenderId(message?.sender);
      setShowAvatar(true);
    } else {
      setShowAvatar(false);
    }
  }, [message.sender, lastSenderId]);
  return (
    <div className="flex gap-3 float-end mb-10 ">
      <div className="text-sm">
        <h4 className=" bg-gray-300 p-5 rounded-l-lg rounded-b-lg mb-3 ">
          {message.text}
        </h4>
      </div>
      {/* avatar */}
      {/* <div className="w-[40px] h-[40px]  rounded-lg overflow-hidden">
        <Image
          className="w-full h-full object-cover  "
          src={img}
          alt="Masum Rana"
          placeholder="blur"
          width={100}
          height={200}
        />
      </div> */}
    </div>
  );
};

export default MyMessageCard;
