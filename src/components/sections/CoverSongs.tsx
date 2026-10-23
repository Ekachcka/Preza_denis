import { NumberedCard } from "@/components/ui/NumberedCard";
import { ScribbleArrow } from "@/components/ui/ScribbleArrow";
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
    <Section id="cover-songs" className="pt-20 md:pt-32 xl:pt-[236px]">
      <SectionTitle className="mb-6 xl:mb-[49px]">трохи каверів</SectionTitle>
      <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-6">
        {CARDS.map(({ number, className }) => (
          <li key={number} className={className}>
            <NumberedCard number={number} className="h-full" />
          </li>
        ))}
      </ul>
      <ScribbleArrow className="mt-10 xl:mt-[60px]" />
    </Section>
  );
}
