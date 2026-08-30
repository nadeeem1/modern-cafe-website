import Hero from "../components/home/Hero";
import Marquee from "../components/home/Marquee";
import StoryPreview from "../components/home/StoryPreview";
import FeaturedMenu from "../components/home/FeaturedMenu";
import Gallery from "../components/home/Gallery";
import Testimonials from "../components/home/Testimonials";
import VisitSection from "../components/home/VisitSection";
import CtaBand from "../components/shared/CtaBand";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <StoryPreview />
      <FeaturedMenu />
      <Gallery />
      <Testimonials />
      <VisitSection />
      <CtaBand
        eyebrow="Reservations"
        title="Save yourself a seat by the window."
        description="Weekend brunch fills the window tables first. Book ahead and we'll keep the good light — and the warm croissants — for you."
        primaryLabel="Book a table"
        primaryTo="/reservations"
        secondaryLabel="Browse the menu"
        secondaryTo="/menu"
      />
    </>
  );
}
