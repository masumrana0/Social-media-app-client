import FullName from "@/service/name.service";
import { INotification } from "@/types/navbar";
import { Avatar } from "antd";
// icons
import { UserOutlined } from "@ant-design/icons";
import { BsShare } from "react-icons/bs";

const SharedNotification = (props: { notification: INotification }) => {
  const { notification } = props;
  const fullName = FullName(notification?.user?.name);
  return (
    <div className="flex justify-between items-center p-2    shadow-sm shadow-sky-600  hover:bg-sky-400 rounded">
      <div className="flex items-center gap-2">
        <div>
          <Avatar
            size="large"
            src={notification?.user.profilePicture}
            icon={<UserOutlined />}
          />
        </div>
        <h3 className="text-sm text-gray-700 dark:text-gray-100">
          <span className="  font-bold">{fullName}</span> <span>shared </span>{" "}
          <span>Your Post</span>
        </h3>
      </div>
      <div>
        <BsShare className="text-lg dark:text-gray-100" />
      </div>
    </div>
  );
};

export default SharedNotification;
