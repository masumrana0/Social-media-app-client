"use client";
import FullName from "@/service/name.service";
import { IName } from "@/types/auth";
import { Avatar } from "antd";
import React from "react";
import { BsPersonCheck, BsPersonDash } from "react-icons/bs";
import { UserOutlined } from "@ant-design/icons";

interface UserData {
  name: {
    firstName: string;
    lastName: string;
  };
  profilePicture: string;
  mutualFriends: number;
}

const ChatLabel = ({ conversation }: { conversation: UserData }) => {
  const fullName = FullName(conversation.name as IName);

  return (
    <div className="lg:w-[300px]">
      <h2 className="font-semibold text-md text-gray-500 ">FRIEND REQUESTS</h2>
      <hr className="mt-5" />
      <div className=" ">
        <div className="py-2 flex gap-3 items-center justify-center hover:bg-gray-200 rounded transition-opacity duration-300 border-b-2 ">
          <Avatar
            size="large"
            src={conversation?.profilePicture}
            icon={<UserOutlined />}
          />
          <div>
            <h2 className="font-bold text-md">{fullName}</h2>
            <p className="text-gray-500">
              {conversation.mutualFriends} mutual{" "}
              {conversation.mutualFriends >= 1 ? "friends" : "friend"}
            </p>
          </div>
          <div className="flex gap-3">
            <button className="p-2 bg-gray-300 rounded-lg hover:bg-sky-500 hover:text-white font-bold transition-colors duration-300 text-2xl">
              <BsPersonCheck />
            </button>
            <button className="p-2 bg-gray-300 rounded-lg hover:bg-sky-500 hover:text-white font-bold transition-colors duration-300 text-2xl">
              <BsPersonDash />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatLabel;
