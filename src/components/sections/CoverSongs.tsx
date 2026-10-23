import { NumberedCard } from "@/components/ui/NumberedCard";
import { ScribbleHint } from "@/components/ui/ScribbleHint";
import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";

const CARDS = [
  { number: "01", className: "md:col-span-2" },
  { number: "02", className: "md:col-span-2" },
  { number: "03", className: "md:col-span-2" },
  { number: "04", className: "md:col-span-2 md:col-start-2" },
  { number: "05", className: "md:col-span-2" },
] as const;

export function CoverSongs() {
  return (
    <Section id="cover-songs" className="pt-20 md:pt-32 xl:pt-[211px]">
      <SectionTitle className="mb-6 xl:mb-[49px]">трохи каверів</SectionTitle>
      <ul className="grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-6">
        {CARDS.map(({ number, className }) => (
          <li key={number} className={className}>
            <NumberedCard number={number} className="h-full" />
          </li>
        ))}
      </ul>
      <ScribbleHint className="mt-10 xl:mt-[60px]" />
    </Section>
  );
}
