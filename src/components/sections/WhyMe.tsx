import { NumberedCard } from "@/components/ui/NumberedCard";
import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";

const REASONS = [
  {
    number: "01",
    text: "Я приступаю до проекту відразу, не відкладаючи на потім",
    maxWidth: 279,
  },
  {
    number: "02",
    text: "Я можу придумати ідеї для пісні і прописати партію гітари в різних стилях (рок, фанк, поп, блюз)",
    maxWidth: 293,
  },
  {
    number: "03",
    text: "Я граю на класичній, акустичній та електрогітарі",
    maxWidth: 303,
  },
  {
    number: "04",
    text: "Я не бухаю, і завжди на зв’язку!",
    maxWidth: 230,
  },
] as const;

export function WhyMe() {
  return (
    <Section id="why-me" className="pt-20 md:pt-32 xl:pt-[236px]">
      <SectionTitle className="mb-6 xl:mb-[49px]">
        чому варто співпрацювати зі мною
      </SectionTitle>
      <ul className="grid grid-cols-1 gap-[15px] md:grid-cols-2 xl:grid-cols-4">
        {REASONS.map(({ number, text, maxWidth }) => (
          <li key={number}>
            <NumberedCard number={number} variant="compact" className="h-full">
              <p
                className="mt-[11px] text-base font-medium leading-normal text-[#bdbdbd] sm:text-xl"
                style={{ maxWidth }}
              >
                {text}
              </p>
            </NumberedCard>
          </li>
        ))}
      </ul>
    </Section>
  );
}
