import React from "react";
import { cn } from "@/lib/utils";

export default function Input({
  className,
  LeftIcon,
  RightIcon,
  ...props
}: React.ComponentProps<"input"> & {
  LeftIcon?: React.ReactNode;
  RightIcon?: React.ReactNode;
}
) {
  return (
    <div className={cn("flex items-center h-[44px] py-[14.5px] pl-4 pr-3 gap-3 bg-white border border-slate-200 focus-within:border-slate-900 rounded-2xl", className)}>
      <div className={"flex-1 flex items-center gap-3 w-full"}>
        {LeftIcon && LeftIcon}
        <input
          className={"self-end h-[19px] text-[16px] w-full outline-none placeholder:text-[16px]"}
          {...props}
        />
      </div>
      {RightIcon && RightIcon}
    </div>
  )
}