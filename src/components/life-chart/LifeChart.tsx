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

export default function LifeChart() {
  const [date, setDate] = useState<Date>();
  const [years, setYears] = useState<number>(100);
  const [timeframeType, setTimeFrameType] = useState<TimeFrameType>("month");
  const [isReady, setIsReady] = useState<boolean>(false);

  const onYearsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setYears(Number(e.target.value));
  };

  const onTimeFrameTypeChange = (value: TimeFrameType) => {
    setTimeFrameType(value);
  };

  const onReady = () => {
    if (!date) return;
    setIsReady(true);
  };

  return (
    <>
      {isReady && date ? (
        <DotHeatMapChart
          birthDate={date}
          years={years}
          timeFrameType={timeframeType}
        />
      ) : (
        <DotHeatMapChart
          birthDate={new Date()}
          years={100}
          timeFrameType="month"
        />
      )}
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
      <Button onClick={onReady}>차트 보기</Button>
    </>
  );
}
