import React from 'react';
import {sidebarData} from "@/lib/placeholder-data";
import {clsx} from "clsx";

function Sidebar() {
  return (
    <div
      data-slot="sidebar"
      className={"bg-sidebar border border-slate-100 flex h-[1471px] w-[276px] flex-col text-slate-900"}
    >
      <div className={"py-[26px] pl-5 flex justify-between border border-slate-100"}>
        <img src="/logo-light.png" alt="logo" width={124} className={"h-7"}/>
        <div className={"p-1 bg-slate-100 rounded-full flex items-center justify-center"}>
          <img src="/dashboard/caret-left.png" alt="close sidebar" width={16}/>
        </div>
      </div>
      <div className={"p-4 grid gap-6"}>
        {sidebarData.map((linkGroup, i) => (
          <React.Fragment key={i}>
            <div className={"grid gap-3"}>
              <div className={"text-xs pl-4 pr-2 flex items-center justify-between"}>
                <p className={"text-slate-500"}>{linkGroup.title.toUpperCase()}</p>
                <div
                  className={"p-1 bg-slate-100 rounded-full flex items-center justify-center cursor-pointer"}
                >
                  <img src="/dashboard/caret-up.png" alt="close link group" width={16}/>
                </div>
              </div>

              <nav className={"grid gap-2"}>
                {linkGroup.links.map((link, j) => (
                  <a
                    href={link.url}
                    key={j}
                    className={clsx(
                      "flex gap-3 px-4 py-[10px] ",
                      link.title === "Dashboard" && "bg-primary rounded-2xl font-bold"
                    )}>
                    <img src={link.iconUrl} alt="icon" width={20} className={"h-5"}/>
                    {link.title}
                  </a>
                ))}
              </nav>
            </div>
            {sidebarData[i+1] && (<div className={"border border-slate-100 w-full height-[1px]"}></div>)}
          </React.Fragment>
        ))}
        <div className={"flex items-center justify-between text-[13px] gap-3"}>
          <div className={"flex items-center justify-between gap-3"}>
            <img src="/logo-light.png" alt="logo" width={72} className={"h-4"}/>
            <span>Reseller Portal</span>
          </div>
          <p className={"text-slate-600"}>
            2025
          </p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;