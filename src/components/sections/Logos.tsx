import { TrackCard, type Track } from "@/components/ui/TrackCard";
import { ScribbleHint } from "@/components/ui/ScribbleHint";
import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";

export const LOGO_TRACKS: Track[] = [
  { number: "01", title: "Ambient Logo", src: "/audio/logos/ambient-logo.mp3" },
  { number: "02", title: "Glitch Hi-Tech Logo", src: "/audio/logos/glitch-hi-tech-logo.mp3" },
  { number: "03", title: "Simple Logo", src: "/audio/logos/simple-logo.mp3" },
];

export function Logos() {
  return (
    <Section id="logos" aria-labelledby="logos-title" className="pt-20 md:pt-32 xl:pt-[236px]">
      <SectionTitle id="logos-title" className="mb-6 xl:mb-[49px]">логотипи</SectionTitle>
      <ul className="grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3">
        {LOGO_TRACKS.map((track) => (
          <li key={track.number}>
            <TrackCard {...track} image="/images/logoPiano.svg" imageClassName="object-contain bg-white" />
          </li>
        ))}
      </ul>
      <ScribbleHint className="mt-10 xl:mt-[60px]" />
    </Section>
  );
}
