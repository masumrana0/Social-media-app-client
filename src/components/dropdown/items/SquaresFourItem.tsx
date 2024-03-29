"use client";
import { Avatar, type MenuProps } from "antd";
import FriendsRequestLabel from "../labels/FriendsRequestLabel";
import { UserOutlined } from "@ant-design/icons";

interface UserData {
  name: {
    firstName: string;
    lastName: string;
  };
  profilePicture: string;
  mutualFriends: number;
}
const FriendsRequests: UserData[] = [
  {
    name: {
      firstName: "Masum",
      lastName: "Rana",
    },
    profilePicture:
      "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",
    mutualFriends: 5,
  },
];

const viewAllButton = (
  <button className="w-full mt-4 py-1  bg-gray-300 text-center rounded font-semibold text-gray-600 hover:bg-sky-500 hover:text-white transition-colors duration-300">
    VIEW ALL
  </button>
);

import React from "react";
import DarkmodeToggle from "@/components/navbar/ui/DarkmodeToogle";

const SquaresFourLabelOne = () => {
  const handleSelectClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    // Stop the click event propagation to prevent the dropdown from closing
    e.stopPropagation();
  };
  return (
    <div onClick={handleSelectClick}>
      <div className="flex justify-center gap-10 items-center">
        <div>
          <Avatar
            size="large"
            // src={notification?.user.profilePicture}
            icon={<UserOutlined />}
          />
        </div>
        <div >
          <DarkmodeToggle />
        </div>
      </div>
    </div>
  );
};

// export default SquaresFourLabel;

export const SquaresFourItems: MenuProps["items"] = [
  {
    key: 1,
    label: <SquaresFourLabelOne />,
  },
];
