import React from "react";
import SearchBar from "./ui/SearchBar";
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
} from "phosphor-react";

// import person from "/public/masum.jpg";

const DesktopNavbar = () => {
  return (
    <div className="flex justify-between gap-5  bg-stone-200 py-5 px-20">
      {/* left section */}
      <div className="flex gap-5 items-center">
        <h3 className="font-bold text-3xl">Circle Up</h3>
        <SearchBar />
      </div>
      {/* right section */}
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
          <div className="border border-sky-400  bg-sky-100 hover:bg-sky-200 transition-colors duration-300  p-2 rounded-full ">
            <Bell className="text-sky-500 font-bold" size={25} />
          </div>
          <div className="border border-sky-400  bg-sky-100 hover:bg-sky-200 transition-colors duration-300  p-2 rounded-full ">
            <Plus className="text-sky-500 font-bold" size={25} />
          </div>
          <div className="border border-sky-400  bg-sky-100 hover:bg-sky-200 transition-colors duration-300  p-2 rounded-full ">
            <SquaresFour className="text-sky-500 font-bold" size={25} />
          </div>
        </nav>
      </div>
    </div>
  );
};

export default DesktopNavbar;
