import type { Meta, StoryObj } from "@storybook/react";

import { HoverCardDemo } from "@/components/ui/HoverCardDemo";

const meta = {
  title: "shadcn/hover card",
  component: HoverCardDemo,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof HoverCardDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
