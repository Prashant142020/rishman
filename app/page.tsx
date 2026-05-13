import AdministrativeSection from '@/components/section/administrative';
import ExperienceSection from '@/components/section/experience';
import { Hero } from '@/components/section/hero';
import HonorsSection from '@/components/section/honors';
import { NewsSection } from '@/components/section/news-section';
import ProfileIntro from '@/components/section/profile-into';
import VisitsSection from '@/components/section/visits';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <div className="min-h-screen bg-background text-foreground">
        <main className="max-w-6xl mx-auto px-4 py-20 md:px-8 space-y-16 mt-10">
          <ProfileIntro />
          <ExperienceSection />
          <AdministrativeSection />
          <HonorsSection />
          <VisitsSection />
          {/* <EducationSection /> */}
        </main>
      </div>
      <NewsSection />
    </div>
  );
}
