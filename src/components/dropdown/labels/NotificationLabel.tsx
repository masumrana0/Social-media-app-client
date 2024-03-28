import CommentNotification from "@/components/navbar/ui/CommentNotification";
import LikeNotification from "@/components/navbar/ui/LikeNotification";
import SharedNotification from "@/components/navbar/ui/SharedNotification";
import { INotification } from "@/types/navbar";
import { BsBell } from "react-icons/bs";

const NotificationLabel = () => {
  const notifications: INotification[] = [
    {
      category: "comment",
      user: {
        profilePicture:
          "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",
        name: {
          firstName: "David",
          lastName: "Kim",
        },
      },
      time: "30",
    },
    {
      category: "react",
      user: {
        profilePicture:
          "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",
        name: {
          firstName: "David",
          lastName: "Kim",
        },
      },
      time: "50",
    },
    {
      category: "shared",
      user: {
        profilePicture:
          "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",
        name: {
          firstName: "David",
          lastName: "Kim",
        },
      },
      time: "",
    },
    {
      category: "shared",
      user: {
        profilePicture:
          "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",
        name: {
          firstName: "David",
          lastName: "Kim",
        },
      },
      time: "",
    },
    {
      category: "shared",
      user: {
        profilePicture:
          "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",
        name: {
          firstName: "David",
          lastName: "Kim",
        },
      },
      time: "",
    },
  ];

  return (
    <div className="lg:w-[300px]">
      <div className="flex justify-between items-center">
        <h2 className="font-semibold text-md text-gray-500 ">NOTIFICATIONS</h2>
        <span className="text-xl text-gray-300">
          <BsBell />
        </span>
      </div>
      <hr className="mt-5" />
      <div className="h-[300px] overflow-auto">
        {notifications?.map((notification: INotification, index: number) => {
          if (notification.category === "comment") {
            return (
              <CommentNotification key={index} notification={notification} />
            );
          } else if (notification.category === "shared") {
            return (
              <SharedNotification key={index} notification={notification} />
            );
          } else if (notification.category == "react") {
            return <LikeNotification key={index} notification={notification} />;
          }
          return <span key={index}>Emty Notification</span>;
        })}
      </div>
      <p className="mt-4 py-1 bg-gray-300 text-center rounded font-semibold text-gray-600 hover:bg-sky-500 hover:text-white transition-colors duration-300">
        VIEW ALL
      </p>
    </div>
  );
};

export default NotificationLabel;
