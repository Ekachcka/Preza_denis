import { ProfileStrip } from "@/components/ui/ProfileStrip";
import { Section } from "@/components/ui/Section";

export function StockStrip() {
  return (
    <Section id="stock-strip" contained={false}>
      <ProfileStrip photoSrc="/images/imgImage10.png">
        <p>
          Я писав стокову музику в різних стилях таких як Corporate, Funk, Pop,
          Disco, Cinematic, Rock, Lo-Fi
        </p>
        <p>Також трохи писав аудіо логотипи (Logo)</p>
      </ProfileStrip>
    </Section>
  );
}
