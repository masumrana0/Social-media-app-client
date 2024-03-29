"use client";
import { useState } from "react";
import { MagnifyingGlass } from "phosphor-react";

function SearchBar() {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="relative">
      <div
        className={`lg:w-[25rem] md:w-[15rem] flex    items-center border bg-white ${isFocused ? "rounded-t-md" : "rounded-full"}  p-2`}
      >
        <span>{isFocused ? null : <MagnifyingGlass size={24} />}</span>
        <input
          type="text"
          placeholder="Search..."
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="outline-none  "
        />
        {/* {isFocused ? (
          <button className="bg-gray-200 flex justify-end p-1 rounded-full font-bold">
            <X size={20} />
          </button>
        ) : null} */}
      </div>

      <div
        className={`absolute left-0 right-0 mt-0 ${isFocused ? "block" : "hidden"}  `}
      >
        <div className="bg-white border border-gray-300   shadow-md">
          {/* Dropdown content */}
          <p className="p-2">Dropdown content goes here</p>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
