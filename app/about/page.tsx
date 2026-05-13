import AdministrativeSection from '@/components/section/administrative';
// import EducationSection from '@/components/section/educational';
import ExperienceSection from '@/components/section/experience';
import HonorsSection from '@/components/section/honors';
import ProfileIntro from '@/components/section/profile-into';
import VisitsSection from '@/components/section/visits';

const page = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="max-w-4xl mx-auto px-4 py-20 md:px-8 space-y-16 mt-10">
        <ProfileIntro />
        <ExperienceSection />
        <HonorsSection />
        <AdministrativeSection />
        <VisitsSection />
        {/* <EducationSection /> */}
      </main>
    </div>
  );
};

export default page;
