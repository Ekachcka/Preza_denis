import Image from "next/image";
import { ProcessButton } from "@/components/ui/ProcessButton";
import { Section } from "@/components/ui/Section";

type Track = { number: string; title: string };

const TOP_TRACKS: Track[] = [
  { number: "01", title: "Any Price" },
  { number: "02", title: "Libertango" },
  { number: "03", title: "Promenade" },
];

const BOTTOM_TRACKS: Track[] = [
  { number: "04", title: "Now or never" },
  { number: "05", title: "Night" },
  { number: "06", title: "TIMe" },
  { number: "07", title: "Winter" },
];

const NUMBER_CLASS =
  "text-[clamp(28px,3.125vw,50px)] font-bold leading-[normal] text-accent-num";
const TITLE_CLASS =
  "break-words text-[clamp(20px,2.8125vw,45px)] font-semibold uppercase leading-[normal] text-white";

function WideTrack({ number, title }: Track) {
  return (
    <li className="flex min-w-0 flex-col gap-5">
      <div className="flex min-h-[96px] items-center gap-[13px] rounded-card bg-card-cover py-4 pl-8 pr-4 md:min-h-[134px] md:flex-col md:items-start md:justify-center md:gap-1 md:pl-5 xl:flex-row xl:items-center xl:justify-start xl:gap-[13px] xl:pl-8">
        <span className={NUMBER_CLASS}>{number}</span>
        <span className={TITLE_CLASS}>{title}</span>
      </div>
      <ProcessButton />
    </li>
  );
}

function TallTrack({ number, title }: Track) {
  return (
    <li className="flex min-w-0 flex-col gap-5">
      <div className="flex min-h-[200px] flex-1 flex-col gap-3 rounded-card bg-card-cover py-6 pl-5 pr-3 sm:pl-8 xl:min-h-[283px] xl:gap-5 xl:pt-[38px]">
        <span className={NUMBER_CLASS}>{number}</span>
        <span className={TITLE_CLASS}>{title}</span>
      </div>
      <ProcessButton />
    </li>
  );
}

export function Album() {
  return (
    <Section id="album" className="py-10 md:py-16 xl:pb-[236px] xl:pt-0">
      <div className="flex flex-col gap-8 rounded-[27px] bg-card-cover p-6 xl:min-h-[366px] md:flex-row md:items-start md:gap-12 md:px-8 md:py-[38px] xl:gap-[65px] xl:pl-[41px] xl:pr-[49px]">
        <div className="relative aspect-[280/281] w-[200px] shrink-0 rounded-card border-3 border-accent xl:w-[280px]">
          <Image
            src="/images/imgImage9.png"
            alt=""
            fill
            sizes="(min-width: 1280px) 280px, 200px"
            className="rounded-card object-cover"
          />
          <span className="absolute bottom-[3px] left-1 h-[14px] w-[15px] rounded-card bg-white" />
        </div>
        <div className="flex min-w-0 flex-1 flex-col">
          <h2 className="max-w-[374px] break-words text-[clamp(28px,3.125vw,50px)] font-medium uppercase leading-[normal] text-accent">
            Kostiantyn Kukushkin Accordion
          </h2>
          <hr className="mt-6 h-0 w-full border-0 border-t-2 border-accent xl:mt-[28px]" />
          <p className="mt-4 text-[clamp(20px,1.875vw,30px)] font-normal uppercase leading-[normal] text-accent">
            Album &quot;Any price&quot;
          </p>
        </div>
      </div>
      <ul className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3 xl:mt-[134px]">
        {TOP_TRACKS.map((track) => (
          <WideTrack key={track.number} {...track} />
        ))}
      </ul>
      <ul className="mt-10 grid grid-cols-2 gap-x-5 gap-y-8 xl:mt-[79px] xl:grid-cols-4 xl:gap-y-5">
        {BOTTOM_TRACKS.map((track) => (
          <TallTrack key={track.number} {...track} />
        ))}
      </ul>
    </Section>
  );
}
