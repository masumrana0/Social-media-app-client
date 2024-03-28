import React from "react";
import SearchBar from "./ui/SearchBar";
import Navigation from "./ui/Navigation";

// import person from "/public/masum.jpg";

const DesktopNavbar = () => {
  return (
    <div className="flex justify-between gap-5  bg-stone-200 py-5 px-20">
      {/* left section */}
      <div className="flex gap-5 items-center">
        <h3 className="font-bold text-3xl">CircleUp</h3>
        <SearchBar />
      </div>
      {/* right section */}
      <Navigation />
    </div>
  );
};

export default DesktopNavbar;
