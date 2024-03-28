import type { MenuProps } from "antd";
import FriendsRequestLabel from "../labels/FriendsRequestLabel";

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
export const friendRequestItems: MenuProps["items"] = FriendsRequests.map(
  (friendRequest: UserData, index: number) => {
    let labelComponent;
    labelComponent = (
      <FriendsRequestLabel key={index} friendRequest={friendRequest} />
    );

    return {
      key: `${index + 1}`,
      label: labelComponent,
    };
  }
);
