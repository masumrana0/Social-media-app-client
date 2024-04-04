import Dropdown from "@/components/shared/Dropdown";
import React from "react";

const App: React.FC = () => {
  const options = [
    { key: "1", label: "Option 1" },
    { key: "2", label: "Option 2" },
    { key: "3", label: "Option 3" },
  ];

  return (
    <div className="flex justify-center items-center h-screen   ">
      <div>
        <Dropdown width="w-64" height="h-48" options={options} />
      </div>
    </div>
  );
};

export default App;
