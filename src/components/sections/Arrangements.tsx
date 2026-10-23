import Image from "next/image";
import { ProcessButton } from "@/components/ui/ProcessButton";
import { ScribbleArrow } from "@/components/ui/ScribbleArrow";
import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";

type Arrangement = {
  number: string;
  title: string;
  artist: string;
  image: string;
};

export const ARRANGEMENTS: Arrangement[] = [
  {
    number: "01",
    title: "ГОЛОС СВІЙ",
    artist: "NOVA",
    image: "/images/imgImage12.png",
  },
  {
    number: "02",
    title: "Неосяжний",
    artist: "Денис Булах",
    image: "/images/imgImage13.png",
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
        <ul className="mt-8 grid grid-cols-1 gap-x-5 gap-y-8 md:grid-cols-2 xl:mt-[49px]">
          {ARRANGEMENTS.map(({ number, title, artist, image }) => (
            <li key={number} className="flex flex-col gap-[21px]">
              <article className="flex min-h-[226px] justify-between gap-4 rounded-card bg-card pb-5 pl-5 pr-6 pt-4 uppercase">
                <div className="flex min-w-0 flex-col justify-between">
                  <span className="text-[50px] font-bold leading-[normal] text-accent">
                    {number}
                  </span>
                  <div className="min-w-0 text-[clamp(14px,1.25vw,20px)] leading-[normal] text-white">
                    <p className="font-bold">{title}</p>
                    <p className="mt-[5px] font-normal">{artist}</p>
                  </div>
                </div>
                <div className="relative mt-[9px] aspect-square w-[clamp(96px,22vw,177px)] shrink-0 self-start md:w-[clamp(120px,15vw,177px)]">
                  <Image
                    src={image}
                    alt={`${title} — ${artist}`}
                    fill
                    sizes="(min-width: 1280px) 177px, 22vw"
                    className="object-cover"
                  />
                </div>
              </article>
              <div className="w-[222px] max-w-full">
                <ProcessButton />
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-8 flex items-start justify-end xl:mt-[56px]">
          <ScribbleArrow className="mt-[7px] w-[min(330px,calc(100%-82px))] shrink" />
          <p className="relative -ml-[60px] mr-0.5 w-[82px] shrink-0 text-[clamp(14px,1.25vw,20px)] leading-[normal] text-accent">
            Тицяй і слухай
          </p>
        </div>
      </div>
    </Section>
  );
}
