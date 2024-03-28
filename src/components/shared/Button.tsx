"use client";

import cn from "@/lib/cn";
import LoadingSpinner from "./LoadingSpinner";

const Button = ({
  className,
  children,
  isLoading = false,
  ...restProps
}: {
  className?: string;
  children: string;
  isLoading?: boolean;
}) => {
  return (
    <button
      disabled={isLoading}
      type="submit"
      {...restProps}
      className={cn(
        "w-full text-xl px-4 py-2 bg-sky-500 text-white rounded-md hover:bg-sky-600 transition-colors duration-300 ",
        className,
        {
          "flex justify-center items-center gap-2 bg-gray-300": isLoading,
        }
      )}
    >
      {" "}
      {children} {isLoading && <LoadingSpinner type="small" />}
    </button>
  );
};

export default Button;
