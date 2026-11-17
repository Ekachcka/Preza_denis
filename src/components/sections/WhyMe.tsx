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

function Waves({ seed }: { seed: number }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 224 100"
      preserveAspectRatio="none"
      fill="currentColor"
      className="absolute inset-x-0 bottom-0 -z-10 h-[28%] w-full text-accent opacity-25"
    >
      {Array.from({ length: 28 }, (_, i) => {
        const h = 14 + Math.abs(Math.sin((i + 1) * (seed + 1.7)) * 70);
        return <rect key={i} x={i * 8} y={50 - h / 2} width="4" height={h} rx="2" />;
      })}
    </svg>
  );
}

export function WhyMe() {
  return (
    <Section id="why-me" aria-labelledby="why-me-title" className="pt-20 md:pt-32 xl:pt-[224px]">
      <SectionTitle id="why-me-title" className="mb-6 xl:mb-[49px]">
        чому варто співпрацювати зі мною
      </SectionTitle>
      <ul className="grid grid-cols-1 gap-[15px] md:grid-cols-2 xl:grid-cols-4">
        {REASONS.map(({ number, text, maxWidth }, index) => (
          <li key={number}>
            <NumberedCard
              number={number}
              variant="compact"
              className="relative isolate h-full overflow-hidden"
            >
              <Waves seed={index} />
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
