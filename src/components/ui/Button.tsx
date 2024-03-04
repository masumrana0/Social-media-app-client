"use client";

import cn from "@/lib/cn";

const Button = ({
  className,
  children,
  ...restProps
}: {
  className?: string;
  children: string;
}) => {
  return (
    <button
      {...restProps}
      className={cn(
        "w-full text-xl px-4 py-2 bg-sky-500 text-white rounded-md hover:bg-sky-600 transition-colors duration-300",
        className
        // {
        //   "bg-gray-500": loading,
        // }
      )}
    >
      {children}
    </button>
  );
};

export default Button;
