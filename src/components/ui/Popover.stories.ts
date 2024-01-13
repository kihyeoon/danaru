import type { Meta, StoryObj } from "@storybook/react";

import PopoverDemo from "@/components/ui/PopoverDemo";

const meta = {
  title: "shadcn/popover",
  component: PopoverDemo,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof PopoverDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
