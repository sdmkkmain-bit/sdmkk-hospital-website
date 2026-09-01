import HeroSection from "@/components/about/HeroSection";
import WelcomeSection from "@/components/about/WelcomeSection";
import JourneyTimeline from "@/components/about/JourneyTimeline";
import ManagingTrustee from "@/components/about/ManagingTrustee";
import MissionVision from "@/components/about/MissionVision";
import Facilities from "@/components/about/Facilities";
import TrustSection from "@/components/about/TrustSection";


export const metadata = {
  title:
    "About Shree Dombivli Manav Kalyan Kendra Charitable Hospital & Polyclinic",

  description:
    "Learn about Shree Dombivli Manav Kalyan Kendra Charitable Hospital & Polyclinic, its journey, charitable mission, vision, healthcare facilities and commitment to serving the Dombivli community.",
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