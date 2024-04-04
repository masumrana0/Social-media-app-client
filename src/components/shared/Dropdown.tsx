"use client";
import { Bell, Square } from "phosphor-react";
import React, { useEffect, useRef, useState } from "react";

interface DropdownOption {
  key: string | number;
  label: string;
}

interface DropdownProps {
  width?: string;
  height?: string;
  placement?:
    | "top"
    | "bottom"
    | "topLeft"
    | "topRight"
    | "bottomLeft"
    | "bottomRight";
  options: DropdownOption[];
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  width = "w-20",
  height = "h-56",
  placement = "topLeft",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
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

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const getDropdownMenuClasses = () => {
    switch (placement) {
      case "top":
        return "top-10";
      case "topLeft":
        return " right-2";
      case "topRight":
        return "top-full left-0";
      case "bottom":
        return "top-14";
      case "bottomLeft":
        return "top-14 right-0";
      case "bottomRight":
        return "top-14 left-0";
      default:
        return "top-14";
    }
  };

  return (
    <div className={`relative inline-block text-left  `} ref={dropdownRef}>
      <div>
        <button
          onBlur={() => setIsOpen(false)}
          onMouseEnter={() => setIsOpen(true)}
          type="button"
          className="inline-flex justify-center h-12 w-12  rounded-full border border-gray-300 shadow-sm  p-2 text-2xl  "
          id="options-menu"
        >
          <Bell />
          <div
            className={`absolute top-1/2 right-3 transform -translate-y-1/2 ${isOpen ? "rotate-180" : ""}`}
          >
            <div className="w-0 h-0 border-t-4 border-l-4 border-r-4 border-transparent"></div>
          </div>
        </button>
      </div>

      {isOpen && (
        <div>
          <div
            className={`absolute  ${width} ${height}   mt-3 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none ${getDropdownMenuClasses()} `}
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <div className="w-3 h-3 border-t border-l bg-white transform rotate-45 absolute top-[-8px]  right-3 z-0"></div>
            <div className="p-2 z-10" role="none">
              {/* Dropdown items */}
              {options.map((option) => (
                <a
                  key={option.key}
                  href={`#${option.key}`}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  role="menuitem"
                >
                  {option.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
