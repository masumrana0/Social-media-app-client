"use client";
import React, { useState } from "react";
import { Chat, House, Bell, Plus, SquaresFour, UserPlus } from "phosphor-react";
import Dropdown from "@/components/shared/Dropdown";
import {
  notificationHeadline,
  notificationOptions,
} from "@/components/dropdownOptions/Notification";
import { SquaresFourOptions } from "@/components/dropdownOptions/SquireOptions";
import DarkModeToogle from "./DarkmodeToogle";

const Navigation = () => {
  const [navbarState, setNavbarState] = useState(1);

  return (
    <div>
      <div className="flex items-center gap-4">
        <div>
          <DarkModeToogle />
        </div>

        <nav className="flex items-center gap-10 md:gap-3  ">
          {/* chat  */}
          <div style={{ width: "100%" }}>
            {/* <Dropdown menu={{ items: ChatItems }} placement="bottomRight" arrow>
              <div className="w-full border border-sky-400 bg-sky-100 hover:bg-sky-200 transition-colors duration-300 p-2 rounded-full ">
                <Chat className="text-sky-500 font-bold md:text-xl" />
              </div>
            </Dropdown> */}
          </div>

          {/* Friend Request */}
          {/* <Dropdown
            menu={{ items: friendRequestItems }}
            className="cursor-pointer"
            placement="bottomLeft"
            arrow
          >
            <div className="border border-sky-400  bg-sky-100 hover:bg-sky-200 transition-colors duration-300  p-2 rounded-full ">
              <UserPlus className="text-sky-500 font-bold md:text-xl" />
            </div>
          </Dropdown> */}
          {/* notification */}
          {/* <Dropdown
            className="cursor-pointer"
            menu={{ items: notificationItems }}
            placement="bottomLeft"
            arrow
          >
            <div className="border border-sky-400  bg-sky-100 hover:bg-sky-200 transition-colors duration-300  p-2 rounded-full ">
              <Bell className="text-sky-500 font-bold md:text-xl" />
            </div>
          </Dropdown> */}

          <Dropdown
            placement="left"
            arrow={true}
            Headline={notificationHeadline}
            dropdownOverlay="dark:bg-slate-700 w-[25rem]"
            optionStyle="hover:bg-sky-300 dark:hover:bg-sky-400 text-sm text-gray-700 dark:text-gray-100"
            options={notificationOptions as any}
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
              placement="left"
              arrow={true}
              // Headline={SquaresFourOptions}
              dropdownOverlay="dark:bg-slate-700 w-[25rem]"
              optionStyle="hover:bg-sky-300 dark:hover:bg-sky-400 text-sm text-gray-700 dark:text-gray-100"
              options={SquaresFourOptions}
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
