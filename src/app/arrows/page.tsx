import type { Metadata } from "next";
import {
  Amatic_SC,
  Bad_Script,
  Caveat,
  Marck_Script,
  Neucha,
  Pacifico,
  Pangolin,
  Underdog,
} from "next/font/google";
import { ScribbleArrow } from "@/components/ui/ScribbleArrow";

export const metadata: Metadata = {
  title: "Варіанти шрифтів для стрілок",
  robots: { index: false },
};

const caveat = Caveat({ subsets: ["cyrillic", "latin"], weight: "500" });
const marck = Marck_Script({ subsets: ["cyrillic", "latin"], weight: "400" });
const badScript = Bad_Script({ subsets: ["cyrillic", "latin"], weight: "400" });
const neucha = Neucha({ subsets: ["cyrillic", "latin"], weight: "400" });
const pangolin = Pangolin({ subsets: ["cyrillic", "latin"], weight: "400" });
const pacifico = Pacifico({ subsets: ["cyrillic", "latin"], weight: "400" });
const amatic = Amatic_SC({ subsets: ["cyrillic", "latin"], weight: "700" });
const underdog = Underdog({ subsets: ["cyrillic", "latin"], weight: "400" });

const VARIANTS = [
  { name: "1. Caveat", font: caveat, size: "text-[32px]" },
  { name: "2. Marck Script", font: marck, size: "text-[28px]" },
  { name: "3. Bad Script", font: badScript, size: "text-[26px]" },
  { name: "4. Neucha", font: neucha, size: "text-[26px]" },
  { name: "5. Pangolin", font: pangolin, size: "text-[26px]" },
  { name: "6. Pacifico", font: pacifico, size: "text-[22px]" },
  { name: "7. Amatic SC", font: amatic, size: "text-[36px]" },
  { name: "8. Underdog", font: underdog, size: "text-[24px]" },
] as const;

export default function ArrowsPreview() {
  return (
    <main className="mx-auto max-w-[1600px] px-4 py-10 sm:px-10 xl:px-[70px]">
      <h1 className="mb-10 text-2xl font-bold">Варіанти шрифтів для підписів біля стрілок</h1>
      <ul className="flex flex-col gap-10">
        {VARIANTS.map(({ name, font, size }) => (
          <li key={name} className="border-b border-card pb-10">
            <p className="mb-4 text-sm text-white/60">{name}</p>
            <div className="flex items-start justify-end gap-6 xl:gap-[81px]">
              <ScribbleArrow className="w-[clamp(160px,45vw,330px)]" />
              <p
                className={`${font.className} ${size} mt-6 w-[260px] text-right leading-[1.1] text-accent`}
              >
                Натисни, щоб побачити творчий процес
              </p>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
