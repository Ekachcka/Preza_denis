import Image from "next/image";

type ScribbleArrowProps = {
  label?: string;
  className?: string;
};

export function ScribbleArrow({
  label = "Тицяй і слухай",
  className = "",
}: ScribbleArrowProps) {
  return (
    <div
      className={`flex items-start justify-end gap-6 sm:gap-[83px] ${className}`}
    >
      <div className="relative aspect-[330/99.724] w-[clamp(160px,45vw,330px)] shrink-0 -scale-x-100">
        <div className="absolute inset-[-0.9%_-0.3%_-1%_0]">
          <Image
            src="/images/imgGroup14.svg"
            alt=""
            fill
            className="object-fill"
          />
        </div>
      </div>
      <p className="mt-5 w-[82px] shrink-0 text-base font-normal leading-normal text-accent sm:mt-[50px] sm:text-xl">
        {label}
      </p>
    </div>
  );
}
