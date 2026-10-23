import type { Metadata } from "next";
import { ShowOnSite } from "../ShowOnSite";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Варіанти кольору імені в Hero",
  robots: { index: false },
};

const VARIANTS = [
  { name: "1. Як у Figma: білий", name_: "text-white", caption: "text-white", shadow: "" },
  { name: "2. Графіт #171717", name_: "text-surface", caption: "text-surface", shadow: "" },
  { name: "3. Чорний #0b0b0b", name_: "text-plate", caption: "text-plate", shadow: "" },
  { name: "4. Темно-коричневий #3b1f00", name_: "text-[#3b1f00]", caption: "text-[#3b1f00]", shadow: "" },
  { name: "5. Бордовий #7a2400", name_: "text-[#7a2400]", caption: "text-[#7a2400]", shadow: "" },
  { name: "6. Білий з темною тінню", name_: "text-white", caption: "text-white", shadow: "[text-shadow:0_2px_6px_rgba(0,0,0,0.55)]" },
  { name: "7. Ім'я графіт, підпис білий", name_: "text-surface", caption: "text-white", shadow: "" },
  { name: "8. Ім'я білий, підпис графіт", name_: "text-white", caption: "text-surface", shadow: "" },
  { name: "9. Графіт, текст зсунуто всередину круга", name_: "text-surface", caption: "text-surface", shadow: "", inset: true },
  { name: "10. Темно-коричневий, зсунуто всередину", name_: "text-[#3b1f00]", caption: "text-[#3b1f00]", shadow: "", inset: true },
] as const;

export default function HeroNamePreview() {
  return (
    <main className="mx-auto max-w-[1600px] px-4 py-10 sm:px-10 xl:px-[70px]">
      <div className="mb-10 flex flex-wrap items-center gap-4">
        <h1 className="text-2xl font-bold">Варіанти кольору «Bulakh Denis» на оранжевому крузі</h1>
        <ShowOnSite focus="hero-name" />
      </div>
      <ul className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-4">
        {VARIANTS.map((v) => {
          const { name, name_, caption, shadow } = v;
          const inset = "inset" in v;
          return (
          <li key={name}>
            <p className="mb-4 text-sm text-white/60">{name}</p>
            <div className="relative aspect-square w-full max-w-[360px] bg-surface">
              <Image src="/images/imgEllipse1.svg" alt="" fill unoptimized />
              <p
                className={`absolute ${inset ? "left-[22%] top-[14%]" : "left-[10.9%] top-[3.4%]"} w-[33%] text-[clamp(18px,2.2vw,30px)] font-normal leading-[normal] ${name_} ${shadow}`}
              >
                Bulakh Denis
              </p>
              <div className={`absolute h-[2.3%] w-[2.4%] ${inset ? "left-[24%] top-[44%]" : "left-[15.2%] top-[39.2%]"}`}>
                <Image src="/images/imgGroup2.svg" alt="" fill unoptimized />
              </div>
              <p
                className={`absolute ${inset ? "left-[24%] top-[48.5%]" : "left-[15.2%] top-[44%]"} w-[30%] text-[clamp(10px,1vw,15px)] font-semibold leading-[normal] ${caption} ${shadow}`}
              >
                Guitar is my voice, music is my story.
              </p>
            </div>
          </li>
          );
        })}
      </ul>
    </main>
  );
}
