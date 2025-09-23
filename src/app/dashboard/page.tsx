import React from 'react';
import Sidebar from "@/components/sidebar";

function Page() {
  return (
    <div className={"flex"}>
      <Sidebar />
      <header className={"p-4 w-full h-18 border border-slate-100 flex items-center justify-between"}>
        <div className={"grid gap-1"} >
          <h1 className={"font-medium"}>Reseller Dashboard</h1>
          <div className={"text-[13px] flex items-center gap-1"}>
            <a href="#" className={"text-slate-500"}>Reseller</a>
            <img src="/dashboard/caret-right.png" alt="arrow right" width={12} className={"h-3"}/>
            <a href="#" className={"text-slate-600"}>Dashboard</a>
          </div>
        </div>
        <div className={"flex gap-3"}>
          <button className={"px-4 py-3 bg-white rounded-xl"}>
            <img src="/dashboard/bell.png" alt="bell" className={"w-5 h-5"}/>
          </button>
          <button className={"px-4 py-3 bg-white rounded-xl"}>
            <img src="/dashboard/moon.png" alt="bell" className={"w-5 h-5"}/>
          </button>
          <button className={"pl-4 pr-5 py-3 flex items-center gap-1 bg-primary rounded-xl"}>
              <img src="/dashboard/plus.png" alt="bell" className={"w-5 h-5"}/>
              <span>$1.300,00</span>
          </button>
        </div>
      </header>
    </div>
  );
}

export default Page;