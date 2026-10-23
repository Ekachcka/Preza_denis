import { NumberedCard } from "@/components/ui/NumberedCard";
import { ScribbleArrow } from "@/components/ui/ScribbleArrow";
import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";

const CARDS = ["01", "02", "03"] as const;

export function Logos() {
  return (
    <Section id="logos" className="pt-20 md:pt-32 xl:pt-[236px]">
      <SectionTitle className="mb-6 xl:mb-[49px]">логотипи</SectionTitle>
      <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
        {CARDS.map((number) => (
          <li key={number}>
            <NumberedCard number={number} className="h-full" />
          </li>
        ))}
      </ul>
      <ScribbleArrow className="mt-10 xl:mt-[60px]" />
    </Section>
  );
}
