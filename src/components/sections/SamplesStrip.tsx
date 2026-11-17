"use client";

import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { TrackProgress } from "@/components/ui/TrackProgress";
import { useAudioTrack } from "@/lib/useAudioTrack";

const SAMPLE_TITLE = "Funk Guitar Sample Pack";

export function SamplesStrip() {
  const { playing, currentTime, duration, toggle, seek } = useAudioTrack(
    "/audio/samples/funk-guitar-sample-pack.mp3",
  );
  return (
    <Section
      id="samples-strip"
      contained={false}
      className="pt-20 md:pt-32 xl:pt-[223px]"
    >
      <div className="bg-plate">
        <div className="mx-auto flex w-full max-w-[1600px] flex-col items-start gap-8 px-4 py-10 sm:px-10 md:flex-row md:items-center md:gap-10 xl:min-h-[360px] xl:items-start xl:gap-[79px] xl:px-[70px] xl:pb-[93px] xl:pt-[74px]">
          <div className="relative size-[193px] shrink-0">
            <Image
              src="/images/samplePackCover.jpg"
              alt={SAMPLE_TITLE}
              width={199}
              height={199}
              className="absolute -left-[3px] -top-[3px] max-w-none"
            />
          </div>
          <div className="flex max-w-[660px] flex-col items-start gap-[30px] xl:mt-[2px]">
            <p className="text-[clamp(18px,4.5vw,30px)] font-medium leading-normal text-white">
              Також я писав семпли і далі продовжую займатись цим. Ось один з моїх
              фанкових семплпаїв
            </p>
            <button
              type="button"
              onClick={toggle}
              aria-pressed={playing}
              className="flex h-[51px] w-[184px] items-center gap-5 rounded-[10px] bg-accent px-[31px] py-2.5 text-xl font-medium text-black transition-opacity hover:opacity-90"
            >
              {playing ? "Пауза" : "Слухати"}
              <span className="flex h-[23px] w-[22px] shrink-0 items-center justify-center">
                <Image
                  src="/images/imgPolygon1.svg"
                  alt=""
                  width={17}
                  height={15}
                  className="rotate-90"
                />
              </span>
            </button>
            <TrackProgress
              label={SAMPLE_TITLE}
              currentTime={currentTime}
              duration={duration}
              onSeek={seek}
              className="w-full max-w-[420px]"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
