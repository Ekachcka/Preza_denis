import { NumberedCard } from "@/components/ui/NumberedCard";
import { ScribbleHint } from "@/components/ui/ScribbleHint";
import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";

const CARDS = ["01", "02", "03"] as const;

export function Logos() {
  return (
    <Section id="logos" aria-labelledby="logos-title" className="pt-20 md:pt-32 xl:pt-[236px]">
      <SectionTitle id="logos-title" className="mb-6 xl:mb-[49px]">логотипи</SectionTitle>
      <ul className="grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3">
        {CARDS.map((number) => (
          <li key={number}>
            <NumberedCard number={number} className="h-full" />
          </li>
        ))}
      </ul>
      <ScribbleHint className="mt-10 xl:mt-[60px]" />
    </Section>
  );
}
