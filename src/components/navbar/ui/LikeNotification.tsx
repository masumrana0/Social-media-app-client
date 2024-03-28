import FullName from "@/service/name.service";
import { INotification } from "@/types/navbar";
import Image from "next/image";
import { BsPersonCircle, BsHeart } from "react-icons/bs";

const LikeNotification = (props: { notification: INotification }) => {
  const { notification } = props;
  const fullName = FullName(notification.user.name);
  return (
    <div className="flex justify-between items-center p-2 border-b-2  hover:bg-gray-300 rounded">
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
            <span className="text-2xl">
              <BsPersonCircle />
            </span>
          )}
        </div>
        <h3>
          <span className=" font-bold">{fullName}</span>{" "}
          <span className="text-gray-500">love </span>{" "}
          <span className=" font-bold">Your Post</span>
        </h3>
      </div>
      <div>
        <BsHeart className="text-xl" />
      </div>
    </div>
  );
};

export default LikeNotification;
