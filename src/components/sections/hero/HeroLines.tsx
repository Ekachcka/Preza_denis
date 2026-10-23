import Image from "next/image";
import { HERO_LINES } from "./decorLines";

const u = (n: number) => `calc(var(--u) * ${n})`;

export function HeroLines({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      data-testid="hero-lines"
      className={`pointer-events-none absolute left-0 top-0 ${className}`}
    >
      {HERO_LINES.map((line) => (
        <div
          key={line.src}
          className="absolute flex items-center justify-center"
          style={{
            left: u(line.left),
            top: u(line.top),
            width: u(line.width),
            height: u(line.height),
          }}
        >
          <div
            className="relative flex-none"
            style={{
              width: u(line.innerWidth),
              height: u(line.innerHeight),
              transform: `rotate(${line.rotate}deg)`,
            }}
          >
            <div className="absolute" style={{ inset: line.inset ?? 0 }}>
              <Image src={line.src} alt="" fill unoptimized className="max-w-none" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
