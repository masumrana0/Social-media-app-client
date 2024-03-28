"use client";
import Image from "next/image";
import React from "react";
import img from "/public/assests/profile.jpg";

const FriendsSwiper = () => {
  return (
    <div className="flex items-center gap-3 my-5">
      <div className="w-32 h-40 md:h-32 relative rounded-lg overflow-hidden   ">
        <div className="absolute left-2 bottom-0 flex justify-around items-center gap-5">
          <h2 className="text-gray-500 font-semibold     ">Masum</h2>
          <span className="bg-green-500 h-2 w-2 rounded-full"></span>
        </div>
        <Image
          className="w-full h-full object-cover  "
          src={img}
          alt="Masum Rana"
          placeholder="blur"
          width={100}
          height={200}
        />
      </div>
      <div className="w-32 h-40 md:h-32 relative rounded-lg overflow-hidden   ">
        <div className="absolute left-2 bottom-0 flex justify-around items-center gap-5">
          <h2 className="text-gray-500 font-semibold     ">Masum</h2>
          <span className="bg-green-500 h-2 w-2 rounded-full"></span>
        </div>
        <Image
          className="w-full h-full object-cover  "
          src={img}
          alt="Masum Rana"
          placeholder="blur"
          width={100}
          height={200}
        />
      </div>
      <div className="w-32 h-40 md:h-32 relative rounded-lg overflow-hidden   ">
        <div className="absolute left-2 bottom-0 flex justify-around items-center gap-5">
          <h2 className="text-gray-500 font-semibold     ">Masum</h2>
          <span className="bg-green-500 h-2 w-2 rounded-full"></span>
        </div>
        <Image
          className="w-full h-full object-cover  "
          src={img}
          alt="Masum Rana"
          placeholder="blur"
          width={100}
          height={200}
        />
      </div>
    </div>
  );
};

export default FriendsSwiper;
