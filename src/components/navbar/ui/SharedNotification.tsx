import Image from "next/image";
import FullName from "@/service/name.service";
import { INotification } from "@/types/navbar";
import { Avatar } from "antd";
// icons
import { BsShare } from "react-icons/bs";
import { UserOutlined } from "@ant-design/icons";

const SharedNotification = (props: { notification: INotification }) => {
  const { notification } = props;
  const fullName = FullName(notification?.user?.name);
  return (
    <div className="flex justify-between items-center p-2 border-b-2  hover:bg-gray-300 rounded">
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
          <span className="text-gray-500">shared </span>{" "}
          <span className=" font-bold">Your Post</span>
        </h3>
      </div>
      <div>
        <BsShare className="text-xl" />
      </div>
    </div>
  );
};

export default SharedNotification;
