"use client"

import {
  Bar,
  BarChart,
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
import { cn } from "@/lib/utils";
import * as React from "react";
import { barChartData } from "@/lib/placeholder-data"
import {
  useEffect,
  useState
} from "react";

const chartConfig = {
  data: {
    label: "Value",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig

const MOBILE_BAR_WIDTH = 16;
const DESKTOP_BAR_WIDTH = 24;
const MOBILE_PADDING = 16;
const DESKTOP_PADDING = 0;

export default function MonthBarChart({ className }: { className?: string }) {
  const [isScreenMobile, setIsScreenMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => setIsScreenMobile(window.innerWidth < 600);

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Card className={cn("min-h-[350px]", className)}>
      <CardHeader>
        <CardTitle>Bar Chart</CardTitle>
      </CardHeader>
      <CardContent className={"overflow-x-auto max-[600px]:pr-2"}>
        <ChartContainer
          className={"min-w-[320px] min-h-[264px] max-[1150px]:aspect-video max-[600px]:"}
          config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={barChartData}
            barSize={isScreenMobile ? MOBILE_BAR_WIDTH : DESKTOP_BAR_WIDTH}
          >
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
              padding={{
                left: isScreenMobile ? MOBILE_PADDING : DESKTOP_PADDING,
                right: isScreenMobile ? MOBILE_PADDING : DESKTOP_PADDING
              }}
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
              ticks={[0, 15, 30, 45, 60, 75]}
              width={32}
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
