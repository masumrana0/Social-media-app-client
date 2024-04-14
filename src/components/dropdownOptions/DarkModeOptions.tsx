"use client";
import { setTheme } from "@/Redux/Slices/themeSlice";
import { store } from "@/Redux/store";
import React from "react";
import { BsFillMoonFill, BsSun } from "react-icons/bs";
import { FaDesktop } from "react-icons/fa";

// theme type
type ITheme = "dark" | "light" | "system";
// Subscribe to the Redux store to get real-time updates
let theme = "system";
const updateValue = () => {
  const currentState = store.getState();
  theme = currentState.themeSlice.theme;
  console.log("Updated theme outside component:", theme);
};

const handleThemeChange = (newTheme: ITheme) => {
  store.dispatch(setTheme(newTheme));
  updateValue();
};
// const currentState = store.getState();

// access to theme state in redux store
// const theme = currentState.themeSlice.theme;

// theme state options
const options = [
  { icon: <BsSun />, text: "light" },
  { icon: <BsFillMoonFill />, text: "dark" },
  { icon: <FaDesktop />, text: "system" },
];

// theme component
export const DarkmodeOptions = options.map(({ icon, text }, index) => {
  const labelComponent = (
    <button
      onClick={() => handleThemeChange(text as ITheme)}
      className={`flex items-center justify-between gap-2 text-lg font-semibold capitalize ${theme === text && "text-sky-400"}`}
    >
      {text}
      <span>{icon}</span>
    </button>
  );

  return {
    key: `${index + 1}`,
    label: labelComponent,
  };
});
