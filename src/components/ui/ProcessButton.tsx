import type { ComponentPropsWithoutRef } from "react";

export function ProcessButton({
  className = "",
  children = "Процес роботи",
  ...rest
}: ComponentPropsWithoutRef<"button">) {
  return (
    <button
      type="button"
      className={`flex h-10 w-full items-center justify-center rounded-button bg-accent p-2.5 text-[15px] font-bold uppercase text-white transition-opacity hover:opacity-90 ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}
