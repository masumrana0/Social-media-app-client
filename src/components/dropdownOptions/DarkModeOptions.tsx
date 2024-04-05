"use client";
import { setTheme } from "@/Redux/Slices/themeSlice";
import { useAppDispatch, useAppSelector } from "@/Redux/hooks";
import { RootState, store } from "@/Redux/store";
import { IDropdownOption } from "@/types/shared";

import React, { useEffect, useState } from "react";
import { BsFillMoonFill, BsSun } from "react-icons/bs";
import { FaDesktop } from "react-icons/fa";
import { useSelector } from "react-redux";

// redux
const currentState = store.getState();
// access to theme state in redux store
const theme = currentState.themeSlice.theme;

// theme state options
const options = [
  { icon: <BsSun />, text: "light" },
  { icon: <BsFillMoonFill />, text: "dark" },
  { icon: <FaDesktop />, text: "system" },
];

// theme type
type ITheme = "dark" | "light" | "system";

// theme component
export const DarkmodeOptions = options.map(({ icon, text }, index) => {
  const labelComponent = (
    <button
      onClick={() => store.dispatch(setTheme(text as ITheme))}
      className={`flex items-center justify-between gap-2 text-lg font-semibold capitalize ${theme == text && "text-sky-400"}`}
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
