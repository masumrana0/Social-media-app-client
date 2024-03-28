import FullName from "@/service/name.service";
import { INotification } from "@/types/navbar";
import Image from "next/image";
import { BsPersonCircle, BsChatLeftDots } from "react-icons/bs";

const CommentNotification = (props: { notification: INotification }) => {
  const { notification } = props;
  const fullName = FullName(notification?.user?.name);
  return (
    <div className="flex justify-between items-center p-2 border-b-2  hover:bg-sky-300 rounded">
      <div className="flex items-center gap-2">
        <div>
          {notification?.user?.profilePicture ? (
            <Image
              src={notification?.user.profilePicture}
              alt="profile picture "
              width={50}
              height={50}
              className="rounded-full"
            />
          ) : (
            <span className="text-xl">
              <BsPersonCircle />
            </span>
          )}
        </div>
        <h3 className="text-sm text-gray-500">
          <span className="text-gray-700 font-bold">{fullName}</span>{" "}
          <span className="">commented on</span>{" "}
          <span className="   ">Your Post</span>
        </h3>
      </div>
      <div className="ml-2">
        <BsChatLeftDots className="text-lg" />
      </div>
    </div>
  );
};

export default CommentNotification;
