import FullName from "@/service/name.service";
import { IName } from "@/types/auth";
import { Avatar } from "antd";
import Image from "next/image";
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

const FriendsRequest = ({ friendRequest }: { friendRequest: UserData }) => {
  const fullName = FullName(friendRequest.name as IName);

  return (
    <div className="py-2 flex gap-3 items-center   hover:bg-gray-200 rounded transition-opacity duration-300 border-b-2 ">
      <Avatar
        size="large"
        src={friendRequest?.profilePicture}
        icon={<UserOutlined />}
      />
      <div>
        <h2 className="font-bold text-md">{fullName}</h2>
        <p className="text-gray-500">
          {friendRequest.mutualFriends} mutual{" "}
          {friendRequest.mutualFriends >= 1 ? "friends" : "friend"}
        </p>
      </div>
      <div className="flex gap-3">
        <button className="p-2 bg-gray-300 rounded-lg hover:bg-sky-500 hover:text-white font-bold transition-colors duration-300 text-xl">
          <BsPersonCheck />
        </button>
        <button className="p-2 bg-gray-300 rounded-lg hover:bg-sky-500 hover:text-white font-bold transition-colors duration-300 text-xl">
          <BsPersonDash />
        </button>
      </div>
    </div>
  );
};

export default FriendsRequest;
