import { Avatar } from "antd";
import FullName from "@/service/name.service";
import { INotification } from "@/types/navbar";
import { UserOutlined } from "@ant-design/icons";
import { BsChatLeftDots } from "react-icons/bs";

const CommentNotification = (props: { notification: INotification }) => {
  const { notification } = props;
  const fullName = FullName(notification?.user?.name);
  return (
    <div className="flex justify-between items-center p-2 shadow-sm shadow-sky-600     rounded">
      <div className="flex items-center gap-2">
        <Avatar
          size="large"
          src={notification?.user.profilePicture}
          icon={<UserOutlined />}
        />
        <h3>
          <span className=" font-bold">{fullName}</span> commented on Your Post
        </h3>
      </div>
      <div className="ml-2">
        <BsChatLeftDots className="text-lg " />
      </div>
    </div>
  );
};

export default CommentNotification;
