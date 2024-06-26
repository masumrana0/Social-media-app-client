import { INotification } from "@/types/navbar";
import React from "react";
import CommentNotification from "../navbar/ui/CommentNotification";
import SharedNotification from "../navbar/ui/SharedNotification";
import LikeNotification from "../navbar/ui/LikeNotification";
import { Bell } from "phosphor-react";

const NotificationDropDown = () => {
  // dummy data
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
    <div className="bg-black-100  h-[94vh] overflow-hidden overflow-y-auto   w-full  rounded-md p-3 z-10">
      <h3 className="flex items-center gap-1 font-bold text-xl md:text-2xl mb-5 text-slate-600 dark:text-gray-100">
        Notification
        <Bell />
      </h3>
      <div className="flex flex-col gap-2 ">
        {/* Render JSX elements inside map function */}
        {notifications.map((notification: INotification, index: number) => {
          switch (notification.category) {
            case "comment":
              return (
                <CommentNotification key={index} notification={notification} />
              );
            case "shared":
              return (
                <SharedNotification key={index} notification={notification} />
              );
            case "react":
              return (
                <LikeNotification key={index} notification={notification} />
              );
            default:
              return <span key={index}>Empty Notification</span>;
          }
        })}
      </div>
    </div>
  );
};

export default NotificationDropDown;
