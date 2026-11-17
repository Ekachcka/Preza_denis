import Image from "next/image";
import { ScribbleArrow } from "@/components/ui/ScribbleArrow";
import { TrackCard, type Track } from "@/components/ui/TrackCard";
import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";

export const ADS_TRACKS: Track[] = [
  { number: "01", title: "Happy Disco Graduation Funk", src: "/audio/ads/happy-disco-graduation-funk.mp3" },
  { number: "02", title: "Inspiring Uplifting Emotional Cinematic", src: "/audio/ads/inspiring-uplifting-emotional-cinematic.mp3" },
  { number: "03", title: "Simple Chill Lofi", src: "/audio/ads/simple-chill-lofi.mp3" },
  { number: "04", title: "Happy Uplifting Pop Corporate", src: "/audio/ads/happy-uplifting-pop-corporate.mp3" },
  { number: "05", title: "Upbeat Motivational Technology Corporate", src: "/audio/ads/upbeat-motivational-technology-corporate.mp3" },
  { number: "06", title: "Uplifting And Inspiring Corporate", src: "/audio/ads/uplifting-and-inspiring-corporate.mp3" },
  { number: "07", title: "Promotional Funk", src: "/audio/ads/promotional-funk.mp3" },
  { number: "08", title: "Promotional Happy Funk", src: "/audio/ads/promotional-happy-funk.mp3" },
  { number: "09" },
];
const DECOR_LINE_OFFSETS = [0, 47, 94, 141, 188, 235, 282, 329];

export function AdsMusic() {
  return (
    <Section id="ads-music" aria-labelledby="ads-music-title" contained={false}>
      <div className="relative mx-auto w-full max-w-[1600px] px-4 pb-10 pt-10 sm:px-10 md:pb-16 md:pt-16 xl:px-[70px] xl:pb-0 xl:pt-[236px]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-0 top-[calc(2.5rem+60px)] md:top-[calc(4rem+66px)] xl:top-[calc(236px+66px)]"
        >
          <div className="relative h-[600px] w-[1604px] origin-top-left scale-[0.24] sm:scale-[0.4] md:scale-[0.5] lg:scale-[0.64] xl:scale-100">
            {DECOR_LINE_OFFSETS.map((top) => (
              <Image
                key={top}
                src="/images/imgVector27.svg"
                alt=""
                width={1604}
                height={270}
                className="absolute left-[11px] max-w-none -scale-x-100"
                style={{ top }}
              />
            ))}
          </div>
        </div>
        <div className="relative">
          <SectionTitle id="ads-music-title" className="max-w-[440px] leading-[normal]!">
            МУЗИКА ДЛЯ РЕКЛАМИ, БЛОГІВ І МЕДІА ПРОЕКТІВ
          </SectionTitle>
          <ol className="mt-8 flex flex-wrap justify-center gap-x-(--gap) gap-y-4 [--gap:16px] md:mt-12 md:gap-y-6 md:[--gap:24px] xl:mt-[72px] xl:gap-y-[23px] xl:[--gap:33px]">
            {ADS_TRACKS.map((track) => (
              <li
                key={track.number}
                className="w-[calc((100%-var(--gap))/2)] md:w-[calc((100%-2*var(--gap))/3)] xl:w-[calc((100%-4*var(--gap))/5)]"
              >
                <TrackCard
                  {...track}
                  image={track.src ? "/images/audiojungle.jpg" : undefined}
                  imageClassName="object-contain bg-white"
                />
              </li>
            ))}
          </ol>
          <div className="mt-10 flex items-start justify-end gap-6 pr-2 xl:mt-[62px] xl:gap-[81px]">
            <ScribbleArrow className="w-[200px] sm:w-[260px] xl:w-[331px]" />
            <p className="mt-6 w-[82px] text-[clamp(14px,1.25vw,20px)] font-normal leading-[normal] text-accent xl:mt-[50px]">
              Тицяй і слухай
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
