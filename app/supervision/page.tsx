'use client';

import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const supervisionData = {
  mtech: [
    {
      name: 'B Bhanu Prasanth',
      course: 'M. Tech. (Artificial Intelligence)',
      batch: '2021 – 2023',
      branch: 'Mehta Family School of Data Science and Artificial Intelligence',
      title:
        'Portfolio Management based on Technical Indicators using Deep Learning Techniques.',
    },
    {
      name: 'Francis Narzary',
      course: 'M. Tech. (Artificial Intelligence)',
      batch: '2022 – 2024',
      branch: 'Mehta Family School of Data Science and Artificial Intelligence',
      title:
        'Estimating District-Level GDP from Night-Time Light Data Using Deep Learning Techniques.',
    },
    {
      name: 'Suraj Pal Kurrey',
      course: 'M. Tech. (Artificial Intelligence)',
      batch: '2023 – 2025',
      branch: 'Mehta Family School of Data Science and Artificial Intelligence',
      title:
        'Forecasting the Future of Internal Combustion Engine Vehicles and Electric Vehicles Ownership along with their CO₂ Emission in Delhi.',
    },
    {
      name: 'Abhishek Patel',
      course: 'M. Tech. (Artificial Intelligence)',
      batch: '2023 – 2025',
      branch: 'Mehta Family School of Data Science and Artificial Intelligence',
      title:
        'Decoding Asian Stock Market Predictions: An XAI Inquiry into the Efficacy of Sentiment vs. Technical Indicators.',
    },
    {
      name: 'Pranay Majumder',
      course: 'M. Tech. (Data Science)',
      batch: '2023 – 2025',
      branch: 'Mehta Family School of Data Science and Artificial Intelligence',
      title:
        'Predicting District-wise GDP based on NTL Data from VIIRS Satellite Imagery using ML models.',
    },
    {
      name: 'Amit Kumar Singh',
      course: 'M. Tech. (Data Science)',
      batch: '2024 – 2026',
      branch: 'Mehta Family School of Data Science and Artificial Intelligence',
      title:
        'Investigating the impact of sentiments on stock market using digital proxies.',
    },
    {
      name: 'Ruhul Amin Laskar',
      course: 'M. Tech. (Data Science)',
      batch: '2024 – 2026',
      branch: 'Mehta Family School of Data Science and Artificial Intelligence',
      title:
        'Comparative Analysis of News vs Social Media sentiments in forecasting Stock Markets',
    },
    {
      name: 'Vishal Ramkrishna Patil',
      course: 'M. Tech. (Data Science)',
      batch: '2024 – 2026',
      branch: 'Mehta Family School of Data Science and Artificial Intelligence',
      title:
        'Advanced Financial Intelligence via Domain-Adapted Large Language Models and Multi-Source Aggregation.',
    },
  ],
  mscecon: [
    {
      name: 'Komal Srivastava',
      year: '2022',
      title:
        'Financial Reporting Quality, Political Connection and Investment Efficiency',
    },
    {
      name: 'Anupama Vijay',
      year: '2023',
      title:
        'Board Interlocks and performance of the Indian Stock Exchange during COVID-19 crisis',
    },
    {
      name: 'Gary Haobam',
      year: '2023',
      title:
        'The Impact of Corporate Governance on Firms&apos; Financial Performance',
    },
    {
      name: 'Ahana Saha',
      year: '2024',
      title: 'Board Interlocks, Deep-in-Debt Firms and Indian Banking Crisis',
    },
    {
      name: 'Neha Meena',
      year: '2025',
      title:
        'Research Evolution and Prospects of the Applications of Centrality Measures in Corporate Governance and Organizational Outcomes: A PRISMA-Informed Bibliometric Analysis',
    },
    {
      name: 'Alok Varun',
      year: '2026',
      title:
        'Do ETFs Influence Stock Market Volatility? Insights from Indian Markets',
    },
    {
      name: 'Arghya Debnath',
      year: '2026',
      title:
        'Sustainable Development of Indian Banks in the Era of Digital Finance',
    },
  ],
  bsms: [
    {
      name: 'Hemant Bidasaria',
      year: '2026',
      title: 'Climate stress testing for Indian banks',
    },
    {
      name: 'Akshat Trehan',
      year: '2026',
      title:
        'Urban Expansion and its Influence on Local Climate in Himalayan Cities : Evidence from Dehradun and Jammu',
    },
    {
      name: 'Moulik Gupta',
      year: '2026',
      title:
        'Experimental Validation of Fraud Using Generation of Synthetic Data Outperforming Traditional Methods',
    },
  ],
};

export default function SupervisionPage() {
  const [activeTab, setActiveTab] = useState('mtech');

  return (
    <div className="min-h-screen bg-background mt-10">
      {/* Header */}
      <div className="border-b border-border bg-card">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <h1 className="text-4xl font-bold text-foreground mb-2">
            Research Supervision
          </h1>
          <p className="text-lg text-muted-foreground">
            Prof. Rishman Jot Kaur Chahal
          </p>
          {/* <p className="text-sm text-muted-foreground mt-2">
            M. Tech. Dissertation & Research Records
          </p> */}
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-6xl px-6 py-12">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full max-w-md grid-cols-3 mb-8">
            <TabsTrigger value="mtech">M. Tech.</TabsTrigger>
            <TabsTrigger value="mscecon">MSc Economics</TabsTrigger>
            <TabsTrigger value="bsms">BS-MS</TabsTrigger>
          </TabsList>

          {/* M. Tech. Tab */}
          <TabsContent value="mtech" className="space-y-6">
            <div className="mb-4">
              <h2 className="text-2xl font-semibold text-foreground mb-1">
                M. Tech. Dissertations
              </h2>
              <p className="text-muted-foreground">
                {supervisionData.mtech.length} students
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
              {supervisionData.mtech.map((student, idx) => (
                <Card key={idx} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg text-foreground">
                      {student.name}
                    </CardTitle>
                    <CardDescription className="text-sm">
                      <span className="inline-block bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs font-medium mr-2 mt-2">
                        {student.batch}
                      </span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <p className="text-xs text-muted-foreground font-semibold uppercase mb-1">
                        Course
                      </p>
                      <p className="text-sm text-foreground">
                        {student.course}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground font-semibold uppercase mb-1">
                        Dissertation
                      </p>
                      <p className="text-sm text-foreground leading-relaxed">
                        {student.title}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* MSc Economics Tab */}
          <TabsContent value="mscecon" className="space-y-6">
            <div className="mb-4">
              <h2 className="text-2xl font-semibold text-foreground mb-1">
                MSc (Economics) Dissertations
              </h2>
              <p className="text-muted-foreground">
                {supervisionData.mscecon.length} students
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
              {supervisionData.mscecon.map((student, idx) => (
                <Card key={idx} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg text-foreground">
                      {student.name}
                    </CardTitle>
                    <CardDescription className="text-sm">
                      <span className="inline-block bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs font-medium mt-2">
                        {student.year}
                      </span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <p className="text-xs text-muted-foreground font-semibold uppercase mb-1">
                        Dissertation
                      </p>
                      <p className="text-sm text-foreground leading-relaxed">
                        {student.title}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* BS-MS Tab */}
          <TabsContent value="bsms" className="space-y-6">
            <div className="mb-4">
              <h2 className="text-2xl font-semibold text-foreground mb-1">
                BS-MS (Economics) Dissertations
              </h2>
              <p className="text-muted-foreground">
                {supervisionData.bsms.length} students
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
              {supervisionData.bsms.map((student, idx) => (
                <Card key={idx} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg text-foreground">
                      {student.name}
                    </CardTitle>
                    <CardDescription className="text-sm">
                      <span className="inline-block bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs font-medium mt-2">
                        {student.year}
                      </span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <p className="text-xs text-muted-foreground font-semibold uppercase mb-1">
                        Dissertation
                      </p>
                      <p className="text-sm text-foreground leading-relaxed">
                        {student.title}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
