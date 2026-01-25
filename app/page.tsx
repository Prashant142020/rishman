 
import { AcademicCard } from "@/components/section/academic-card";
import { Hero } from "@/components/section/hero";
import { supervisionData, teachingData } from "@/lib/academic-data";

 

export const metadata = {
  title: 'Professor Portfolio - Academic Excellence',
  description:
    'Explore the academic journey and professional achievements of Dr. Professor. Dedicated educator with expertise in research, teaching, and academic leadership.',
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
    
      <Hero />
     
          <main className="min-h-screen bg-white p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <AcademicCard type="teaching" title="Teaching Engagements" items={teachingData} />
        <AcademicCard type="supervision" title="Student Supervisions" items={supervisionData} />
      </div>
    </main>
     
    </div>
  );
}
