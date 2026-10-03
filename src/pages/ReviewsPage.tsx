import PageHero from "../components/PageHero";
import StatsSection from "../components/StatsSection";
import ReviewsSection from "../components/ReviewsSection";
import TestimonialCarousel from "../components/TestimonialCarousel";
import PressStrip from "../components/PressStrip";
import VideoStrip from "../components/VideoStrip";
import { Reveal } from "../components/ui";

export default function ReviewsPage() {
  return (
    <main>
      <PageHero eyebrow="Reviews" title="What Lifters Are Saying">
        Real feedback from the Forsaken community — the focus, the pumps, the lack of a crash.
        1,000+ verified reviews and counting.
      </PageHero>
      <Reveal><StatsSection /></Reveal>
      <Reveal><ReviewsSection /></Reveal>
      <Reveal><TestimonialCarousel /></Reveal>
      <Reveal><PressStrip /></Reveal>
      <Reveal><VideoStrip /></Reveal>
    </main>
  );
}
