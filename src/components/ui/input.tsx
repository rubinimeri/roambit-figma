import React from "react";
import {cn} from "@/lib/utils";

export default function Input({
 className,
 ...props
}: React.ComponentProps<"input">
) {
  return (
    <input
      className={cn("w-full border bg-white border-slate-200 pl-[46px] pr-11 py-3 focus:border-slate-900 outline-none rounded-2xl", className)}
      {...props}
    />
  )
}