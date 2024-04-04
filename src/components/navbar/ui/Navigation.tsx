"use client";
import React, { useState } from "react";
import { UserOutlined } from "@ant-design/icons";
import { Chat, House, Bell, Plus, SquaresFour, UserPlus } from "phosphor-react";
import { Avatar, Dropdown } from "antd";
import { notificationItems } from "@/components/dropdown/items/NotificationItem";
import { friendRequestItems } from "@/components/dropdown/items/FriendsRequestItem";
import { ChatItems } from "@/components/dropdown/items/ChatItem";
import masum from "/public/masum.jpg";
import { SquaresFourItems } from "@/components/dropdown/items/SquaresFourItem";

const Navigation = () => {
  const [navbarState, setNavbarState] = useState(1);
  return (
    <div>
      <div className="flex items-center gap-4">
        <div className="hidden   md:flex gap-2 items-center px-2 py-1 rounded-full border  border-sky-300 hover:bg-sky-100">
          <Avatar size="small" src={masum} icon={<UserOutlined />} />
          <h3 className="text-gray-800 text-sm font-semibold">Masum</h3>
        </div>

        <nav className="flex items-center gap-10 md:gap-3  ">
          <div className="border border-sky-400  bg-sky-100 hover:bg-sky-200 transition-colors duration-300  p-2 rounded-full ">
            <House className="text-sky-500 font-bold md:text-xl" />
          </div>

          {/* chat  */}
          <div style={{ width: "100%" }}>
            <Dropdown menu={{ items: ChatItems }} placement="bottomRight" arrow>
              <div className="w-full border border-sky-400 bg-sky-100 hover:bg-sky-200 transition-colors duration-300 p-2 rounded-full ">
                <Chat className="text-sky-500 font-bold md:text-xl" />
              </div>
            </Dropdown>
          </div>

          {/* Friend Request */}
          <Dropdown
            menu={{ items: friendRequestItems }}
            className="cursor-pointer"
            placement="bottomLeft"
            arrow
          >
            <div className="border border-sky-400  bg-sky-100 hover:bg-sky-200 transition-colors duration-300  p-2 rounded-full ">
              <UserPlus className="text-sky-500 font-bold md:text-xl" />
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
              <Bell className="text-sky-500 font-bold md:text-xl" />
            </div>
          </Dropdown>

          {/* create post */}
          <div className="hidden md:block border border-sky-400  bg-sky-100 hover:bg-sky-200 transition-colors duration-300  p-2 rounded-full ">
            <Plus className="text-sky-500 font-bold md:text-xl" />
          </div>

          {/* essential */}
          <div className="hidden md:block">
            <Dropdown
              overlayStyle={{ backgroundColor: "var(--color-slate-800)" }}
              menu={{ items: SquaresFourItems }}
              placement="bottomLeft"
              arrow
            >
              <div className="border border-sky-400  bg-sky-100 hover:bg-sky-200 transition-colors duration-300  p-2 rounded-full ">
                <SquaresFour className="text-sky-500 font-bold md:text-xl" />
              </div>
            </Dropdown>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navigation;
