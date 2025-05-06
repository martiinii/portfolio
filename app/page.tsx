import { ExperienceSection } from "@/components/experience/experience-section";
import { Hero } from "@/components/hero";
import { LinksSection } from "@/components/links/links-section";
import { ProjectsSection } from "@/components/projects/projects-section";

export default function Home() {
  return (
    <main className="container mx-auto px-10 py-10 md:px-20 md:pt-30 md:pb-10 space-y-24">
      <div className="flex w-full justify-between flex-col lg:flex-row gap-5 lg:gap-3">
        <Hero />
        <LinksSection />
      </div>

      <ExperienceSection />
      <ProjectsSection />
    </main>
  );
}
