import type { Metadata } from "next";
import Link from "next/link";
import type { FocusKey } from "@/lib/focusTargets";
import { ShowOnSite } from "./ShowOnSite";

export const metadata: Metadata = {
  title: "Пропозиції",
  robots: { index: false },
};

const PROPOSALS: readonly { href: string; title: string; focus: FocusKey }[] = [
  { href: "/arrows", title: "Шрифти для підписів біля стрілок", focus: "arrows" },
  { href: "/proposals/hero-name", title: "Колір імені «Bulakh Denis» на оранжевому крузі в Hero", focus: "hero-name" },
  { href: "/proposals/hero-tagline", title: "Шрифт підпису «Guitar is my voice…» в Hero", focus: "hero-tagline" },
  { href: "/proposals/about-text", title: "Текст секції «Вітаю!» (більш впевнені формулювання)", focus: "about-text" },
  { href: "/proposals/stock-text", title: "Текст плашки про стокову музику + додаткові стилі", focus: "stock-text" },
  { href: "/proposals/why-me-backgrounds", title: "Підкладки-картинки під текст у «Чому я»", focus: "why-me" },
  { href: "/proposals/contacts-size", title: "Розміри іконок і тексту в «Контакти»", focus: "contacts" },
];

const QUESTIONS: readonly { title: string; text: string; focus?: FocusKey }[] = [
  {
    title: "Вкладка браузера: іконка і назва",
    text: "Замість стандартної іконки потрібна власна іконка та фото для превʼю. Що вказати в назві вкладки? Зараз там «Денис Булах — гітарист, аранжувальник, звукозапис», і назва обрізається.",
  },
  {
    title: "Картки треків альбому (01–07)",
    text: "Що вставляти в ці картки? Якщо нічого, варто спробувати інші шрифти та якусь підкладку.",
    focus: "tracks",
  },
  {
    title: "Плашка про семпли: який текст краще",
    text: "«Ось один мій фанковий семплпак» чи «Ось один з моїх фанкових семплпаїв»?",
    focus: "samples-text",
  },
];

export default function Proposals() {
  return (
    <main className="mx-auto max-w-[800px] px-4 py-10 sm:px-10">
      <h1 className="mb-8 text-2xl font-bold">Пропозиції</h1>
      <ul className="flex flex-col gap-4">
        {PROPOSALS.map(({ href, title, focus }) => (
          <li key={href} className="flex flex-wrap items-center gap-3">
            <Link href={href} className="text-accent underline underline-offset-4 hover:opacity-80">
              {title}
            </Link>
            <ShowOnSite focus={focus} />
          </li>
        ))}
      </ul>
      <h2 className="mb-6 mt-14 text-2xl font-bold">Питання до рішення</h2>
      <ol className="flex list-decimal flex-col gap-6 pl-6">
        {QUESTIONS.map(({ title, text, focus }) => (
          <li key={title}>
            <p className="font-bold">{title}</p>
            <p className="mt-1 text-white/70">{text}</p>
            {focus ? (
              <div className="mt-2">
                <ShowOnSite focus={focus} />
              </div>
            ) : null}
          </li>
        ))}
      </ol>
    </main>
  );
}
