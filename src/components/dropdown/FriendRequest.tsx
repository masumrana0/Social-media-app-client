import React from "react";
import FriendsRequest from "./labels/FriendsRequestLabel";
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
    <div className="bg-gray-200 absolute top-10 h-[80vh] left-0 w-full  rounded-md p-3 z-10">
      <h3 className="font-bold text-2xl text-slate-600">Friend Request</h3>
      <div>
        {FriendsRequests.map((friendRequest: UserData, index) => (
          <FriendsRequest key={index} friendRequest={friendRequest} />
        ))}
      </div>
    </div>
  );
};

export default FriendRequestDropdown;
