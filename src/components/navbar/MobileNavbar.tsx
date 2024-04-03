"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Divider } from "antd";
// icons
import { GiHamburgerMenu } from "react-icons/gi";
import { RiLogoutCircleLine } from "react-icons/ri";
import { IoMdHelpBuoy } from "react-icons/io";
import { IoSettings } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { AiOutlineClose } from "react-icons/ai";
import {
  MagnifyingGlass,
  ArrowLeft,
  SquaresFour,
  Plus,
  Bell,
  UserPlus,
  Chat,
  House,
} from "phosphor-react";
// components
import DarkmodeToggle from "./ui/DarkmodeToogle";
import Navigation from "./ui/Navigation";
import NotificationDropDown from "../dropdown/Notification";
import FriendRequestDropdown from "../dropdown/FriendRequest";
import MobileToogleDropdown from "../dropdown/MobileToogleDropdown";

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isNotification, setNotification] = useState(false);
  const [isFriendRequest, setFriendRequst] = useState(false);
  const [isHiddenNavar, setHiddenNavbar] = useState(false);
  const [isChat, setChat] = useState(false);

  const closeAll = () => {
    setNotification(false);
    setFriendRequst(false);
    setChat(false);
    setHiddenNavbar(false);
    return;
  };

  const onChat = () => {
    setNotification(false);
    setFriendRequst(false);
    setHiddenNavbar(false);
    setHiddenNavbar(true);
    return setChat(true);
  };

  const onNotification = () => {
    setNotification(true);
    setFriendRequst(false);
    setHiddenNavbar(false);
    setHiddenNavbar(true);
    setChat(false);
    return;
  };

  const onFriendRequest = () => {
    setNotification(false);
    setHiddenNavbar(false);
    setHiddenNavbar(true);
    setChat(false);
    return setFriendRequst(true);
  };

  return (
    <div className="flex relative flex-col   px-1 gap-2  ">
      <div
        className={`flex justify-between items-center  p-1 ${isHiddenNavar && "hidden"}`}
      >
        {/* logo part   */}
        <div className={`${isFocused && "hidden"} flex  gap-2 items-center `}>
          <Link href="/" className="text-xl text-sky-600 font-black  ">
            CircleUp
          </Link>
        </div>

        {/* search bar */}
        <div className="w-full flex justify-center">
          {isFocused && (
            <div className="flex items-center gap-5">
              {/* arrow button */}
              <div>
                <button
                  onClick={() => setIsFocused(false)}
                  className="border text-xl bg-sky-100 hover:bg-sky-200 transition-colors duration-300  p-2 rounded-full "
                >
                  <ArrowLeft />
                </button>
              </div>
              {/* search bar  */}
              <div
                className={`w-full  flex items-center border bg-white  rounded-full  p-2`}
              >
                <span className="text-xl">
                  <MagnifyingGlass />
                </span>
                <input
                  type="text"
                  placeholder="Search..."
                  className="outline-none  "
                />
              </div>
            </div>
          )}
        </div>

        {/* dropdown */}
        <div>
          {isFocused && (
            <>
              <div className="mt-2 bg-gray-100 absolute top-10 h-[94vh] left-0 w-full  rounded-md p-3 z-10">
                <div className="flex flex-col"></div>
              </div>
            </>
          )}
        </div>
        {/* toogle bar and content */}
        <div className={`${isFocused && "hidden"}`}>
          <div className="flex items-center gap-2">
            {/* search bar  */}
            <div>
              {isFocused ? null : (
                <button
                  onClick={() => setIsFocused(true)}
                  className="border bg-sky-100 hover:bg-sky-200 transition-colors duration-300  p-2 rounded-full "
                >
                  <MagnifyingGlass />
                </button>
              )}
            </div>
            {/* toogle bar */}
            <div>
              {isOpen ? (
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="border bg-sky-100 hover:bg-sky-200 transition-colors duration-300  p-2 rounded-full "
                >
                  <AiOutlineClose className="text-xl cursor-pointer z-50 " />
                </button>
              ) : (
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="border text-xl  bg-sky-100 hover:bg-sky-200 transition-colors duration-300  p-2 rounded-full "
                >
                  <GiHamburgerMenu />
                </button>
              )}
            </div>
          </div>
          {/* toogle dropdown */}
          <div>
            {/* Dropdown Content */}
            {isOpen && <MobileToogleDropdown />}
          </div>
        </div>
        <hr />
      </div>

      {/*bottom navigation bar */}

      <div
        className={`flex justify-center items-center border-b-2 border-sky-500 ${isFocused && "hidden"}`}
      >
        <nav className="flex items-center gap-10 md:gap-3 pb-3 ">
          <button
            onClick={closeAll}
            className="border border-sky-400  bg-sky-100 hover:bg-sky-200 transition-colors duration-300  p-2 rounded-full "
          >
            <House className="text-sky-500 font-bold md:text-xl" />
          </button>

          {/* chat  */}

          <button
            onClick={onChat}
            className="w-full border border-sky-400 bg-sky-100 hover:bg-sky-200 transition-colors duration-300 p-2 rounded-full "
          >
            <Chat className="text-sky-500 font-bold md:text-xl" />
          </button>

          {/* Friend Request */}

          <button
            onClick={onFriendRequest}
            className="border border-sky-400  bg-sky-100 hover:bg-sky-200 transition-colors duration-300  p-2 rounded-full "
          >
            <UserPlus className="text-sky-500 font-bold md:text-xl" />
          </button>

          {/* notification */}
          <button
            onClick={onNotification}
            className="border border-sky-400  bg-sky-100 hover:bg-sky-200 transition-colors duration-300  p-2 rounded-full "
          >
            <Bell className="text-sky-500 font-bold md:text-xl" />
          </button>

          {/* create post */}
          <div className="hidden md:block border border-sky-400  bg-sky-100 hover:bg-sky-200 transition-colors duration-300  p-2 rounded-full ">
            <Plus className="text-sky-500 font-bold md:text-xl" />
          </div>

          {/* essential */}
          <div className="hidden md:block">
            <div className="border border-sky-400  bg-sky-100 hover:bg-sky-200 transition-colors duration-300  p-2 rounded-full ">
              <SquaresFour className="text-sky-500 font-bold md:text-xl" />
            </div>
          </div>
        </nav>
      </div>

      {/* all Dropdown */}
      <div>
        {/* notification drowpdawn content */}
        {isNotification && <NotificationDropDown />}
        {/* chat drowpdawn content */}
        {isChat && (
          <div className="bg-gray-200 absolute top-10 h-[80vh] left-0 w-full  rounded-md p-3 z-10">
            <div className="flex flex-col"></div>
          </div>
        )}
        {/* Firiend Request drowpdawn content */}
        {isChat && (
          <div className="bg-gray-200 absolute top-10 h-[100vh] left-0 w-full  rounded-md p-3 z-10">
            <div className="flex flex-col">
              <h3 className="font-bold text-2xl text-slate-600">Chat</h3>
            </div>
          </div>
        )}
        {isFriendRequest && <FriendRequestDropdown />}
      </div>
    </div>
  );
};

export default MobileNavbar;
