"use client";
import React from "react";
import SearchBar from "./ui/SearchBar";
import Navigation from "./ui/Navigation";

const DesktopNavbar = () => {
  return (
    <div className="flex justify-between gap-5 bg-stone-200 py-5 md:px-2 lg:px-20">
      {/* left section */}
      <div className="flex mx:gap-2 lg:gap-5 items-center">
        <h3 className="font-bold md:text-2xl lg:text-3xl">CircleUp</h3>
        <div>
          {" "}
          <SearchBar />
        </div>
      </div>

      {/* right section */}
      <div>
        <Navigation />
      </div>
    </div>
  );
};

export default DesktopNavbar;
