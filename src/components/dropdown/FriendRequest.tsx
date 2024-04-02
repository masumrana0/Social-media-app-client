import React from "react";
import FriendsRequest from "./labels/FriendsRequestLabel";
import { UserPlus } from "phosphor-react";
interface UserData {
  name: {
    firstName: string;
    lastName: string;
  };
  profilePicture: string;
  mutualFriends: number;
}
const FriendsRequests: UserData[] = [
  {
    name: {
      firstName: "Masum",
      lastName: "Rana",
    },
    profilePicture:
      "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",
    mutualFriends: 5,
  },
];
const FriendRequestDropdown = () => {
  return (
    <div className=" h-[80vh]  w-full  rounded-md p-3 z-10">
      <h3 className="flex  items-center gap-1 font-bold text-lg md:text-2xl mb-5 text-slate-600 dark:text-gray-100">
        FriendRequests <UserPlus />
      </h3>
      <div>
        {FriendsRequests.map((friendRequest: UserData, index) => (
          <FriendsRequest key={index} friendRequest={friendRequest} />
        ))}
      </div>
    </div>
  );
};

export default FriendRequestDropdown;
