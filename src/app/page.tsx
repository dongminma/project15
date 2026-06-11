import HeroSection from "@/components/HeroSection";
import IntroSection from "@/components/IntroSection";
import ProjectsHighlight from "@/components/ProjectsHighlight";
import WorldSummary from "@/components/WorldSummary";
import JournalAboutSplit from "@/components/JournalAboutSplit";
import SubscribeSection from "@/components/SubscribeSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <IntroSection />
      <ProjectsHighlight />
      <WorldSummary />
      <JournalAboutSplit />
      <SubscribeSection />
    </>
  );
}
