"use client";
import React from "react";

const LayoutControl = () => {
  return (
    <div className="my-8 flex justify-evenly gap-3">
      <button className="bg-sky-500  shadow-md shadow-sky-400 font-semibold text-1xl px-5 py-1  text-white rounded-full ">
        Chat
      </button>
      <button className="bg-gray-500  shadow-md shadow-sky-400 font-semibold text-1xl px-5 py-1  text-white rounded-full ">
        Group
      </button>
      <button className="bg-gray-500  shadow-md shadow-sky-400 font-semibold text-1xl px-5 py-1  text-white rounded-full ">
        Friends
      </button>
    </div>
  );
};

export default LayoutControl;
