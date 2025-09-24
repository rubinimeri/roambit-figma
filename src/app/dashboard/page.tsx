import React from 'react';
import Sidebar from "@/components/sidebar";
import ChartAreaGradient from "@/app/dashboard/chart-area-gradient";
import BarChart from "./bar-chart"

function Page() {
  return (
    <div className={"flex"}>
      <Sidebar />
      <div className={"flex flex-col w-full"}>
        <header className={"p-4 w-full h-18 border border-slate-100 flex items-center justify-between"}>
          <div className={"grid gap-1"}>
            <h1 className={"font-medium"}>Reseller Dashboard</h1>
            <div className={"text-[13px] flex items-center gap-1"}>
              <a href="#" className={"text-slate-500"}>Reseller</a>
              <img src="/dashboard/caret-right.png" alt="arrow right" width={12} className={"h-3"}/>
              <a href="#" className={"text-slate-600"}>Dashboard</a>
            </div>
          </div>
          <div className={"flex gap-3"}>
            <button className={"btn-header"}>
              <img src="/dashboard/bell.png" alt="bell" className={"w-5 h-5"}/>
            </button>
            <button className={"btn-header"}>
              <img src="/dashboard/moon.png" alt="bell" className={"w-5 h-5"}/>
            </button>
            <button className={"pl-4 pr-5 py-3 flex items-center gap-1 bg-primary rounded-xl cursor-pointer"}>
              <img src="/dashboard/plus.png" alt="bell" className={"w-5 h-5"}/>
              <span>$1.300,00</span>
            </button>
          </div>
        </header>
        <main className={"grid p-4 gap-4"}>
          <div className={"flex gap-4"}>
            <article className="p-5 bg-white grid gap-6 rounded-3xl flex-1">
              <header>
                <h2 className={"flex items-center gap-2"}>
                <span aria-hidden="true">
                  <img src="/dashboard/people.png" alt="people" className={"w-5 h-5"}/>
                </span>
                  Total Resellers
                </h2>
              </header>

              <div className={"grid gap-2"}>
                <p className="text-[28px]">
                  <strong>1,221</strong>
                </p>

                <p className="text-[#00a86b] text-xs" aria-label="Increased by 56.9 percent">
                  +56.9%
                </p>
              </div>
            </article>
            <article className="p-5 bg-white grid gap-6 rounded-3xl flex-1">
              <header>
                <h2 className={"flex items-center gap-2"}>
                <span aria-hidden="true">
                  <img src="/dashboard/people.png" alt="people" className={"w-5 h-5"}/>
                </span>
                  Total Credits Issued
                </h2>
              </header>

              <div className={"grid gap-2"}>
                <p className="text-[28px]">
                  <strong>32.892</strong>
                </p>

                <p className="text-[#00a86b] text-xs" aria-label="Increased by 56.9 percent">
                  +29.9%
                </p>
              </div>
            </article>
            <article className="p-5 bg-white grid gap-6 rounded-3xl flex-1">
              <header>
                <h2 className={"flex items-center gap-2"}>
                <span aria-hidden="true">
                  <img src="/dashboard/people.png" alt="people" className={"w-5 h-5"}/>
                </span>
                  Total Transactşons
                </h2>
              </header>

              <div className={"grid gap-2"}>
                <p className="text-[28px]">
                  <strong>237</strong>
                </p>

                <p className="text-[#00a86b] text-xs" aria-label="Increased by 56.9 percent">
                  +12.4%
                </p>
              </div>
            </article>
            <article className="p-5 bg-white grid  gap-6 rounded-3xl flex-1">
              <header>
                <h2 className={"flex items-center gap-2"}>
                <span aria-hidden="true">
                  <img src="/dashboard/people.png" alt="people" className={"w-5 h-5"}/>
                </span>
                  Total eSIM Orders
                </h2>
              </header>

              <div className={"grid gap-2"}>
                <p className="text-[28px]">
                  <strong>18.905</strong>
                </p>

                <p className="text-[#00a86b] text-xs" aria-label="Increased by 56.9 percent">
                  +29.7%
                </p>
              </div>
            </article>
          </div>
          <div className={"flex gap-4"}>
            <ChartAreaGradient className={"py-5 border-none shadow-none flex-1 bg-white"}/>
            <BarChart className={"py-5 border-none shadow-none flex-1 bg-white"} />
          </div>
        </main>
      </div>
    </div>
  );
}

export default Page;