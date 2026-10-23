import type { Metadata } from "next";
import { ShowOnSite } from "../ShowOnSite";

export const metadata: Metadata = {
  title: "Варіанти тексту About",
  robots: { index: false },
};

type Variant = { name: string; title: string; paragraphs: string[] };

const VARIANTS: Variant[] = [
  {
    name: "Оригінал (як у Figma)",
    title: "Вітаю!",
    paragraphs: [
      "Мене звати Денис Булах!",
      "Мені 23 роки. Я гітарист, музикант! Прагну працювати в сфері аранжування і звукозапису з вами!",
      "Я маю досвід роботи на студії в онлайн форматі вже 4 роки.  Ось деякі треки на які я прописував гітарні партії і аранжування та докази, що робив їх саме я:",
    ],
  },
  {
    name: "1. Лаконічний і впевнений",
    title: "Вітаю!",
    paragraphs: [
      "Мене звати Денис Булах.",
      "Мені 23 роки, я гітарист і музикант. Працюю в сфері аранжування та звукозапису й готовий робити це для вас.",
      "Уже 4 роки співпрацюю зі студіями в онлайн-форматі. Нижче — треки, в яких гітарні партії та аранжування зробив я. Послухайте самі:",
    ],
  },
  {
    name: "2. Діловий",
    title: "Вітаю!",
    paragraphs: [
      "Я Денис Булах — гітарист, музикант, 23 роки.",
      "Працюю в сфері аранжування та звукозапису. Чотири роки співпрацюю зі студіями в онлайн-форматі.",
      "Нижче — треки з моїми гітарними партіями та аранжуваннями. Це підтвердження мого досвіду:",
    ],
  },
  {
    name: "3. Пропозиція співпраці",
    title: "Вітаю!",
    paragraphs: [
      "Я Денис Булах, гітарист і музикант.",
      "Пишу гітарні партії та аранжування, працюю в сфері звукозапису. Готовий долучитися до вашого проєкту.",
      "Мені 23 роки, з них 4 роки я працюю зі студіями онлайн. Ось треки, де гітара й аранжування — моя робота:",
    ],
  },
  {
    name: "4. Коротко і з характером",
    title: "Привіт, я Денис Булах!",
    paragraphs: [
      "Гітарист і музикант, мені 23.",
      "Аранжування та звукозапис — моя сфера. 4 роки працюю зі студіями в онлайн-форматі.",
      "Мої гітарні партії та аранжування — у цих треках. Слухайте:",
    ],
  },
];

export default function AboutTextPreview() {
  return (
    <main className="mx-auto max-w-[1600px] px-4 py-10 sm:px-10 xl:px-[70px]">
      <div className="mb-10 flex flex-wrap items-center gap-4">
        <h1 className="text-2xl font-bold">Варіанти тексту секції «Вітаю!»</h1>
        <ShowOnSite focus="about-text" />
      </div>
      <ul className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {VARIANTS.map(({ name, title, paragraphs }) => (
          <li key={name}>
            <p className="mb-3 text-sm text-white/60">{name}</p>
            <div className="rounded-card bg-card p-8">
              <h2 className="text-[30px] font-bold leading-[normal]">{title}</h2>
              {paragraphs.map((text) => (
                <p key={text} className="mt-4 max-w-[520px] whitespace-pre-wrap text-xl font-medium leading-[normal]">
                  {text}
                </p>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
