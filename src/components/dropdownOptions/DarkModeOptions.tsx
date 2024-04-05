"use client";
import { useAppSelector } from "@/Redux/hooks";
import { RootState, store } from "@/Redux/store";
import { IDropdownOption } from "@/types/shared";

import React, { useEffect, useState } from "react";
import { BsFillMoonFill, BsSun } from "react-icons/bs";
import { FaDesktop } from "react-icons/fa";
import { useSelector } from "react-redux";

const currentState = store.getState();

const theme = currentState.themeSlice.theme;

const DarkQuery = window.matchMedia("(prefers-color-scheme: dark)");
const element = document.documentElement;

const options = [
  { icon: <BsSun />, text: "light" },
  { icon: <BsFillMoonFill />, text: "dark" },
  { icon: <FaDesktop />, text: "system" },
];

const onWindowMatch = () => {
  if (theme === "dark" || DarkQuery.matches) {
    element.classList.add("dark");
  } else {
    element.classList.remove("dark");
  }
};

switch (theme) {
  case "dark":
    element.classList.add("dark");
    localStorage.setItem("theme", "dark");
    break;
  case "light":
    element.classList.remove("dark");
    localStorage.setItem("theme", "light");
    break;
  default:
    localStorage.removeItem("theme");
    onWindowMatch();
    break;
}

DarkQuery.addEventListener("change", (e) => {
  if (!("theme" in localStorage)) {
    if (e.matches) {
      element.classList.add("dark");
    } else {
      element.classList.remove("dark");
    }
  }
});

const handleThemeChange = (text: string) => {
  console.log(text);

  const add = localStorage.setItem("theme", text);
  console.log(add);
};

export const DarkmodeOptions = options.map(({ icon, text }, index) => {
  const labelComponent = (
    <div
      onClick={() => handleThemeChange(text)}
      className={`flex items-center justify-between gap-2 text-lg font-semibold capitalize ${theme == text && "text-sky-400"}`}
    >
      {text}
      <span>{icon}</span>
    </div>
  );

  return {
    key: `${index + 1}`,
    label: labelComponent,
  };
});
