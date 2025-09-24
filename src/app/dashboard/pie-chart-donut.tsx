"use client"

import {Label, Pie, PieChart} from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer, ChartLegend, ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { pieChartData } from "@/lib/placeholder-data";
import {cn} from "@/lib/utils";


const chartConfig = {
  categoryOne: {
    label: "Category 1",
    color: "var(--color-indigo-500)",
  },
  categoryTwo: {
    label: "Category 2",
    color: "var(--color-yellow-500)",
  },
  categoryThree: {
    label: "Category 3",
    color: "var(--color-teal-500)",
  },
} satisfies ChartConfig

export function PieChartDonut({ className }: { className?: string }) {
  return (
    <Card className={cn("flex flex-col", className)}>
      <CardHeader className="items-center pb-0">
        <CardTitle>eSIM Status Distribution</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={pieChartData}
              dataKey="value"
              nameKey="category"
              innerRadius={68}
              cornerRadius={10}
              width={24}
              paddingAngle={-10}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={(viewBox.cy || 0) - 20}
                        textAnchor="middle"
                        dominantBaseline="alphabetic"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) - 15}
                          className="text-[32px] font-bold"
                        >
                          12
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24 - 10}
                          className="fill-slate-400 text-xl"
                        >
                          adet
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </Pie>
            <ChartLegend
              content={<ChartLegendContent nameKey="category" />}
              className="-translate-y-2 flex-wrap gap-2 *:basis-1/4 *:justify-center"
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
