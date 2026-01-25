export default function EducationSection() {
  const education = [
    {
      degree: "B.A. (Honours), Economics",
      institution: "SGTB Khalsa College, University of Delhi",
      year: "2013",
    },
    {
      degree: "M.Sc., General Economics",
      institution: "Madras School of Economics",
      year: "2015",
    },
    {
      degree: "PhD, Economics",
      institution: "Indian Institute of Technology Kanpur",
      year: "2020",
    },
  ];

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold">Educational Details</h2>
      <div className="space-y-6">
        {education.map((item, index) => (
          <div key={index} className="border-l-2 border-accent pl-6 py-2">
            <div className="flex items-baseline justify-between gap-4 mb-2">
              <h3 className="text-xl font-semibold">{item.degree}</h3>
              <span className="text-sm text-muted-foreground whitespace-nowrap">
                {item.year}
              </span>
            </div>
            <p className="text-muted-foreground">{item.institution}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
