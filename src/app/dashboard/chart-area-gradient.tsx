"use client"

import * as React from "react"
import {
  Area,
  AreaChart,
  CartesianGrid,
  XAxis,
  YAxis
} from "recharts"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { chartData } from "@/lib/placeholder-data";
import { cn }  from "@/lib/utils";

const chartConfig = {
  count: {
    label: "Value",
  },
} satisfies ChartConfig

export default function ChartAreaGradient({ className }: { className?: string }) {
  return (
    <Card className={cn("", className)}>
      <CardHeader >
        <CardTitle>Chart Name</CardTitle>
      </CardHeader>
      <CardContent className="px-6 overflow-x-auto max-[600px]:pr-2">
        <ChartContainer
          config={chartConfig}
          className="min-w-[320px] min-h-[264px] aspect-video"
        >
          <AreaChart data={chartData}>
            <defs>
              <linearGradient id="fillChart" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--chart-2)"
                  stopOpacity={0.4}
                />
                <stop
                  offset="95%"
                  stopColor="var(--chart-2)"
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>
            <CartesianGrid stroke={"#F1F5F9"}/>
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={{
                stroke: "#F1F5F9"
              }}
              tick={{
                fill: "#62748E",
              }}
              tickFormatter={(value, index) => index === 0 || index === chartData.length - 1 ? "" : value}
              tickMargin={8}
              minTickGap={0}
            />
            <YAxis
              dataKey="count"
              tickLine={false}
              axisLine={{
                stroke: "#F1F5F9"
              }}
              tick={{
                fill: "#62748E",
              }}
              ticks={[0, 15, 30, 45, 60, 75]}
              tickMargin={8}
              width={32}
              tickFormatter={(value) => value + ".0"}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  indicator="dot"
                  hideLabel={true}
                />
              }
            />
            <Area
              dataKey="count"
              type="natural"
              fill="url(#fillChart)"
              stroke="var(--chart-2)"
              strokeWidth={2}
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
