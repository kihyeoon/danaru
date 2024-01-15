import type { Meta, StoryObj } from "@storybook/react";

import Dot from "./Dot";

const meta = {
  title: "Dot Heatmap chart/dot",
  component: Dot,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Dot>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Ping: Story = {
  args: {
    ping: true,
  },
};

export const On: Story = {
  args: {
    variant: "on",
  },
};

export const Off: Story = {
  args: {
    variant: "off",
  },
};
