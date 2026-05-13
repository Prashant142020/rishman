import { Button } from '@/components/ui/button';

export default function ProfileIntro() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl md:text-5xl font-bold mb-2">
          Dr. Rishman Jot Kaur Chahal
        </h1>
        <p className="text-lg text-muted-foreground">
          Assistant Professor & Researcher
        </p>
      </div>
      <div className="space-y-4 text-base leading-relaxed text-foreground/90 max-w-3xl">
        <p>
          Dr. Chahal, is currently working as an assistant professor of
          economics in the Department of HSS at Indian Institute of Technology
          Roorkee (IITR) and also a joint faculty at the Mehta School of Data
          Science and Artificial Intelligence at IITR. She primarily works in
          Governance and Institutions, Financial Economics, Computational
          General Equilibrium (CGE) Modelling, Time Series Data analysis and
          Applied ML and AI. She has prestigious publications in Energy
          Economics, International Review of Financial Analysis, Research in
          International Business and Finance, Journal of Behavioural and
          Experimental Finance and others along with prestigious conferences
          like WEAI, ASSA/AEA, ADBI. She is also associated with 05 projects
          supported by TIH – IIT Kharagpur, Ministry of Road Transport and
          Highways (MoRTH), University Grants Commission (UGC), SmartAlpha Pvt.
          Ltd. and IITR. Before joining IITR she also worked as a researcher
          with UNEP, Montreal, Canada and completed her PhD in Economics from
          IIT Kanpur.
        </p>
        <p>
          With a strong academic background .She did her master's in economics
          from Madras School of Economics and bachelor’s degree in Economics
          (Honours) from Delhi University, I am committed to advancing knowledge
          through rigorous research and quality education. My work involves
          interdisciplinary collaboration, especially through the Mehta Family
          School of Data Science and AI.
        </p>
        {/* <p>
          Explore my educational background, professional experience, research
          visits, and administrative contributions through the sections above.
        </p> */}

        <div className="mt-4">
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center px-5 py-2.5 rounded-lg bg-black text-white hover:bg-gray-800 transition"
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
}
