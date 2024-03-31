"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Divider } from "antd";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiLogoutCircleLine } from "react-icons/ri";
import { IoMdHelpBuoy } from "react-icons/io";
import { IoSettings } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { AiOutlineClose } from "react-icons/ai";
import DarkmodeToggle from "./ui/DarkmodeToogle";
import LeftSideNavBar from "./ui/LeftSideNavbar";
import Navigation from "./ui/Navigation";
import { MagnifyingGlass, ArrowLeft } from "phosphor-react";

const logo: string = "/logo.jpg";

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  return (
    <div className="flex relative flex-col   px-1 gap-2  ">
      <div className="flex justify-between items-center">
        {/* logo part and search bar  */}
        <div className={`${isFocused && "hidden"} flex  gap-2 items-center `}>
          {/* logo part */}
          <div>
            <Link
              href="/"
              className="text-md text-violet-600 font-black font_montserrat"
            >
              CircleUp
            </Link>
          </div>
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
          {isOpen ? (
            <AiOutlineClose
              onClick={() => setIsOpen(!isOpen)}
              className="text-xl cursor-pointer z-50 "
            />
          ) : (
            <GiHamburgerMenu
              onClick={() => setIsOpen(!isOpen)}
              className="text-xl cursor-pointer z-50 "
            />
          )}

          <div>
            {isOpen ? (
              <>
                <div className="bg-gray-200 absolute top-10 h-[94vh] left-0 w-full  rounded-md p-3 z-10">
                  <div className="flex flex-col">
                    {/* Profile  */}
                    <div>
                      <div className=" hover:bg-slate-100 p-2 rounded-md cursor-pointer flex justify-between items-center gap-2">
                        <p className="text-sm">Theme</p>
                        <DarkmodeToggle />
                      </div>
                      <Divider className="my-2" />
                    </div>
                    {/* Profile  */}
                    <div>
                      <div className="flex hover:bg-slate-100 p-2 rounded-md cursor-pointer items-center gap-2">
                        <CgProfile className="" />
                        <Link href="/profile" className="text-sm">
                          Profile
                        </Link>
                      </div>
                      <Divider className="my-2" />
                    </div>
                    {/* Setting */}
                    <div>
                      <div className="flex hover:bg-slate-100 p-2 rounded-md cursor-pointer items-center gap-2">
                        <IoSettings className="" />
                        <Link href="/setting" className="text-sm">
                          Setting
                        </Link>
                      </div>
                      <Divider className="my-2" />
                    </div>
                    {/* Help */}
                    <div>
                      <div className="flex hover:bg-slate-100 p-2 rounded-md cursor-pointer items-center gap-2">
                        <IoMdHelpBuoy className="text-xl" />
                        <Link href="/help" className="text-sm">
                          Help
                        </Link>
                      </div>
                      <Divider className="my-2" />
                    </div>
                    {/* Logout */}
                    <div>
                      <div className="flex hover:bg-slate-100 p-2 rounded-md cursor-pointer  items-center gap-2">
                        <RiLogoutCircleLine className="text-xl" />
                        <p className="text-sm">Logout</p>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>

      {/*bottom navigation bar */}
      <hr />
      <div
        className={`flex justify-center items-center ${isFocused && "hidden"}`}
      >
        <Navigation />
      </div>
    </div>
  );
};

export default MobileNavbar;
