import type { MenuProps } from "antd";
import { INotification } from "@/types/navbar";
import CommentNotification from "@/components/navbar/ui/CommentNotification";
import SharedNotification from "@/components/navbar/ui/SharedNotification";
import LikeNotification from "@/components/navbar/ui/LikeNotification";

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

const viewAllButton = (
  <button className="w-full mt-4 py-1  bg-gray-300 text-center rounded font-semibold text-gray-600 hover:bg-sky-500 hover:text-white transition-colors duration-300">
    VIEW ALL
  </button>
);

export const notificationItems: MenuProps["items"] = notifications
  .map((notification: INotification, index: number) => {
    let labelComponent;

    switch (notification.category) {
      case "comment":
        labelComponent = (
          <CommentNotification key={index} notification={notification} />
        );
        break;
      case "shared":
        labelComponent = (
          <SharedNotification key={index} notification={notification} />
        );
        break;
      case "react":
        labelComponent = (
          <LikeNotification key={index} notification={notification} />
        );
        break;
      default:
        labelComponent = <span key={index}>Empty Notification</span>;
    }

    return {
      key: `${index + 1}`,
      label: labelComponent,
    };
  })
  .concat({
    key: "view-all",
    label: viewAllButton,
  });
