import type { Meta, StoryObj } from "@storybook/react";

import DotHeatMapChart from "@/components/dotHeatMapChart/DotHeatMapChart";

const meta = {
  title: "Dot Heatmap chart/Heatmap chart",
  component: DotHeatMapChart,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof DotHeatMapChart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    birthDate: "1998-02-12",
    years: 100,
  },
};
