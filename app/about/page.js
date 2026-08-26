import HeroSection from "@/components/about/HeroSection";
import WelcomeSection from "@/components/about/WelcomeSection";
import JourneyTimeline from "@/components/about/JourneyTimeline";
import ManagingTrustee from "@/components/about/ManagingTrustee";
import MissionVision from "@/components/about/MissionVision";
import Facilities from "@/components/about/Facilities";
import TrustSection from "@/components/about/TrustSection";


export const metadata = {
  title: "About | SDMKK Charitable Hospital",
};

export default function AboutPage() {
  return (
    <main className="bg-[#f7f9fd]">
      <HeroSection />
      <WelcomeSection />
      <JourneyTimeline />
        <ManagingTrustee/>
      <MissionVision />
      <Facilities />
      <TrustSection />
    </main>
  );
}