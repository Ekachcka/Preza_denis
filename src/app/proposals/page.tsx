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
    </main>
  );
}
