import type { Meta, StoryObj } from "@storybook/react";

import { DatePickerDemo } from "./DatePicker";

const meta = {
  title: "shadcn/date picker",
  component: DatePickerDemo,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof DatePickerDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
