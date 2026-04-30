// Table rendering component
interface ResearchTableProps {
  title: string;
  columns: string[];
  data: string[][];
} 

function ResearchTable({ title, columns, data }: ResearchTableProps) {
  return (
    <div className="space-y-4 mt-20">
      <h2 className="text-xl font-bold">{title}</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              {columns.map((col: string, idx: number) => (
                <th key={idx} className="border border-gray-300 px-4 py-2">
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row: string[], i: number) => (
              <tr key={i}>
                {row.map((cell: string, j: number) => (
                  <td key={j} className="border border-gray-300 px-4 py-2">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const coPiColumns2 = [
  "TOPIC",
  "START DATE",
  "FIELD",
  "DESCRIPTION",
  "FINANCIAL OUTLAY",
  "FUNDING AGENCY",
  "OTHER OFFICERS",
];

const coPiData2 = [
  [
    "1.",
    "Networks and Sentiment Sensitivity of Firms",
    "IIT Roorkee",
    "Rs. 20.00 Lacs",
    "20 Jan 2022",
    "PI",
    "Ongoing",
  ],
  [
    "2.",
    "Developing Deep Learning-based Strategies, Tools and Apps in Global Financial Markets",
    "SamrtAlpha Pvt. Ltd.",
    "Rs. 33.18 Lacs",
    "09 May 2023",
    "PI",
    "Ongoing",
  ],
  [
    "3.",
    "Embedding Crowding to Passenger Information System using Electronic Ticketing Data",
    "TIH-IIT Kharagpur",
    "31.68 Lacs",
    "18 Sep 2023",
    "PI",
    "Ongoing",
  ],
  [
    "4.",
    "Advanced Transport Modeling and Simulation for National Highways in India under CATTS",
    "IAHE (MoRTH)",
    "Rs. 495.00 Lacs",
    "25 Mar 2022",
    "Co-PI",
    "Ongoing",
  ], 
  [
  '5.',
  'CO-INVENT: COoperative project between India and Norway on studying cryo-climatology of the glaciated Himalayan region',
  'UGC, Norway',
  'Rs. 100 Lacs',
  '03 Nov 2025',
  'Co-PI',
  'Ongoing'
] 
];

export default function ResearchTables() {
  return (
    <div className="max-w-6xl mx-auto space-y-12 ">
      <ResearchTable
        title="Details of Sponsored Research Project as a Project Investigator:"
        columns={coPiColumns2}
        data={coPiData2}
      />
    </div>
  );
}






