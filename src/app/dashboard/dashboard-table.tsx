import React from 'react';
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
import {cn} from "@/lib/utils";

export default function DashboardTable({ className }: { className?: string }) {
  return (
    <Card
      className={cn("py-4 px-5 pb-0 bg-white border-none shadow-none ", className)}>
      <CardHeader className={"px-0"}>
        <CardTitle>Recent eSIM Activity</CardTitle>
      </CardHeader>
      <Table >
        <TableHeader>
          <TableRow className={"text-[13px]"}>
            <TableHead className="w-[100px]">#</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Date</TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Array.from({ length: 5 }).map((row, i) => (
            <TableRow key={i}>
              <TableCell className={"text-slate-600"}>1</TableCell>
              <TableCell className="font-semibold">Lorem Ipsum</TableCell>
              <TableCell className={"text-slate-600"}>50 USD</TableCell>
              <TableCell>
                <span
                  className={"bg-blue-500 text-white inline-flex items-center justify-center rounded-3xl px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden"}
                >
                  Ready
                </span>
              </TableCell>
              <TableCell className={"text-slate-600"}>
                12.09.2020
              </TableCell>
              <TableCell className={"cursor-pointer"}>
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
