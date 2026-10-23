import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Пропозиції",
  robots: { index: false },
};

const PROPOSALS = [
  { href: "/arrows", title: "Шрифти для підписів біля стрілок" },
  { href: "/proposals/hero-name", title: "Колір імені «Bulakh Denis» на оранжевому крузі в Hero" },
  { href: "/proposals/hero-tagline", title: "Шрифт підпису «Guitar is my voice…» в Hero" },
  { href: "/proposals/about-text", title: "Текст секції «Вітаю!» (більш впевнені формулювання)" },
  { href: "/proposals/stock-text", title: "Текст плашки про стокову музику + додаткові стилі" },
  { href: "/proposals/why-me-backgrounds", title: "Підкладки-картинки під текст у «Чому я»" },
  { href: "/proposals/contacts-size", title: "Розміри іконок і тексту в «Контакти»" },
] as const;

const QUESTIONS = [
  {
    title: "Вкладка браузера: іконка і назва",
    text: "Замість стандартної іконки потрібна власна іконка та фото для превʼю. Що вказати в назві вкладки? Зараз там «Денис Булах — гітарист, аранжувальник, звукозапис», і назва обрізається.",
  },
  {
    title: "Картки треків альбому (01–07)",
    text: "Що вставляти в ці картки? Якщо нічого, варто спробувати інші шрифти та якусь підкладку.",
  },
  {
    title: "Плашка про семпли: який текст краще",
    text: "«Ось один мій фанковий семплпак» чи «Ось один з моїх фанкових семплпаїв»?",
  },
] as const;

export default function Proposals() {
  return (
    <main className="mx-auto max-w-[800px] px-4 py-10 sm:px-10">
      <h1 className="mb-8 text-2xl font-bold">Пропозиції</h1>
      <ul className="flex flex-col gap-4">
        {PROPOSALS.map(({ href, title }) => (
          <li key={href}>
            <Link href={href} className="text-accent underline underline-offset-4 hover:opacity-80">
              {title}
            </Link>
          </li>
        ))}
      </ul>
      <h2 className="mb-6 mt-14 text-2xl font-bold">Питання до рішення</h2>
      <ol className="flex list-decimal flex-col gap-6 pl-6">
        {QUESTIONS.map(({ title, text }) => (
          <li key={title}>
            <p className="font-bold">{title}</p>
            <p className="mt-1 text-white/70">{text}</p>
          </li>
        ))}
      </ol>
    </main>
  );
}
