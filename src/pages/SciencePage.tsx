import PageHero from "../components/PageHero";
import ScienceTabs from "../components/ScienceTabs";
import IngredientsSection from "../components/IngredientsSection";
import Marquee2 from "../components/Marquee2";
import CertSection from "../components/CertSection";
import CompareTabs from "../components/CompareTabs";
import { Reveal } from "../components/ui";

export default function SciencePage() {
  return (
    <main>
      <PageHero eyebrow="The Science" title="Formulated to Hit Harder, Built to Prove It">
        Every ingredient in Citrus Surge is present at the dose used in human research —
        and every dose is printed on the label. Here’s what’s inside and why it works.
      </PageHero>
      <Reveal><ScienceTabs /></Reveal>
      <Reveal><IngredientsSection /></Reveal>
      <Marquee2 />
      <Reveal><CertSection /></Reveal>
      <Reveal><CompareTabs /></Reveal>
    </main>
  );
}
