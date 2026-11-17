import Image from "next/image";
import { BlockPlayer, PlayableBlock } from "./TrackPlayer";

export type Track = {
  number: string;
  title?: string;
  src?: string;
};

type TrackCardProps = Track & {
  image?: string;
  imageClassName?: string;
  imageSizeClassName?: string;
  className?: string;
};

export function TrackCard({
  number,
  title,
  src,
  image,
  imageClassName = "object-cover",
  imageSizeClassName = "w-[clamp(56px,30%,96px)]",
  className = "",
}: TrackCardProps) {
  return (
    <PlayableBlock
      src={src}
      className={`flex h-full min-h-[140px] flex-col justify-between gap-3 rounded-card bg-card p-3 md:min-h-[226px] md:p-4 xl:pl-[26px] ${className}`}
    >
      <div className="flex items-start justify-between gap-2">
        <span className="text-[clamp(32px,3.125vw,50px)] font-bold uppercase leading-normal text-accent-num">
          {number}
        </span>
        {image ? (
          <div
            className={`relative aspect-square ${imageSizeClassName} shrink-0 overflow-hidden rounded-[5px]`}
          >
            <Image
              src={image}
              alt=""
              fill
              sizes="96px"
              className={imageClassName}
            />
          </div>
        ) : null}
      </div>
      <div className="flex min-w-0 flex-col gap-3">
        {title ? (
          <p className="break-words text-[clamp(12px,1.25vw,16px)] font-semibold uppercase leading-snug text-white">
            {title}
          </p>
        ) : null}
        {src ? <BlockPlayer title={title ?? number} /> : null}
      </div>
    </PlayableBlock>
  );
}
