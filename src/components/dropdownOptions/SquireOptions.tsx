"use client";
import DarkmodeToggle from "@/components/navbar/ui/DarkmodeToogle";
import Link from "next/link";
import { CgProfile } from "react-icons/cg";
import { IoSettings } from "react-icons/io5";
import { IoMdHelpBuoy } from "react-icons/io";
import { RiLogoutCircleLine } from "react-icons/ri";
import { IDropdownOption } from "@/types/shared";

export const SquaresFourOptions: IDropdownOption[] = [
  // Theme item

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
