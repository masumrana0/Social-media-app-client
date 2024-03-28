"use client";
import React from "react";
import Image from "next/image";
import { IMessage } from "@/types/chat";

const FriendMessageCard = ({ message }: { message: IMessage }) => {
  return (
    <div className="flex gap-3 mb-10 ">
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

      <div className="text-sm">
        <h4 className="  bg-sky-300 p-5 rounded-r-lg rounded-b-lg mb-3">
          {message.text}
        </h4>
        {/* <h4 className="  bg-sky-300 p-5 rounded-r-lg rounded-b-lg mb-3 ">
          Hi I am Josephin, can you help me to find best chat app?. 😀
        </h4> */}
      </div>
    </div>
  );
};

export default FriendMessageCard;
