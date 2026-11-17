import Image from "next/image";
import { Section } from "@/components/ui/Section";

const CONTACTS = [
  {
    href: "tel:+380967313992",
    text: "+38 096 731 39 92",
    icon: "/images/imgVector.svg",
    width: 38,
    height: 38,
  },
  {
    href: "mailto:bulakhdenis2002@gmail.com",
    text: "bulakhdenis2002@gmail.com",
    icon: "/images/imgVector2.svg",
    width: 42,
    height: 34,
  },
  {
    href: "https://instagram.com/bulakh_denis",
    text: "@bulakh_denis",
    icon: "/images/imgVector1.svg",
    width: 42,
    height: 42,
  },
  {
    href: "https://www.youtube.com/@DENIS_BULAKH",
    text: "@DENIS_BULAKH",
    icon: null,
    width: 42,
    height: 30,
  },
] as const;

export function Contacts() {
  return (
    <Section
      id="contacts"
      aria-labelledby="contacts-title"
      contained={false}
      className="pt-20 md:pt-32 xl:pt-[224px]"
    >
      <div className="bg-plate">
        <div className="relative mx-auto w-full max-w-[1600px] px-4 pb-16 pt-10 sm:px-10 xl:px-[70px] xl:pb-[107px] 2xl:pb-[190px] xl:pt-[53px]">
          <h2
            id="contacts-title"
            className="text-center text-[clamp(20px,5vw,30px)] font-bold uppercase leading-normal text-muted"
          >
            контакти Для співпраці
          </h2>
          <address className="not-italic">
            <ul className="mx-auto mt-10 flex w-full max-w-[1380px] flex-col items-center gap-6 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4 xl:mt-[84px]">
              {CONTACTS.map(({ href, text, icon, width, height }) => (
                <li key={href} className="flex justify-center">
                  <a
                    href={href}
                    className="flex min-w-0 max-w-full flex-row items-center gap-4 rounded-full border-2 border-accent px-6 py-3 text-base font-medium leading-normal text-accent transition-opacity hover:opacity-80 sm:text-xl"
                  >
                    <span className="flex shrink-0 items-center">
                      {icon ? (
                        <Image
                          src={icon}
                          alt=""
                          width={Math.round(width * 1.2)}
                          height={Math.round(height * 1.2)}
                        />
                      ) : (
                        <svg
                          viewBox="0 0 42 30"
                          width={Math.round(width * 1.2)}
                          height={Math.round(height * 1.2)}
                          aria-hidden="true"
                          className="fill-accent"
                        >
                          <path d="M41.1 4.7A5.3 5.3 0 0 0 37.4 1C34.1 0 21 0 21 0S7.9 0 4.6 1A5.3 5.3 0 0 0 .9 4.7C0 8 0 15 0 15s0 7 .9 10.3A5.3 5.3 0 0 0 4.6 29c3.3 1 16.4 1 16.4 1s13.1 0 16.4-1a5.3 5.3 0 0 0 3.7-3.7C42 22 42 15 42 15s0-7-.9-10.3zM16.8 21.4V8.6L27.7 15z" />
                        </svg>
                      )}
                    </span>
                    <span className="min-w-0 break-all sm:whitespace-nowrap sm:break-normal">
                      {text}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </address>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-[84%] top-[235px] hidden h-[150.7px] w-[134px] items-center justify-center 2xl:flex"
          >
            <div className="rotate-[-128.51deg]">
              <div className="relative h-[49.362px] w-[153.272px]">
                <div className="absolute inset-[-2.02%_-1.41%_-2.03%_-0.35%]">
                  <Image
                    src="/images/imgGroup18.svg"
                    alt=""
                    fill
                    className="object-fill"
                  />
                </div>
              </div>
            </div>
          </div>
          <p
            aria-hidden="true"
            className="pointer-events-none absolute left-[88%] top-[375px] hidden font-[family-name:var(--font-amatic)] font-bold text-[length:clamp(26px,2.25vw,36px)] leading-[1.1] text-accent"
          >
            Тицяй
          </p>
        </div>
      </div>
    </Section>
  );
}
