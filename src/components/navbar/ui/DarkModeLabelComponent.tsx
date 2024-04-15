"use client";
// essential imports
import { setTheme } from "@/Redux/Slices/themeSlice";
import { useAppDispatch, useAppSelector } from "@/Redux/hooks";
import { IDarkModeOption, ITheme } from "@/types/shared";
import React from "react";

const DarkmodeLabel = ({ icon, theme: Theme }: IDarkModeOption) => {
  // redux
  const dispatch = useAppDispatch();
  const theme = useAppSelector((state) => state.themeSlice.theme);

  return (
    <button
      onClick={() => dispatch(setTheme(Theme))}
      className={`flex items-center justify-between gap-2 text-lg font-semibold capitalize   ${
        theme === Theme && "text-sky-400 hover:text-gray-50 "
      } `}
    >
      {Theme}
      <span>{icon}</span>
    </button>
  );
};

export default DarkmodeLabel;
