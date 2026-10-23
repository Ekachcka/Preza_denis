import Image from "next/image";
import { Section } from "@/components/ui/Section";

const faintOutline =
  "[text-shadow:1px_0_rgba(255,255,255,0.07),-1px_0_rgba(255,255,255,0.07),0_1px_rgba(255,255,255,0.07),0_-1px_rgba(255,255,255,0.07),1px_1px_rgba(255,255,255,0.07),-1px_-1px_rgba(255,255,255,0.07),1px_-1px_rgba(255,255,255,0.07),-1px_1px_rgba(255,255,255,0.07)]";

export function About() {
  return (
    <Section id="about" aria-labelledby="about-title" contained={false}>
      <div className="overflow-hidden">
        <div className="mx-auto w-full max-w-[1600px] [container-type:inline-size]">
          <div className="relative flex flex-col gap-8 px-4 py-10 [--u:calc(100cqw/1600)] sm:px-10 lg:block lg:h-[calc(var(--u)*946)] lg:p-0">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute bottom-0 left-[20%] aspect-[1592/888] w-[100%] lg:bottom-auto lg:left-[calc(var(--u)*849)] lg:top-[calc(var(--u)*306)] lg:w-[calc(var(--u)*1592)]"
            >
              <Image src="/images/imgGroup6.svg" alt="" fill unoptimized />
            </div>

            <p
              aria-hidden="true"
              className={`pointer-events-none absolute left-4 top-2 select-none whitespace-nowrap font-extrabold leading-[normal] text-surface ${faintOutline} text-[length:min(30cqw,200px)] sm:left-10 lg:left-[calc(var(--u)*508)] lg:top-[calc(var(--u)*104)] lg:text-[length:calc(var(--u)*200)]`}
            >
              Denis
            </p>

            <div
              className="relative mx-auto aspect-[615/606] w-full max-w-[420px] lg:absolute lg:left-[calc(var(--u)*70)] lg:top-[calc(var(--u)*146)] lg:mx-0 lg:w-[calc(var(--u)*615)] lg:max-w-none"
            >
              <div className="absolute left-0 top-0 h-[84.98%] w-[83.74%]">
                <Image src="/images/imgEllipse3.svg" alt="" fill unoptimized />
              </div>
              <div className="absolute left-[11.06%] top-[9.74%] h-[90.26%] w-[88.94%]">
                <Image src="/images/imgEllipse4.svg" alt="" fill unoptimized />
              </div>
              <div className="absolute left-[13.17%] top-[12.05%] h-[86.63%] w-[85.37%]">
                <Image
                  src="/images/imgImage.webp"
                  alt="Денис Булах, гітарист і музикант"
                  fill
                  sizes="(min-width: 1600px) 525px, (min-width: 1024px) 33vw, 420px"
                />
              </div>
            </div>

            <div className="relative mt-16 flex flex-col lg:absolute lg:left-[calc(var(--u)*793)] lg:top-[calc(var(--u)*293)] lg:mt-0 lg:w-[calc(var(--u)*518)]">
              <h2 id="about-title" className="text-[30px] font-bold leading-[normal] text-white lg:text-[length:max(20px,calc(var(--u)*30))]">
                Вітаю!
              </h2>
              <p className="mt-3 text-[20px] font-medium leading-[normal] text-white lg:text-[length:max(14px,calc(var(--u)*20))]">
                Мене звати Денис Булах!
              </p>
              <p className="mt-3 text-[20px] font-medium leading-[normal] text-white lg:w-[calc(var(--u)*512)] lg:text-[length:max(14px,calc(var(--u)*20))]">
                Мені 23 роки. Я гітарист, музикант! Прагну працювати в сфері аранжування і звукозапису з вами!
              </p>
              <p className="mt-5 whitespace-pre-wrap text-[20px] font-medium leading-[normal] text-white lg:text-[length:max(14px,calc(var(--u)*20))]">
                Я маю досвід роботи на студії в онлайн форматі вже 4 роки.  Ось деякі треки на які я прописував гітарні партії і аранжування та докази, що робив їх саме я:
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
