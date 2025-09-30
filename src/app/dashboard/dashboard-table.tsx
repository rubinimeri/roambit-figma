import React from 'react';

import { cn } from "@/lib/utils";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import {
  Card,
  CardHeader,
  CardTitle
} from "@/components/ui/card";

export default function DashboardTable({ className }: { className?: string }) {
  return (
    <Card
      className={cn("py-4 px-5 pb-0 bg-white border-none shadow-none", className)}>
      <CardHeader className={"px-0"}>
        <CardTitle>Recent eSIM Activity</CardTitle>
      </CardHeader>
      <Table >
        <TableHeader>
          <TableRow className={"text-[13px]"}>
            <TableHead className={"min-w-10"}>#</TableHead>
            <TableHead className={"min-w-[102px]"}>Type</TableHead>
            <TableHead className={"min-w-20"}>Amount</TableHead>
            <TableHead className={"min-w-16"}>Status</TableHead>
            <TableHead className={"min-w-20"}>Date</TableHead>
            <TableHead className={"min-w-[35px]"}></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Array.from({ length: 5 }).map((row, i) => (
            <TableRow key={i} className={""}>
              <TableCell className={"text-slate-600 px-2"}>
                <span className={"h-[17px] text-[13px]"}>1</span>
              </TableCell>
              <TableCell className="font-medium">
                <span className={"h-[17px]"}>Lorem Ipsum</span>
              </TableCell>
              <TableCell className={"text-slate-600"}>
                <span className={"h-[17px]"}>50 USD</span>
              </TableCell>
              <TableCell>
                <span
                  className={"bg-blue-500 text-white inline-flex items-center justify-center rounded-3xl px-2 py-0.5 text-sm h-[21px] w-fit whitespace-nowrap shrink-0 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive overflow-hidden"}
                >
                  <span className={"h-[17px]"}>Ready</span>
                </span>
              </TableCell>
              <TableCell className={"text-slate-600"}>
                12.09.2020
              </TableCell>
              <TableCell className={"cursor-pointer sticky bg-white right-0 flex items-start justify-end px-0"}>
                <span className={"flex items-center justify-end"}>
                  <img src="/dashboard/dots.png" alt="three dots" width={16}/>
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}
