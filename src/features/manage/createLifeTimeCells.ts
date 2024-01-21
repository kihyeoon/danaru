export type TimeFrameType = "week" | "month" | "year";

interface TimeFrame {
  age: number;
  dateRange: string;
  type: "past" | "current" | "future";
}

interface TimeFrameCount {
  past: number;
  current: number;
  future: number;
}

interface TimeFramesArray {
  timeFrames: TimeFrame[];
  timeFrameCount: TimeFrameCount;
}

export function createTimeFrames(
  birthday: Date | string,
  expectedAge: number,
  timeFrameType: TimeFrameType = "month",
): TimeFramesArray {
  const startDate = birthday instanceof Date ? birthday : new Date(birthday);
  const endDate = new Date(startDate);
  endDate.setFullYear(endDate.getFullYear() + expectedAge);

  const timeFrames: TimeFrame[] = [];
  const timeFrameCount = {
    past: 0,
    current: 0,
    future: 0,
  };

  const today = new Date();
  let currentTimeFrameStart = new Date(startDate);
  while (currentTimeFrameStart < endDate) {
    let currentTimeFrameEnd = new Date(currentTimeFrameStart.getTime() - 1);

    switch (timeFrameType) {
      case "week":
        currentTimeFrameEnd.setDate(currentTimeFrameStart.getDate() + 7);
        break;
      case "month":
        currentTimeFrameEnd.setMonth(currentTimeFrameStart.getMonth() + 1);
        break;
      case "year":
        currentTimeFrameEnd.setFullYear(
          currentTimeFrameStart.getFullYear() + 1,
        );
        break;
    }

    const dateRange = `${currentTimeFrameStart.getFullYear()}.${currentTimeFrameStart.getMonth() + 1}.${currentTimeFrameStart.getDate()} ~ ${currentTimeFrameEnd.getFullYear()}.${currentTimeFrameEnd.getMonth() + 1}.${currentTimeFrameEnd.getDate()}`;

    const currentAge = Math.floor(
      (currentTimeFrameStart.getTime() - startDate.getTime()) /
        (365.25 * 24 * 60 * 60 * 1000),
    );

    let type: "past" | "current" | "future";
    if (currentTimeFrameStart <= today && today <= currentTimeFrameEnd) {
      type = "current";
    } else {
      type = currentTimeFrameStart < today ? "past" : "future";
    }

    timeFrameCount[type]++;
    timeFrames.push({
      age: currentAge,
      dateRange,
      type,
    });

    switch (timeFrameType) {
      case "week":
        currentTimeFrameStart.setDate(currentTimeFrameStart.getDate() + 7);
        break;
      case "month":
        currentTimeFrameStart.setMonth(currentTimeFrameStart.getMonth() + 1);
        break;
      case "year":
        currentTimeFrameStart.setFullYear(
          currentTimeFrameStart.getFullYear() + 1,
        );
        break;
    }
  }

  return { timeFrames, timeFrameCount };
}
