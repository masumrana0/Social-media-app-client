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
    <div className="py-2 flex gap-3 items-center justify-around  rounded transition-opacity duration-300  shadow-sm shadow-sky-600 sm: ">
      <div className="flex items-center gap-2">
        <Avatar
          size="large"
          src={friendRequest?.profilePicture}
          icon={<UserOutlined />}
        />
        <div className="dark:text-gray-100 text-gray-700">
          <h2 className="font-bold text-md ">{fullName}</h2>
          <p className="text-[10px] md:text-sm ">
            {friendRequest.mutualFriends} mutual{" "}
            {friendRequest.mutualFriends >= 1 ? "friends" : "friend"}
          </p>
        </div>
      </div>
      <div className="flex gap-2">
        <button className="p-2  rounded-lg  bg-sky-500 text-white hover:text-white font-semibold transition-colors duration-300 text-sm">
          Confirm
        </button>
        <button className="p-2 bg-slate-500  rounded-lg hover:bg-slate-700  text-white font-semibold transition-colors duration-300 text-sm">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default FriendsRequest;
