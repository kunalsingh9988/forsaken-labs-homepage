import PdpBuyBox from "../components/PdpBuyBox";
import StatsSection from "../components/StatsSection";
import ValueSection from "../components/ValueSection";
import ReviewsSection from "../components/ReviewsSection";
import FlavorsSection from "../components/FlavorsSection";
import CompareTabs from "../components/CompareTabs";
import VideoStrip from "../components/VideoStrip";
import TestimonialCarousel from "../components/TestimonialCarousel";
import IngredientsSection from "../components/IngredientsSection";
import Marquee2 from "../components/Marquee2";
import CertSection from "../components/CertSection";
import ScienceTabs from "../components/ScienceTabs";
import StepsSection from "../components/StepsSection";
import PressStrip from "../components/PressStrip";
import SubscribeSection from "../components/SubscribeSection";
import FaqSection from "../components/FaqSection";
import { Reveal } from "../components/ui";

export default function ProductPage() {
  return (
    <main>
      <PdpBuyBox />
      <Reveal><StatsSection /></Reveal>
      <Reveal><ValueSection /></Reveal>
      <Reveal><ReviewsSection /></Reveal>
      <Reveal><FlavorsSection /></Reveal>
      <Reveal><CompareTabs /></Reveal>
      <Reveal><VideoStrip /></Reveal>
      <Reveal><TestimonialCarousel /></Reveal>
      <Reveal><IngredientsSection /></Reveal>
      <Marquee2 />
      <Reveal><CertSection /></Reveal>
      <Reveal><ScienceTabs /></Reveal>
      <Reveal><StepsSection /></Reveal>
      <Reveal><PressStrip /></Reveal>
      <Reveal><SubscribeSection /></Reveal>
      <Reveal><FaqSection /></Reveal>
    </main>
  );
}
