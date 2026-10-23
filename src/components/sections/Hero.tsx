import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { HeroLines } from "./hero/HeroLines";

const bigLetter =
  "pointer-events-none absolute select-none whitespace-nowrap leading-[normal] text-surface";
const whiteOutline =
  "[text-shadow:1px_0_#fff,-1px_0_#fff,0_1px_#fff,0_-1px_#fff,1px_1px_#fff,-1px_-1px_#fff,1px_-1px_#fff,-1px_1px_#fff]";
const faintOutline =
  "[text-shadow:1px_0_rgba(255,255,255,0.07),-1px_0_rgba(255,255,255,0.07),0_1px_rgba(255,255,255,0.07),0_-1px_rgba(255,255,255,0.07),1px_1px_rgba(255,255,255,0.07),-1px_-1px_rgba(255,255,255,0.07),1px_-1px_rgba(255,255,255,0.07),-1px_1px_rgba(255,255,255,0.07)]";
const abs = "absolute";

export function Hero() {
  return (
    <Section id="hero" contained={false}>
      <div className="overflow-hidden">
        <div className="mx-auto w-full max-w-[640px] [container-type:inline-size] lg:max-w-[1600px]">
          <div className="relative h-[calc(var(--u)*620)] [--u:calc(100cqw/390)] lg:h-[calc(var(--u)*900)] lg:[--u:calc(100cqw/1600)]">
            <HeroLines className="[--u:calc(100cqw/700)] lg:[--u:calc(100cqw/1600)]" />

            <div aria-hidden="true">
              <p
                className={`${bigLetter} font-extrabold ${faintOutline} left-[calc(var(--u)*14)] top-[calc(var(--u)*20)] text-[length:calc(var(--u)*105)] lg:left-[calc(var(--u)*205)] lg:top-[calc(var(--u)*36)] lg:text-[length:calc(var(--u)*200)]`}
              >
                Denis
              </p>
              <p
                className={`${bigLetter} font-extrabold ${faintOutline} left-[calc(var(--u)*40)] top-[calc(var(--u)*440)] text-[length:calc(var(--u)*85)] lg:left-[calc(var(--u)*773)] lg:top-[calc(var(--u)*534)] lg:text-[length:calc(var(--u)*200)]`}
              >
                Bulakh
              </p>
              <p
                className={`${bigLetter} font-black ${whiteOutline} left-[calc(var(--u)*-8)] top-[calc(var(--u)*110)] text-[length:calc(var(--u)*300)] lg:left-[calc(var(--u)*42)] lg:top-[calc(var(--u)*119)] lg:text-[length:calc(var(--u)*500)]`}
              >
                P
              </p>
              <p
                className={`${bigLetter} font-black ${whiteOutline} left-[calc(var(--u)*190)] top-[calc(var(--u)*70)] text-[length:calc(var(--u)*320)] lg:left-[calc(var(--u)*1146)] lg:top-0 lg:text-[length:calc(var(--u)*600)]`}
              >
                o
              </p>
            </div>

            <div
              aria-hidden="true"
              className={`${abs} left-[calc(var(--u)*14)] top-[calc(var(--u)*110)] size-[calc(var(--u)*190)] lg:left-[calc(var(--u)*263)] lg:top-[calc(var(--u)*161)] lg:size-[calc(var(--u)*495)]`}
            >
              <Image src="/images/imgEllipse1.svg" alt="" fill unoptimized />
            </div>

            <div
              aria-hidden="true"
              className={`${abs} left-[calc(var(--u)*176)] top-[calc(var(--u)*186)] h-[calc(var(--u)*198)] w-[calc(var(--u)*197)] lg:left-[calc(var(--u)*523)] lg:top-[calc(var(--u)*148)] lg:h-[calc(var(--u)*515)] lg:w-[calc(var(--u)*514)]`}
            >
              <Image src="/images/imgEllipse2.svg" alt="" fill unoptimized />
            </div>
            <div
              className={`${abs} left-[calc(var(--u)*180)] top-[calc(var(--u)*190)] size-[calc(var(--u)*190)] overflow-hidden rounded-full lg:left-[calc(var(--u)*533)] lg:top-[calc(var(--u)*158)] lg:size-[calc(var(--u)*495)]`}
            >
              <Image
                src="/images/imgImage4.webp"
                alt="Денис Булах з електрогітарою на сцені"
                width={1280}
                height={854}
                preload
                sizes="(min-width: 1600px) 721px, (min-width: 1024px) 45vw, 90vw"
                className="pointer-events-none absolute left-[-15.77%] top-[-0.04%] h-[100.08%] w-[145.83%] max-w-none object-cover"
              />
            </div>

            <div
              aria-hidden="true"
              className={`${abs} left-[calc(var(--u)*43)] top-[calc(var(--u)*325)] h-[calc(var(--u)*198)] w-[calc(var(--u)*197)] lg:left-[calc(var(--u)*844)] lg:top-[calc(var(--u)*148)] lg:h-[calc(var(--u)*515)] lg:w-[calc(var(--u)*514)]`}
            >
              <Image src="/images/imgEllipse2.svg" alt="" fill unoptimized />
            </div>
            <div
              className={`${abs} left-[calc(var(--u)*50)] top-[calc(var(--u)*330)] size-[calc(var(--u)*190)] overflow-hidden rounded-full lg:left-[calc(var(--u)*863)] lg:top-[calc(var(--u)*161)] lg:size-[calc(var(--u)*495)]`}
            >
              <Image
                src="/images/imgImage3.webp"
                alt="Денис Булах з акустичною гітарою"
                fill
                preload
                sizes="(min-width: 1600px) 495px, (min-width: 1024px) 31vw, 50vw"
                className="pointer-events-none object-cover"
              />
            </div>

            <p
              aria-hidden="true"
              className={`${abs} left-[calc(var(--u)*36)] top-[calc(var(--u)*535)] whitespace-nowrap font-bold capitalize leading-[normal] text-white text-[length:calc(var(--u)*52)] lg:left-[calc(var(--u)*584)] lg:top-[calc(var(--u)*370)] lg:text-[length:calc(var(--u)*70)]`}
            >
              PORTFOLIO
            </p>

            <div
              aria-hidden="true"
              className={`${abs} left-[calc(var(--u)*50)] top-[calc(var(--u)*214)] h-[calc(var(--u)*8)] w-[calc(var(--u)*8)] lg:left-[calc(var(--u)*338)] lg:top-[calc(var(--u)*355)] lg:h-[calc(var(--u)*11.5)] lg:w-[calc(var(--u)*12)]`}
            >
              <div className="absolute inset-[-8.7%_-8.33%_-4.25%_-7.45%]">
                <Image src="/images/imgGroup2.svg" alt="" fill unoptimized />
              </div>
            </div>
            <p
              className={`${abs} left-[calc(var(--u)*50)] top-[calc(var(--u)*228)] w-[calc(var(--u)*100)] font-semibold leading-[normal] text-white text-[length:calc(var(--u)*11)] lg:left-[calc(var(--u)*338)] lg:top-[calc(var(--u)*379)] lg:w-[calc(var(--u)*148)] lg:text-[length:calc(var(--u)*15)]`}
            >
              Guitar is my voice, music is my story.
            </p>
            <h1
              className={`${abs} left-[calc(var(--u)*40)] top-[calc(var(--u)*140)] w-[calc(var(--u)*110)] font-normal leading-[normal] text-white text-[length:calc(var(--u)*20)] lg:left-[calc(var(--u)*317)] lg:top-[calc(var(--u)*178)] lg:w-[calc(var(--u)*164)] lg:text-[length:calc(var(--u)*30)]`}
            >
              Bulakh Denis
            </h1>
          </div>
        </div>
      </div>
    </Section>
  );
}
