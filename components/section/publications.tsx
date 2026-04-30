'use client';

import { ExternalLink } from 'lucide-react';

interface Publication {
  title: string;
  authors: string[];
  journal: string;
  year: number;
  doi: string;
}

const publications: Publication[] = [
  {
    title:
      'Do global bond market sentiments transmit to green bonds? Evidence from a quantile connectedness framework',
    authors: ['Chahal, R. J. K.', 'Bidasaria, H.', 'Khan, H. A.', 'Ahmad, W.'],
    journal: 'Journal of Behavioral and Experimental Finance',
    year: 2026,
    doi: '',
  },
  {
    title:
      'Bridging behavioral insights and quantitative finance: AI-powered Black–Litterman framework with technical and sentiment signals',
    authors: ['Manish', 'Chahal, R. J. K.'],
    journal: 'Review in International Business and Finance',
    year: 2026,
    doi: '',
  },
  {
    title:
      'The evolving influence of news and social media sentiments on Indian sectoral returns during COVID-19: TVP-VAR extended joint connectedness approach',
    authors: ['Khan, H. A.', 'Chahal, R. J. K.'],
    journal: 'Review of Behavioral Finance',
    year: 2025,
    doi: 'https://doi.org/10.1108/RBF-04-2025-0140',
  },
  {
    title:
      'Central bank digital currency and multidimensional bank stability index: Does monetary policy play a moderating role?',
    authors: ['Gupta, G.', 'Gulati, R.', 'Chahal, R. J. K.'],
    journal: 'ADBI Working Paper Series',
    year: 2025,
    doi: 'https://doi.org/10.56506/ACZW4884',
  },
  {
    title:
      'Political Connections and Corporate Debt Structure: Moderating effect of Government-owned Banks of India',
    authors: ['Chahal, R. J. K.', 'Ahmad, W.'],
    journal: 'Abacus',
    year: 2025,
    doi: 'https://doi.org/10.1111/abac.70002',
  },

  {
    title:
      'Asymmetric impact of social media sentiments and stock market uncertainty on Indian sectoral returns: A quantile-on-quantile approach',
    authors: ['Khan, H. A.', 'Chahal, R. J. K.'],
    journal: 'The North American Journal of Economics and Finance',
    year: 2025,
    doi: 'https://doi.org/10.1016/j.najef.2025.102456',
  },

  {
    title:
      'Do Political Connections Spur Technology Transfer? Evidence from Governance Perspective in India',
    authors: ['Ahmad, W', 'Chahal, R. J. K.'],
    journal: 'ADBI Working Paper Series',
    year: 2023,
    doi: 'https://doi.org/10.56506/ACZW4884',
  },
  {
    title:
      'Understanding the impact of the coronavirus outbreak on the economic integration of ASEAN countries',
    authors: ['Ahmad, W', 'Chahal, R. J. K.', 'Rais, S'],
    journal: 'Asia and the Global Economy',
    year: 2022,
    doi: 'https://doi.org/10.1016/j.aglobe.2022.100040',
  },

  {
    title:
      'COVID-19 Pandemic and firm-level dynamics in the USA, UK, Europe, and Japan',
    authors: [
      'Ahmad, W.',
      'Kutan, Ali M.',
      'Chahal, R. J. K.',
      'Kattumuri, Ruth',
    ],
    journal: 'International Review of Financial Analysis',
    year: 2021,
    doi: 'https://doi.org/10.1016/j.irfa.2021.101888',
  },
  {
    title:
      'A Firm-level Analysis of the Impact of the Coronavirus Outbreak in ASEAN',
    authors: ['Ahmad, W', 'Chahal, R. J. K.', 'Rais, S'],
    journal: 'ERIA Discussion Paper Series',
    year: 2021,
    doi: 'https://www.eria.org/publications/a-firm-level-analysis-of-the-impact-of-the-coronavirus-outbreak-in-asean/',
  },

  {
    title:
      'Political Connections, Investment Inefficiency and the Indian Banking Crisis',
    authors: ['Chahal, R. J. K.', 'Ahmad, W'],
    journal: 'Quarterly Review of Economics and Finance',
    year: 2020,
    doi: 'https://doi.org/10.1016/j.qref.2020.10.016',
  },
  {
    title:
      'On the Intraday Dynamics of Oil Price and Exchange Rate: What can we learn from China and India?',
    authors: [
      'Ahmad, W.',
      'Prakash, R.',
      'Uddin, G. S.',
      'Chahal, R. J. K.',
      'Rahman, M. L.',
      'Dutta, A',
    ],
    journal: 'Energy Economics',
    year: 2020,
    doi: 'https://doi.org/10.1016/j.eneco.2020.104871',
  },
];

export function Publications() {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-12">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-balance mb-3">
            Journal Publications
          </h2>
          <p className="text-lg text-muted-foreground">
            A curated selection of peer-reviewed research contributions
          </p>
        </div>

        <div className="space-y-8">
          {publications.map((publication, index) => (
            <article
              key={index}
              className="group border-b border-border pb-8 last:border-0 transition-all hover:bg-muted/30 -mx-4 px-4 py-4 rounded-lg"
            >
              <div className="flex gap-3 mb-3 text-sm text-muted-foreground">
                <span className="font-semibold">{publication.year}</span>
                <span className="text-border">•</span>
                <span className="italic">{publication.journal}</span>
              </div>

              <h3 className="text-xl font-semibold mb-3 leading-snug text-foreground group-hover:text-primary transition-colors">
                {publication.title}
              </h3>

              <div className="mb-4">
                <p className="text-sm text-muted-foreground">
                  {publication.authors.join(', ')}
                </p>
              </div>

              <a
                href={publication.doi}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
              >
                View Publication
                <ExternalLink className="w-4 h-4" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
