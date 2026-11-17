import { ProfileStrip } from "@/components/ui/ProfileStrip";
import { Section } from "@/components/ui/Section";

export function StockStrip() {
  return (
    <Section id="stock-strip" contained={false}>
      <ProfileStrip
        photoSrc="/images/imgImage10.webp"
        photoAlt="Денис Булах, гітарист і музикант"
      >
        <p>
          Пишу стокову музику в стилях: Corporate, Funk, Pop, Disco, Cinematic, Rock, Lo-Fi, Upbeat, Ambient, Chillhop, Acoustic, Epic, Motivational, Hip-Hop, Indie, Synthwave, Tropical House, Jazz, Orchestral.
        </p>
        <p>А ще — аудіологотипи (Logo).</p>
      </ProfileStrip>
    </Section>
  );
}
