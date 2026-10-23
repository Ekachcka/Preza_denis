import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Варіанти розмірів контактів",
  robots: { index: false },
};

const CONTACTS = [
  { text: "+38 096 731 39 92", icon: "/images/imgVector.svg", w: 38, h: 38 },
  { text: "bulakhdenis2002@gmail.com", icon: "/images/imgVector2.svg", w: 42, h: 34 },
  { text: "@bulakh_denis", icon: "/images/imgVector1.svg", w: 42, h: 42 },
] as const;

type Variant = {
  name: string;
  title: string;
  icon: number;
  text: string;
  gap: string;
  card?: boolean;
  row?: boolean;
};

const VARIANTS: Variant[] = [
  { name: "Поточний (як у Figma)", title: "text-[30px] text-muted", icon: 1, text: "text-xl", gap: "gap-[65px]" },
  { name: "1. Трохи більше: іконки ×1.5, текст 24, заголовок 36 світліший", title: "text-[36px] text-white/45", icon: 1.5, text: "text-2xl", gap: "gap-10" },
  { name: "2. Великі: іконки ×2, текст 28, заголовок 44", title: "text-[44px] text-white/60", icon: 2, text: "text-[28px]", gap: "gap-8" },
  { name: "3. Картки-кнопки: іконка в колі, текст 24, заголовок 40", title: "text-[40px] text-white/50", icon: 1.3, text: "text-2xl", gap: "gap-6", card: true },
  { name: "4. Горизонтальні пігулки: іконка зліва, текст 22, заголовок 40", title: "text-[40px] text-white/50", icon: 1.2, text: "text-[22px]", gap: "gap-4", row: true },
];

export default function ContactsSizePreview() {
  return (
    <main className="mx-auto max-w-[1600px] px-4 py-10 sm:px-10 xl:px-[70px]">
      <h1 className="mb-10 text-2xl font-bold">Варіанти розмірів у «Контакти для співпраці»</h1>
      <div className="flex flex-col gap-12">
        {VARIANTS.map((v) => (
          <section key={v.name}>
            <p className="mb-4 text-sm text-white/60">{v.name}</p>
            <div className="rounded-card bg-plate px-6 py-12">
              <h2 className={`text-center font-bold uppercase leading-normal ${v.title}`}>
                контакти Для співпраці
              </h2>
              <ul className="mx-auto mt-14 grid max-w-[1380px] grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-4">
                {CONTACTS.map(({ text, icon, w, h }) => (
                  <li key={text} className="flex justify-center">
                    <div
                      className={`flex min-w-0 items-center text-accent ${v.gap} ${v.row ? "flex-row rounded-full border-2 border-accent px-6 py-3" : "flex-col text-center"} ${v.card ? "rounded-card bg-card px-10 py-8" : ""}`}
                    >
                      <span
                        className={`flex shrink-0 items-center justify-center ${v.card ? "size-[88px] rounded-full bg-plate" : ""}`}
                      >
                        <Image src={icon} alt="" width={Math.round(w * v.icon)} height={Math.round(h * v.icon)} />
                      </span>
                      <span className={`${v.row ? "whitespace-nowrap" : "break-all"} font-medium leading-normal ${v.text}`}>{text}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
