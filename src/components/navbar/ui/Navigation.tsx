"use client";
import React, { useState } from "react";
import {
  Chat,
  House,
  Bell,
  Plus,
  GearSix,
  Pen,
  Phone,
  SignOut,
  SquaresFour,
  UserCircle,
  Users,
  UserPlus,
} from "phosphor-react";
import { Dropdown } from "antd";
import { notificationItems } from "@/components/dropdown/items/NotificationItem";
import { friendRequestItems } from "@/components/dropdown/items/FriendsRequestItem";

const Navigation = () => {
  const [navbarState, setNavbarState] = useState(1);
  return (
    <div>
      <div className="flex items-center gap-4">
        <div className="flex gap-2 items-center px-2 py-1 rounded-full border  border-sky-300 hover:bg-sky-100">
          <h3 className="text-gray-800 text-sm font-semibold">Masum</h3>
        </div>
        <nav className="flex items-center gap-3">
          <div className="border border-sky-400  bg-sky-100 hover:bg-sky-200 transition-colors duration-300  p-2 rounded-full ">
            <House className="text-sky-500 font-bold" size={25} />
          </div>
          <div className="border border-sky-400  bg-sky-100 hover:bg-sky-200 transition-colors duration-300  p-2 rounded-full ">
            <Chat className="text-sky-500 font-bold" size={25} />
          </div>

          {/* Friend Request */}
          <Dropdown
            menu={{ items: friendRequestItems }}
            className="cursor-pointer"
            placement="bottomLeft"
            arrow
          >
            <div className="border border-sky-400  bg-sky-100 hover:bg-sky-200 transition-colors duration-300  p-2 rounded-full ">
              <UserPlus className="text-sky-500 font-bold" size={25} />
            </div>
          </Dropdown>
          {/* notification */}
          <Dropdown
            className="cursor-pointer"
            menu={{ items: notificationItems }}
            placement="bottomLeft"
            arrow
          >
            <div className="border border-sky-400  bg-sky-100 hover:bg-sky-200 transition-colors duration-300  p-2 rounded-full ">
              <Bell className="text-sky-500 font-bold" size={25} />
            </div>
          </Dropdown>

          {/* create post */}
          <div className="border border-sky-400  bg-sky-100 hover:bg-sky-200 transition-colors duration-300  p-2 rounded-full ">
            <Plus className="text-sky-500 font-bold" size={25} />
          </div>
          {/* essential */}
          <div className="border border-sky-400  bg-sky-100 hover:bg-sky-200 transition-colors duration-300  p-2 rounded-full ">
            <SquaresFour className="text-sky-500 font-bold" size={25} />
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navigation;
