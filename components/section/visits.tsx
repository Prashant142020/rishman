export default function VisitsSection() {
  const visits = [
    {
      location: 'UNEP, Montreal, Canada',
      date: '2019',
      purpose: 'Research Internship',
    },
    {
      location: 'UNSW, Sydney',
      date: '2022',
      purpose: 'Technical Discussion',
    },
  ];

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold">Research Visits</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {visits.map((item, index) => (
          <div key={index} className="border border-accent/30 rounded-lg p-6 hover:border-accent/60 transition-colors">
            <h3 className="text-xl font-semibold mb-2">{item.location}</h3>
            <p className="text-sm text-muted-foreground mb-3">{item.date}</p>
            <p className="text-sm text-foreground/80">{item.purpose}</p>
          </div>
        ))}
      </div>
    </div>
  );
}



