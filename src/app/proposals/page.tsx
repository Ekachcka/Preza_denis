import type { Metadata } from "next";
import Image from "next/image";
import type { FocusKey } from "@/lib/focusTargets";
import { ShowOnSite } from "./ShowOnSite";

export const metadata: Metadata = {
  title: "Пропозиції",
  robots: { index: false },
};

type Question = {
  title: string;
  text: string;
  focus?: FocusKey;
  image?: { src: string; alt: string; width: number; height: number };
};

const QUESTIONS: readonly Question[] = [
  {
    title: "Аранжування 03 «ХАЙ ВІТЕР ДУЄ»: обкладинка і виконавець",
    text: "У переписці є фото (суха трава на тлі неба). Якщо це обкладинка для третьої картки аранжувань, надішліть його файлом. Там також не вказано виконавця.",
    focus: "arrangements",
  },
  {
    title: "Обкладинки «Клікай на обкладинки»: треки",
    text: "Для шести обкладинок (Я знаю, Чому, Шукай, Як добре, Дуда, З Днем Народж..) немає mp3. Надішліть файли та посилання для «Процес роботи».",
    focus: "covers",
  },
  {
    title: "Картки треків альбому (01–07)",
    text: "Блок «Kostiantyn Kukushkin Accordion — Album “Any price”» поки залишається відкритим питанням. Немає файлів для Any Price, Libertango, Promenade, Now or never, Night, TIMe, Winter. Надішліть треки або скажіть, що вставити в ці картки.",
    focus: "tracks",
  },
  {
    title: "Музика для реклами: дев’ята картка",
    text: "Треків вісім, карток дев’ять. Прибрати дев’яту чи надішлете ще один трек?",
    focus: "ads",
  },
  {
    title: "Кавери: назва для 03",
    text: "Файл VID_20231025… без назви, тому картка без підпису. Як назвати?",
    focus: "cover-songs",
  },
  {
    title: "Вкладка браузера: іконка і превʼю",
    text: "Назва вкладки змінена, але іконка поки стандартна (від Next.js). Надішліть картинку для іконки та превʼю або оберіть: фото з гітарою чи намальована іконка.",
  },
];

export default function Proposals() {
  return (
    <main className="mx-auto max-w-[800px] px-4 py-10 sm:px-10">
      <h1 className="mb-8 text-2xl font-bold">Пропозиції</h1>
      <h2 className="mb-6 text-2xl font-bold">Питання до рішення</h2>
      <ol className="flex list-decimal flex-col gap-6 pl-6">
        {QUESTIONS.map(({ title, text, focus, image }) => (
          <li key={title}>
            <p className="font-bold">{title}</p>
            <p className="mt-1 text-white/70">{text}</p>
            {image ? (
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                className="mt-3 h-auto w-full max-w-[420px] rounded-card"
              />
            ) : null}
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
