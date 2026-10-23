import Image from "next/image";

type ScribbleArrowProps = {
  className?: string;
};

export function ScribbleArrow({ className = "" }: ScribbleArrowProps) {
  return (
    <Image
      src="/images/imgGroup14.svg"
      alt=""
      width={331}
      height={102}
      className={`h-auto -scale-x-100 select-none ${className}`}
    />
  );
}
