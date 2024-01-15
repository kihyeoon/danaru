import { type VariantProps, cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const dotVariants = cva("", {
  variants: {
    variant: {
      on: "bg-sky-500",
      off: "bg-slate-400",
    },
  },
  defaultVariants: {
    variant: "on",
  },
});

interface DotProps extends VariantProps<typeof dotVariants> {
  ping?: boolean;
}

export default function Dot({ variant, ping }: DotProps) {
  return (
    <span className="relative flex h-3 w-3">
      {ping && (
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
      )}
      <span
        className={cn(
          "relative inline-flex h-3 w-3 rounded-full",
          dotVariants({ variant }),
        )}
      ></span>
    </span>
  );
}
