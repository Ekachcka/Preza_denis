import type { ComponentPropsWithoutRef } from "react";

export function SectionTitle({
  className = "",
  ...rest
}: ComponentPropsWithoutRef<"h2">) {
  return (
    <h2
      className={`text-[clamp(20px,5vw,30px)] font-bold uppercase leading-normal text-white ${className}`}
      {...rest}
    />
  );
}
