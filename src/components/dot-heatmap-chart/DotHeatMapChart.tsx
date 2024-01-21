import Dot from "@/components/dot-heatmap-chart/dot/Dot";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

import {
  type TimeFrameType,
  createTimeFrames,
} from "@/features/manage/createLifeTimeCells";

interface DotHeatMapChartProps {
  birthDate: string | Date;
  years: number;
  timeFrameType?: TimeFrameType;
}

export default function DotHeatMapChart({
  birthDate,
  years,
  timeFrameType,
}: DotHeatMapChartProps) {
  const {
    timeFrames,
    timeFrameCount: { past, current, future },
  } = createTimeFrames(birthDate, years, timeFrameType);

  return (
    <div className="grid w-full grid-cols-[repeat(70,_1fr)] gap-1">
      {timeFrames.map(({ type, dateRange, age }, index) => (
        <HoverCard key={`${index}-${dateRange}`}>
          <HoverCardTrigger className="cursor-pointer">
            <Dot
              variant={type === "past" || type === "current" ? "on" : "off"}
              ping={type === "current"}
            />
          </HoverCardTrigger>
          <HoverCardContent>
            <p>{dateRange}</p>
            <p>만 {age}세</p>
          </HoverCardContent>
        </HoverCard>
      ))}
    </div>
  );
}
