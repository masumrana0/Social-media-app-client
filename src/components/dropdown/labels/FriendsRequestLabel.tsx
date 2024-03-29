import FullName from "@/service/name.service";
import { IName } from "@/types/auth";
import Image from "next/image";
import React from "react";
import { BsPersonCheck, BsPersonDash } from "react-icons/bs";

interface UserData {
  name: {
    firstName: string;
    lastName: string;
  };
  profilePicture: string;
  mutualFriends: number;
}

const FriendsRequestLabel = ({
  friendRequest,
}: {
  friendRequest: UserData;
}) => {
  const fullName = FullName(friendRequest.name as IName);

  return (
    <div className="lg:w-[300px]">
      <h2 className="font-semibold text-md text-gray-500 ">FRIEND REQUESTS</h2>
      <hr className="mt-5" />
      <div className=" h-[300px] overflow-auto   ">
        <div className="py-2 flex gap-3 items-center justify-center hover:bg-gray-200 rounded transition-opacity duration-300 border-b-2 ">
          <Image
            src={friendRequest.profilePicture}
            alt="friendRequest picture "
            width={50}
            height={50}
            className="rounded-full"
          />
          <div>
            <h2 className="font-bold text-md">{fullName}</h2>
            <p className="text-gray-500">
              {friendRequest.mutualFriends} mutual{" "}
              {friendRequest.mutualFriends >= 1 ? "friends" : "friend"}
            </p>
          </div>
          <div className="flex gap-3">
            <button className="p-2 bg-gray-300 rounded-lg hover:bg-sky-500 hover:text-white font-bold transition-colors duration-300 text-2xl">
              <BsPersonCheck />
            </button>
            <button className="p-2 bg-gray-300 rounded-lg hover:bg-sky-500 hover:text-white font-bold transition-colors duration-300 text-2xl">
              <BsPersonDash />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendsRequestLabel;
