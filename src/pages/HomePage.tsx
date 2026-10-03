import Hero from "../components/Hero";
import Marquee from "../components/Marquee";
import StatsSection from "../components/StatsSection";
import RitualSection from "../components/RitualSection";
import CompareTabs from "../components/CompareTabs";
import VideoStrip from "../components/VideoStrip";
import TestimonialCarousel from "../components/TestimonialCarousel";
import PressStrip from "../components/PressStrip";
import ScienceTabs from "../components/ScienceTabs";
import StepsSection from "../components/StepsSection";
import FlavorsSection from "../components/FlavorsSection";
import SubscribeSection from "../components/SubscribeSection";
import ValueSection from "../components/ValueSection";
import IngredientsSection from "../components/IngredientsSection";
import Marquee2 from "../components/Marquee2";
import CertSection from "../components/CertSection";
import ReviewsSection from "../components/ReviewsSection";
import AmbassadorSection from "../components/AmbassadorSection";
import CreativeSection from "../components/CreativeSection";
import FaqSection from "../components/FaqSection";
import { Reveal } from "../components/ui";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Marquee />
      <Reveal><StatsSection /></Reveal>
      <Reveal><RitualSection /></Reveal>
      <Reveal><CompareTabs /></Reveal>
      <Reveal><VideoStrip /></Reveal>
      <Reveal><TestimonialCarousel /></Reveal>
      <Reveal><PressStrip /></Reveal>
      <Reveal><ScienceTabs /></Reveal>
      <Reveal><StepsSection /></Reveal>
      <Reveal><FlavorsSection /></Reveal>
      <Reveal><SubscribeSection /></Reveal>
      <Reveal><ValueSection /></Reveal>
      <Reveal><IngredientsSection /></Reveal>
      <Marquee2 />
      <Reveal><CertSection /></Reveal>
      <Reveal><ReviewsSection /></Reveal>
      <Reveal><AmbassadorSection /></Reveal>
      <Reveal><CreativeSection /></Reveal>
      <Reveal><FaqSection /></Reveal>
    </main>
  );
}
