import Image from "next/image";
import React from "react";
import img from "/public/assests/profile.jpg";

const MyMessageCard = () => {
  return (
    <div className="flex gap-3 float-end mb-10 ">
      <div className="text-sm">
        <h4 className=" bg-gray-300 p-5 rounded-l-lg rounded-b-lg mb-3 ">
          Hi I am Josephin, can you help me to find best chat app?. 😀
        </h4>
        <h4 className="  bg-gray-300 p-5 rounded-l-lg rounded-b-lg mb-3 ">
          Hi I am Josephin, can you help me to find best chat app?. 😀
        </h4>
      </div>
      <div className="w-[40px] h-[40px]  rounded-lg overflow-hidden">
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

export default MyMessageCard;
