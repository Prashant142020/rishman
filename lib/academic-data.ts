export interface TeachingEngagement {
  title: string;
  code: string;
  season: string;
}

export interface Supervision {
  topic: string;
  dateRange: string;
  scholars: string;
  otherSupervisors?: string;
}

export const teachingData: TeachingEngagement[] = [
  { title: 'Introduction to Econometric Theory', code: 'HSC 205', season: 'Spring' },
  { title: 'Time Series Analysis and Applications', code: 'HSC 507', season: 'Autumn' },
  { title: 'Introduction to Data Science', code: 'DAI-101', season: 'Autumn' },
  { title: 'Building Economics', code: 'HSN 352', season: 'Spring' },
  { title: 'AI for Investment', code: 'AID 562', season: 'Spring' },
  { title: 'Basic Econometrics', code: 'HSN 509', season: 'Spring' },
  { title: 'Economics', code: 'HSN01', season: 'Spring' },
  { title: 'Economics', code: 'HSN01', season: 'Autumn' },
  { title: 'Money, Banking and Financial Markets', code: 'HSN 506', season: 'Autumn' },
  { title: 'Time Series Data Analysis', code: 'AID 555', season: 'Autumn' },
];

export const supervisionData: Supervision[] = [
  {
    topic: 'Examining the role of Investor Sentiment in Financial Markets',
    dateRange: '20 Jul 2021 - Present',
    scholars: 'Hera Asif Khan',
    otherSupervisors: '',
  },
  {
    topic: 'Essays on Urban Agglomeration',
    dateRange: '20 Jul 2021 - Present',
    scholars: 'Parthasarathi Sahu',
    otherSupervisors: '',
  },
  {
    topic: 'Essays of Board Networks of ASEAN Economies with a special attention to India',
    dateRange: '20 Jul 2022 - Present',
    scholars: 'Danish Ahmad',
    otherSupervisors: '',
  },
  {
    topic: 'Essays in Energy Transition: A CGE Analysis',
    dateRange: '02 Jan 2023 - Present',
    scholars: 'Rajat Kumar',
    otherSupervisors: 'Prof. Amit Agarwal (Department of Civil Engineering, IIT Roorkee)',
  },
  {
    topic: 'Digital Payment Systems and Fintech in Indian Banks, India',
    dateRange: '05 Jan 2022 - Present',
    scholars: 'Kavita Yadav',
    otherSupervisors: 'Prof Rachita Gulati (Department of HSS, IIT Roorkee)',
  },
  {
    topic: 'Essays on Monetary Policies in Emerging Market Economies',
    dateRange: '20 Jul 2022 - Present',
    scholars: 'Garima Gupta',
    otherSupervisors: 'Prof Rachita Gulati (Department of HSS, IIT Roorkee)',
  },
  {
    topic: 'Essays on AI-Driven Portfolio Optimization and Forecasting',
    dateRange: '24 Jul 2023 - Present',
    scholars: 'Manish',
    otherSupervisors: '',
  },
  {
    topic: 'Essays on Urban Sprawl Patterns in India',
    dateRange: '05 Jan 2024 - Present',
    scholars: 'Yogesh Yadav',
    otherSupervisors: '',
  },
];
