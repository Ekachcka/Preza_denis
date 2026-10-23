import { ProcessButton } from "@/components/ui/ProcessButton";
import { ScribbleArrow } from "@/components/ui/ScribbleArrow";
import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { CoverCard, type Cover } from "./covers/CoverCard";
import { DecorLines } from "./covers/DecorLines";

export const COVERS: Cover[] = [
  {
    title: "Я знаю",
    artist: "TAYA",
    image: "/images/imgImage1.webp",
    imageWidth: 1280,
    imageHeight: 720,
    crop: { width: 194.59, height: 110.38, left: -46.57, top: -2.36 },
  },
  {
    title: "Чому",
    artist: "TAYA",
    image: "/images/imgImage2.webp",
    imageWidth: 1280,
    imageHeight: 720,
    crop: { width: 175.77, height: 100, left: -37.88, top: 0 },
  },
  { title: "Шукай", artist: "DOROTIUK", image: "/images/imgImage5.webp" },
  { title: "Як добре", artist: "Kreshtofova", image: "/images/imgImage6.webp" },
  { title: "Дуда", artist: "Thesaurum", image: "/images/imgImage7.webp" },
  { title: "З Днем Народ..", artist: "ZHANNET", image: "/images/imgImage8.webp" },
];

export function Covers() {
  return (
    <Section
      id="covers"
      aria-labelledby="covers-title"
      className="bg-surface pb-10 pt-16 md:pt-24 xl:pb-0 xl:pt-[172px]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-[150px] mx-auto w-full max-w-[1600px] md:top-[226px]"
      >
        <DecorLines className="left-0 w-[calc(100%+4px)] xl:left-1.5" />
      </div>
      <div className="relative">
        <SectionTitle id="covers-title" className="max-w-[350px] leading-[normal]!">
          Клікай на обкладинки — слухай музику!
        </SectionTitle>
        <ul className="mt-8 grid grid-cols-2 gap-x-3 gap-y-8 md:grid-cols-3 md:gap-x-5 xl:mt-[53px] xl:grid-cols-6 xl:gap-x-[22px]">
          {COVERS.map((cover) => (
            <li key={cover.title} className="flex flex-col gap-4 xl:gap-[34px]">
              <CoverCard cover={cover} />
              <ProcessButton />
            </li>
          ))}
        </ul>
        <div className="mt-10 flex items-end justify-end xl:mt-[55px]">
          <ScribbleArrow className="w-[min(330px,55%)]" />
          <p className="-ml-3.5 w-[min(229px,45%)] shrink-0 text-right text-[clamp(14px,1.25vw,20px)] leading-[normal] text-accent xl:mr-[7px]">
            Натисни, <br />
            щоб побачити творчий процес
          </p>
        </div>
      </div>
    </Section>
  );
}
