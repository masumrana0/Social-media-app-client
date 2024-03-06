import Image from "next/image";
import React from "react";
import img from "/public/assests/profile.jpg";

const ConversaionCard = () => {
  return (
    <div className="flex   gap-2 border rounded-lg w-full shadow-md bg-gray-100 mb-2 ">
      <div className="w-[60px] h-[60px] relative rounded-lg overflow-hidden   ">
        <span className="bg-green-500 absolute  h-3 w-3 rounded-full"></span>

        <Image
          className="w-full h-full object-cover  "
          src={img}
          alt="Masum Rana"
          placeholder="blur"
          width={100}
          height={200}
        />
      </div>
      <div className="py-2">
        <h3 className="font-bold">Masum Rana</h3>
        <div className="flex items-center justify-between gap-10">
          <span className="text-sm"> Hi, i am jony lynetin...</span>
        </div>
      </div>
    </div>
  );
};

export default ConversaionCard;
