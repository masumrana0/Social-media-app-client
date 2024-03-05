import React from "react";

const LayoutControl = () => {
  return (
    <div className="my-8 flex justify-evenly">
      <button className="bg-sky-500  shadow-md shadow-sky-400font-bold text-1xl px-6 py-2  text-white rounded-lg ">
        Chat
      </button>
      <button className="bg-gray-400  font-bold text-1xl px-6 py-2  text-white rounded-lg ">
        Group
      </button>
      <button className="bg-gray-400 font-bold text-1xl px-6 py-2  text-white rounded-lg ">
        Friends
      </button>
    </div>
  );
};

export default LayoutControl;
