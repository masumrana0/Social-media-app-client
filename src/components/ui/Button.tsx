"use client";

import cn from "@/lib/cn";
import { useFormStatus } from "react-dom";

const Button = ({
  className,
  children,
  ...restProps
}: {
  className?: string;
  children: string;
}) => {
  //   const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      {...restProps}
      className={cn(
        "w-full text-xl px-4 py-2 bg-sky-500 text-white rounded-md hover:bg-sky-600",
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
