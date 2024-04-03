import React from "react";
import { MenuProps } from "antd";
import DarkmodeToggle from "@/components/navbar/ui/DarkmodeToogle";
import Link from "next/link";
import { CgProfile } from "react-icons/cg";
import { IoSettings } from "react-icons/io5";
import { IoMdHelpBuoy } from "react-icons/io";
import { RiLogoutCircleLine } from "react-icons/ri";

const ThemeLabel = () => {
  const handleSelectClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    // Stop the click event propagation to prevent the dropdown from closing
    e.stopPropagation();
  };
  return (
    <div
      onClick={handleSelectClick}
      className="hover:bg-sky-500 hover:text-white p-2 rounded-md cursor-pointer flex justify-between items-center gap-2"
    >
      <p className="text-md font-bold">Theme</p>
      <DarkmodeToggle />
    </div>
  );
};

export default ThemeLabel;

export const SquaresFourItems: MenuProps["items"] = [
  // Theme item
  {
    key: "theme",
    label: <ThemeLabel />,
  },
  // Profile item
  { Icon: CgProfile, text: "Profile", href: "/profile" },
  // Setting item
  { Icon: IoSettings, text: "Setting", href: "/setting" },
  // Help item
  { Icon: IoMdHelpBuoy, text: "Help", href: "/help" },
  // Logout item
  { Icon: RiLogoutCircleLine, text: "Logout" },
].map(({ Icon, text, href }, index) => {
  // Check if it's the theme item
  if (index === 0) {
    return {
      key: "theme",
      label: (
        <div
          onClick={(e) => e.stopPropagation()}
          className="hover:bg-sky-500 hover:text-white p-2 rounded-md cursor-pointer flex justify-between items-center gap-2"
        >
          <p className="text-md font-bold">Theme</p>
          <DarkmodeToggle />
        </div>
      ),
    };
  }

  // For other items
  const labelComponent = (
    <div
      key={index}
      className="flex  p-2 rounded-md cursor-pointer items-center gap-2 border-black hover:text-gray-100 dark:border-white hover:bg-sky-500 shadow-sm shadow-sky-700"
    >
      {Icon && <Icon className="text-2xl" />}
      {href ? (
        <Link href={href} className="text-sm">
          {text}
        </Link>
      ) : (
        <p className="text-sm">{text}</p>
      )}
    </div>
  );

  return {
    key: `${index + 1}`,
    label: labelComponent,
  };
});
