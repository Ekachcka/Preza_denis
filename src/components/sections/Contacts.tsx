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
] as const;

export function Contacts() {
  return (
    <Section
      id="contacts"
      contained={false}
      className="pt-20 md:pt-32 xl:pt-[224px]"
    >
      <div className="bg-plate">
        <div className="relative mx-auto w-full max-w-[1600px] px-4 pb-16 pt-10 sm:px-10 xl:px-[70px] xl:pb-[107px] xl:pt-[53px]">
          <h2 className="text-center text-[clamp(20px,5vw,30px)] font-bold uppercase leading-normal text-muted">
            контакти Для співпраці
          </h2>
          <ul className="mx-auto mt-10 grid w-full max-w-[1380px] grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-4 xl:mt-[84px]">
            {CONTACTS.map(({ href, text, icon, width, height }) => (
              <li key={href} className="flex justify-center">
                <a
                  href={href}
                  className="flex min-w-0 flex-col items-center gap-6 text-center text-base font-medium leading-normal text-accent transition-opacity hover:opacity-80 sm:text-xl xl:gap-[65px]"
                >
                  <span className="flex h-[42px] items-center">
                    <Image src={icon} alt="" width={width} height={height} />
                  </span>
                  <span className="break-all">{text}</span>
                </a>
              </li>
            ))}
          </ul>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-[87.4%] top-[160px] hidden h-[150.7px] w-[134px] items-center justify-center xl:flex"
          >
            <div className="-scale-y-100 rotate-[128.51deg]">
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
            className="pointer-events-none absolute left-[90.7%] top-[128px] hidden text-xl font-normal leading-normal text-accent xl:block"
          >
            Тицяй
          </p>
        </div>
      </div>
    </Section>
  );
}
