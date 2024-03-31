"use client";
import React, { useEffect, useState } from "react";
import { BsFillMoonFill, BsSun } from "react-icons/bs";
import { FaDesktop } from "react-icons/fa6";
import { Select, Space } from "antd";

const DarkmodeToggle = () => {
  //   const shouldRenderOnServer = typeof window === "undefined";
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "System"
  );
  const DarkQuery = window.matchMedia("(prefers-color-scheme:Dark)");
  const element = document.documentElement;

  const options = [
    {
      icon: BsSun,
      text: "Light",
    },
    {
      icon: BsFillMoonFill,
      text: "Dark",
    },
    {
      icon: FaDesktop,
      text: "System",
    },
  ];

  const onWindowMatch = () => {
    if (
      localStorage.theme === "Dark" ||
      (!("theme" in localStorage) && DarkQuery.matches)
    ) {
      element.classList.add("Dark");
    } else {
      element.classList.remove("Dark");
    }
  };

  useEffect(() => {
    switch (theme) {
      case "Dark":
        element.classList.add("Dark");
        localStorage.setItem("theme", "Dark");
        break;
      case "Light":
        element.classList.remove("Dark");
        localStorage.setItem("theme", "Light");
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
        element.classList.add("Dark");
      } else {
        element.classList.remove("Dark");
      }
    }
  });

  const SelectOption = options.map((option) => ({
    value: option.text,
    label: (
      <button className="w-full flex justify-between items-center font-semibold  ">
        {option.text}
        <option.icon className="text-lg" />
      </button>
    ),
  }));

  const defaultValue = "System";

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
