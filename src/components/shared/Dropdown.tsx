"use client";
import cn from "@/lib/cn";
import { IDropdownOption } from "@/types/shared";
import React, { ReactNode, useEffect, useRef, useState } from "react";

interface DropdownProps {
  children: ReactNode;
  width?: string;
  height?: string;
  placement?: "left" | "right";
  dropdownOverlay?: string;
  optionStyle?: string;
  Headline?: string | any;
  optionsContainerStyle?: string;
  options: IDropdownOption[];
  arrow?: boolean;
}

const Dropdown: React.FC<DropdownProps> = ({
  children,
  options,
  arrow = false,
  placement = "left",
  dropdownOverlay,
  optionStyle,
  Headline,
  optionsContainerStyle,
}) => {
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

  return (
    <div className={`relative inline-block text-left`} ref={dropdownRef}>
      {/* dropdown button */}
      <div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          // onMouseEnter={() => setIsOpen(true)}
          type="button"
        >
          {children}
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
              {options?.map((option) => (
                <div
                  key={option.key}
                  className={cn(
                    `block   text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 ${optionStyle}`
                  )}
                >
                  {option.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
