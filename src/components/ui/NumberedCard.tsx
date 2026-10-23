import type { ComponentPropsWithoutRef } from "react";

type NumberedCardProps = ComponentPropsWithoutRef<"div"> & {
  number: string;
  variant?: "default" | "compact";
};

const PADDING = {
  default: "pl-[26px]",
  compact: "pl-[19px]",
} as const;

export function NumberedCard({
  number,
  variant = "default",
  className = "",
  children,
  ...rest
}: NumberedCardProps) {
  return (
    <div
      className={`flex min-h-[226px] flex-col rounded-card bg-card pb-4 pr-[19px] pt-4 ${PADDING[variant]} ${className}`}
      {...rest}
    >
      <span className="text-[50px] font-bold uppercase leading-normal text-accent">
        {number}
      </span>
      {children}
    </div>
  );
}
