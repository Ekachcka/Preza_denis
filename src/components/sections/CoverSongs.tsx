import { TrackCard, type Track } from "@/components/ui/TrackCard";
import { ScribbleHint } from "@/components/ui/ScribbleHint";
import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";

const SPANS = [
  "md:col-span-2",
  "md:col-span-2",
  "md:col-span-2",
  "md:col-span-2 md:col-start-2",
  "md:col-span-2",
] as const;

export const COVER_TRACKS: Track[] = [
  { number: "01", title: "Sting Mayer", src: "/audio/covers/sting-mayer.mp3" },
  { number: "02", title: "Sultan of", src: "/audio/covers/sultan-of.mp3" },
  { number: "03", src: "/audio/covers/cover-03.mp3" },
  { number: "04", title: "GIG 02", src: "/audio/covers/gig-02.mp3" },
  { number: "05", title: "Neo Soul Progression - RoyZiv", src: "/audio/covers/neo-soul-progression.mp3" },
];

export function CoverSongs() {
  return (
    <Section id="cover-songs" aria-labelledby="cover-songs-title" className="pt-20 md:pt-32 xl:pt-[211px]">
      <SectionTitle id="cover-songs-title" className="mb-6 xl:mb-[49px]">трохи каверів</SectionTitle>
      <ul className="grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-6">
        {COVER_TRACKS.map((track, index) => (
          <li key={track.number} className={SPANS[index]}>
            <TrackCard {...track} image="/images/coverSongPhoto.jpg" imageClassName="object-cover object-top" />
          </li>
        ))}
      </ul>
      <ScribbleHint className="mt-10 xl:mt-[60px]" />
    </Section>
  );
}
