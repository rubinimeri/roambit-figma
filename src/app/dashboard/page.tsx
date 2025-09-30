import Sidebar from "@/components/sidebar";
import ChartAreaGradient from "@/app/dashboard/chart-area-gradient";
import MonthBarChart from "@/app/dashboard/month-bar-chart"
import PieChartDonut from "@/app/dashboard/pie-chart-donut";
import DashboardTable from "@/app/dashboard/dashboard-table";

export default function Page() {
  return (
    <div className={"flex"}>
      <Sidebar />
      <div className={"flex flex-col w-full"}>
        <header className={"p-4 w-full h-18 border border-slate-100 flex items-center justify-between"}>
          <div className={"flex items-center gap-4"}>
            <span className={"flex-none hidden max-[800px]:block max-[800px]:flex-1"}><img src="/dashboard/menu.png" alt="" className={"w-5 h-5"}/></span>
            <div className={"grid gap-1"}>
              <h1 className={"font-medium"}>Reseller Dashboard</h1>
              <div className={"text-[13px] flex items-center gap-1 h-4 leading-none"}>
                <a href="#" className={"text-slate-500"}>Reseller</a>
                <img src="/dashboard/caret-right.png" alt="arrow right" width={12} className={"h-3 self-start"}/>
                <a href="#" className={"text-slate-600"}>Dashboard</a>
              </div>
            </div>
          </div>
          <div className={"flex gap-3"}>
            <button className={"btn-header"}>
              <img src="/dashboard/bell.png" alt="bell" className={"min-w-5 h-5"}/>
            </button>
            <button className={"btn-header"}>
              <img src="/dashboard/moon.png" alt="bell" className={"min-w-5 h-5"}/>
            </button>
            <button className={"flex items-center gap-2 grid-cols-2 pl-4 pr-5 py-3 h-10 text-[15px] bg-primary rounded-xl cursor-pointer"}>
              <img src="/dashboard/plus.png" alt="bell" className={"w-4 h-4 max-[800px]:hidden"}/>
              <span className={"text-[#022f2e] h-[18px]"}>$1.300,00</span>
            </button>
          </div>
        </header>
        <main className={"grid p-4 gap-4"}>
          <div className={"flex gap-4 max-[1150px]:grid max-[1150px]:grid-cols-2 max-[800px]:grid-cols-1"}>
            <article className="grid-card">
              <header>
                <h2 className={"font-sans-3 text-sm flex items-center gap-2"}>
                  <span aria-hidden="true">
                    <img src="/dashboard/people.png" alt="people" className={"w-5 h-5"}/>
                  </span>
                  Total Resellers
                </h2>
              </header>

              <div className={"grid gap-3"}>
                <p className="text-[28px] h-8">
                  <strong>1.221</strong>
                </p>

                <p className="text-[#00a86b] text-xs" aria-label="Increased by 56.9 percent">
                  +56.9%
                </p>
              </div>
            </article>
            <article className="grid-card pb-3">
              <header>
                <h2 className={"font-sans-3 text-sm flex items-center gap-2"}>
                <span aria-hidden="true">
                  <img src="/dashboard/people.png" alt="people" className={"w-5 h-5"}/>
                </span>
                  Total Credits Issued
                </h2>
              </header>

              <div className={"flex flex-col gap-3 justify-between"}>
                <p className="text-[32px] h-8">
                  <strong>32.892</strong>
                </p>

                <p className="text-slate-500 text-[13px] leading-none" aria-label="Increased by 56.9 percent">
                  Tüm Zamanlar
                </p>
              </div>
            </article>
            <article className="grid-card pb-3">
              <header>
                <h2 className={"font-sans-3 text-sm flex items-center gap-2"}>
                <span aria-hidden="true">
                  <img src="/dashboard/people.png" alt="people" className={"w-5 h-5"}/>
                </span>
                  Total Transactşons
                </h2>
              </header>

              <div className={"flex flex-col gap-3 justify-between"}>
                <p className="text-[32px] h-8">
                  <strong>
                    237
                    <span className={"text-slate-400 text-xl ml-2"}>adet</span>
                  </strong>
                </p>

                <p className="text-slate-500 text-[13px] leading-none" aria-label="Increased by 56.9 percent">
                  Tüm Zamanlar
                </p>
              </div>
            </article>
            <article className="grid-card">
              <header>
                <h2 className={"font-sans-3 text-sm flex items-center gap-2"}>
                <span aria-hidden="true">
                  <img src="/dashboard/people.png" alt="people" className={"w-5 h-5"}/>
                </span>
                  Total eSIM Orders
                </h2>
              </header>

              <div className={"grid gap-3"}>
                <p className="text-[28px] h-8">
                  <strong>18.905</strong>
                </p>

                <p className="text-[#00a86b] text-xs" aria-label="Increased by 56.9 percent">
                  +29.7%
                </p>
              </div>
            </article>
          </div>
          <div className={"flex gap-4 max-[1150px]:block"}>
            <ChartAreaGradient className={"py-5 border-none shadow-none flex-1 bg-white max-[1150px]:mb-4 min-w-0"}/>
            <MonthBarChart className={"py-5 border-none shadow-none flex-1 bg-white"} />
          </div>
          <div className={"grid grid-cols-3 grid-rows-[377px] gap-4 max-[1220px]:block"}>
            <PieChartDonut className={"py-5 gap-2 border-none shadow-none bg-white max-[1150px]:mb-4"} />
            <DashboardTable className={"col-span-2"} />
          </div>
          <DashboardTable />
        </main>
      </div>
    </div>
  );
}
