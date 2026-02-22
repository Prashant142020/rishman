'use client';

interface TeachingCourse {
  title: string;
  code: string;
  season: string;
}

const teachingCourses: TeachingCourse[] = [
  {
    title: 'Introduction to Econometric Theory',
    code: 'HSC 205',
    season: 'Spring',
  },
  {
    title: 'Time Series Analysis and Applications',
    code: 'HSC 507',
    season: 'Autumn',
  },
  {
    title: 'Introduction to Data Science',
    code: 'DAI-101',
    season: 'Autumn',
  },
  {
    title: 'Building Economics',
    code: 'HSN 352',
    season: 'Spring',
  },
  {
    title: 'AI for Investment',
    code: 'AID 562',
    season: 'Spring',
  },
  {
    title: 'Basic Econometrics',
    code: 'HSN 509',
    season: 'Spring',
  },
  {
    title: 'Economics',
    code: 'HSN01',
    season: 'Spring',
  },
  {
    title: 'Economics',
    code: 'HSN01',
    season: 'Autumn',
  },
  {
    title: 'Money, Banking and Financial Markets',
    code: 'HSN 506',
    season: 'Autumn',
  },
  {
    title: 'Time Series Data Analysis',
    code: 'AID 555',
    season: 'Autumn',
  },
];

export function TeachingEngagements() {
  // Group courses by season for better organization
  const coursesBySeason = teachingCourses.reduce(
    (acc, course) => {
      if (!acc[course.season]) {
        acc[course.season] = [];
      }
      acc[course.season].push(course);
      return acc;
    },
    {} as Record<string, TeachingCourse[]>
  );

  const seasonOrder = ['Spring', 'Autumn'];

  return (
    <section className="py-16 px-4 md:px-8 lg:px-12">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-balance mb-3">
            Teaching Engagements
          </h2>
          <p className="text-lg text-muted-foreground">
            Courses taught across academic disciplines and programs
          </p>
        </div>

        <div className="space-y-10">
          {seasonOrder.map((season) => (
            coursesBySeason[season] && (
              <div key={season}>
                <h3 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border">
                  {season}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {coursesBySeason[season].map((course, index) => (
                    <div
                      key={`${season}-${index}`}
                      className="group border border-border rounded-lg p-4 transition-all hover:border-primary hover:bg-muted/50"
                    >
                      <div className="mb-2">
                        <span className="inline-block text-xs font-mono bg-muted text-muted-foreground px-2 py-1 rounded">
                          {course.code}
                        </span>
                      </div>
                      <h4 className="text-base font-medium text-foreground group-hover:text-primary transition-colors leading-snug">
                        {course.title}
                      </h4>
                    </div>
                  ))}
                </div>
              </div>
            )
          ))}
        </div>
      </div>
    </section>
  );
}
