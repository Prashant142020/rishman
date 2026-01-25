export default function AdministrativeSection() {
  const positions = [
    {
      position: 'Member of SFSC',
      organization: 'Mehta Family School of DS & AI, IIT Roorkee',
      duration: '25 Jul 2022 - Present',
    },
    {
      position: 'MSc. Seminar and Dissertation Coordinator',
      organization: 'IIT Roorkee',
      duration: '23 Jul 2024 - Present',
    },
    {
      position: 'Examination-Incharge',
      organization: 'Department of HSS, IIT Roorkee',
      duration: '20 Apr 2022 - 02 Sep 2024',
    },
    {
      position: 'Member Secretary',
      organization: 'Mehta Family School of DS & AI, IIT Roorkee',
      duration: '03 Nov 2023 - 23 Jul 2024',
    },
    {
      position: 'Chief Warden, Kasturba Bhawan',
      organization: 'Indian Institute of Technology Roorkee',
      duration: '06 Jul 2022 - 20 Jun 2024',
    },
    {
      position: 'Warden, Kasturba Bhawan',
      organization: 'Indian Institute of Technology Roorkee',
      duration: '01 Jul 2021 - 30 Jun 2022',
    },
  ];

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold">Administrative Positions</h2>
      <div className="space-y-4">
        {positions.map((item, index) => (
          <div key={index} className="border-l-2 border-accent pl-6 py-3">
            <div className="flex items-baseline justify-between gap-4 mb-2">
              <h3 className="text-lg font-semibold">{item.position}</h3>
              <span className="text-sm text-muted-foreground whitespace-nowrap">{item.duration}</span>
            </div>
            <p className="text-muted-foreground">{item.organization}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
