import type { ComponentPropsWithoutRef } from "react";

type SectionProps = ComponentPropsWithoutRef<"section"> & {
  contained?: boolean;
};

export function Section({
  contained = true,
  className = "",
  children,
  ...rest
}: SectionProps) {
  return (
    <section className={`relative overflow-x-clip ${className}`} {...rest}>
      {contained ? (
        <div className="mx-auto w-full max-w-[1600px] px-4 sm:px-10 xl:px-[70px]">
          {children}
        </div>
      ) : (
        children
      )}
    </section>
  );
}
