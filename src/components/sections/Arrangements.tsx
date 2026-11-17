import Image from "next/image";
import { ProcessVideo } from "@/components/ui/ProcessVideo";
import { ScribbleArrow } from "@/components/ui/ScribbleArrow";
import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { BlockPlayer, PlayableBlock } from "@/components/ui/TrackPlayer";

type Arrangement = {
  number: string;
  title: string;
  artist?: string;
  image?: string;
  src: string;
  video: string;
};

export const ARRANGEMENTS: Arrangement[] = [
  {
    number: "01",
    title: "ГОЛОС СВІЙ",
    artist: "NOVA",
    image: "/images/imgImage12.webp",
    src: "/audio/arrangements/golos-svij.mp3",
    video: "/video/process-golos-svij.mp4",
  },
  {
    number: "02",
    title: "Неосяжний",
    artist: "Денис Булах",
    image: "/images/imgImage13.webp",
    src: "/audio/arrangements/neosiazhnyi.mp3",
    video: "/video/process-neosiazhnyi.mp4",
  },
  {
    number: "03",
    title: "ХАЙ ВІТЕР ДУЄ",
    src: "/audio/arrangements/khai-viter-duie.mp3",
    video: "/video/process-khai-viter-duie.mp4",
  },
];

export function Arrangements() {
  return (
    <Section
      id="arrangements"
      aria-labelledby="arrangements-title"
      className="pb-10 pt-16 md:pt-24 xl:pb-[167px] xl:pt-[238px]"
    >
      <div className="xl:pl-[5px]">
        <SectionTitle id="arrangements-title" className="leading-[normal]!">
          аранжування
        </SectionTitle>
        <ul className="mt-8 grid grid-cols-1 gap-x-5 gap-y-8 md:grid-cols-2 xl:mt-[49px] xl:grid-cols-3">
          {ARRANGEMENTS.map(({ number, title, artist, image, src, video }) => (
            <li key={number} className="flex flex-col gap-[21px]">
              <PlayableBlock
                as="article"
                src={src}
                className="flex min-h-[226px] justify-between gap-4 rounded-card bg-card pb-5 pl-5 pr-5 pt-4 uppercase"
              >
                <div className="flex min-w-0 flex-col justify-between">
                  <span className="text-[clamp(36px,3.125vw,50px)] font-bold leading-[normal] text-accent">
                    {number}
                  </span>
                  <div className="min-w-0 text-[clamp(14px,1.25vw,20px)] leading-[normal] text-white">
                    <p className="font-bold">{title}</p>
                    {artist ? (
                      <p className="mt-[5px] font-normal">{artist}</p>
                    ) : null}
                    <BlockPlayer title={title} className="mt-3 normal-case" />
                  </div>
                </div>
                {image ? (
                  <div className="relative mt-[9px] aspect-square w-[clamp(96px,22vw,177px)] shrink-0 self-start md:w-[clamp(110px,14vw,177px)] xl:w-[clamp(110px,8.5vw,140px)]">
                    <Image
                      src={image}
                      alt={artist ? `${title} — ${artist}` : title}
                      fill
                      sizes="(min-width: 1280px) 140px, 22vw"
                      className="object-cover"
                    />
                  </div>
                ) : null}
              </PlayableBlock>
              <div className="w-[222px] max-w-full">
                <ProcessVideo src={video} title={title} />
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-8 flex items-start justify-end xl:mt-[56px]">
          <ScribbleArrow className="mt-[7px] w-[min(330px,calc(100%-82px))] shrink" />
          <p className="relative -ml-[60px] mr-0.5 w-[82px] shrink-0 font-[family-name:var(--font-amatic)] font-bold text-[length:clamp(26px,2.25vw,36px)] leading-[1.1] text-accent">
            Тицяй і слухай
          </p>
        </div>
      </div>
    </Section>
  );
}
