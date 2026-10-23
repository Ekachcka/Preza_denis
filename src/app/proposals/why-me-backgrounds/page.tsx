import type { Metadata } from "next";
import Image from "next/image";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Варіанти підкладок для «Чому я»",
  robots: { index: false },
};

const CARDS = [
  { number: "01", text: "Я приступаю до проекту відразу, не відкладаючи на потім" },
  { number: "02", text: "Я можу придумати ідеї для пісні і прописати партію гітари в різних стилях (рок, фанк, поп, блюз)" },
  { number: "03", text: "Я граю на класичній, акустичній та електрогітарі" },
  { number: "04", text: "Я не бухаю, і завжди на зв’язку!" },
] as const;

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

const ICONS: ReactNode[] = [
  <svg key="clock" viewBox="0 0 64 64" {...stroke}>
    <circle cx="32" cy="32" r="26" />
    <path d="M32 16v16l11 7" />
    <path d="M20 4l-6 6M44 4l6 6" />
  </svg>,
  <svg key="bulb" viewBox="0 0 64 64" {...stroke}>
    <path d="M32 6a18 18 0 0 0-10 33c2 2 3 4 3 7h14c0-3 1-5 3-7A18 18 0 0 0 32 6z" />
    <path d="M25 52h14M27 58h10" />
    <path d="M28 40V28l4 4 4-4v12" />
  </svg>,
  <svg key="guitar" viewBox="0 0 64 64" {...stroke}>
    <path d="M44 6l8 8-4 4-8-8z" />
    <path d="M42 14L28 28" />
    <path d="M30 26c-6-2-12 2-12 8-8 0-12 6-10 12s10 12 18 10 10-8 10-14c6 0 10-6 8-12" />
    <circle cx="24" cy="40" r="4" />
  </svg>,
  <svg key="phone" viewBox="0 0 64 64" {...stroke}>
    <rect x="18" y="4" width="28" height="56" rx="6" />
    <path d="M28 10h8" />
    <circle cx="32" cy="52" r="2" />
    <path d="M24 22h16M24 30h16M24 38h10" />
  </svg>,
];

const PHOTOS = ["/images/imgImage3.png", "/images/imgImage.png", "/images/imgImage4.png", "/images/imgImage10.png"] as const;

function Waves({ seed }: { seed: number }) {
  const bars = Array.from({ length: 28 }, (_, i) => {
    const h = 14 + Math.abs(Math.sin((i + 1) * (seed + 1.7)) * 70);
    return <rect key={i} x={i * 8} y={50 - h / 2} width="4" height={h} rx="2" />;
  });
  return (
    <svg viewBox="0 0 224 100" className="absolute inset-x-0 bottom-0 h-[28%] w-full text-accent opacity-25" fill="currentColor" preserveAspectRatio="none">
      {bars}
    </svg>
  );
}

function Strings() {
  return (
    <svg viewBox="0 0 300 200" className="absolute inset-0 h-full w-full text-accent opacity-20" fill="none" stroke="currentColor" preserveAspectRatio="none">
      {[30, 60, 90, 120, 150, 180].map((y, i) => (
        <path key={y} d={`M0 ${y} Q150 ${y + (i % 2 ? 6 : -6)} 300 ${y}`} strokeWidth={1 + (5 - i) * 0.25} />
      ))}
      {[80, 160, 230].map((x) => (
        <path key={x} d={`M${x} 20V190`} strokeWidth="2" opacity="0.6" />
      ))}
    </svg>
  );
}

const VARIANTS: { name: string; layer: (i: number) => ReactNode }[] = [
  {
    name: "1. Лінійні іконки по темі (годинник, ідея, гітара, зв'язок)",
    layer: (i) => (
      <div className="absolute -bottom-6 -right-4 size-[210px] text-accent opacity-20 [&>svg]:size-full">{ICONS[i]}</div>
    ),
  },
  {
    name: "2. Ваші фото під затемненням",
    layer: (i) => (
      <>
        <Image src={PHOTOS[i]} alt="" fill sizes="(min-width: 1280px) 25vw, 50vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/85 to-card/55" />
      </>
    ),
  },
  {
    name: "3. Звукові хвилі",
    layer: (i) => <Waves seed={i} />,
  },
  {
    name: "4. Гітарні струни та лади",
    layer: () => <Strings />,
  },
];

export default function WhyMeBackgroundsPreview() {
  return (
    <main className="mx-auto max-w-[1600px] px-4 py-10 sm:px-10 xl:px-[70px]">
      <h1 className="mb-10 text-2xl font-bold">Варіанти підкладок під текст у «Чому варто співпрацювати зі мною»</h1>
      <div className="flex flex-col gap-14">
        {VARIANTS.map(({ name, layer }) => (
          <section key={name}>
            <p className="mb-4 text-sm text-white/60">{name}</p>
            <ul className="grid grid-cols-1 gap-[15px] md:grid-cols-2 xl:grid-cols-4">
              {CARDS.map(({ number, text }, i) => (
                <li key={number} className="relative min-h-[226px] overflow-hidden rounded-card bg-card">
                  {layer(i)}
                  <div className="relative z-10 pb-4 pl-[19px] pr-[19px] pt-4">
                    <span className="block text-[50px] font-bold leading-normal text-accent">{number}</span>
                    <p className="mt-4 max-w-[300px] text-xl font-medium leading-[normal] text-white/80">{text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </main>
  );
}
