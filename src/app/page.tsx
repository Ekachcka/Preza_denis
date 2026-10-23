import { Section } from "@/components/ui/Section";

const SECTIONS = [
  "hero",
  "about",
  "covers",
  "arrangements",
  "album",
  "stock-strip",
  "ads-music",
  "logos",
  "samples-strip",
  "cover-songs",
  "why-me",
  "contacts",
] as const;

export default function Home() {
  return (
    <main>
      {SECTIONS.map((id) => (
        <Section key={id} id={id} />
      ))}
    </main>
  );
}
