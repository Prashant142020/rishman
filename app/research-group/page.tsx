import ScholarsSection from '@/components/section/scholars-section';

const page = () => {
  return (
    <div>
      {/* <main className="min-h-screen bg-white p-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <AcademicCard
            type="supervision"
            title="Student Supervisions"
            items={supervisionData}
          />
        </div>
      </main> */}

      <main className="min-h-screen bg-background">
        <ScholarsSection />
      </main>
    </div>
  );
};

export default page;
