"use client"

import * as React from "react"
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import {chartData} from "@/lib/placeholder-data";
import {cn} from "@/lib/utils";

const chartConfig = {
  count: {
    label: "Value",
  },
} satisfies ChartConfig

export default function ThoughtsChartArea({ className }: { className?: string }) {
  return (
    <Card className={cn("", className)}>
      <CardHeader >
        <CardTitle>Chart Name</CardTitle>
      </CardHeader>
      <CardContent className="px-6">
        {chartData && <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <AreaChart data={chartData}>
            <defs>
              <linearGradient id="fillChart" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--chart-2)"
                  stopOpacity={0.5}
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
              tickMargin={8}
              minTickGap={32}
            />
            <YAxis
              dataKey="value"
              tickLine={false}
              axisLine={{
                stroke: "#F1F5F9"
              }}
              tick={{
                fill: "#62748E",
              }}
              tickMargin={8}
              tickCount={6}
              minTickGap={4}
              width={32}
              tickFormatter={(value) => value + ".0"}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  label={"Value"}
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
              baseValue={chartData[0].count}
            />
          </AreaChart>
        </ChartContainer>}
      </CardContent>
    </Card>
  )
}
