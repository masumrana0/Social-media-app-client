"use client";
import { useAppSelector } from "@/Redux/hooks";
import { DarkmodeOptions } from "@/components/dropdownOptions/DarkModeOptions";
import Dropdown from "@/components/shared/Dropdown";
import React, { useEffect } from "react";
import { BsFillMoonFill, BsSun } from "react-icons/bs";
import { FaDesktop } from "react-icons/fa";

const TestDarkMode = () => {
  const theme = useAppSelector((state) => state.themeSlice.theme);
  // access  to system theme mode
  const darkQuery = window.matchMedia("(prefers-color-scheme:dark)");
  // access element
  const element = document.documentElement;

  const onWindowMatch = () => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) && darkQuery.matches)
    ) {
      element.classList.add("dark");
    } else {
      element.classList.remove("dark");
    }
  };
  darkQuery.addEventListener("change", (e) => {
    if (!("theme" in localStorage)) {
      if (e.matches) {
        element.classList.add("dark");
      } else {
        element.classList.remove("dark");
      }
    }
  });

  useEffect(() => {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theme]);
  
  return (
    <div>
      <Dropdown
        optionsContainerStyle="gap-0"
        optionStyle="hover:bg-sky-300 px-2 py-1 "
        dropdownOverlay="w-32 p-0"
        options={DarkmodeOptions}
      >
        <div className="   bg-sky-100 hover:bg-sky-200 transition-colors duration-300  p-2 rounded-full ">
          {theme == "system" && (
            <FaDesktop className="text-sky-500 font-bold md:text-xl" />
          )}
          {theme == "light" && (
            <BsSun className="text-sky-500 font-bold md:text-xl" />
          )}
          {theme == "dark" && (
            <BsFillMoonFill className="text-sky-500 font-bold md:text-xl" />
          )}
        </div>
      </Dropdown>
    </div>
  );
};

export default TestDarkMode;
