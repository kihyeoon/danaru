import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export const HoverCardDemo = () => (
  <HoverCard>
    <HoverCardTrigger className="cursor-pointer">Hover me</HoverCardTrigger>
    <HoverCardContent>
      <p>Content</p>
    </HoverCardContent>
  </HoverCard>
);
