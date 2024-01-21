import type { Meta, StoryObj } from "@storybook/react";

import { DatePicker } from "@/components/date-picker/DatePicker";

const meta = {
  title: "shadcn/date picker",
  component: DatePicker,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof DatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
