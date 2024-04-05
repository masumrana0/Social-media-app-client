"use client";
import cn from "@/lib/cn";
import React, { useEffect, useRef, useState } from "react";

import { BsFillMoonFill, BsSun, BsPcDisplayHorizontal } from "react-icons/bs";

interface DropdownProps {
  placement?: "left" | "right";
  dropdownOverlay?: string;
  optionStyle?: string;
  Headline?: string | any;
  optionsContainerStyle?: string;
  arrow?: boolean;
}

const DarkmodeToogle: React.FC<DropdownProps> = ({
  arrow = false,
  placement = "left",
  dropdownOverlay,
  optionStyle,
  Headline,
  optionsContainerStyle,
}) => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "system"
  );

  // access  to system theme mode
  const darkQuery = window.matchMedia("(prefers-color-scheme:dark)");
  // access element
  const element = document.documentElement;

  // dropdown option hendling
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // closing functionalites
  const closeDropdown = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", closeDropdown);

    return () => {
      document.removeEventListener("mousedown", closeDropdown);
    };
  }, []);

  // dropdown positioning functionalites
  const getDropdownMenuClasses = () => {
    switch (placement) {
      case "left":
        return `top-10 right-1 `;
      case "right":
        return `top-10 left-1`;
      default:
        return `top-10 right-1 `;
    }
  };

  // dropdown options
  const options = [
    {
      icon: <BsSun />,
      text: "light",
    },
    {
      icon: <BsFillMoonFill />,
      text: "dark",
    },
    {
      icon: <BsPcDisplayHorizontal />,
      text: "system",
    },
  ];
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

  darkQuery.addEventListener("change", (e) => {
    if (!("theme" in localStorage)) {
      if (e.matches) {
        element.classList.add("dark");
      } else {
        element.classList.remove("dark");
      }
    }
  });

  return (
    <div className={`relative inline-block text-left`} ref={dropdownRef}>
      {/* dropdown button */}
      <div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          onMouseEnter={() => setIsOpen(true)}
          type="button"
        >
          <div className="   bg-sky-100 hover:bg-sky-200 transition-colors duration-300  p-2 rounded-full ">
            {theme == "system" && (
              <BsPcDisplayHorizontal className="text-sky-500 font-bold md:text-xl" />
            )}
            {theme == "light" && (
              <BsSun className="text-sky-500 font-bold md:text-xl" />
            )}
            {theme == "dark" && (
              <BsFillMoonFill className="text-sky-500 font-bold md:text-xl" />
            )}
          </div>
        </button>
      </div>

      {/* dropdown content */}
      {isOpen && (
        <div>
          <div
            className={cn(
              `absolute  w-[20rem] h-auto px-2 py-1 mt-3 rounded-md shadow-lg bg-slate-50 ring-1 ring-black ring-opacity-5   ${getDropdownMenuClasses()} ${dropdownOverlay}`
            )}
          >
            {arrow && (
              <div
                className={cn(
                  `w-3 h-3 border-t border-l  bg-slate-50   transform rotate-45 absolute top-[-7px]  bg-inherit ${
                    placement === "right" ? "left-3" : "right-3"
                  } z-0`
                )}
              ></div>
            )}
            {/* optionsContainer */}

            {Headline && <div>{Headline} </div>}
            <div
              className={cn(
                `flex flex-col gap-2 p-2 z-10 ${optionsContainerStyle}`
              )}
              role="none"
            >
              {options?.map(({ icon, text }, index) => (
                <div
                  key={index}
                  className={cn(
                    `block   text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 ${optionStyle}`
                  )}
                >
                  <button
                    onClick={() => setTheme(text)}
                    className={`flex items-center justify-between gap-2 text-lg font-semibold capitalize ${theme == text && "text-sky-400"}`}
                  >
                    {text}
                    <span>{icon}</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DarkmodeToogle;
