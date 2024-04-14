import React from "react";
import Avatar from "../shared/Avatar";
import { IUserCommonData } from "@/types/shared";
import FullName from "@/service/name.service";

const UserCard = (userData:IUserCommonData) => {
    const fullName=FullName(userData.name)
  return (
    <div className="flex items-center gap-2">
      <Avatar src={""} height={0} width={0} />
      <div className="dark:text-gray-100 text-gray-700">
        <h2 className="font-bold text-md ">{fullName}</h2>
        <p className="text-[10px] md:text-sm ">
          {userData.mutualFriends} mutual{" "}
          {userData.mutualFriends >= 1 ? "friends" : "friend"}
        </p>
      </div>
    </div>
  );
};

export default UserCard;
