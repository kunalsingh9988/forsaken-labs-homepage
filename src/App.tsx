import Header, { AnnouncementBar } from "./components/Header";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import StatsSection from "./components/StatsSection";
import RitualSection from "./components/RitualSection";
import CompareTabs from "./components/CompareTabs";
import VideoStrip from "./components/VideoStrip";
import TestimonialCarousel from "./components/TestimonialCarousel";
import PressStrip from "./components/PressStrip";
import ScienceTabs from "./components/ScienceTabs";
import StepsSection from "./components/StepsSection";
import FlavorsSection from "./components/FlavorsSection";
import SubscribeSection from "./components/SubscribeSection";
import ValueSection from "./components/ValueSection";
import IngredientsSection from "./components/IngredientsSection";
import Marquee2 from "./components/Marquee2";
import CertSection from "./components/CertSection";
import ReviewsSection from "./components/ReviewsSection";
import AmbassadorSection from "./components/AmbassadorSection";
import CreativeSection from "./components/CreativeSection";
import FaqSection from "./components/FaqSection";
import Footer from "./components/Footer";
import ChatBubble from "./components/ChatBubble";

export default function App() {
  return (
    <div className="min-h-screen bg-cream">
      <AnnouncementBar />
      <Header />
      <main>
        <Hero />
        <Marquee />
        <StatsSection />
        <RitualSection />
        <CompareTabs />
        <VideoStrip />
        <TestimonialCarousel />
        <PressStrip />
        <ScienceTabs />
        <StepsSection />
        <FlavorsSection />
        <SubscribeSection />
        <ValueSection />
        <IngredientsSection />
        <Marquee2 />
        <CertSection />
        <ReviewsSection />
        <AmbassadorSection />
        <CreativeSection />
        <FaqSection />
      </main>
      <Footer />
      <ChatBubble />
    </div>
  );
}
