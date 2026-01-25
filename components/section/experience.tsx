export default function ExperienceSection() {
  const experience = [
    {
      title: 'Assistant Professor',
      organization: 'Indian Institute of Technology Roorkee',
      duration: '23 Nov 2020 - Present',
      description: 'Teaching and research in Economics',
    },
    {
      title: 'Joint Faculty',
      organization: 'Mehta Family School of DS & AI, IIT Roorkee',
      duration: '28 Jun 2021 - Present',
      description: 'Interdisciplinary research in Data Science and Economics',
    },
    {
      title: 'Research Internship',
      organization: 'SCBD, UNEP, Montreal, Canada',
      duration: '03 Sep 2019 - 29 Feb 2020',
      description: 'Research on environmental economics and policy',
    },
  ];

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold">Professional Background</h2>
      <div className="space-y-6">
        {experience.map((item, index) => (
          <div key={index} className="border-l-2 border-accent pl-6 py-2">
            <div className="flex items-baseline justify-between gap-4 mb-2">
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <span className="text-sm text-muted-foreground whitespace-nowrap">{item.duration}</span>
            </div>
            <p className="text-muted-foreground mb-2">{item.organization}</p>
            <p className="text-sm text-foreground/80">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
