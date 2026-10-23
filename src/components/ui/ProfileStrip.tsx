import Image from "next/image";
import type { ReactNode } from "react";

type ProfileStripProps = {
  photoSrc: string;
  photoAlt?: string;
  action?: ReactNode;
  className?: string;
  children: ReactNode;
};

export function ProfileStrip({
  photoSrc,
  photoAlt = "",
  action,
  className = "",
  children,
}: ProfileStripProps) {
  return (
    <div className={`w-full bg-plate ${className}`}>
      <div className="mx-auto flex w-full max-w-[1600px] flex-col items-center gap-6 px-4 py-10 text-center sm:px-10 md:flex-row md:items-start md:gap-12 md:py-10 xl:min-h-[360px] xl:py-0 md:text-left xl:gap-[84px] xl:px-[70px]">
        <div className="relative size-[140px] shrink-0 xl:mt-[74px] xl:size-[193px]">
          <Image
            src={photoSrc}
            alt={photoAlt}
            fill
            sizes="(min-width: 1280px) 193px, 140px"
            className="object-contain"
          />
        </div>
        <div className="flex min-w-0 max-w-[654px] flex-col gap-6 xl:mt-[97px]">
          <div className="text-[clamp(18px,1.875vw,30px)] font-medium leading-[normal] text-white">
            {children}
          </div>
          {action}
        </div>
      </div>
    </div>
  );
}
