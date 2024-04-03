"use client";
import { Divider } from "antd";
import Link from "next/link";
import React from "react";
import { CgProfile } from "react-icons/cg";
import { IoMdHelpBuoy } from "react-icons/io";
import { IoSettings } from "react-icons/io5";
import { RiLogoutCircleLine } from "react-icons/ri";
import DarkmodeToggle from "../navbar/ui/DarkmodeToogle";

const MobileToogleDropdown = () => {
  return (
    <div className="bg-gray-200 text-slate-900 dark:text-gray-100 dark:bg-slate-800 absolute top-12 h-[94vh]  left-0 w-full rounded-md p-3 z-10">
      <div className="flex flex-col">
        <div className="hover:bg-sky-500  hover:text-white p-2 rounded-md cursor-pointer flex justify-between items-center gap-2">
          <p className="text-md  font-bold">Theme</p>
          <DarkmodeToggle />
        </div>
        <Divider className="my-2" />
        {[
          { Icon: CgProfile, text: "Profile", href: "/profile" },
          { Icon: IoSettings, text: "Setting", href: "/setting" },
          { Icon: IoMdHelpBuoy, text: "Help", href: "/help" },
          { Icon: RiLogoutCircleLine, text: "Logout" },
        ].map(({ Icon, text, href }, index) => (
          <div
            key={index}
            className="flex mb-2 p-2 rounded-md cursor-pointer items-center gap-2  border-black hover:text-gray-100 dark:border-white hover:bg-sky-500 shadow-sm shadow-sky-700  "
          >
            <Icon className={"text-2xl"} />
            {href ? (
              <Link href={href} className="text-sm">
                {text}
              </Link>
            ) : (
              <p className="text-sm">{text}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileToogleDropdown;
