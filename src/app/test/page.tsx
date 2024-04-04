"uce client";

import Dropdown from "@/components/shared/Dropdown";
import { Bell } from "phosphor-react";

import React from "react";
import { Fa0, FaBell, FaBellConcierge } from "react-icons/fa6";

const App: React.FC = () => {
  const options = [
    { key: "1", label: "Option 1" },
    { key: "2", label: "Option 2" },
    { key: "3", label: "Option 3" },
  ];

  return (
    <div className="flex justify-center items-center h-screen   ">
      <div>
        <Dropdown width="w-64" height="h-48" options={options}>
          <div className="border border-sky-400  bg-sky-100 hover:bg-sky-200 transition-colors duration-300  p-2 rounded-full ">
            {/* <SquaresFour className="text-sky-500 font-bold md:text-xl" /> */}
            <h3>
              <FaBellConcierge />
            </h3>
          </div>
        </Dropdown>
      </div>
    </div>
  );
};

export default App;
