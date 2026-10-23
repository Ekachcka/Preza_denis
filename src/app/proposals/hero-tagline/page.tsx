import type { Metadata } from "next";
import Image from "next/image";
import {
  Bebas_Neue,
  Caveat,
  Cormorant_Garamond,
  Dancing_Script,
  Oswald,
  Permanent_Marker,
  Playfair_Display,
  Rock_Salt,
  Satisfy,
  Shadows_Into_Light,
} from "next/font/google";

export const metadata: Metadata = {
  title: "Варіанти шрифту підпису в Hero",
  robots: { index: false },
};

const dancing = Dancing_Script({ subsets: ["latin"] });
const satisfy = Satisfy({ subsets: ["latin"], weight: "400" });
const caveat = Caveat({ subsets: ["latin"], weight: "600" });
const marker = Permanent_Marker({ subsets: ["latin"], weight: "400" });
const playfair = Playfair_Display({ subsets: ["latin"], style: "italic", weight: "600" });
const cormorant = Cormorant_Garamond({ subsets: ["latin"], style: "italic", weight: "700" });
const bebas = Bebas_Neue({ subsets: ["latin"], weight: "400" });
const oswald = Oswald({ subsets: ["latin"], weight: "500" });
const rockSalt = Rock_Salt({ subsets: ["latin"], weight: "400" });
const shadows = Shadows_Into_Light({ subsets: ["latin"], weight: "400" });

const VARIANTS = [
  { name: "1. Dancing Script", font: dancing, size: "text-[26px]" },
  { name: "2. Satisfy", font: satisfy, size: "text-[26px]" },
  { name: "3. Caveat", font: caveat, size: "text-[30px]" },
  { name: "4. Permanent Marker", font: marker, size: "text-[20px]" },
  { name: "5. Playfair Display Italic", font: playfair, size: "text-[22px]" },
  { name: "6. Cormorant Garamond Italic", font: cormorant, size: "text-[28px]" },
  { name: "7. Bebas Neue", font: bebas, size: "text-[28px]" },
  { name: "8. Oswald", font: oswald, size: "text-[22px]" },
  { name: "9. Rock Salt", font: rockSalt, size: "text-[16px]" },
  { name: "10. Shadows Into Light", font: shadows, size: "text-[28px]" },
] as const;

export default function HeroTaglinePreview() {
  return (
    <main className="mx-auto max-w-[1600px] px-4 py-10 sm:px-10 xl:px-[70px]">
      <h1 className="mb-10 text-2xl font-bold">Варіанти шрифту для «Guitar is my voice, music is my story.»</h1>
      <ul className="grid grid-cols-1 gap-10 md:grid-cols-2">
        {VARIANTS.map(({ name, font, size }) => (
          <li key={name}>
            <p className="mb-4 text-sm text-white/60">{name}</p>
            <div className="rounded-card bg-accent px-8 py-8 text-surface">
              <div className="relative mb-4 h-4 w-4">
                <Image src="/images/imgGroup2.svg" alt="" fill unoptimized />
              </div>
              <p className={`${font.className} ${size} max-w-[300px] leading-[1.15]`}>
                Guitar is my voice, music is my story.
              </p>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
