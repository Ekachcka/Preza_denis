import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Варіанти тексту плашки стокової музики",
  robots: { index: false },
};

const ORIGINAL_STYLES = ["Corporate", "Funk", "Pop", "Disco", "Cinematic", "Rock", "Lo-Fi"];
const NEW_STYLES = [
  "Upbeat",
  "Ambient",
  "Chillhop",
  "Acoustic",
  "Epic",
  "Motivational",
  "Hip-Hop",
  "Indie",
  "Synthwave",
  "Tropical House",
  "Jazz",
  "Orchestral",
];

type Part = { text: string; isNew?: boolean };
type Variant = { name: string; lines: Part[][] };

const list = (styles: string[], isNew = false): Part[] =>
  styles.flatMap((text, i) => [{ text: i === 0 ? text : `, ${text}`, isNew }]);

const VARIANTS: Variant[] = [
  {
    name: "Оригінал (як у Figma)",
    lines: [
      [{ text: "Я писав стокову музику в різних стилях таких як " }, ...list(ORIGINAL_STYLES)],
      [{ text: "Також трохи писав аудіо логотипи (Logo)" }],
    ],
  },
  {
    name: "1. Ті самі стилі, впевненіше",
    lines: [
      [{ text: "Пишу стокову музику в різних стилях: " }, ...list(ORIGINAL_STYLES), { text: "." }],
      [{ text: "Також створюю аудіологотипи." }],
    ],
  },
  {
    name: "2. Розширений список стилів",
    lines: [
      [
        { text: "Пишу стокову музику в різних стилях: " },
        ...list(ORIGINAL_STYLES),
        { text: ", " },
        ...list(NEW_STYLES.slice(0, 6), true),
        { text: " та інших." },
      ],
      [{ text: "Також створюю аудіологотипи (Logo)." }],
    ],
  },
  {
    name: "3. Стилі по настрою",
    lines: [
      [{ text: "Моя стокова музика — для реклами, блогів і відео. Стилі: " }, ...list(ORIGINAL_STYLES), { text: ", " }, ...list(NEW_STYLES.slice(0, 4), true), { text: "." }],
      [{ text: "Додатково пишу аудіологотипи (Logo)." }],
    ],
  },
  {
    name: "4. Максимальний відгук: усі популярні стилі",
    lines: [
      [{ text: "Пишу стокову музику в стилях: " }, ...list(ORIGINAL_STYLES), { text: ", " }, ...list(NEW_STYLES, true), { text: "." }],
      [{ text: "А ще — аудіологотипи (Logo)." }],
    ],
  },
  {
    name: "5. Коротко",
    lines: [
      [{ text: "Стокова музика в будь-якому популярному стилі: " }, ...list(["Corporate", "Cinematic", "Pop", "Lo-Fi", "Rock"]), { text: " та інші." }],
      [{ text: "Аудіологотипи (Logo) — теж моє." }],
    ],
  },
];

export default function StockTextPreview() {
  return (
    <main className="mx-auto max-w-[1600px] px-4 py-10 sm:px-10 xl:px-[70px]">
      <h1 className="mb-2 text-2xl font-bold">Варіанти тексту плашки про стокову музику</h1>
      <p className="mb-10 max-w-[760px] text-white/70">
        Оранжевим виділені стилі, яких немає в оригіналі: це лише пропозиції для більшого відгуку. Залиште тільки ті, які ви реально пишете.
      </p>
      <ul className="flex flex-col gap-8">
        {VARIANTS.map(({ name, lines }) => (
          <li key={name}>
            <p className="mb-3 text-sm text-white/60">{name}</p>
            <div className="rounded-card bg-plate px-8 py-8">
              {lines.map((parts, i) => (
                <p key={i} className="max-w-[700px] text-[26px] font-medium leading-[normal] first:mt-0 [&:not(:first-child)]:mt-2">
                  {parts.map((p, j) => (
                    <span key={j} className={p.isNew ? "text-accent" : ""}>
                      {p.text}
                    </span>
                  ))}
                </p>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
