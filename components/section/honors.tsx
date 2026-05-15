export default function HonorsSection() {
  const honors = [
    {
      title:
        'Best Paper Award at the Symposium on Ecology, Governance & Technology',
      organization:
        'Mehta Family School of Sustainability, IIT Indore, Indore, India',
      year: '2026',
      description:
        'Best Paper Award at the Symposium on Ecology, Governance & Technology',
    },
    {
      title: 'Datathon Challenge',
      organization: 'NIUA, MoHUA',
      year: '2023',
      description: 'Recognition in national datathon competition',
    },
    {
      title: 'National Eligibility Test (NET) in Economics',
      organization: 'UGC',
      year: '2014',
      description: 'Qualified National Eligibility Test',
    },
    {
      title: 'Merit Certificate (HSSC)',
      organization: 'CBSE',
      year: '2010',
      description: 'Awarded to top 0.1% successful candidates',
    },
  ];

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold">Honors & Awards</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {honors.map((item, index) => (
          <div
            key={index}
            className="border border-accent/30 rounded-lg p-6 hover:border-accent/60 transition-colors"
          >
            <div className="flex items-baseline justify-between gap-4 mb-2">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <span className="text-sm text-muted-foreground whitespace-nowrap">
                {item.year}
              </span>
            </div>
            <p className="text-sm text-muted-foreground mb-2">
              {item.organization}
            </p>
            <p className="text-sm text-foreground/80">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
