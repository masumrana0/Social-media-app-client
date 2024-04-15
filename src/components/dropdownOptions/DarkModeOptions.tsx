import React from "react";
import { BsFillMoonFill, BsSun } from "react-icons/bs";
import { FaDesktop } from "react-icons/fa";
import DarkmodeLabel from "../navbar/ui/DarkModeLabelComponent";
import { IDarkModeOption } from "@/types/shared";

const options: IDarkModeOption[] = [
  { icon: <BsSun />, theme: "light" },
  { icon: <BsFillMoonFill />, theme: "dark" },
  { icon: <FaDesktop />, theme: "system" },
];

// theme component
export const DarkmodeOptions = options.map(({ icon, theme }, index) => {
  const labelComponent = (
    <DarkmodeLabel icon={icon} theme={theme} key={index} />
  );

  return {
    key: `${index + 1}`,
    label: labelComponent,
  };
});
