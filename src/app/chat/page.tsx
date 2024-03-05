"use client";
import React from "react";
import Image from "next/image";
import img from "/public/assests/profile.jpg";
import FriendsSwiper from "@/components/chat/FriendsSwiper";
import ConversaionCard from "@/components/chat/ConversaionCard";
import LayoutControl from "@/components/chat/LayoutControl";
import FriendMessageCard from "@/components/chat/FriendMessageCard";
import MyMessageCard from "@/components/chat/MyMessageCard";
import SendMessage from "@/components/chat/SendMessage";
const ChatPage = () => {
  return (
    <div className="flex w-full relative box-border h-screen">
      {/* left part */}
      <div className="lg:w-[25%] md:w-[35%]   p-4  box-border border-r-2  ">
        {/* introduction texts  */}
        <div className="flex  flex-col justify-center">
          <h2 className="font-extrabold lg:text-4xl  text-4xl  text-gray-800 mb-1  ">
            Chat
          </h2>
          <p className="text-gray-700 font-semibold">Start New Conversation</p>
        </div>

        {/* friends swiper  */}
        <FriendsSwiper />

        {/* layout controll button group  */}
        <LayoutControl />

        {/*conversation list */}
        <ConversaionCard />
      </div>

      {/* right part */}
      <div className="lg:w-[75%] md:w-[65%]  relative   box-border ">
        {/* Conversation part  */}
        <div className=" p-20  box-border bg-sky-200 h-screen   ">
          {/* friend text */}
          <FriendMessageCard />

          {/* my text  */}
          <div>
            <MyMessageCard />
          </div>
        </div>

        {/* send part  */}
        <div className="w-full absolute  bottom-0">
          <SendMessage />
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
