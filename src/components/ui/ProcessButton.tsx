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

export function ProcessLink({
  href,
  className = "",
  children = "Процес роботи",
}: {
  href: string;
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex h-10 w-full items-center justify-center rounded-button bg-accent p-2.5 text-[15px] font-bold uppercase text-white transition-opacity hover:opacity-90 ${className}`}
    >
      {children}
    </a>
  );
}
