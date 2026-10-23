import Image from "next/image";

type ScribbleArrowProps = {
  src?: string;
  width?: number;
  height?: number;
  mirrored?: boolean;
  className?: string;
};

export function ScribbleArrow({
  src = "/images/imgGroup14.svg",
  width = 330,
  height = 100,
  mirrored = true,
  className = "",
}: ScribbleArrowProps) {
  return (
    <Image
      src={src}
      alt=""
      width={width}
      height={height}
      unoptimized
      aria-hidden="true"
      className={`pointer-events-none block h-auto max-w-full select-none ${mirrored ? "-scale-x-100" : ""} ${className}`}
    />
  );
}
