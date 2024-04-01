"use client";
import React, { useEffect, useState } from "react";
import { BsFillMoonFill, BsSun } from "react-icons/bs";
import { FaDesktop } from "react-icons/fa6";
import { Select, Space } from "antd";

const DarkmodeToggle = () => {
  //   const shouldRenderOnServer = typeof window === "undefined";
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "system"
  );

  const DarkQuery = window.matchMedia("(prefers-color-scheme:Dark)");
  const element = document.documentElement;

  const options = [
    {
      icon: BsSun,
      text: "light",
    },
    {
      icon: BsFillMoonFill,
      text: "dark",
    },
    {
      icon: FaDesktop,
      text: "system",
    },
  ];

  const onWindowMatch = () => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) && DarkQuery.matches)
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

  DarkQuery.addEventListener("change", (e) => {
    if (!("theme" in localStorage)) {
      if (e.matches) {
        element.classList.add("dark");
      } else {
        element.classList.remove("dark");
      }
    }
  });

  const SelectOption = options.map((option) => ({
    value: option.text,
    label: (
      <button className="w-full flex justify-between items-center font-semibold  ">
        <span className="capitalize ">{option.text}</span>
        <option.icon className="text-lg" />
      </button>
    ),
  }));

  const defaultValue = theme;

  return (
    <Space className="w-full  flex justify-end">
      <Select
        defaultValue={defaultValue}
        dropdownStyle={{ backgroundColor: "skyblue", color: "black" }}
        style={{ width: "6.8rem" }}
        onChange={(value) => setTheme(value)}
        options={SelectOption}
      />
    </Space>
  );
};

export default DarkmodeToggle;
