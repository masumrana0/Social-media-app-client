"use client";
import FullName from "@/service/name.service";
import { INotification } from "@/types/navbar";
import { Avatar } from "antd";
// icons
import { UserOutlined } from "@ant-design/icons";
import { BsHeart } from "react-icons/bs";

const LikeNotification = (props: { notification: INotification }) => {
  const { notification } = props;
  const fullName = FullName(notification.user.name);
  return (
    <div className="flex justify-between items-center p-2  shadow-sm   rounded">
      <div className="flex items-center gap-2">
        <div>
          <Avatar
            size="large"
            src={notification?.user.profilePicture}
            icon={<UserOutlined />}
          />
        </div>
        <h3>
          <span className=" font-bold">{fullName}</span>{" "}
          <span className="">love </span> <span className="  ">Your Post</span>
        </h3>
      </div>
      <div>
        <BsHeart className="text-lg " />
      </div>
    </div>
  );
};

export default LikeNotification;
