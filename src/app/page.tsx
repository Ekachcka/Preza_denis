import { About } from "@/components/sections/About";
import { AdsMusic } from "@/components/sections/AdsMusic";
import { Album } from "@/components/sections/Album";
import { Arrangements } from "@/components/sections/Arrangements";
import { Contacts } from "@/components/sections/Contacts";
import { CoverSongs } from "@/components/sections/CoverSongs";
import { Covers } from "@/components/sections/Covers";
import { Hero } from "@/components/sections/Hero";
import { Logos } from "@/components/sections/Logos";
import { SamplesStrip } from "@/components/sections/SamplesStrip";
import { StockStrip } from "@/components/sections/StockStrip";
import { WhyMe } from "@/components/sections/WhyMe";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Covers />
      <Arrangements />
      <Album />
      <StockStrip />
      <AdsMusic />
      <Logos />
      <SamplesStrip />
      <CoverSongs />
      <WhyMe />
      <Contacts />
    </main>
  );
}
