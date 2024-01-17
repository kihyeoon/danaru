import DotHeatMapChart from "@/components/dotHeatMapChart/DotHeatMapChart";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <DotHeatMapChart
        birthDate="1998-02-12"
        years={100}
        timeFrameType="month"
      />
    </main>
  );
}
