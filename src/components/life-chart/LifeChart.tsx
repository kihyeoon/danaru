"use client";

import { useState } from "react";

import { DatePicker } from "@/components/date-picker/DatePicker";
import DotHeatMapChart from "@/components/dot-heatmap-chart/DotHeatMapChart";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { TimeFrameType } from "@/features/manage/createLifeTimeCells";

interface ChartOptions {
  date: Date;
  years: number;
  timeframeType: TimeFrameType;
  isReady: boolean;
}

export default function LifeChart() {
  const [date, setDate] = useState<Date>();
  const [years, setYears] = useState<number>(100);
  const [timeframeType, setTimeFrameType] = useState<TimeFrameType>("month");
  const [chartOptions, setChartOptions] = useState<ChartOptions>({
    date: new Date(),
    years: 100,
    timeframeType: "month",
    isReady: false,
  });

  const onYearsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setYears(Number(e.target.value));
  };

  const onTimeFrameTypeChange = (value: TimeFrameType) => {
    setTimeFrameType(value);
  };

  const handleSubmit = () => {
    if (!date) return;
    setChartOptions({
      date,
      years,
      timeframeType,
      isReady: true,
    });
  };

  return (
    <>
      <div className="mb-3 h-full w-full rounded-md border border-input p-4">
        {chartOptions.isReady ? (
          <DotHeatMapChart
            birthDate={date || chartOptions.date}
            years={years}
            timeFrameType={timeframeType}
          />
        ) : (
          <DotHeatMapChart
            birthDate={chartOptions.date}
            years={chartOptions.years}
            timeFrameType={chartOptions.timeframeType}
          />
        )}
      </div>
      <form className="flex flex-col gap-2">
        <Input
          className="w-[166px] text-left font-normal"
          type="number"
          placeholder="기대 수명"
          value={years}
          onChange={onYearsChange}
        />
        <Select
          onValueChange={onTimeFrameTypeChange}
          defaultValue={timeframeType}
        >
          <SelectTrigger className="w-[166px]">
            <SelectValue placeholder="형식" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="week">주</SelectItem>
            <SelectItem value="month">월</SelectItem>
            <SelectItem value="year">년</SelectItem>
          </SelectContent>
        </Select>
        <DatePicker date={date} setDate={setDate} />
        <Button onClick={handleSubmit}>차트 보기</Button>
      </form>
    </>
  );
}
