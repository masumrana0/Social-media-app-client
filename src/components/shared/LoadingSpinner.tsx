"use client";
import React from "react";

type SpinnerType = "regular" | "small" | "large";
const LoadingSpinner: React.FC<{ type?: SpinnerType }> = ({
  type = "regular",
}) => {
  const spinnerClasses = {
    small: {
      parantOne: "flex items-center justify-center h-[2rem] w-[2rem]",
      parantTwo:
        "animate-spin rounded-full h-[1.5rem] w-[1.5rem]  border border-sky-500",
      children: "h-2 w-2 bg-sky-500 rounded-full animate-bounce",
    },
  };

  if (type == "small") {
    return (
      <div className={spinnerClasses[type].parantOne}>
        <div className={spinnerClasses[type].parantTwo}>
          <div className={spinnerClasses[type].children}></div>
        </div>
      </div>
    );
  } else if (type == "regular") {
    return (
      <div className="flex items-center justify-center">
        <div className="lgh-4 w-4 bg-blue-500 rounded-full animate-bounce"></div>
        <div className="h-4 w-4 bg-blue-500 rounded-full animate-bounce"></div>
        <div className="h-4 w-4 bg-blue-500 rounded-full animate-bounce"></div>
        <div className="h-4 w-4 bg-blue-500 rounded-full animate-bounce"></div>
      </div>
    );
  }
};

export default LoadingSpinner;
