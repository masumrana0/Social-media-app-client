"use client";
import React from "react";
import Image from "next/image";
import img from "/public/assests/profile.jpg";
import { FaFaceSmile, FaPlus } from "react-icons/fa6";
const ChatPage = () => {
  return (
    <div className="flex w-full relative">
      {/* left part */}
      <div className="lg:w-[25%] md:w-[35%] w-full p-4">
        {/* introduction texts  */}
        <div className="flex  flex-col justify-center">
          <h2 className="font-extrabold lg:text-4xl  text-4xl  text-gray-800 mb-1  ">
            Chat
          </h2>
          <p className="text-gray-700 font-semibold">Start New Conversation</p>
        </div>

        {/* friends cards  */}
        <div className="flex items-center gap-3 my-5">
          <div className="w-[120px] h-[130px] relative rounded-lg overflow-hidden   ">
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
          <div className="w-[120px] h-[130px] relative rounded-lg overflow-hidden   ">
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
          <div className="w-[120px] h-[130px] relative rounded-lg overflow-hidden   ">
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

        {/* button group  */}
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

        {/* list */}
        <div className="flex   gap-3 border rounded-lg w-full shadow-md">
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
          <div>
            <h3 className="font-bold">Masum Rana</h3>
            <div className="flex items-center justify-between gap-10">
              <span className="text-sm"> Hi, i am jony lynetin</span>
            </div>
          </div>
        </div>
      </div>

      {/* right part */}
      <div className="lg:w-[75%] md:w-[65%] border-2 bg-sky-100 h-[100vh]">
        {/* Conversation part  */}
        <div className="px-20 py-10  ">
          {/* friend test  */}
          <div className="flex gap-3  ">
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

            <div className="text-sm">
              <h4 className="  bg-sky-300 p-5 rounded-r-lg rounded-b-lg mb-3">
                Hi I am Josephin, can you help me to find best chat app?. 😀
              </h4>
              <h4 className="  bg-sky-300 p-5 rounded-r-lg rounded-b-lg mb-3 ">
                Hi I am Josephin, can you help me to find best chat app?. 😀
              </h4>
            </div>
          </div>
          {/* my text  */}
          <div className="flex gap-3 float-end ">
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
        </div>

        {/* send part  */}
        <div className="bg-white w-full absolute bottom-0">
          <div>
            <button>
              <FaFaceSmile />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
