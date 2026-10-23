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

type Frame = "none" | "outline" | "filled" | "card";

type Variant = {
  name: string;
  icon: number;
  gap: string;
  frame: Frame;
  circle?: number;
};

const VARIANTS: Variant[] = [
  { name: "Поточний (як у Figma, але текст на одному рівні)", icon: 1, gap: "gap-[65px]", frame: "none" },
  { name: "1. Іконки ×1.5, відступ 40", icon: 1.5, gap: "gap-10", frame: "none" },
  { name: "2. Іконки ×2, відступ 32", icon: 2, gap: "gap-8", frame: "none" },
  { name: "3. Іконки ×2.5, відступ 28", icon: 2.5, gap: "gap-7", frame: "none" },
  { name: "4. Іконки ×3, відступ 24", icon: 3, gap: "gap-6", frame: "none" },
  { name: "5. Іконка ×1.3 в оранжевому колі-обведенні (кільце 96)", icon: 1.3, gap: "gap-8", frame: "outline", circle: 96 },
  { name: "6. Іконка ×1.6 в оранжевому колі-обведенні (кільце 120)", icon: 1.6, gap: "gap-8", frame: "outline", circle: 120 },
  { name: "7. Іконка ×1.3 у темному колі на сірому тлі (коло 96)", icon: 1.3, gap: "gap-8", frame: "filled", circle: 96 },
  { name: "8. Картки-кнопки: іконка в темному колі 88 на сірій картці", icon: 1.3, gap: "gap-6", frame: "card", circle: 88 },
];

export default function ContactsSizePreview() {
  return (
    <main className="mx-auto max-w-[1600px] px-4 py-10 sm:px-10 xl:px-[70px]">
      <h1 className="mb-10 text-2xl font-bold">Варіанти іконок у «Контакти для співпраці» (текст 20px, на одному рівні)</h1>
      <div className="flex flex-col gap-12">
        {VARIANTS.map((v) => {
          const slot = v.circle ?? Math.round(42 * v.icon);
          return (
            <section key={v.name}>
              <p className="mb-4 text-sm text-white/60">{v.name}</p>
              <div className="rounded-card bg-plate px-6 py-12">
                <h2 className="text-center text-[30px] font-bold uppercase leading-normal text-muted">
                  контакти Для співпраці
                </h2>
                <ul className="mx-auto mt-14 grid max-w-[1380px] grid-cols-1 items-start gap-10 sm:grid-cols-3 sm:gap-4">
                  {CONTACTS.map(({ text, icon, w, h }) => (
                    <li key={text} className="flex justify-center">
                      <div
                        className={`flex min-w-0 flex-col items-center text-center text-accent ${v.gap} ${v.frame === "card" ? "rounded-card bg-card px-10 py-8" : ""}`}
                      >
                        <span
                          style={{ height: slot, width: slot }}
                          className={`flex shrink-0 items-center justify-center rounded-full ${v.frame === "outline" ? "border-2 border-accent" : ""} ${v.frame === "filled" || v.frame === "card" ? "bg-plate" : ""} ${v.frame === "filled" ? "outline outline-[10px] outline-card" : ""}`}
                        >
                          <Image src={icon} alt="" width={Math.round(w * v.icon)} height={Math.round(h * v.icon)} />
                        </span>
                        <span className="break-all text-xl font-medium leading-normal">{text}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          );
        })}
      </div>
    </main>
  );
}
