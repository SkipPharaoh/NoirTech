import React, { memo } from "react";

export type TooltipProps = {
  children: React.ReactNode;
  text: string;
  show: boolean;
};

const Tooltip: React.FC<TooltipProps> = memo(
  ({ children, text, show }: TooltipProps) => {
    const showClass = show ? "opacity-100" : "opacity-0";
    return (
      <span className="group relative">
        <span
          className={`pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-black px-2 py-1 text-white opacity-0 transition before:absolute before:left-1/2 before:top-full before:-translate-x-1/2 before:border-4 before:border-transparent before:border-t-black before:content-[''] ${showClass}`}
        >
          {text}
        </span>

        {children}
      </span>
    );
  }
);

Tooltip.displayName = "Tooltip";

export default Tooltip;
