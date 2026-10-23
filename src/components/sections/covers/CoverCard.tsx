import Image from "next/image";

export type CoverCrop = {
  width: number;
  height: number;
  left: number;
  top: number;
};

export type Cover = {
  title: string;
  artist: string;
  image: string;
  imageWidth?: number;
  imageHeight?: number;
  crop?: CoverCrop;
};

const SIZES = "(min-width: 1280px) 350px, (min-width: 768px) 30vw, 50vw";

export function CoverCard({ cover }: { cover: Cover }) {
  const { title, artist, image, crop } = cover;
  const alt = `${title} — ${artist}`;

  return (
    <button
      type="button"
      className="flex w-full flex-col rounded-card bg-card-cover px-[clamp(12px,1.56vw,25px)] pb-3 pt-[clamp(12px,1.38vw,22px)] text-left uppercase transition-opacity hover:opacity-90"
    >
      <span className="relative block aspect-square w-full overflow-hidden">
        {crop ? (
          <Image
            src={image}
            alt={alt}
            width={cover.imageWidth}
            height={cover.imageHeight}
            sizes={SIZES}
            className="absolute max-w-none"
            style={{
              width: `${crop.width}%`,
              height: `${crop.height}%`,
              left: `${crop.left}%`,
              top: `${crop.top}%`,
            }}
          />
        ) : (
          <Image
            src={image}
            alt={alt}
            fill
            sizes={SIZES}
            className="object-cover"
          />
        )}
      </span>
      <span className="mt-[11px] block whitespace-nowrap max-xl:truncate text-[clamp(14px,1.25vw,20px)] font-bold leading-[normal] text-white">
        {title}
      </span>
      <span className="mt-[5px] block whitespace-nowrap max-xl:truncate text-[clamp(14px,1.25vw,20px)] font-normal leading-[normal] text-white">
        {artist}
      </span>
    </button>
  );
}
