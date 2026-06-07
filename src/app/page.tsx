import Nav from "@/components/Nav";
import HeroSection from "@/components/HeroSection";
import SermonsSection from "@/components/SermonsSection";
import AboutSection from "@/components/AboutSection";
import MinistriesSection from "@/components/MinistriesSection";
import VisitCta from "@/components/VisitCta";
import MapSection from "@/components/MapSection";
import SiteFooter from "@/components/SiteFooter";

export default function Home() {
  return (
    <>
      <Nav />
      <HeroSection />
      <SermonsSection />
      <AboutSection />
      <MinistriesSection />
      <VisitCta />
      <MapSection />
      <SiteFooter />
    </>
  );
}
