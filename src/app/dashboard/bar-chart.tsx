"use client"

import {Bar, BarChart, CartesianGrid, XAxis, YAxis} from "recharts"

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
import {cn} from "@/lib/utils";
import * as React from "react";
import { barChartData } from "@/lib/placeholder-data"

const chartConfig = {
  data: {
    label: "Value",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig

export default function MonthBarChart({ className }: { className?: string }) {
  return (
    <Card className={cn("", className)}>
      <CardHeader>
        <CardTitle>Bar Chart</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={barChartData} barSize={24}>
            <CartesianGrid stroke={"#F1F5F9"}/>
            <XAxis
              dataKey="month"
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
              width={40}
              tickFormatter={(value) => value + ".0"}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="value" fill="var(--color-indigo-500)" radius={[8, 8, 0, 0]}  />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
